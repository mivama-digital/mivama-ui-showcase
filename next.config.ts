import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: process.env.PLAYWRIGHT_PRODUCTION ? undefined : "standalone",
};

export default nextConfig;
