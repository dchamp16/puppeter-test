import puppeteer from 'puppeteer';

(async () => {
  // Launches a new browser instance in the new headless mode
  const browser = await puppeteer.launch({
    headless: "new"
  });

  // Opens a new page (tab) in the browser
  const page = await browser.newPage();

  // Navigates to the specified URL (Google's homepage in this case)
  await page.goto('https://www.google.com/');

  // Sets the viewport size of the page, simulating a window size
  await page.setViewport({ width: 1080, height: 1024 });

  // Selector for Google's search box, waits for the element to be present
  const searchSelector = 'textarea[name="q"]';
  await page.waitForSelector(searchSelector);

  // Types the search query 'javascript' into the search box
  await page.type(searchSelector, 'javascript');

  // Simulates pressing the Enter key to submit the search
  await page.keyboard.press('Enter');

  // Waits for the page navigation to complete, which in this case is the loading of search results
  await page.waitForNavigation();

  // Selector for the first search result heading, waits for the element to be present
  const resultSelector = 'h3.LC20lb';
  await page.waitForSelector(resultSelector);

  // Clicks on the first search result heading
  await page.click(resultSelector);

  // Waits for the navigation to complete after clicking on the search result, which is likely to lead to a new page
  await page.waitForNavigation();

  // Queries for an element with the class 'javascript-logo' and retrieves its 'src' attribute
  // Ensure that this class exists on the new page and is the correct selector for your use case
  const element = await page.$eval('.javascript-logo', el => el.src);

  // Logs the 'src' attribute of the found element to the console
  console.log(element);

  // Closes the browser instance
  await browser.close();
})();
