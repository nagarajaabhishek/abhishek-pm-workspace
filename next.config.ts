import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/docs/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
