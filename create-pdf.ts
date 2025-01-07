import puppeteer, { Browser } from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { spawn, spawnSync } from "child_process";
import path from "path";

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

  let browser: Browser | null = null;
  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(`http://localhost:${serverPort}`);
    await page.pdf({
      path: path.join(outPath, "SilvanoCerzaResume.pdf"),
      format: "A4",
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      printBackground: true,
      // These are the default margins in Chrome
      margin: {
        top: "0.4in",
        right: "0.4in",
        bottom: "0.4in",
        left: "0.4in",
      },
    });
    await browser.close();
  } catch (err: any) {
    console.error(
      "Error:",
      err,
      "\nStack:",
      err.stack,
      "\nDetails:",
      JSON.stringify(err, null, 2),
    );
  } finally {
    // Creation might fail, always check before quitting or we risk
    // not closing the server
    if (browser) {
      await browser.close();
    }
    server.kill();
  }
})();
