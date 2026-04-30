import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Tab-Favicon – Markenfarbe, bis `/public/images/logo.png` als Asset gepflegt ist. */
export default function Icon() {
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
          borderRadius: 7,
          color: "#ffffff",
          fontSize: 20,
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
