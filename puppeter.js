import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.hostinger.com/tutorials/blog-examples');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Query for an element handle.
  const element = await page.waitForSelector('div > .post-info')



  // Do something with element...
  await element.click(); // Just an example.

  // Dispose of handle
  await element.dispose();

  // Close browser.
  await browser.close();
})();