/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://cmartinezs.github.io",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "./out",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};

export default config;
