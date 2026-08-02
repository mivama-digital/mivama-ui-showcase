import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  output: process.env.PLAYWRIGHT_PRODUCTION ? undefined : "standalone",
};

export default nextConfig;
