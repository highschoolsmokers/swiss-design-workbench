# Die Neue Grafik — study

A short editorial study on the lineage of Swiss Graphic Design: Bauhaus → Swiss Modernism → International Typographic Style. Ported from an earlier Next.js/Tailwind version into vanilla HTML + CSS against this workbench's tokens.

## Intent

A single-page study in editorial composition. It is not a poster. It borrows from the feel of *Neue Grafik* the journal — a yellow ground, tight display caps, a labelled column for each section, and rules to separate ideas. The goal is to read well and obey the grid; no decoration does any hierarchical work.

## Grid

- 12 columns, 24 px gutter, 32 px margin (from [tokens.css](../../tokens.css)).
- Each section is itself a 12-col subgrid:
  - **Col 1–4** — uppercase label (the section subject).
  - **Col 5–12** — body prose.
- At ≤ 720 px the two columns collapse to one, label stacks above body, label size holds.

## Type

- Family: Inter (one family, no secondaries). Weights: 400, 500, 700.
- Display masthead (`DIE / NEUE / GRAFIK / DESIGN`): `--type-4xl`, weight 700, `leading-tight`, tracking `--tracking-display`. Four lines, flush left, each line its own breath.
- Section label: `--type-xs`, weight 500, uppercase, tracking `--tracking-caps`.
- Body: `--type-sm`, leading-body, measure clamped ≈ 62 ch.
- Sidebar list (subjects): `--type-sm`, weight 500, `--leading-loose`, flush right against the display's right edge.

## Color

- Ground: mustard yellow `#EDAB00`.
- Ink: `--ink`.
- Rules: `--ink` hairlines between sections; one heavy rule above the masthead, one below the colophon.

Deliberate departure from the default (paper/ink/single red accent). Yellow as a full-bleed *field* is period-correct for Swiss modernism — Müller-Brockmann's concert posters, the *Neue Grafik* journal itself — and the field is structural (it bounds the study), not decorative. Declared as a local token override in this piece only; the system's `--accent` still means red.

## Composition

- Asymmetric header: a 2/3 display title (left) paired with a 1/3 subjects list (right). The list hangs from the same top edge as the display so both blocks share a datum.
- Three body sections stacked vertically, each preceded by a hairline rule. No spacing surprises — every gap is a multiple of the baseline.
- No imagery. No decoration. Hierarchy is size + position.

## What was dropped in the port

- Tailwind utility classes — all layout and type is now declared via tokens.
- The `<Link>` back-nav was replaced by a plain anchor to `../../index.html`, since this study lives under the workbench index, not a `/code` route.
- Next.js `Metadata` export — replaced with a normal `<title>` / `<meta>` in the document head.

## References

- Müller-Brockmann, *Grid Systems in Graphic Design*.
- *Neue Grafik / New Graphic Design / Graphisme Actuel*, Zürich, 1958–1965.
- Emil Ruder, *Typographie*.
- Armin Hofmann's Basel School posters for the yellow-ground precedent.
