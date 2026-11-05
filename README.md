# Homepage Prototype

This is a dependency-free visual prototype for `rscspoiledmilk.com`. It tests
the layout, hierarchy, brand voice, responsive behavior, and early-2000s
game-site styling before a hosting platform or production framework is
selected.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Stop the preview with
`Ctrl+C` in the terminal.

The files can also be opened directly, but using the local server better
matches how the final site will load.

## Integrated showcase art

The prototype now uses project artwork for Equipment, Slayer, Combat, Magic,
and Skills inside the unified **What’s Changed** section. A sticky category
index shows the breadth of available subjects without requiring visitors to
read every panel. Only one item collection and one Slayer creature animate at
a time. Visitors who prefer reduced motion receive generated still frames and
the Skills montage remains paused on its poster.
Each item selector also updates a short player-facing explanation beneath the
loop.

Source and release provenance is recorded in
`assets/showcase/ASSET-SOURCES.md`.

## Remaining placeholder slots

Every visual placeholder has a stable `data-asset-slot` name:

| Slot | Intended asset |
| --- | --- |
| `hero-gameplay` | Wide world or combat screenshot/loop |
| `combat-showcase` | Filled with the released Abyssal Whip showcase; replace later if a representative multi-combat clip is supplied |
| `item-sprites` | Filled with thirteen released item collections |
| `world-visuals` | Updated scenery or world image |

Keep original-resolution source assets outside the web-sized output until
their licensing and public-use status are confirmed. Each remaining
placeholder can be replaced with a `<picture>`, `<img>`, or user-controlled
`<video>` element without changing the surrounding layout.

## Prototype limitations

- The Discord and world-builder links are intentionally inactive until durable
  destinations are supplied.
- Future-content cards are intentionally absent until the owner is comfortable
  that their public presentation will not imply an imminent release.
- Worship intentionally uses a text-led panel because its largest changes are
  mechanical rather than visual; the detailed guide carries the full system.
- Feature counts and remaining mechanical copy require a final check against
  the current released version before publication.
- The `SM` mark is a CSS-built placeholder, not a final logo.
- This prototype has not selected production hosting, analytics, a framework,
  or a deployment process.
