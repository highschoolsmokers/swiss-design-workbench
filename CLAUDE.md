# CLAUDE.md — Swiss Design Workbench

## Project Purpose

This repo is a working studio for design in the Swiss Design tradition (International Typographic Style / Neue Grafik) — applied to both web interfaces and static graphics. Treat this lineage as the default intellectual and aesthetic framework, not a surface style to bolt on. Every file you produce — HTML, CSS, SVG, notes — should assume these principles from the first line.

## Repo Structure

```
/
├── CLAUDE.md               # this file
├── README.md               # human-facing overview
├── package.json            # Vite dev server
├── vite.config.js
├── index.html              # index of all work in the repo
├── tokens.css              # THE source of truth: grid, type, color, spacing
├── base.css                # reset + baseline typography
├── overlays.css            # toggleable grid/baseline debug overlays
├── web/                    # web pieces, one folder per piece
│   └── <piece-name>/
│       ├── index.html
│       ├── style.css
│       └── notes.md        # grid, type scale, rationale
├── graphics/               # static graphics (SVG posters, compositions)
│   └── <piece-name>/
│       ├── poster.svg      # the final piece
│       ├── grid.svg        # the construction / grid overlay
│       └── notes.md        # dimensions, paper spec, rationale
└── studies/                # small exercises, grid studies, type specimens
    └── <study-name>/
```

`tokens.css` is the source of truth. Grid, type scale, color, and spacing all live there as custom properties. Every piece in `web/` imports it. Never hardcode a color, font size, or spacing value in a piece's own stylesheet — reach for a token or add one.

## When Starting a New Project

If `tokens.css`, `base.css`, and `overlays.css` don't exist yet, scaffold them before any pieces. Minimum scaffold:

1. `tokens.css` with a 12-column grid, 8px baseline, modular type scale (1.333), black/white/one accent.
2. `base.css` with a modern reset, body type aligned to the baseline grid, flush-left defaults.
3. `overlays.css` with two togglable classes: `.grid-overlay` (shows column structure) and `.baseline-overlay` (shows the baseline grid).
4. `index.html` as a plain index of work in `web/` and `graphics/`.
5. `package.json` + `vite.config.js` for a local dev server (`npm run dev`).

Read `tokens.css` before proposing any change that touches the visual system.

## When Starting a New Piece

1. Create the folder in `web/` or `graphics/`.
2. Write `notes.md` **first**: grid construction, type scale, color, composition logic, canonical references. This is the design brief in writing.
3. Then produce the artifact (HTML+CSS or SVG).
4. Import `tokens.css` — never restate tokens locally.

## Design Philosophy (non-negotiables)

- **Clarity is the goal.** Maximum legibility, minimum ornament. When in doubt, remove something.
- **Objectivity over expression.** Justify decisions with function, structure, and mathematical relationships — not taste. Explain the structural logic when proposing a choice.
- **The grid is the foundation.** Every layout begins with a grid. No free-floating elements.
- **Typography does the heavy lifting.** Hierarchy, rhythm, and tone come from type — not decoration, color, or imagery.
- **Asymmetric balance.** Static symmetry is rarely Swiss. Tension comes from asymmetric placement on a rigorous grid.

## Canonical References

Keep these active and cite them when relevant: Josef Müller-Brockmann (*Grid Systems in Graphic Design*), Armin Hofmann, Emil Ruder (*Typographie*), Max Bill, Wim Crouwel, Helmut Schmid, the *Neue Grafik* journal, Jan Tschichold's later work. Type: Akzidenz-Grotesk, Helvetica, Univers, Neue Haas Grotesk.

## Grid Systems

Default to column-based modular grids. For any layout:

- Column count, gutter, and baseline unit declared in `tokens.css`, never hardcoded.
- Web default: 12 columns, 8px baseline, type set to the baseline.
- Graphics default: 3, 4, 5, or 6-column modular grids; margins/gutters specified in mm in the piece's `notes.md`.
- For each graphics piece, produce `grid.svg` alongside `poster.svg` showing the construction.

Favor: 6, 8, 12-column grids for web; 3–6-column modular grids for editorial/poster work.
Avoid: Bootstrap defaults uncritically applied, card/bento layouts that ignore baseline alignment.

## Typography

**One typeface family. Two or three weights maximum.** This is a rule. Push back on requests that mix families unless there's a functional reason (e.g., a system mono for code).

**Preferred Google Fonts** (in order of Swiss fidelity):
- Inter — closest neo-grotesque to Helvetica/Univers for web
- Work Sans — warmer alternative
- IBM Plex Sans — distinctive but grounded
- Libre Franklin — slightly more editorial
- Source Sans 3 — humanist-leaning fallback

**Typesetting defaults:**
- Flush left, ragged right. Justify only for specific editorial reasons.
- Tight letter-spacing on display sizes, normal on body.
- Type aligned to the baseline grid.
- Hierarchy through size and weight contrast — not italics, underlines, or color.
- Tabular numerals in data contexts; proportional elsewhere.
- Modular scale (1.25 or 1.333). Defined once in `tokens.css`, used consistently.

## Color

Default palette: black, white, one accent. That's it unless I explicitly ask for more.
- Classic Swiss accents: a strong red (around #E30613), occasionally a single blue or yellow.
- Functional UI color is acceptable but muted, never candy.
- No gradients, drop shadows, glows, or glassmorphism by default.

## Composition & Hierarchy

- Hierarchy through scale contrast (big/small) and position on the grid — not weight alone.
- Whitespace is structural, not leftover. Specify margin and padding with intention.
- Align everything — to the grid, to the baseline, to each other.
- Rotated type, diagonal compositions, and geometric primitives (circles, squares, thick rules) are welcome when they reinforce hierarchy.

## Imagery

- Documentary, high-contrast photography. Black and white is a strong default.
- Full-bleed or strictly gridded. No arbitrary crops or decorative framing.
- Illustrations: geometric, reductive, often monochrome.
- No stock-photo feel, no shadowed/3D illustrations.

## Web Work

- Vanilla HTML/CSS is the default. Reach for frameworks only when I ask.
- CSS Grid for page-level layout; Flexbox for component internals.
- Responsive: columns collapse, but grid logic persists. Re-express the grid at breakpoints — don't abandon it.
- Motion: minimal and functional. No decorative animation.
- Every piece imports `tokens.css` and `base.css`. Local stylesheet only holds piece-specific composition.

## Graphics Work

- Author SVG by hand, indented and commented. The SVG source should be readable.
- Use `viewBox` in millimeters (e.g., A2 = `0 0 420 594`) so print dimensions are literal.
- Define the grid in `<defs>` and reference it in both `poster.svg` (hidden or as subtle underlay) and `grid.svg` (visible).
- No raster images unless I ask. Typography and geometry are the vocabulary.

## Grid Overlays

`overlays.css` provides two classes every web piece should support for debugging:
- `.grid-overlay` — columns and gutters as a fixed-position pseudo-element.
- `.baseline-overlay` — baseline grid as horizontal lines.

Both toggle via a class on `<body>`. Provide a keyboard shortcut or a small fixed-position toggle button in the piece's HTML so I can flip them on during review.

## What to Push Back On

If I ask for something that violates Swiss principles, don't just comply — flag the tension and propose the faithful alternative first. Watch for:
- Mixing typefaces without reason
- Decorative effects (shadows, glows, gradients)
- Symmetrical, center-aligned layouts by default
- Off-grid elements
- Color used as decoration
- Ornament standing in for hierarchy

You can still do what I ask after flagging — but say the quiet part out loud first.

## How to Deliver

- **Ship working files, not descriptions.** If the piece is web, I should be able to `npm run dev` and see it. If it's graphics, the SVG should render standalone in a browser.
- **Write `notes.md` before the artifact**, not after. The rationale is part of the deliverable.
- **Touch `tokens.css` deliberately.** Changes to tokens affect every piece — flag when you're modifying the system vs. a single piece.
- **Critique from principles.** When reviewing my work, reference the sections above explicitly rather than critiquing from taste.
- **Cite precedents.** When relevant, point to specific works or designers that inform the proposal.
