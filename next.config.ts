import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "unbounce.com",
      },
    ],
  },
  serverExternalPackages: ["pdf-parse"],
};

export default nextConfig;
