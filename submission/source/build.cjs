const path = require("path");
const fs = require("fs");
const NPX = path.join(process.env.LOCALAPPDATA, "npm-cache/_npx/e41f203b7505f1fb/node_modules");
const { chromium } = require(path.join(NPX, "playwright"));

const DIR = __dirname;
const parts = [
  "part1",    // stylesheet and cover
  "partlink", // the live portfolio, straight after the cover
  "part1c",   // contents
  "part0",    // executive summary
  "part1b",   // 01 business idea
  "part2",    // 02 overview, 03 founding story, 04 development, 07 vision, 08 values
  "part2b",   // 05 operations, 06 product specification
  "part3",    // 09 business model, 10 unit economics, 12 revenue streams
  "part3b",   // 11 competitive position, 13 pricing, 14 customer journey
  "part4",    // 15 traction, 16 smart goals, 17 action plan, 18 growth, 22 market
  "part4b",   // 19 risk, 20 sustainability, 21 financial outlook
  "part5",    // 23 collection, 24 thinking, 25 identity, 26 website, 27 design, 28 contact
  "part6",    // 29 lessons, 30 glossary
];
const html = parts.map((p) => fs.readFileSync(path.join(DIR, p + ".html"), "utf8")).join("\n");
const combined = path.join(DIR, "portfolio.html");
fs.writeFileSync(combined, html, "utf8");

const out = path.join(DIR, "Marcus-Aurelius-Portfolio.pdf");

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message));

  await p.goto("file:///" + combined.replace(/\\/g, "/"), { waitUntil: "networkidle" });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(1500);

  const fonts = await p.evaluate(() => ({
    cinzel: document.fonts.check('16px "Cinzel"'),
    garamond: document.fonts.check('16px "EB Garamond"'),
    playfair: document.fonts.check('italic 16px "Playfair Display"'),
  }));
  console.log("fonts:", JSON.stringify(fonts));

  await p.pdf({
    path: out,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await b.close();

  const data = fs.readFileSync(out);
  const pages = (data.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
  console.log("pdf written:", out);
  console.log("size:", Math.round(data.length / 1024) + "KB");
  console.log("pages:", pages);
  console.log("fonts embedded:", /\/FontFile\d?/.test(data.toString("latin1")));
  if (errs.length) console.log("ERRORS:", errs.join(" | "));
})();
