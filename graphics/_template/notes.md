# <!-- piece title --> — notes

Write this **before** you touch `grid.svg` or `poster.svg`. The brief is the deliverable.

## Sheet

- Format: **A2 portrait, 420 × 594 mm**
- (Alternatives: A3 = 297 × 420, A4 = 210 × 297, square 500 × 500. If you change this, update the `viewBox` in both SVGs and redo the column arithmetic below.)

## Grid

- Columns: **6 × 60 mm**
- Gutters: **5 × 4 mm**
- Margins: **20 mm left/right, 24 mm top/bottom**
- Content area: **380 × 546 mm**
- Check: 6 × 60 + 5 × 4 = 380 ✓

## Baseline

- **4 mm** — 546 / 4 = 136.5 units in the content area.

## Typography

- Family: **Inter** (loaded inside each SVG via Google Fonts `@import`).
- Weights: **400 regular, 500 medium, 700 bold**. No more.
- Body anchor: **10 pt**.
- Display sizes (modular scale 1.333): **13.3, 17.8, 23.6, 31.5, 42 pt**.
- Flush left, ragged right. Tight tracking on display sizes, neutral on body.

## Palette

Verbatim from `tokens.css` — do not invent new colors.

- Ink: **`#0A0A0A`**
- Paper: **`#F5F3EE`**
- Accent: **`#E30613`** (use once, not decoratively)

## Composition logic

<!--
Two or three sentences on the structural idea. Why this grid? Where does the
asymmetric tension come from? What reads first, second, third? Justify from
function, not taste.
-->

## Canonical references

<!--
Cite 2–3 specific works (not just designers). Example:
- Müller-Brockmann, "Schutzt das Kind" (1953) — rule-and-photograph hierarchy.
- Hofmann, "Giselle" (1959) — negative space as primary element.
- Ruder, "Typographie" §4 — baseline-locked editorial spreads.
-->
