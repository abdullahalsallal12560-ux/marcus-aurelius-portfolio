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

  // Measured rather than asked. document.fonts.check reported Playfair missing
  // while it was demonstrably rendering on the page, so the probe now sets the
  // same string twice, once in the face and once in a fallback the face cannot
  // be, and compares the widths. Identical widths mean the fallback answered
  // both times, which is the only thing worth knowing here.
  const fonts = await p.evaluate(() => {
    const measure = (family, style) => {
      const s = document.createElement("span");
      s.textContent = "Handgloves 12345 quick brown fox";
      s.style.cssText = "position:absolute;visibility:hidden;white-space:nowrap;font-size:64px;font-style:" + style;
      s.style.fontFamily = family;
      document.body.appendChild(s);
      const w = s.getBoundingClientRect().width;
      s.remove();
      return w;
    };
    const loaded = (family, style) =>
      Math.abs(measure('"' + family + '", monospace', style) - measure("monospace", style)) > 1;
    return {
      cinzel: loaded("Cinzel", "normal"),
      garamond: loaded("EB Garamond", "normal"),
      playfair: loaded("Playfair Display", "italic"),
    };
  });
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

  // Chrome takes the document title from <title> and writes nothing else, so a
  // reader shows the file with no author against it. The rest is set here,
  // after the render, because there is no way to pass it through page.pdf().
  try {
    const { execFileSync } = require("child_process");
    execFileSync("python", ["-c", [
      "import pymupdf,sys",
      "d=pymupdf.open(sys.argv[1])",
      "m=d.metadata or {}",
      "m.update(author='Abdullah Al-Sallal',",
      "  subject='Company portfolio: Marcus Aurelius Perfumes',",
      "  keywords='niche fragrance, Amman, direct to consumer, company portfolio',",
      "  creator='Marcus Aurelius Perfumes')",
      "d.set_metadata(m); d.saveIncr()",
    ].join("\n"), out], { stdio: "pipe" });
    console.log("metadata stamped");
  } catch (e) {
    console.log("** metadata not stamped:", String(e.message).split("\n")[0]);
  }

  const data = fs.readFileSync(out);
  const pages = (data.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
  console.log("pdf written:", out);
  console.log("size:", Math.round(data.length / 1024) + "KB");
  console.log("pages:", pages);
  console.log("fonts embedded:", /\/FontFile\d?/.test(data.toString("latin1")));
  if (errs.length) console.log("ERRORS:", errs.join(" | "));
})();
