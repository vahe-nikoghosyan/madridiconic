import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tpc.googlesyndication.com",
        port: "",
        pathname: "/simgad/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
