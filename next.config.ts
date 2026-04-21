import type { NextConfig } from "next";

/**
 * Security-Header, die auf alle Responses angewendet werden.
 * Keine strikte CSP, da viele Inline-Scripts/Styles (JSON-LD, framer-motion) und
 * eingebettete Drittanbieter (Google Maps, TikTok, Instagram) genutzt werden.
 * Clickjacking-Schutz erfolgt stattdessen per frame-ancestors in der CSP.
 */
const SECURITY_HEADERS = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'",
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.108"],
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
      {
        // Aggressives Caching für statische Assets (Bilder, Videos)
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|mp4|webm|woff2|woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
