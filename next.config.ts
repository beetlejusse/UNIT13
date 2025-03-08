import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/smartflow/:path*", // Redirect all "/smartflow" requests
        destination: "https://smartflow-sigma.vercel.app/:path*", // Your SmartFlow project URL
      },
    ];
  },
};

export default nextConfig;
