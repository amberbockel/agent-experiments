import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/agent-experiments',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
