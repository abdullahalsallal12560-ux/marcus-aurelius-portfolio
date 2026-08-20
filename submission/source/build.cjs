const path = require("path");
const fs = require("fs");
const NPX = path.join(process.env.LOCALAPPDATA, "npm-cache/_npx/e41f203b7505f1fb/node_modules");
const { chromium } = require(path.join(NPX, "playwright"));

const DIR = __dirname;
const parts = [
  "part1",
  "partlink",
  "part1c",
  "part0",
  "sec03",
  "sec04",
  "sec05",
  "sec06",
  "sec07",
  "sec08",
  "sec09",
  "sec10",
  "sec11",
  "sec12",
  "sec13",
  "sec14",
  "sec15",
  "sec16",
  "sec17",
  "appA",
  "appB",
  "appC",
  "partcredit",
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

  // Chrome shrinks the entire document to fit when any element is wider than
  // the page, silently and without warning. It cost nine pages and two points
  // of body size before it was noticed, so it is checked rather than trusted.
  const overflow = await p.evaluate(() => {
    const limit = document.documentElement.clientWidth;
    const wide = [];
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > limit + 1) wide.push((el.className || el.tagName) + " " + Math.round(r.width) + "px");
    });
    return { limit, wide: wide.slice(0, 5) };
  });
  if (overflow.wide.length) {
    console.log("** WIDER THAN THE PAGE (" + overflow.limit + "px): " + overflow.wide.join(" | "));
  } else {
    console.log("nothing overflows the page width");
  }

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
