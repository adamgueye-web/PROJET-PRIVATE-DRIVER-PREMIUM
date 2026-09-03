import { ImageResponse } from "next/og";

export const alt =
  "SenegalDrive — Transferts et location avec chauffeur, van ou SUV, à Dakar et au Sénégal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 80px",
          background:
            "linear-gradient(145deg, #16323f 0%, #0f2431 55%, #0a1721 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo : étoile dorée + nom */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 22,
              background: "#D9A441",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="58" height="58" viewBox="0 0 24 24">
              <polygon
                points="12,2.6 14.7,9.3 21.9,9.7 16.3,14.3 18.2,21.4 12,17.4 5.8,21.4 7.7,14.3 2.1,9.7 9.3,9.3"
                fill="#0A1721"
              />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 600 }}>
            <span style={{ color: "#ffffff" }}>Senegal</span>
            <span style={{ color: "#D9A441" }}>Drive</span>
          </div>
        </div>

        {/* Accroche principale */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#D9A441",
            }}
          >
            Chauffeur privé · Dakar — Sénégal
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.06,
              maxWidth: 900,
            }}
          >
            Transferts &amp; location avec chauffeur, van ou SUV.
          </div>
        </div>

        {/* Bas de carte : preuves */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            color: "#A9B7C2",
          }}
        >
          <span>Prix fixe</span>
          <span style={{ color: "#D9A441" }}>·</span>
          <span>Réponse sous 15 min</span>
          <span style={{ color: "#D9A441" }}>·</span>
          <span>Partout au Sénégal</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
