import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Allow accessing the dev server from your LAN IP to silence the warning
    allowedDevOrigins: ["http://10.117.244.11"],
  },
};

export default nextConfig;
