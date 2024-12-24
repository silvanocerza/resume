import { Builder, Browser } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import { spawn, spawnSync } from "child_process";
import path from "path";
import CDP from "chrome-remote-interface";
import fs from "fs";

function findPython(): string | null {
  if (spawnSync("python", ["--version"]).status === 0) {
    return "python";
  } else if (spawnSync("python3", ["--version"]).status === 0) {
    return "python3";
  }
  return null;
}

(async function createPdf() {
  const root = path.dirname(__filename);

  const python = findPython();
  if (!python) {
    console.error("Python not found");
    return 1;
  }
  // Start a Python server to serve the static HTML file.
  // This assumes the project has already been built.
  const serverPort = "3000";
  const outPath = path.join(root, "out");
  const server = spawn(python, [
    "-m",
    "http.server",
    serverPort,
    "--directory",
    outPath,
  ]);
  server.on("error", (err) => {
    console.error(`Server error: ${err}`);
  });

  let driver: chrome.Driver | null = null;
  try {
    const debugPort = 9222;
    const options = new chrome.Options();
    options.addArguments("--headless");
    options.addArguments(`--remote-debugging-port=${debugPort}`);
    driver = (await new Builder()
      .forBrowser(Browser.CHROME)
      .setChromeOptions(options)
      .build()) as chrome.Driver;
    const client = await CDP({ port: debugPort, host: "localhost" });
    await driver.get(`http://localhost:${serverPort}`);
    const printOptions = {
      // It's A4 in stupid imperial units
      paperWidth: 8.27,
      paperHeight: 11.7,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
    };
    const res = await client.Page.printToPDF(printOptions);
    const buffer = Buffer.from(res.data, "base64");
    fs.writeFileSync(path.join(outPath, "SilvanoCerzaResume.pdf"), buffer);
  } finally {
    // Creation might fail, always check before quitting or we risk
    // not closing the server
    if (driver) {
      await driver.quit();
    }
    server.kill();
  }
})();
