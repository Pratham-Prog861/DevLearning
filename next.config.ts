import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Commented out for development with API routes
  // For production on Netlify, the static export works with Netlify Functions
  // Uncomment this line if you want static export:
  // output: 'export',
  images: {
    unoptimized: true
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
