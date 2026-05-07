import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/agent-experiments/apps/2026-05-06-outfit-planner',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
