import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "unbounce.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
  serverExternalPackages: ["pdf-parse"],
};

export default nextConfig;
