#!/usr/bin/env node
/**
 * Read-only smoke test for the personal portfolio and its public project demos.
 * Usage: node scripts/check-portfolio-routes.mjs [portfolio-base-url]
 * Node.js >= 20. No third-party dependencies, browser or API credentials.
 */
const baseUrl = process.argv[2] || "https://cmartinezs.github.io";
const paths = [
  "/", "/profesional/", "/especialidades/", "/capacidades/",
  "/trayectoria/", "/proyectos/", "/ai/", "/docencia/",
  "/videojuegos/", "/keygo/", "/recursos-contacto/", "/contacto/",
];
const demos = [
  { label: "Lab Lights", url: "https://adumun.github.io/lab-lights-web/" },
  { label: "Starborne Voyager", url: "https://adumun.github.io/starborne-voyager/" },
  { label: "Web Game Prototypes", url: "https://adumun.github.io/web-game-prototypes/" },
  { label: "Neon Pursuit", url: "https://adumun.github.io/neon-pursuit/" },
];

async function check(label, url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(12000),
      headers: { "User-Agent": "PortfolioPublicationAudit/1.0" },
    });
    const html = await response.text();
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() || "";
    const looksLike404 = /\b404\b.{0,120}(?:page could not be found|not found)/i.test(html.slice(0, 16000))
      || /<title[^>]*>\s*404\b/i.test(html);
    const ok = response.ok && !looksLike404;
    return { label, ok, status: response.status, title, url: response.url, note: looksLike404 ? "404 content" : "" };
  } catch (e) {
    return { label, ok: false, status: "ERROR", title: "", url, note: String(e?.message || e) };
  }
}

const results = [];
for (const path of paths) {
  const url = new URL(path.replace(/^\//, ""), baseUrl.endsWith("/") ? baseUrl : baseUrl + "/").toString();
  results.push(await check(`portfolio ${path}`, url));
}
for (const demo of demos) results.push(await check(`demo ${demo.label}`, demo.url));
for (const item of results) {
  console.log([item.ok ? "PASS" : "FAIL", item.status, item.label, item.note || item.title].join(" | "));
}
const passed = results.filter((r) => r.ok).length;
console.log(`\n${passed}/${results.length} URLs passed.`);
if (results.some((r) => !r.ok)) process.exitCode = 1;
