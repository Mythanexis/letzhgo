import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** LAN / andere Geräte im Netz: HMR/Webpack-Dev-Ressourcen erlauben */
  allowedDevOrigins: ["192.168.1.108"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
