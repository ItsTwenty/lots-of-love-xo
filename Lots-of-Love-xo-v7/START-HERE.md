# Lots of Love xo — v7: photo hero, no emojis

This is the updated React/Vinext project. The homepage opens with “Love, in your own words.” over a linen writing desk, with a friendship photo inside the live card. Decorative emoji characters have been removed from the storefront.

## Open in Antigravity

1. Stop the previous development server (Ctrl+C in its terminal).
2. Extract this ZIP into a **new folder**. Do not merge it into the old project.
3. In Antigravity, open the extracted folder that directly contains `package.json`, `app`, and this file.
4. With Node.js 22.13+ and pnpm installed, run:

```sh
pnpm install
pnpm dev:fresh
```

5. Open the URL printed by that command (port **5186**), rather than an older preview tab on port 3000 or 5173.

The fresh command clears only disposable build caches and checks that the photo hero and no-emoji source are present. It prints the exact folder being served. It does not erase local customer data.

If the old design still appears, check the printed folder path and URL first. The browser page source for this edition contains the metadata `lots-of-love-version` with value `v7-photo-hero-no-emojis`.

## Files to keep

`app/storefront.tsx` contains `LetterDeskHero` with the default design `all-my-love`. `app/globals.css` contains the `.letter-desk` and `.desk-preview .photo` rules. Images live in `public/assets`.

This is source code, not a standalone HTML export. The homepage can be developed locally; cart, uploads and sample checkout use Cloudflare D1/R2 and require database migrations and runtime configuration. Read README.md for limitations. Payments are not enabled.
