# Homepage Prototype

This is a dependency-free visual prototype for `rscspoiledmilk.com`. It tests
the layout, hierarchy, brand voice, responsive behavior, and restrained retro
styling before a hosting platform or production framework is selected.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser. Stop the preview with
`Ctrl+C` in the terminal.

The files can also be opened directly, but using the local server better
matches how the final site will load.

## Placeholder slots

Every visual placeholder has a stable `data-asset-slot` name:

| Slot | Intended asset |
| --- | --- |
| `hero-gameplay` | Wide world or combat screenshot/loop |
| `combat-showcase` | Multi-combat or area-attack image/video |
| `item-sprites` | Curated transparent item sprites |
| `worship-interface` | Worship, Devotion, Blessing, or Cleric image |
| `skills-showcase` | Enchanting or Summoning image |
| `world-visuals` | Updated scenery or world image |
| `future-god-wars` | God Wars development sprites/art |
| `future-barrows` | Barrows development sprites/art |
| `future-slayer-tower` | Slayer Tower development sprites/art |

Keep original-resolution source assets outside the web-sized output until
their licensing and public-use status are confirmed. During integration, each
placeholder can be replaced with a `<picture>`, `<img>`, or user-controlled
`<video>` element without changing the surrounding layout.

## Prototype limitations

- The Discord and world-builder links are intentionally inactive until durable
  destinations are supplied.
- Feature counts and mechanical copy require a final check against the current
  released version before publication.
- The `SM` mark is a CSS-built placeholder, not a final logo.
- This prototype has not selected production hosting, analytics, a framework,
  or a deployment process.
