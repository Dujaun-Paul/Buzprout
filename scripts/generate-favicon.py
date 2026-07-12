"""Generate raster favicon assets from the Buzprout sprout mark."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

NAVY = "#0b1f2a"
STEM = "#3d9f6a"
LEAF_LEFT = "#1b7a4a"
LEAF_RIGHT = "#2a9d8f"


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

    cx = size / 2
    stem_top = 12 * scale
    stem_bottom = 23 * scale
    stem_width = max(2, round(2.5 * scale))
    draw.line(
        [(cx, stem_bottom), (cx, stem_top)],
        fill=STEM,
        width=stem_width,
    )

    def leaf_polygon(side: str) -> list[tuple[float, float]]:
        tip_x = 8 * scale if side == "left" else 24 * scale
        tip_y = 8 * scale
        mid_x = 16 * scale
        mid_y = 14 * scale
        base_x = 11 * scale if side == "left" else 21 * scale
        base_y = 13 * scale
        return [(tip_x, tip_y), (mid_x, mid_y), (base_x, base_y)]

    draw.polygon(leaf_polygon("left"), fill=LEAF_LEFT)
    draw.polygon(leaf_polygon("right"), fill=LEAF_RIGHT)
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
