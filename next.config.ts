import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "tpc.googlesyndication.com" }],
  },
};

export default nextConfig;
