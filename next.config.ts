import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["leaflet", "react-leaflet"]
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;