const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`Console error on ${page.url()}: ${msg.text()}`);
    }
  });
  page.on('pageerror', error => {
    errors.push(`Page error on ${page.url()}: ${error.message}`);
  });

  const routes = ['/', '/shop', '/shop/1', '/about', '/contact'];

  for (const route of routes) {
    console.log(`Testing route: ${route}`);
    await page.goto(`http://localhost:3000${route}`);
    await page.waitForTimeout(1000); // Wait for hydration
  }

  if (errors.length > 0) {
    console.error("Found errors:", errors);
    process.exit(1);
  } else {
    console.log("No console errors or hydration errors found on any routes.");
  }

  await browser.close();
})();
