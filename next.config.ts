import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // REQUIRED for APK / offline WebView
  output: "export",

  // Prevent runtime server features
  trailingSlash: true,

  // Keep your existing settings
  productionBrowserSourceMaps: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  outputFileTracingRoot: process.cwd(),

  devIndicators: false,

  images: {
    unoptimized: true,
  },

  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;


