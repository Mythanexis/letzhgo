import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple Touch Icon – gleiche Marke wie `icon.tsx`. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0144DC",
          borderRadius: 40,
          color: "#ffffff",
          fontSize: 112,
          fontWeight: 700,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        L
      </div>
    ),
    { ...size },
  );
}
