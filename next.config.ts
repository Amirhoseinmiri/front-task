import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // add image host
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bettingpros.com",
      },
    ],
  },
};

export default nextConfig;
