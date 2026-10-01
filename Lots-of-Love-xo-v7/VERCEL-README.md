# Vercel preview build

This variant uses native Next.js on Vercel. The storefront, personalisation, bag, sample checkout, order confirmation, contact preview, and small image uploads work in the browser using localStorage.

There is no production database, object storage, payment processing, email sending, or cross-device account persistence in this preview.

Vercel settings:
- Root Directory: `Lots-of-Love-xo-v7-Vercel` if this folder is inside a larger repository; otherwise repository root.
- Framework Preset: Next.js
- Build/Output/Install overrides: off (use defaults)
- Node.js: 22.x
