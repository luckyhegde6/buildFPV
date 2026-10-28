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
    required: ['FPV System Basics', 'Drone Categories and Size Guide', 'Mandatory beginner video course before your first real flight', 'Learn to fly an FPV drone (for total beginners)', 'Drone Coding and Machine Learning'],
    minimumTables: 0,
    requireLocalImages: true,
    requiredImages: ['fpv-system-basics-high-resolution.svg'],
    expandedImages: ['fpv-system-basics-high-resolution.svg'],
  },
  {
    name: 'system-basics',
    url: `${base}/FPV-System-Basics`,
    required: ['FPV System Basics', 'Visual guides: parts, systems and flight', 'Drone systems and controls'],
    minimumTables: 0,
    requireLocalImages: true,
    requiredImages: ['fpv-system-basics-high-resolution.svg', 'fpv-section-drone-overview.svg', 'fpv-section-control-loop.svg', 'fpv-section-video-system.svg', 'fpv-section-antenna-types.svg', 'fpv-section-flight-controller.svg', 'fpv-section-radio-control-link.svg', 'fpv-section-gps-navigation.svg'],
    expandedImages: ['fpv-system-basics-high-resolution.svg', 'fpv-section-drone-overview.svg', 'fpv-section-control-loop.svg', 'fpv-section-video-system.svg', 'fpv-section-antenna-types.svg', 'fpv-section-flight-controller.svg', 'fpv-section-radio-control-link.svg', 'fpv-section-gps-navigation.svg'],
  },
  {
    name: 'how-fpv-works',
    url: `${base}/How-FPV-Drones-Work`,
    required: ['How FPV Drones Work', 'Visual guides: movement, lift and control', 'The control path'],
    minimumTables: 0,
    requireLocalImages: true,
    requiredImages: ['fpv-system-basics-high-resolution.svg', 'fpv-drone-flight-mechanics-high-resolution.svg', 'fpv-drone-movements-guide.webp', 'fpv-drone-control-loop-guide.webp', 'fpv-section-drone-overview.svg', 'fpv-section-axes-movements.svg', 'fpv-section-lift-thrust.svg', 'fpv-section-control-loop.svg', 'fpv-section-video-system.svg', 'fpv-section-antenna-types.svg', 'fpv-section-flight-controller.svg', 'fpv-section-flight-modes.svg'],
    expandedImages: ['fpv-system-basics-high-resolution.svg', 'fpv-drone-flight-mechanics-high-resolution.svg', 'fpv-drone-movements-guide.webp', 'fpv-drone-control-loop-guide.webp', 'fpv-section-drone-overview.svg', 'fpv-section-axes-movements.svg', 'fpv-section-lift-thrust.svg', 'fpv-section-control-loop.svg', 'fpv-section-video-system.svg', 'fpv-section-antenna-types.svg', 'fpv-section-flight-controller.svg', 'fpv-section-flight-modes.svg'],
  },
  {
    name: 'drone-parts',
    url: `${base}/Drone-Parts-One-by-One`,
    required: [
      'FPV Drone Parts — One by One',
      'The lineup at a glance',
      'The complete system paths',
      'Suggested inspection order before first power-up',
      'Quick knowledge check',
    ],
    minimumTables: 0,
    requiredImages: [
      'fpv-photo-components-overview.jpg',
      'fpv-photo-frame-kit.png',
      'fpv-photo-lipo-battery.jpg',
      'fpv-photo-brushless-motor-esc.jpg',
      'fpv-photo-propeller.jpg',
      'fpv-photo-esc.jpg',
      'fpv-photo-flight-controller.jpg',
      'fpv-photo-flight-control-board.jpg',
      'fpv-photo-control-receiver.jpg',
      'fpv-photo-fpv-camera.jpg',
      'fpv-photo-vtx.png',
      'fpv-photo-radio-goggles.jpg',
      'fpv-photo-antennas.jpg',
      'fpv-photo-gps-module.jpg',
      'fpv-photo-buzzer.jpg',
      'fpv-section-drone-overview.svg',
      'fpv-section-motors-props.svg',
      'fpv-section-flight-controller.svg',
      'fpv-section-radio-control-link.svg',
      'fpv-section-video-system.svg',
      'fpv-section-gps-navigation.svg',
      'fpv-system-basics-high-resolution.svg',
      'fpv-drone-components-connection-map-high-resolution.svg',
    ],
    expandedImages: ['fpv-system-basics-high-resolution.svg', 'fpv-drone-components-connection-map-high-resolution.svg', 'fpv-section-drone-overview.svg', 'fpv-section-motors-props.svg', 'fpv-section-flight-controller.svg', 'fpv-section-radio-control-link.svg', 'fpv-section-video-system.svg', 'fpv-section-gps-navigation.svg'],
  },
  {
    name: 'chargers',
    url: `${base}/FPV-Chargers-LiPo-and-Li-ion-Battery-Safety`,
    required: ['ISDT UC2', 'ISDT 608AC', 'ToolkitRC M7AC', 'ToolkitRC M6DAC'],
    minimumTables: 2,
    requireLocalImages: true,
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
    expandedImages: ['fpv-section-video-system.svg'],
    requireLocalImages: true,
    requiredImages: ['CADDXFPVRatel2Camera', 'Pro_62561ada', 'fpv-section-video-system.svg',],
  },
  {
    name: 'video-systems-and-goggles',
    url: `${base}/Video-Systems-and-Goggles`,
    required: ['FPV Video Systems and Goggles', 'For step-by-step compatibility and setup'],
    minimumTables: 0,
    expandedImages: ['fpv-section-video-system.svg'],
    requireLocalImages: true,
    requiredImages: ['VRX_and_V2', 'fpv-section-video-system.svg',],
  },
  {
    name: 'camera-selection',
    url: `${base}/FPV-Camera-Selection-Guide`,
    required: ['FPV Camera Selection Guide', 'Analog camera example: CADDXFPV Ratel 2'],
    minimumTables: 0,
    expandedImages: ['fpv-section-video-system.svg'],
    requireLocalImages: true,
    requiredImages: ['CADDXFPVRatel2Camera', 'Pro_62561ada', 'fpv-section-video-system.svg',],
  },
  {
    name: 'analog-vs-digital-video',
    url: `${base}/Analog-vs-Digital-FPV-Camera-Video-Guide`,
    required: ['Analog vs Digital FPV: Cameras, VTX and Receivers Compared', 'Analog hardware example: CADDXFPV Ratel 2 camera'],
    minimumTables: 0,
    expandedImages: ['fpv-section-video-system.svg'],
    requireLocalImages: true,
    requiredImages: ['CADDXFPVRatel2Camera', 'Pro_62561ada', 'fpv-section-video-system.svg',],
  },
  {
    name: 'analog-goggles-vrx',
    url: `${base}/Analog-Goggles-and-VRX-Integration`,
    required: ['Analog FPV Goggles and VRX', 'Real aircraft-side example: CADDXFPV Ratel 2 analog camera'],
    minimumTables: 0,
    expandedImages: ['fpv-section-video-system.svg'],
    requireLocalImages: true,
    requiredImages: ['CADDXFPVRatel2Camera', 'fpv-section-video-system.svg',],
  },
  {
    name: 'goggles-vrx-integration',
    url: `${base}/FPV-Goggles-and-VRX-Integration-Guide`,
    required: ['FPV Goggles and VRX Integration Guide', 'Real goggles example: Walksnail Avatar Goggles X'],
    minimumTables: 0,
    expandedImages: ['fpv-section-video-system.svg'],
    requireLocalImages: true,
    requiredImages: ['041778b25bd172e599bd84f495f87b2d', 'fpv-section-video-system.svg',],
  },
  {
    name: 'dji-o3-o4-integration',
    url: `${base}/DJI-O3-O4-Goggles-and-Air-Unit-Integration`,
    required: ['DJI O3 / O4 FPV Air Units and Goggles', 'Product thumbnail hosted by FPVGuru'],
    minimumTables: 0,
    expandedImages: ['fpv-section-video-system.svg'],
    requiredImages: ['fpv-section-video-system.svg', 'dji-o4-air-unit-pro-_main-image_'],
    requireLocalImages: true,
  },
  {
    name: 'walksnail-integration',
    url: `${base}/Walksnail-Avatar-Goggles-and-Air-Unit-Integration`,
    required: ['Walksnail Avatar / CADDXFPV', 'Aircraft-side example: Walksnail Avatar HD Pro Kit'],
    minimumTables: 0,
    expandedImages: ['fpv-section-video-system.svg'],
    requireLocalImages: true,
    requiredImages: ['Pro_62561ada', '041778b25bd172e599bd84f495f87b2d', 'fpv-section-video-system.svg',],
  },
  {
    name: 'hdzero-integration',
    url: `${base}/HDZero-Goggles-and-VTX-Integration`,
    required: ['HDZero Goggles and VTX Integration Guide', 'Real product example: HDZero goggles'],
    minimumTables: 0,
    expandedImages: ['fpv-section-video-system.svg'],
    requiredImages: ['fpv-section-video-system.svg'],
    requireLocalImages: true,
    requiredLoadedImages: ['967e02_c553e8472fab468e9214fe2a5123e194', '967e02_33e9daad991546f5830572a3e5ea4dff'],
  },
  {
    name: 'video-antennas-vtx-vrx',
    url: `${base}/Video-Antennas-VTX-VRX`,
    required: ['FPV Video Links, Antennas and Range', 'Product example: CADDXFPV / Walksnail Avatar VRX kit'],
    minimumTables: 0,
    expandedImages: ['fpv-section-antenna-types.svg'],
    requireLocalImages: true,
    requiredImages: ['VRX_and_V2', 'fpv-section-antenna-types.svg',],
  },
  {
    name: 'gps-and-flight-controllers',
    url: `${base}/GPS-and-Flight-Controllers`,
    required: ['GPS, GNSS and Flight Controller Boards', 'Example FC hardware'],
    minimumTables: 0,
    expandedImages: ['fpv-section-flight-controller.svg', 'fpv-section-gps-navigation.svg'],
    requireLocalImages: true,
    requiredImages: ['567042f830a15bcefdc659371169a57e', 'fpv-section-flight-controller.svg', 'fpv-section-gps-navigation.svg',],
  },
  {
    name: 'simulator',
    url: `${base}/Simulator-Training`,
    required: ['Simulator Training', 'Mandatory beginner video course before your first real flight', 'Learn to fly an FPV drone (for total beginners)', 'Liftoff', 'Enlarged control visuals'],
    minimumTables: 0,
    requireLocalImages: true,
    requiredImages: ['fpv-simulator-training-high-resolution.svg', 'fpv-system-basics-high-resolution.svg', 'fpv-section-axes-movements.svg', 'fpv-section-flight-modes.svg'],
    expandedImages: ['fpv-simulator-training-high-resolution.svg', 'fpv-system-basics-high-resolution.svg', 'fpv-section-axes-movements.svg', 'fpv-section-flight-modes.svg'],
  },
  {
    name: 'radiomaster-pocket',
    url: `${base}/RadioMaster-Pocket-Button-Guide`,
    required: ['RadioMaster Pocket', 'What the controls do', 'SIM-Liftoff', 'QUAD-ELRS'],
    minimumTables: 2,
    requireLocalImages: true,
    requiredImages: ['radiomaster-pocket-controls-high-resolution.svg', 'pocket-gimbal-adjustment.png'],
    expandedImages: ['radiomaster-pocket-controls-high-resolution.svg'],
  },
  {
    name: 'expresslrs-basics',
    url: `${base}/ExpressLRS-Basics`,
    required: ['ExpressLRS Basics', 'The control path', 'Before first bind'],
    minimumTables: 1,
    requireLocalImages: true,
    requiredImages: ['expresslrs-link-basics-high-resolution.svg'],
    expandedImages: ['expresslrs-link-basics-high-resolution.svg'],
  },
  {
    name: 'betaflight-basics',
    url: `${base}/Betaflight-Basics`,
    required: ['Betaflight Basics', 'Tabs to learn first', 'First connection workflow'],
    minimumTables: 1,
    requireLocalImages: true,
    requiredImages: ['betaflight-basics-high-resolution.svg'],
    expandedImages: ['betaflight-basics-high-resolution.svg'],
  },
  {
    name: 'fpv-power-system',
    url: `${base}/FPV-Power-System-Explained`,
    required: ['FPV Power System Explained', 'The path from battery to components', 'Current spikes, voltage sag and heat'],
    minimumTables: 2,
    requireLocalImages: true,
    requiredImages: ['fpv-part-battery-power.svg'],
    expandedImages: ['fpv-part-battery-power.svg'],
  },
  {
    name: 'flight-controller-stabilization',
    url: `${base}/Flight-Controller-and-Stabilization-Explained`,
    required: ['Flight Controller and Stabilization Explained', 'Follow one control request', 'PID, in plain language'],
    minimumTables: 3,
    requireLocalImages: true,
    requiredImages: ['fpv-section-control-loop.svg'],
    expandedImages: ['fpv-section-control-loop.svg'],
  },
  {
    name: 'fpv-propulsion-system',
    url: `${base}/FPV-Propulsion-System-Explained`,
    required: ['FPV Propulsion System Explained', 'The chain', 'Motor/propeller problems and their clues'],
    minimumTables: 2,
    requireLocalImages: true,
    requiredImages: ['fpv-section-motors-props.svg'],
    expandedImages: ['fpv-section-motors-props.svg'],
  },
  {
    name: 'fpv-radio-control-path',
    url: `${base}/FPV-Radio-Control-Path-Explained`,
    required: ['FPV Radio-Control Path Explained', 'The complete control path', 'Binding, channel input, arming and failsafe are separate checks'],
    minimumTables: 1,
    requireLocalImages: true,
    requiredImages: ['fpv-section-radio-control-link.svg'],
    expandedImages: ['fpv-section-radio-control-link.svg'],
  },
  {
    name: 'fpv-video-path',
    url: `${base}/FPV-Video-Path-Explained`,
    required: ['FPV Video Path Explained', 'The path from sensor to pilot', 'OSD, DVR and onboard recording are different'],
    minimumTables: 2,
    requireLocalImages: true,
    requiredImages: ['fpv-section-video-system.svg', 'fpv-section-antenna-types.svg'],
    expandedImages: ['fpv-section-video-system.svg', 'fpv-section-antenna-types.svg'],
  },
  {
    name: 'fpv-gps-telemetry-recovery',
    url: `${base}/FPV-GPS-Telemetry-and-Recovery-Explained`,
    required: ['FPV GPS, Telemetry and Recovery Explained', 'GPS Rescue is not ordinary stabilization', 'OSD, buzzer and Blackbox serve different roles'],
    minimumTables: 2,
    requireLocalImages: true,
    requiredImages: ['fpv-section-gps-navigation.svg'],
    expandedImages: ['fpv-section-gps-navigation.svg'],
  },
  {
    name: 'getting-started',
    url: `${base}/Getting-Started`,
    required: ['Getting Started', 'Your current setup', 'You do not need to buy goggles, a quad, or new firmware today'],
    minimumTables: 1,
    requireLocalImages: true,
    requiredImages: ['fpv-system-basics-high-resolution.svg'],
    expandedImages: ['fpv-system-basics-high-resolution.svg'],
  },
  {
    name: 'coding-ml',
    url: `${base}/Drone-Coding-and-Machine-Learning`,
    required: ['Drone Coding and Machine Learning Learning Path', 'How to Program a Tello Drone With Python', 'Learn Drone Programming with Python', 'Suggested project ladder'],
    minimumTables: 0,
  },
  {
    name: 'drone-categories',
    url: `${base}/Drone-Categories-and-Size-Guide`,
    required: ['Drone Categories and Size Guide', 'Real product photographs from BETAFPV'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['Air65_II_Brushless_Whoop_Quadcopter_Champion', 'pavo25-whoop-quadcopter_7_4bd247b6', 'O3', 'FCC', 'fpv-section-drone-overview.svg',],
  },
  {
    name: 'tinywhoop',
    url: `${base}/Tinywhoop-and-Micro-FPV-Guide`,
    required: ['Tinywhoops and Micro FPV', 'More real-world tinywhoop examples'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['Air65_II_Brushless_Whoop_Quadcopter_Champion', 'Meteor75_Pro_II_Brushless_Whoop_Quadcopter', 'fpv-section-drone-overview.svg',],
  },
  {
    name: '2-5-inch-guide',
    url: `${base}/2-5-Inch-FPV-Guide`,
    required: ['2.5-Inch FPV Quads', 'Real-world 2.5-inch product example'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['pavo25-whoop-quadcopter_7_4bd247b6', 'fpv-section-drone-overview.svg',],
  },
  {
    name: '3-5-inch-cinewhoop',
    url: `${base}/3-5-Inch-Cinewhoop-Guide`,
    required: ['3.5-Inch Cinewhoop', 'Complete aircraft example'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['O3', 'fpv-section-drone-overview.svg',],
  },
  {
    name: '5-inch-racing-freestyle',
    url: `${base}/5-Inch-FPV-Racing-and-Freestyle`,
    required: ['5-Inch FPV: Racing vs Freestyle', 'BETAFPV 5-inch real-world example'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['FCC', 'fpv-section-drone-overview.svg',],
  },
  {
    name: '7-inch-long-range',
    url: `${base}/7-Inch-Long-Range-FPV-Guide`,
    required: ['7-Inch Long-Range FPV', 'Real-world long-range video hardware example'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['Avatar_GT2_Kit', 'fpv-section-drone-overview.svg',],
  },
  {
    name: '2-5-inch-frame',
    url: `${base}/2-5-Inch-Frame-Guide`,
    required: ['2.5-Inch FPV Frame', 'Additional manufacturer frame example'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['7007342a36fdad8d81fe1333f226d127', 'fpv-section-drone-overview.svg',],
  },
  {
    name: '3-5-inch-cinewhoop-frame',
    url: `${base}/3-5-Inch-Cinewhoop-Frame-Assembly`,
    required: ['3.5-Inch Cinewhoop Frame', 'Complete aircraft alongside the frame'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['O3', 'd2e1b9aec379546f426ce88c187b9234', 'fpv-section-drone-overview.svg',],
  },
  {
    name: '5-inch-frame',
    url: `${base}/5-Inch-Frame-Assembly`,
    required: ['5-Inch FPV Frame', 'BETAFPV carbon-frame example'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['74b96dbb2d19db9758ba306fc55ad040', 'fpv-section-drone-overview.svg',],
  },
  {
    name: '7-inch-long-range-frame',
    url: `${base}/7-Inch-Long-Range-Frame-Assembly`,
    required: ['7-Inch Long-Range FPV Frame', 'Real-world long-range video component'],
    minimumTables: 0,
    expandedImages: ['fpv-section-drone-overview.svg'],
    requireLocalImages: true,
    requiredImages: ['Avatar_GT2_Kit', 'fpv-section-drone-overview.svg',],
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

      const normalizePath = value => value.replace(/\/+$/, '') || '/';
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
          renderedWidth: Math.round(img.getBoundingClientRect().width),
          declaredWidth: img.getAttribute('width') || '',
        })).filter(img => {
          try {
            const pathname = new URL(img.src).pathname;
            return pathname.includes('/wiki/images/') || pathname.includes('/buildFPV/wiki/images/');
          } catch {
            return false;
          }
        })
      );
      record.allImages = await page.locator('img').evaluateAll(images =>
        images.map(img => ({
          alt: img.alt || '',
          src: img.currentSrc || img.src,
          complete: img.complete,
          naturalWidth: img.naturalWidth,
        }))
      );
      if (testCase.requireLocalImages && record.localWikiImages.length === 0) {
        record.errors.push('No Wiki-local images were found on this guide page.');
      }
      for (const image of record.localWikiImages) {
        if (!image.complete || image.naturalWidth === 0) {
          record.errors.push(`Wiki-local image failed to load: ${image.src}`);
        }
      }
      for (const imageName of testCase.requiredLoadedImages ?? []) {
        if (!record.allImages.some(image => image.src.includes(imageName) && image.complete && image.naturalWidth > 0)) {
          record.errors.push(`Expected product image failed to load: ${imageName}`);
        }
      }
      for (const imageName of testCase.requiredImages ?? []) {
        if (!record.localWikiImages.some(image => image.src.includes(imageName) && image.complete && image.naturalWidth > 0)) {
          record.errors.push(`Expected Wiki-local image failed to load: ${imageName}`);
        }
      }
      for (const imageName of testCase.expandedImages ?? []) {
        const image = record.localWikiImages.find(candidate => candidate.src.includes(imageName));
        if (!image || !image.complete || image.naturalWidth === 0) continue;
        if (Number(image.declaredWidth) < 1200) {
          record.errors.push(`Expected width="1200" for enlarged infographic: ${imageName}`);
        }
        if (image.renderedWidth < 800) {
          record.errors.push(`Enlarged infographic is narrower than expected on desktop (${image.renderedWidth}px): ${imageName}`);
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
