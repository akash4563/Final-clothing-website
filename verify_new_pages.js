const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to a typical desktop size
  await page.setViewportSize({ width: 1280, height: 800 });

  // 1. Verify Shop Page
  await page.goto('http://localhost:3000/shop');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/shop_page.png' });

  // 2. Verify Product Page
  await page.goto('http://localhost:3000/shop/1');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/product_page.png' });

  // 3. Verify About Page
  await page.goto('http://localhost:3000/about');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/about_page.png' });

  // 4. Verify Contact Page
  await page.goto('http://localhost:3000/contact');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/contact_page.png' });

  await browser.close();
  console.log("Screenshots captured successfully.");
})();
