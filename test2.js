// import puppeteer from "puppeteer";

const puppeteer = require("puppeteer");

(async () => {
  // Launch the browser and open a new blank page
  //   const browser = await puppeteer.launch({ headless: "new" });
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({ width: 1920, height: 1080 });

  // Navigate the page to a URL
  await page.goto("https://google.com/");

  const element = await page.waitForSelector("body ::-p-text(Lucky)");

  //   const element = await page.waitForSelector("body ::-p-text(Lucky2)"); // this one won't work

  await browser.close();
})();
