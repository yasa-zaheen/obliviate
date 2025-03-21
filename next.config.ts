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
};

export default nextConfig;
