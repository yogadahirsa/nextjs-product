import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
    ],
    // OR (simpler) you can use the domains array:
    // domains: ['cdn.dummyjson.com'],
  },
};

export default nextConfig;
