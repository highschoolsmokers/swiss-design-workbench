# CLAUDE.md — Swiss Design Workbench

## Project Purpose

This repo is a working studio for design in the Swiss Design tradition (International Typographic Style / Neue Grafik) — applied to both web interfaces and static graphics. Treat this lineage as the default intellectual and aesthetic framework, not a surface style to bolt on. Every file you produce — HTML, CSS, SVG, notes — should assume these principles from the first line.

## Repo Structure

```
/
├── CLAUDE.md               # this file
├── README.md               # human-facing overview
├── package.json            # Vite 5.4, ES modules, no framework
├── vite.config.js          # root = ".", port 5173, build → dist/
├── tokens.css              # THE source of truth: grid, type, color, spacing
├── base.css                # @imports tokens; reset + baseline typography
├── overlays.css            # @imports tokens; .grid-overlay / .baseline-overlay
├── index.html              # the catalog/landing page
├── index.css               # @imports base.css; layout for the landing page
├── index.js                # overlay toggle wiring (G / B keys, click handlers)
│
├── web/                    # web pieces, one folder per piece — NOT YET CREATED
│   └── <piece-name>/
│       ├── index.html
│       ├── style.css
│       └── notes.md        # grid, type scale, rationale
├── graphics/               # static SVG pieces — NOT YET CREATED
│   └── <piece-name>/
│       ├── poster.svg      # the final piece
│       ├── grid.svg        # the construction / grid overlay
│       └── notes.md        # dimensions, paper spec, rationale
└── studies/                # small exercises, type specimens — NOT YET CREATED
    └── <study-name>/
```

`tokens.css` is the source of truth. Grid, type scale, color, and spacing all live there as custom properties. `base.css` and `overlays.css` both `@import "./tokens.css"`, so a piece that links `base.css` and `overlays.css` already has every token. Never hardcode a color, font size, or spacing value in a piece's own stylesheet — reach for a token or add one to `tokens.css` (and flag the system change).

## Current state

Scaffold complete; no pieces exist yet. The single landing page (`index.html` + `index.css` + `index.js`) enumerates the planned sections — System, Web, Graphics, Studies, Principles — with empty catalog slots ready to be filled. All foundation files (`tokens.css`, `base.css`, `overlays.css`) are in place and stable. Working branch when adding pieces or docs: `claude/add-claude-documentation-*`.

## Development workflow

- `npm install` once to pull Vite.
- `npm run dev` — Vite dev server on `http://localhost:5173`, opens automatically.
- `npm run build` — static output to `dist/` (empties on each rebuild).
- `npm run preview` — serve the built output.
- Vite root is `.`, so a new piece at `web/<name>/index.html` is reachable at `http://localhost:5173/web/<name>/` with no config change.
- No framework, no bundler config beyond `vite.config.js`. Vanilla HTML / CSS / ES modules.

## tokens.css — concrete values

Read `tokens.css` directly before changing anything in the visual system. The current values:

- **Grid**: `--grid-columns: 12`, `--grid-gutter: 24px` (3 × baseline), `--grid-margin: 32px` (4 × baseline), `--grid-max-width: 1440px`.
- **Baseline**: `--baseline: 8px`. Spacing scale `--space-1` … `--space-24` are all multiples of the baseline (8, 16, 24, 32, 48, 64, 96, 128, 192).
- **Type scale**: modular ratio 1.333, anchored at 16px. Nine steps from `--type-xs` (12px) to `--type-4xl` (89.8px).
- **Leading**: `--leading-tight: 1` (display), `--leading-snug: 1.25`, `--leading-body: 1.5` (= 24px on 16px = 3 baselines), `--leading-loose: 1.75`.
- **Type families**: `--font-sans` = Inter (with Helvetica fallbacks), `--font-mono` = IBM Plex Mono (with system mono fallbacks).
- **Weights**: `--weight-regular: 400`, `--weight-medium: 500`, `--weight-bold: 700`. Two or three only.
- **Tracking**: `--tracking-display: -0.02em`, `--tracking-body: 0`, `--tracking-caps: 0.08em`.
- **Color**: `--ink: #0A0A0A`, `--paper: #F5F3EE` (warm uncoated-stock neutral, **not** white), `--accent: #E30613` (Swiss red), `--rule: #0A0A0A`. Functional opacities: `--ink-60`, `--ink-30`, `--ink-12`.
- **Strokes**: `--stroke-hair: 1px`, `--stroke-thin: 2px`, `--stroke-thick: 4px`, `--stroke-heavy: 8px`.
- **Mobile** (`@media (max-width: 720px)` in `base.css`, not tokens): `--grid-margin` collapses to 24px, `--grid-gutter` to 16px. The 12-column logic persists; piece stylesheets re-express spans at the breakpoint.

## When Starting a New Project

If `tokens.css`, `base.css`, and `overlays.css` don't exist yet, scaffold them before any pieces. Minimum scaffold:

1. `tokens.css` with a 12-column grid, 8px baseline, modular type scale (1.333), black/white/one accent.
2. `base.css` with a modern reset, body type aligned to the baseline grid, flush-left defaults.
3. `overlays.css` with two togglable classes: `.grid-overlay` (shows column structure) and `.baseline-overlay` (shows the baseline grid).
4. `index.html` as a plain index of work in `web/` and `graphics/`.
5. `package.json` + `vite.config.js` for a local dev server (`npm run dev`).

Read `tokens.css` before proposing any change that touches the visual system.

## When Starting a New Piece

1. Create the folder in `web/`, `graphics/`, or `studies/`. Create the parent directory itself if this is the first piece in that category.
2. Write `notes.md` **first**: grid construction, type scale, color, composition logic, canonical references. This is the design brief in writing.
3. Then produce the artifact (HTML + CSS, or SVG).
4. For web pieces, link `base.css` and `overlays.css` from the piece's `index.html` (relative path, e.g. `../../base.css`). `base.css` already pulls `tokens.css`, so don't link tokens separately. Local `style.css` holds only piece-specific composition — never restate tokens.
5. For web pieces, also load Inter from Google Fonts in the piece's `<head>` (Vite serves each `index.html` standalone — there is no shared `<head>`). Copy the three `<link>` tags from the root `index.html`.
6. For web pieces, copy the `.overlay-toggle` button cluster from the root `index.html` (lines ~209–216) and `<script type="module" src="../../index.js"></script>` so `G` / `B` toggle the overlays during review.

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
- Every piece links `base.css` (which `@import`s `tokens.css`) and `overlays.css`. The local stylesheet only holds piece-specific composition.

## Graphics Work

- Author SVG by hand, indented and commented. The SVG source should be readable.
- Use `viewBox` in millimeters (e.g., A2 = `0 0 420 594`) so print dimensions are literal.
- Define the grid in `<defs>` and reference it in both `poster.svg` (hidden or as subtle underlay) and `grid.svg` (visible).
- No raster images unless I ask. Typography and geometry are the vocabulary.
- To start a new graphic, copy `graphics/_template/` to `graphics/<piece>/` and fill it in. Keep `graphics/_reference/svg-primer.svg` open in a text editor alongside — its inline comments are a walk-through of SVG primitives at mm scale.

## Grid Overlays

`overlays.css` provides two classes every web piece should support for debugging:
- `.grid-overlay` — columns and gutters as a fixed-position pseudo-element on `body::before` (z-index 9998, accent color at 8% opacity, respects `--grid-max-width` and `--grid-margin`).
- `.baseline-overlay` — baseline grid as 1px horizontal rules every `--baseline` (8px) on `body::after` (z-index 9999, `--ink-12`).

Both toggle via a class on `<body>`. The wiring already exists:
- `index.js` listens for `G` (grid) and `B` (baseline) keystrokes — suppressed when the user is typing in an `<input>`, `<textarea>`, or `<select>`, and ignored when modifier keys are held.
- It also binds click handlers to any element with `data-overlay="grid-overlay"` or `data-overlay="baseline-overlay"`, syncing `aria-pressed`.
- The `.overlay-toggle` button cluster (fixed bottom-right, ink background, accent when pressed) is defined in `overlays.css` and instantiated in the root `index.html`.

A new piece just needs to include the `.overlay-toggle` markup and `<script type="module" src="../../index.js"></script>` to inherit the same shortcuts.

## What to Push Back On

If I ask for something that violates Swiss principles, don't just comply — flag the tension and propose the faithful alternative first. Watch for:
- Mixing typefaces without reason
- Decorative effects (shadows, glows, gradients)
- Symmetrical, center-aligned layouts by default
- Off-grid elements
- Color used as decoration
- Ornament standing in for hierarchy

You can still do what I ask after flagging — but say the quiet part out loud first.

## Gotchas

- **IBM Plex Mono is declared but not loaded.** `tokens.css` sets `--font-mono` to `"IBM Plex Mono", ui-monospace, ...`, but no piece pulls it from Google Fonts yet — currently `<code>` / `<pre>` falls through to the system mono fallback. If a piece leans on `<code>` / `<pre>` heavily, add `IBM+Plex+Mono:wght@400;500;700` to its Google Fonts `<link>`.
- **Each piece's HTML loads its own fonts.** Vite serves each `index.html` as a standalone document; there is no shared `<head>`. Forgetting to copy the Inter `<link>` block into a new piece's HTML is the most common reason a new piece "looks wrong".
- **`tokens.css` is the system.** A change there ripples to every piece. Try the change in a single piece's local stylesheet first; promote to a token only when it should be universal — and call it out as a system change.
- **Mobile breakpoint lives in `base.css`, not tokens.** The `@media (max-width: 720px)` block redefines `--grid-margin` and `--grid-gutter`. If a piece needs a different breakpoint, override locally; don't move the breakpoint into tokens.
- **`.page` and `.grid` are utility classes from `base.css`.** Use them for the page frame and 12-column scaffold; don't redeclare `max-width` or `grid-template-columns` in piece CSS.
- **Body links get a hairline underline by default** (`base.css` line 60). Strip it locally for navigation or display contexts where it adds noise; don't fight it with `!important`.

## How to Deliver

- **Ship working files, not descriptions.** If the piece is web, I should be able to `npm run dev` and see it. If it's graphics, the SVG should render standalone in a browser.
- **Write `notes.md` before the artifact**, not after. The rationale is part of the deliverable.
- **Touch `tokens.css` deliberately.** Changes to tokens affect every piece — flag when you're modifying the system vs. a single piece.
- **Critique from principles.** When reviewing my work, reference the sections above explicitly rather than critiquing from taste.
- **Cite precedents.** When relevant, point to specific works or designers that inform the proposal.
