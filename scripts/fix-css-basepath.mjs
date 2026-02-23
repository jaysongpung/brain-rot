/**
 * Prepend NEXT_PUBLIC_BASE_PATH to absolute CSS url() paths in globals.css.
 * Runs as a prebuild step — only modifies files when the env var is set.
 */
import { readFileSync, writeFileSync } from 'fs';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
if (!basePath) process.exit(0);

const cssPath = new URL('../app/globals.css', import.meta.url);
let css = readFileSync(cssPath, 'utf8');

css = css.replace(/url\((['"]?)\//g, (match, quote) => {
  if (match.includes('//')) return match;
  return `url(${quote}${basePath}/`;
});

writeFileSync(cssPath, css);
console.log(`Prepended "${basePath}" to CSS url() paths in globals.css`);
