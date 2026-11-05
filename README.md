# RSC: Spoiled Milk Website

This is the static public website for
[rscspoiledmilk.com](https://rscspoiledmilk.com/). It introduces Spoiled Milk,
shows released gameplay additions, and directs players to the current client,
community Discord, and maintained wiki.

The site is dependency-free HTML, CSS, and JavaScript. It does not use
analytics, advertising, cookies, forms, or third-party runtime packages.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in a browser.

## Maintenance

- Keep release claims synchronized with the latest official Spoiled Milk
  release.
- Keep the download URL pointed at the official `releases/latest` client asset.
- Verify the permanent Discord invite and wiki links after material changes.
- Preserve reduced-motion behavior and poster fallbacks when replacing media.
- Record the origin and release status of showcase media in
  `assets/showcase/ASSET-SOURCES.md`.

The production deployment and DNS procedure is documented in the community
steward workspace under `website/DEPLOYMENT.md`.
