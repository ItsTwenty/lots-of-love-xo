import { rmSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Only disposable build caches are removed. Customer data is preserved.
const root = new URL('../', import.meta.url);
process.chdir(fileURLToPath(root));
for (const directory of ['dist', '.next', 'node_modules/.vite']) {
  rmSync(new URL(directory, root), { recursive: true, force: true });
}
const source = readFileSync(new URL('app/storefront.tsx', root), 'utf8');
if (!source.includes('function LetterDeskHero') || !source.includes("useState('all-my-love')")) {
  throw new Error('This is not the photo-hero edition. Open the newly extracted v7 folder.');
}
if (/[\p{Extended_Pictographic}\p{Emoji_Presentation}]/u.test(source)) {
  throw new Error('Emoji content remains. Use the v7 no-emoji source package.');
}
console.log('\nLots of Love xo — v7 PHOTO HERO / NO EMOJIS');
console.log('Serving this folder:', process.cwd());
console.log('Open the local URL printed by the server below, not an older IDE preview.\n');
const cli = new URL('../node_modules/vinext/dist/cli.js', import.meta.url);
process.argv = [process.execPath, fileURLToPath(cli), 'dev', '--port', '5186'];
await import(cli.href);
