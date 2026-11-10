#!/usr/bin/env node
/**
 * Read-only check for routes of the personal portfolio.
 * Usage: node scripts/check-portfolio-routes.mjs [base-url]
 * Node.js >= 20. No third-party dependencies, no browser or API credentials.
 */
const baseUrl = process.argv[2] || "https://cmartinezs.github.io";
const paths = [
  "/", "/profesional/", "/especialidades/", "/capacidades/",
  "/trayectoria/", "/proyectos/", "/ai/", "/docencia/",
  "/videojuegos/", "/keygo/", "/recursos-contacto/", "/contacto/",
];

async function check(path) {
  const url = new URL(path.replace(/^\//, ""), baseUrl.endsWith("/") ? baseUrl : baseUrl + "/").toString();
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
      headers: { "User-Agent": "PortfolioRouteAudit/1.0" },
    });
    const html = await response.text();
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() || "";
    const looksLike404 = /\b404\b.{0,120}(?:page could not be found|not found)/i.test(html.slice(0, 16000))
      || /<title[^>]*>\s*404\b/i.test(html);
    const ok = response.ok && !looksLike404;
    return { path, ok, status: response.status, title, url: response.url, note: looksLike404 ? "404 content" : "" };
  } catch (e) {
    return { path, ok: false, status: "ERROR", title: "", url, note: String(e?.message || e) };
  }
}

const results = [];
for (const path of paths) results.push(await check(path));
for (const item of results) {
  console.log([item.ok ? "PASS" : "FAIL", item.status, item.path, item.note || item.title].join(" | "));
}
console.log("\n" + results.filter((r) => r.ok).length + "/" + results.length + " routes passed against " + baseUrl);
if (results.some((r) => !r.ok)) process.exitCode = 1;
