import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = 'https://github.com/luckyhegde6/buildFPV/wiki';
const outputDir = 'artifacts/wiki-playwright';
await fs.mkdir(outputDir, { recursive: true });

const cases = [
  {
    name: 'home',
    url: base,
    required: ['FPV System Basics', 'Drone Categories and Size Guide'],
    minimumTables: 0,
  },
  {
    name: 'chargers',
    url: `${base}/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety`,
    required: ['ISDT UC2', 'ISDT 608AC', 'ToolkitRC M7AC', 'ToolkitRC M6DAC'],
    minimumTables: 2,
  },
  {
    name: 'video-matrix',
    url: `${base}/FPV-Cameras-VTX-VRX-Compatibility-Comparison`,
    required: [
      'BETAFPV Air75',
      'DJI O4 Air Unit Pro',
      'Walksnail Avatar HD Pro Kit',
      'HDZero Whoop V2 VTX',
      'HDZero Freestyle V2 VTX',
    ],
    minimumTables: 2,
  },
];

const report = {
  target: base,
  checkedAt: new Date().toISOString(),
  browser: 'Playwright Chromium (headless)',
  viewportChecks: [{ name: 'desktop', width: 1440, height: 1000 }, { name: 'mobile', width: 390, height: 844 }],
  pages: [],
  passed: false,
};

let failures = [];
const browser = await chromium.launch({ headless: true });
try {
  for (const testCase of cases) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const consoleErrors = [];
    const failedRequests = [];
    page.on('console', message => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    page.on('requestfailed', request => failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));

    const record = {
      name: testCase.name,
      requestedUrl: testCase.url,
      finalUrl: '',
      httpStatus: null,
      title: '',
      bodyChecks: [],
      tableCount: 0,
      localWikiImages: [],
      consoleErrors: [],
      failedRequests: [],
      screenshots: [],
      errors: [],
    };

    try {
      const response = await page.goto(testCase.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      record.httpStatus = response?.status() ?? null;
      record.finalUrl = page.url();
      record.title = await page.title();

      const normalizePath = value => value.replace(/\\/+$/, '') || '/';
      const expectedPath = normalizePath(new URL(testCase.url).pathname);
      const finalPath = normalizePath(new URL(record.finalUrl).pathname);
      if (finalPath !== expectedPath) {
        record.errors.push(`Unexpected redirect: expected path ${expectedPath}, landed on ${finalPath}`);
      }
      await page.locator('body').waitFor({ state: 'visible', timeout: 15000 });
      await page.waitForTimeout(800);

      if (!response || response.status() !== 200) {
        record.errors.push(`Expected HTTP 200, got ${record.httpStatus}`);
      }
      if (record.finalUrl.endsWith('.md')) {
        record.errors.push(`Final route should not use a .md suffix: ${record.finalUrl}`);
      }

      const bodyText = (await page.locator('body').innerText()).replace(/\s+/g, ' ');
      for (const phrase of testCase.required) {
        const present = bodyText.includes(phrase);
        record.bodyChecks.push({ phrase, present });
        if (!present) record.errors.push(`Missing expected live-page text: ${phrase}`);
      }

      record.tableCount = await page.locator('table').count();
      if (record.tableCount < testCase.minimumTables) {
        record.errors.push(`Expected at least ${testCase.minimumTables} tables, found ${record.tableCount}`);
      }

      // Ask lazy-loaded images to load before checking the Wiki-local image paths.
      await page.locator('img').evaluateAll(images => images.forEach(img => { img.loading = 'eager'; }));
      await page.waitForTimeout(1500);
      record.localWikiImages = await page.locator('img').evaluateAll(images =>
        images.map(img => ({
          alt: img.alt || '',
          src: img.currentSrc || img.src,
          complete: img.complete,
          naturalWidth: img.naturalWidth,
        })).filter(img => {
          try {
            const pathname = new URL(img.src).pathname;
            return pathname.includes('/wiki/images/') || pathname.includes('/buildFPV/wiki/images/');
          } catch {
            return false;
          }
        })
      );
      if (testCase.name !== 'home' && record.localWikiImages.length === 0) {
        record.errors.push('No Wiki-local images were found on this guide page.');
      }
      for (const image of record.localWikiImages) {
        if (!image.complete || image.naturalWidth === 0) {
          record.errors.push(`Wiki-local image failed to load: ${image.src}`);
        }
      }

      const desktopPath = path.join(outputDir, `${testCase.name}-desktop.png`);
      await page.screenshot({ path: desktopPath, fullPage: true, animations: 'disabled' });
      record.screenshots.push(desktopPath);

      await page.setViewportSize({ width: 390, height: 844 });
      await page.waitForTimeout(500);
      const mobilePath = path.join(outputDir, `${testCase.name}-mobile.png`);
      await page.screenshot({ path: mobilePath, fullPage: true, animations: 'disabled' });
      record.screenshots.push(mobilePath);

      record.consoleErrors = consoleErrors.slice(0, 30);
      record.failedRequests = failedRequests.slice(0, 30);
    } catch (error) {
      record.errors.push(`Browser verification exception: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      await page.close();
    }

    if (record.errors.length) failures.push(...record.errors.map(error => `${testCase.name}: ${error}`));
    console.log(JSON.stringify(record, null, 2));
    report.pages.push(record);
  }
} finally {
  await browser.close();
}

report.passed = failures.length === 0;
report.failures = failures;
await fs.writeFile(path.join(outputDir, 'report.json'), JSON.stringify(report, null, 2));
console.log(`WIKI_PLAYWRIGHT_PASSED=${report.passed}`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
}
