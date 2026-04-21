# Swiss Design Workbench

A working studio for design in the Swiss tradition — the International Typographic Style / Neue Grafik — applied to web interfaces and static graphics.

See [CLAUDE.md](./CLAUDE.md) for the full brief and non-negotiables.

## Run it

```
npm install
npm run dev
```

Open `http://localhost:5173`.

## Structure

```
tokens.css      The source of truth — grid, type, color, spacing.
base.css        Reset and baseline typography. Imports tokens.
overlays.css    Grid and baseline debug overlays.
index.html      Index of every piece in the repo.
web/            Interactive web pieces. One folder per piece.
graphics/       Static graphics authored as hand-written SVG.
studies/        Small exercises and type specimens.
```

## Overlays

On any page that includes `overlays.css`:

- Press `G` — toggle the 12-column grid overlay.
- Press `B` — toggle the 8-pixel baseline overlay.

Or use the toggle button fixed to the bottom-right.

## Adding a piece

1. Create the folder under `web/<slug>/` or `graphics/<slug>/`.
2. Write `notes.md` first — grid construction, type scale, rationale.
3. Import `tokens.css` and `base.css`. Don't restate tokens locally.
4. Link the piece from `index.html` under the appropriate catalog.

## Principles

Clarity over ornament. Objectivity over expression. The grid is the foundation. Typography carries hierarchy. Asymmetric balance on a rigorous grid.
