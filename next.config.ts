import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Note: 'output: export' is disabled to support API routes for the chatbot
  // For Netlify deployment, the chatbot uses Netlify Functions instead
  // output: 'export',
  images: {
    unoptimized: true
  },
  turbopack: {
    root: process.cwd()
  }
};

export default nextConfig;
