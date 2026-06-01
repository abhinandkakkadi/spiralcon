import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = new URL('../public/images', import.meta.url).pathname;
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let totalBefore = 0, totalAfter = 0;

for await (const file of walk(IMAGES_DIR)) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const base = basename(file, ext);
  const dir = file.slice(0, file.length - basename(file).length);
  const outFile = join(dir, base + '.webp');

  const before = (await stat(file)).size;

  await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outFile);

  const after = (await stat(outFile)).size;
  totalBefore += before;
  totalAfter += after;

  const pct = Math.round((1 - after / before) * 100);
  console.log(`${file.replace(IMAGES_DIR, '')} → .webp  ${(before/1024/1024).toFixed(1)}MB → ${(after/1024).toFixed(0)}KB  (-${pct}%)`);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (-${Math.round((1-totalAfter/totalBefore)*100)}%)`);
