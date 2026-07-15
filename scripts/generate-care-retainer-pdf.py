#!/usr/bin/env python3
"""Generate printable PDFs from client Markdown documents."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import markdown
from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
CLIENT_DIR = ROOT / "docs" / "clients" / "the-beauty-refinery-ja"
DEFAULT_STEM = "referrer-pricing-guide"


def build_html(md_text: str, css_text: str) -> str:
    body = markdown.markdown(
        md_text,
        extensions=["tables", "nl2br", "sane_lists"],
    )
    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
{css_text}
</style>
</head>
<body>
{body}
</body>
</html>"""


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
    css_path = CLIENT_DIR / f"{stem}.css"
    shared_css = CLIENT_DIR / "website-care-retainer-rationale.css"
    pdf_path = CLIENT_DIR / f"{stem}.pdf"

    if not md_path.exists():
        print(f"Missing source file: {md_path}", file=sys.stderr)
        return 1

    md_text = md_path.read_text(encoding="utf-8")
    if css_path.exists():
        css_text = css_path.read_text(encoding="utf-8")
    elif shared_css.exists():
        css_text = shared_css.read_text(encoding="utf-8")
    else:
        css_text = ""

    html = build_html(md_text, css_text)

    pdf = FPDF(orientation="P", unit="mm", format="A4")
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()

    if not register_fonts(pdf):
        print("No Unicode TTF font set found for PDF output.", file=sys.stderr)
        return 1

    pdf.set_font("Body", size=10)
    pdf.write_html(html, font_family="Body")
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
