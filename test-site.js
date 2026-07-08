const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', error => {
    errors.push(error.message);
  });

  await page.goto('http://localhost:3000');

  // Wait a bit to let animations and hydration settle
  await page.waitForTimeout(3000);

  if (errors.length > 0) {
    console.error("Found errors:", errors);
    process.exit(1);
  } else {
    console.log("No console errors or hydration errors found.");
  }

  await browser.close();
})();
