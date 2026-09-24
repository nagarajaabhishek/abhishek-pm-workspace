import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/spaces/about",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/spaces/about",
        permanent: true,
      },
      {
        source: "/docs/:slug*",
        destination: "/spaces/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
