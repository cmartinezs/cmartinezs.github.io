import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // Prevent a parent directory lockfile from being inferred as the project root.
  turbopack: { root: process.cwd() },
};

export default nextConfig;
