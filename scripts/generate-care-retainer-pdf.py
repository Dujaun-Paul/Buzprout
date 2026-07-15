#!/usr/bin/env python3
"""Generate printable PDFs from client Markdown documents."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import markdown
from fpdf import FPDF, FontFace, TextStyle

ROOT = Path(__file__).resolve().parents[1]
CLIENT_DIR = ROOT / "docs" / "clients" / "the-beauty-refinery-ja"
DEFAULT_STEM = "referrer-pricing-guide"

# fpdf2 does not apply <style> blocks; it renders them as visible text.
# Use tag_styles instead.
TAG_STYLES = {
    "h1": FontFace(size_pt=18, color=(11, 31, 42)),
    "h2": FontFace(size_pt=12, color=(27, 122, 74)),
    "h3": FontFace(size_pt=10.5, color=(11, 31, 42)),
    "blockquote": TextStyle(
        color=(61, 85, 99),
        font_style="I",
        l_margin=8,
        t_margin=2,
        b_margin=2,
    ),
}


def build_html(md_text: str) -> str:
    return markdown.markdown(
        md_text,
        extensions=["tables", "nl2br", "sane_lists"],
    )


def register_fonts(pdf: FPDF) -> bool:
    font_candidates = [
        (
            Path("C:/Windows/Fonts/arial.ttf"),
            Path("C:/Windows/Fonts/arialbd.ttf"),
            Path("C:/Windows/Fonts/ariali.ttf"),
            Path("C:/Windows/Fonts/arialbi.ttf"),
        ),
        (
            Path("C:/Windows/Fonts/segoeui.ttf"),
            Path("C:/Windows/Fonts/segoeuib.ttf"),
            Path("C:/Windows/Fonts/segoeuii.ttf"),
            Path("C:/Windows/Fonts/segoeuiz.ttf"),
        ),
    ]
    font_set = next(
        (fonts for fonts in font_candidates if all(path.exists() for path in fonts)),
        None,
    )
    if font_set is None:
        return False

    regular_font, bold_font, italic_font, bold_italic_font = font_set
    pdf.add_font("Body", "", str(regular_font))
    pdf.add_font("Body", "B", str(bold_font))
    pdf.add_font("Body", "I", str(italic_font))
    pdf.add_font("Body", "BI", str(bold_italic_font))
    return True


def generate_pdf(stem: str) -> int:
    md_path = CLIENT_DIR / f"{stem}.md"
    pdf_path = CLIENT_DIR / f"{stem}.pdf"

    if not md_path.exists():
        print(f"Missing source file: {md_path}", file=sys.stderr)
        return 1

    md_text = md_path.read_text(encoding="utf-8")
    html = build_html(md_text)

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()

    if not register_fonts(pdf):
        print("No Unicode TTF font set found for PDF output.", file=sys.stderr)
        return 1

    pdf.set_font("Body", size=10)
    pdf.write_html(html, font_family="Body", tag_styles=TAG_STYLES)
    pdf.output(str(pdf_path))

    print(f"Wrote {pdf_path}")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate client document PDFs.")
    parser.add_argument(
        "stems",
        nargs="*",
        default=[DEFAULT_STEM],
        help="Markdown file stem(s) without extension (default: referrer-pricing-guide)",
    )
    args = parser.parse_args()

    exit_code = 0
    for stem in args.stems:
        if generate_pdf(stem) != 0:
            exit_code = 1
    return exit_code


if __name__ == "__main__":
    raise SystemExit(main())
