// One-off mobile QA audit against a live deployment across real phone-width
// viewports. Run: node scripts/mobile-audit.mjs <outDir> [baseUrl]
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const OUT_DIR = process.argv[2] ?? ".mobile-audit";
const BASE_URL = process.argv[3] ?? "https://www.letzhgo.ch";

const VIEWPORTS = [
  { width: 320, height: 568, label: "320" },
  { width: 360, height: 780, label: "360" },
  { width: 390, height: 844, label: "390" },
  { width: 430, height: 932, label: "430" },
];

const PAGES = [
  { path: "/", label: "home" },
  { path: "/services/fahrstunden", label: "fahrstunden" },
  { path: "/kontakt", label: "kontakt" },
];

const MIN_TAP_TARGET = 44;

mkdirSync(path.join(OUT_DIR, "screenshots"), { recursive: true });

function rectsOverlap(a, b) {
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
}

async function auditPage(browser, pageDef, viewport) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 3, // matches a real iPhone's pixel ratio
    isMobile: true,
    hasTouch: true,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  });

  const imageRequests = [];
  const thirdPartyRequests = [];
  const videoRequests = [];
  context.on("request", (req) => {
    const url = req.url();
    if (url.includes("/_next/image")) {
      imageRequests.push({ url, resourceType: req.resourceType(), time: Date.now() });
    } else if (/\/(images|_next\/static\/media)\//.test(url) && /\.(jpe?g|png|webp|avif)/.test(url)) {
      imageRequests.push({ url, resourceType: req.resourceType(), time: Date.now(), direct: true });
    }
    if (/instagram\.com|cdninstagram|tiktok\.com|tiktokcdn|ibyteimg/.test(url)) {
      thirdPartyRequests.push({ url, time: Date.now() });
    }
    if (/\.mp4(\?|$)/.test(url)) {
      videoRequests.push({ url, headers: req.headers() });
    }
  });
  context.on("response", async (res) => {
    const url = res.url();
    if (/\.mp4(\?|$)/.test(url)) {
      const entry = videoRequests.find((v) => v.url === url);
      if (entry) {
        entry.status = res.status();
        entry.respHeaders = res.headers();
        entry.contentLength = res.headers()["content-length"];
        entry.contentRange = res.headers()["content-range"];
      }
    }
  });

  const page = await context.newPage();
  const consoleErrors = [];
  page.on("pageerror", (e) => consoleErrors.push(String(e)));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  const t0 = Date.now();
  await page.goto(BASE_URL + pageDef.path, { waitUntil: "networkidle", timeout: 45000 }).catch(async () => {
    await page.goto(BASE_URL + pageDef.path, { waitUntil: "load", timeout: 45000 });
  });
  await page.waitForTimeout(1500);

  const requestsBeforeScroll = thirdPartyRequests.length;

  const screenshotPath = path.join(
    OUT_DIR,
    "screenshots",
    `${pageDef.label}-${viewport.label}.png`,
  );
  await page.screenshot({ path: screenshotPath, fullPage: true });

  const result = await page.evaluate(
    ({ MIN_TAP_TARGET }) => {
      const out = {};

      // 1) horizontal scroll
      out.scrollWidth = document.documentElement.scrollWidth;
      out.innerWidth = window.innerWidth;
      out.bodyScrollWidth = document.body.scrollWidth;
      out.hasHorizontalScroll =
        document.documentElement.scrollWidth > window.innerWidth + 1 ||
        document.body.scrollWidth > window.innerWidth + 1;

      // find the widest offending element for diagnostics
      let worst = null;
      if (out.hasHorizontalScroll) {
        document.querySelectorAll("body *").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.right > window.innerWidth + 1 && r.width > 0) {
            if (!worst || r.right > worst.right) {
              worst = {
                right: r.right,
                width: r.width,
                tag: el.tagName.toLowerCase(),
                cls: (el.className || "").toString().slice(0, 120),
                text: (el.textContent || "").trim().slice(0, 60),
              };
            }
          }
        });
      }
      out.worstOverflowEl = worst;

      // 3) tap targets
      const interactive = Array.from(
        document.querySelectorAll(
          'a[href], button, [role="button"], input:not([type="hidden"]), select, textarea, label[for]',
        ),
      );
      out.tapTargets = interactive
        .map((el) => {
          const r = el.getBoundingClientRect();
          const style = getComputedStyle(el);
          return { el, r, style };
        })
        .filter(
          ({ r, style }) =>
            r.width > 0 &&
            r.height > 0 &&
            style.visibility !== "hidden" &&
            style.display !== "none" &&
            style.pointerEvents !== "none",
        )
        .filter(({ r }) => r.width < MIN_TAP_TARGET || r.height < MIN_TAP_TARGET)
        .map(({ el, r }) => ({
          tag: el.tagName.toLowerCase(),
          text: (el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 50),
          width: Math.round(r.width),
          height: Math.round(r.height),
          top: Math.round(r.top),
          left: Math.round(r.left),
          cls: (el.className || "").toString().slice(0, 100),
        }))
        // de-dupe identical tag+text+size (repeated nav items etc.)
        .filter(
          (t, i, arr) =>
            arr.findIndex(
              (o) => o.tag === t.tag && o.text === t.text && o.width === t.width && o.height === t.height,
            ) === i,
        );

      // 4) WhatsApp FAB overlap
      const waBtn = document.querySelector('button[aria-label*="WhatsApp" i]');
      out.waButtonFound = !!waBtn;
      if (waBtn) {
        const waRect = waBtn.getBoundingClientRect();
        out.waRect = {
          top: Math.round(waRect.top),
          left: Math.round(waRect.left),
          right: Math.round(waRect.right),
          bottom: Math.round(waRect.bottom),
        };
        const others = Array.from(
          document.querySelectorAll('a[href], button, input, textarea, select'),
        ).filter((el) => el !== waBtn && !waBtn.contains(el));
        const overlaps = [];
        for (const el of others) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue;
          const a = waRect;
          const b = r;
          if (a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top) {
            overlaps.push({
              tag: el.tagName.toLowerCase(),
              text: (el.textContent || el.getAttribute("aria-label") || el.getAttribute("placeholder") || "")
                .trim()
                .slice(0, 50),
              rect: { top: Math.round(r.top), left: Math.round(r.left), right: Math.round(r.right), bottom: Math.round(r.bottom) },
            });
          }
        }
        out.waOverlaps = overlaps;
      }

      // 5) duplicate H1
      const h1s = Array.from(document.querySelectorAll("h1"));
      out.h1Count = h1s.length;
      out.h1Texts = h1s.map((h) => (h.textContent || "").trim().slice(0, 80));

      // 7) video preload
      const videos = Array.from(document.querySelectorAll("video"));
      out.videos = videos.map((v) => ({
        preload: v.getAttribute("preload"),
        autoplay: v.autoplay,
        src: v.currentSrc || v.querySelector("source")?.src || v.getAttribute("src"),
        readyState: v.readyState,
        networkState: v.networkState,
      }));

      // next/image rendered sizes for cross-check
      const imgs = Array.from(document.querySelectorAll("img"));
      out.imgElements = imgs
        .filter((img) => img.currentSrc && img.currentSrc.includes("/_next/image"))
        .map((img) => {
          const r = img.getBoundingClientRect();
          return {
            src: img.currentSrc,
            renderedWidth: Math.round(r.width),
            sizesAttr: img.getAttribute("sizes"),
          };
        });

      // instagram/tiktok embed containers present?
      out.hasInstagramEmbed = !!document.querySelector(
        'iframe[src*="instagram"], blockquote.instagram-media, [class*="instagram" i]',
      );
      out.hasTikTokEmbed = !!document.querySelector(
        'iframe[src*="tiktok"], blockquote.tiktok-embed, [class*="tiktok" i]',
      );

      return out;
    },
    { MIN_TAP_TARGET },
  );

  result.loadTimeMs = Date.now() - t0;
  result.consoleErrors = consoleErrors.slice(0, 10);
  result.imageRequestCount = imageRequests.length;
  result.thirdPartyRequestsBeforeScroll = requestsBeforeScroll;
  result.videoRequests = videoRequests.map((v) => ({
    url: v.url.replace(BASE_URL, ""),
    status: v.status,
    contentLength: v.contentLength,
    contentRange: v.contentRange,
  }));

  // cross-check image request widths (the "w=2560" complaint) against rendered size
  const widthParam = (url) => {
    try {
      const u = new URL(url);
      return Number(u.searchParams.get("w"));
    } catch {
      return null;
    }
  };
  result.imageOverfetch = imageRequests
    .filter((r) => r.url.includes("/_next/image"))
    .map((r) => {
      const w = widthParam(r.url);
      const match = result.imgElements.find((img) => img.src === r.url);
      return {
        url: r.url.replace(BASE_URL, ""),
        requestedW: w,
        renderedWidth: match?.renderedWidth ?? null,
        sizesAttr: match?.sizesAttr ?? null,
      };
    })
    .filter((r) => r.requestedW && r.renderedWidth && r.requestedW > r.renderedWidth * 3.5 * 1.2);

  await context.close();
  return { page: pageDef.label, viewport: viewport.label, path: pageDef.path, screenshot: screenshotPath, ...result };
}

const results = [];
const browser = await chromium.launch();
for (const pageDef of PAGES) {
  for (const viewport of VIEWPORTS) {
    process.stderr.write(`Auditing ${pageDef.label} @ ${viewport.label}px...\n`);
    try {
      const r = await auditPage(browser, pageDef, viewport);
      results.push(r);
    } catch (e) {
      results.push({ page: pageDef.label, viewport: viewport.label, path: pageDef.path, error: String(e) });
    }
  }
}
await browser.close();

writeFileSync(path.join(OUT_DIR, "report.json"), JSON.stringify(results, null, 2));
process.stderr.write(`Done. Report written to ${path.join(OUT_DIR, "report.json")}\n`);
