import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.google.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Query for an element handle.
  const element = await page.$eval('.MV3Tnb',  el => el.textContent)

console.log(element)


  // Close browser.
  await browser.close();
})();