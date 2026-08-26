import { ImageResponse } from "next/og";

// Icône d'écran d'accueil iOS : fond doré plein (iOS masque les coins lui-même).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#D9A441",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24">
          <polygon
            points="12,2.6 14.7,9.3 21.9,9.7 16.3,14.3 18.2,21.4 12,17.4 5.8,21.4 7.7,14.3 2.1,9.7 9.3,9.3"
            fill="#0A1721"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
