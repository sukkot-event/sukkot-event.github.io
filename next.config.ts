import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages: fully static HTML, plain <img> tags (no /_next/image endpoint)
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
