import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/print");

  // Nicer looking pdf but not very print friendly
  // const elem = await page.$("html");
  // const boundingBox = await elem.boundingBox();

  await page.pdf({
    path: "./public/resume.pdf",
    format: "A4",
    // width: "210mm",
    //height: `${boundingBox.height + 60}px`,
    margin: {
      top: "40px",
      bottom: "60px",
      left: "20px",
      right: "20px",
    },
  });

  await browser.close();
})();
