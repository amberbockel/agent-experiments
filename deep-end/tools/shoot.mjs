// Headless render check for the study. Screenshots four moments of the fall.
// Usage: node tools/shoot.mjs <out_dir> [page]   (loads study/<page> from disk; default dev.html)
import { createRequire } from 'module';
const { chromium } = createRequire(import.meta.url)('playwright');
import fs from 'fs';

const out = process.argv[2] || 'shots';
const pageFile = process.argv[3] || 'dev.html';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--allow-file-access-from-files'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const log = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') log.push(m.type() + ': ' + m.text()); });
page.on('pageerror', e => log.push('pageerror: ' + e.message));

await page.goto('file:///home/user/agent-experiments/deep-end/study/' + pageFile + '');
await page.waitForTimeout(1500);
await page.screenshot({ path: `${out}/0-intro.png` });
await page.click('#enter');
await page.mouse.move(900, 400);
await page.waitForTimeout(4000);
await page.screenshot({ path: `${out}/1-yard.png` });
for (let i = 0; i < 14; i++) { await page.mouse.wheel(0, 90); await page.waitForTimeout(60); }
await page.waitForTimeout(1500);
await page.screenshot({ path: `${out}/2-water.png` });
for (let i = 0; i < 22; i++) { await page.mouse.wheel(0, 90); await page.waitForTimeout(60); }
await page.waitForTimeout(1500);
await page.screenshot({ path: `${out}/3-dark.png` });
await page.waitForTimeout(7500);
await page.screenshot({ path: `${out}/4-door.png` });
console.log('depth', await page.textContent('#depth'));
console.log(log.join('\n') || 'no console errors');
await browser.close();
