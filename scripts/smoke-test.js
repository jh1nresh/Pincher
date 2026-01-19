import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m'
};

const LOG = (msg, color = COLORS.reset) => console.log(`${color}${msg}${COLORS.reset}`);
const FAIL = (msg) => {
  LOG(`❌ ${msg}`, COLORS.red);
  process.exit(1);
};
const PASS = (msg) => LOG(`✅ ${msg}`, COLORS.green);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(PROJECT_ROOT, 'out');

// Critical routes that must exist as HTML files
const CRITICAL_PAGES = [
  'index.html',
  '404.html',
  'profile.html',
  'trips.html',
  'onboarding.html'
];

// Critical assets
const CRITICAL_ASSETS = [
  // 'pincher-v1.png' // Verified in public/ but should be in out/
];

async function runSmokeTest() {
  LOG('🚀 Starting Smoke Test...', COLORS.cyan);
  LOG(`📂 Checking output directory: ${OUT_DIR}`);

  // 1. Check if out/ exists
  if (!fs.existsSync(OUT_DIR)) {
    FAIL(`Output directory not found. Did you run 'npm run build'?`);
  }
  PASS('Output directory exists');

  // 2. Verified Critical Pages
  LOG('📄 Verifying Application Routes...');
  const missingPages = [];
  
  for (const page of CRITICAL_PAGES) {
    const filePath = path.join(OUT_DIR, page);
    if (fs.existsSync(filePath)) {
      // Basic Content Check
      const content = fs.readFileSync(filePath, 'utf-8');
      if (!content.includes('<!DOCTYPE html>')) {
        LOG(`⚠️  ${page} exists but seems invalid`, COLORS.yellow);
      } else {
        LOG(`  - ${page} OK`);
      }
    } else {
      missingPages.push(page);
    }
  }

  if (missingPages.length > 0) {
    missingPages.forEach(p => LOG(`  - ${p} MISSING`, COLORS.red));
    FAIL(`Missing ${missingPages.length} critical pages!`);
  }
  PASS('All critical pages generated');

  // 3. Check for obvious Next.js Errors in output
  LOG('🔍 Scanning for error signatures...');
  const indexHtml = fs.readFileSync(path.join(OUT_DIR, 'index.html'), 'utf-8');
  if (indexHtml.includes('Application error: a client-side exception has occurred')) {
    FAIL('Detected runtime error signature in index.html');
  }
  PASS('No static error signatures found');

  // 4. Check Capacitor Config
  LOG('📱 Verifying Capacitor config...');
  if (fs.existsSync(path.join(PROJECT_ROOT, 'capacitor.config.json')) || fs.existsSync(path.join(PROJECT_ROOT, 'capacitor.config.ts'))) {
      PASS('Capacitor config present');
  } else {
      LOG('⚠️ capacitor.config missing', COLORS.yellow);
  }

  LOG('\n✨ SMOKE TEST PASSED! Build is healthy. ✨', COLORS.green);
}

runSmokeTest().catch(e => {
  console.error(e);
  process.exit(1);
});
