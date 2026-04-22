# ws-gong.com — Swiss redesign (workbench piece)

A self-contained redesign of the personal site `ws-gong.com` rebuilt against this workbench's tokens. It does not affect the live Next.js site. It is a design study and a reference implementation — the piece answers the question "what does this site look like when every value obeys the same system?"

## Purpose

The live site is already in the Swiss idiom — `globals.css` defines `swiss-grid`, `swiss-rule`, `swiss-label`. This piece goes further:

1. Every value traceable to `tokens.css`. No bespoke sizes, no ad-hoc colors, no one-off spacing.
2. One artifact, one review surface. All pages collapse to a single long-scroll document with anchor links, like a printed portfolio.
3. No images beyond pure typography and geometry. The live site uses a Giacometti plate; this study drops it in favour of type and rules. Imagery can come back later if and only if it's documentary and full-bleed or strictly gridded.
4. Act as a reference the live site can be pulled toward over time — token names, class names, and spacing decisions made here should be portable back into `ws-gong/app/globals.css`.

## Audience

- Designers reading the workbench index who want to see how the author applies the system to a real site.
- The author, using this piece to audit the live site before future refactors.

## Inventory — pages on ws-gong.com, mapped to sections here

Each live route becomes one section of the single document:

| Live route | Section here | Template pattern |
|---|---|---|
| `/` (home) | `#statement` | Masthead + statement block |
| `/about` | `#about` | 4-col label + 8-col body |
| `/narratives` | `#narratives` | 12-col catalog (tabular list) |
| `/residencies` | `#residencies` | 12-col catalog |
| `/code` (index) | `#code` | 12-col catalog; each row links to a project sub-page |
| `/code/<project>` | — | Omitted from this study. Project pages are their own review surface and can become individual workbench pieces later. |
| `/colophon` | `#colophon` | Full-width prose block at document end |
| `/contact` | `#contact` | 4-col label + 8-col address block |
| `/terms` | — | Omitted. Boilerplate; no design content to study. |

Two live routes drop out of this study: individual project pages (they'd each be a piece of their own) and `/terms` (no design content). That's a deliberate narrowing — a redesign study earns its rigor by choosing what not to include.

## Grid

Baseline values from [tokens.css](../../tokens.css): 12 columns, 24 px gutter, 32 px margin, 8 px baseline.

Per-section grid assignments:

- **Masthead (home):** 8-col display title + 4-col meta (date, issue, locale). Shared top datum, asymmetric weight. Precedent: the die-neue-grafik study and Müller-Brockmann's *Neue Grafik* covers.
- **Label + body sections (about, contact):** 4-col label (cols 1–4) + 8-col body (cols 5–12). Same pattern proven in the die-neue-grafik study; should become the default "editorial row" for this workbench.
- **Catalogs (narratives, residencies, code):** full-width tabular rows. Columns (by grid span):
  - Index number — 1 col, `tabular-nums`
  - Title (link) — 5 cols
  - Meta / tags — 4 cols, `--ink-60`
  - Date — 2 cols, right-aligned, `tabular-nums`
- **Colophon:** 4-col label + 8-col body, same as `/colophon` on the live site.

At ≤ 720 px: all multi-column sections collapse to `grid-column: 1 / -1`. Labels stack above bodies. Catalog rows drop the meta column and tighten to index + title + date.

## Type

One family — Inter — at three weights (400, 500, 700). All values from `tokens.css`:

| Role | Size | Weight | Tracking | Leading |
|---|---|---|---|---|
| Masthead title | `--type-4xl` | 700 | `--tracking-display` | `--leading-tight` |
| Section title | `--type-xl` | 700 | `--tracking-display` | `--leading-snug` |
| Section label (eyebrow) | `--type-xs` | 500 | `--tracking-caps`, uppercase | `--leading-snug` |
| Body prose | `--type-base` | 400 | `--tracking-body` | `--leading-body` |
| Meta / caption | `--type-sm` | 400 | 0 | `--leading-body`, color `--ink-60` |
| Catalog row | `--type-sm` | 500 | 0 | `--leading-snug` |
| Tabular date | `--type-sm` | 500, `tabular-nums` | 0 | `--leading-snug` |

No italics used for emphasis — italic is reserved for titles of works (e.g. *The Palace at 4 a.m.*). No underlines for links within body copy beyond the hairline `border-bottom` already declared in `base.css`.

## Color

Defaults from tokens, nothing else:

- Ground: `--paper` (warm neutral `#F5F3EE`).
- Ink: `--ink` (`#0A0A0A`).
- Rules: `--ink` hairlines between sections; one heavy rule (4 px) above the masthead and one below the colophon.
- Accent: `--accent` (Swiss red `#E30613`) reserved for:
  - Hover/focus state on links (already in `base.css`).
  - A single index-number red on the masthead issue marker (e.g. `№ 01`) — same usage as the workbench index.
  - Nothing else. No red headings, no red rules, no red backgrounds.

No yellow, no blue, no greys beyond `--ink-60` / `--ink-30` for secondary copy.

## Composition

- Masthead carries the date, an issue number (`№ 01 / 2026`), and a locale marker (`ws-gong.com / redesign study`) above an asymmetric display title. The title is left-heavy; meta hangs right on the shared top datum — the same pattern as the workbench index's masthead.
- Every section is preceded by a hairline rule. The document opens on a heavy rule and closes on a heavy rule.
- Asymmetric balance throughout. Nothing is centered.
- No imagery in this study. The live home page's Giacometti plate is replaced with a typographic statement. This is a deliberate removal, not a simplification — it forces typography to do the heavy lifting, which is the Swiss position.
- No motion beyond the hover color transition already in `base.css`.

## Layout scaffold (top-to-bottom)

```
┌─ heavy rule ─────────────────────────────────┐
│ masthead                                     │
│   · issue · date · locale                    │
│   · display title                            │
│   · lede                                     │
├─ hairline ───────────────────────────────────┤
│ 01  statement                                │
├─ hairline ───────────────────────────────────┤
│ 02  about                                    │
├─ hairline ───────────────────────────────────┤
│ 03  narratives   [catalog]                   │
├─ hairline ───────────────────────────────────┤
│ 04  residencies  [catalog]                   │
├─ hairline ───────────────────────────────────┤
│ 05  code         [catalog]                   │
├─ hairline ───────────────────────────────────┤
│ 06  contact                                  │
├─ heavy rule ─────────────────────────────────┤
│ colophon                                     │
└──────────────────────────────────────────────┘
```

Numbered section markers (`01`, `02`, …) echo the workbench index pattern and give the document a legible spine.

## Content sources

Content is authored in the workbench alongside the markup (not pulled from the live site) to keep this piece standalone. Bodies are condensed versions of the live copy — if the live copy changes, this piece is out of date and must be updated by hand. That is the trade-off for standalone artifacts.

## Scope & non-goals

In scope:
- Static HTML + CSS. No JS beyond the shared overlay toggle (G / B).
- Single-file document. One `index.html`, one `style.css`, one `notes.md`.
- Catalog rows for narratives, residencies, and code list three representative entries each — not a complete inventory. A complete listing would bloat the review surface.

Explicitly out of scope:
- No CMS, no data-fetching, no Substack integration.
- No project sub-pages (`/code/<project>`). Each of those earns its own workbench piece.
- No `/terms`.
- No images, no illustrations.
- No dark mode. `base.css` ships one mode; this piece honours it.
- No framework. This is vanilla HTML against a vanilla stylesheet.

## References

- Josef Müller-Brockmann, *Grid Systems in Graphic Design* — masthead and grid spine.
- *Neue Grafik / New Graphic Design / Graphisme Actuel*, Zürich, 1958–1965 — issue masthead, section numbering.
- Wim Crouwel's Stedelijk catalogues — catalog-row typography, tabular datums.
- The workbench index (`index.html`) and the die-neue-grafik study — immediate antecedents in this repo.

## Departures from the live site, explicitly

1. The Giacometti plate is removed. Rationale above — typography does the hierarchical work.
2. The live site uses 3 section classes (`swiss-grid`, `swiss-rule`, `swiss-label`) with nth-child column-span magic. This piece replaces that with explicit `grid-column` assignments per section class. Rationale: legibility of the stylesheet. Generic nth-child rules were useful on the live site because sections are built from MDX; a hand-written workbench piece benefits from explicit intent.
3. The live site has per-page backgrounds on some project pages (e.g. the yellow `#EDAB00` on the old Die Neue Grafik page). This study holds `--paper` for all sections.
