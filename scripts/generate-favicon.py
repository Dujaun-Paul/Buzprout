"""Generate raster favicon assets from the Buzprout B mark."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

NAVY = "#0b1f2a"
GREEN = "#3d9f6a"


def _load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf",
        "C:/Windows/Fonts/arialbd.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def draw_icon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    scale = size / 32

    margin = max(1, round(1 * scale))
    radius = max(2, round(7 * scale))
    draw.rounded_rectangle(
        (margin, margin, size - margin - 1, size - margin - 1),
        radius=radius,
        fill=NAVY,
    )

    font_size = max(8, round(19 * scale))
    font = _load_font(font_size)
    text = "B"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x = (size - text_w) / 2 - bbox[0]
    y = (size - text_h) / 2 - bbox[1] + scale
    draw.text((x, y), text, fill=GREEN, font=font)
    return img


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)

    sizes = {
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "apple-touch-icon.png": 180,
    }

    icons: dict[int, Image.Image] = {}
    for filename, size in sizes.items():
        icon = draw_icon(size)
        icon.save(PUBLIC / filename, format="PNG")
        icons[size] = icon

    icons[16].save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32)],
        append_images=[icons[32]],
    )

    print("Generated favicon assets in public/")


if __name__ == "__main__":
    main()
