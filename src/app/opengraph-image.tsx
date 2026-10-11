import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "SenegalDrive — Transferts et location avec chauffeur en SUV, van ou minibus à Dakar et au Sénégal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/logo-horizontal-on-dark.png"));

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
        {/* Logo horizontal officiel sur fond sombre ; son PNG a des marges transparentes. */}
        <div style={{ display: "flex", position: "relative", width: 500, height: 100, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${logo.toString("base64")}`}
            alt="SenegalDrive — Chauffeur privé"
            width={500}
            height={500}
            style={{ position: "absolute", top: -200, left: 0 }}
          />
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
              fontSize: 62,
              fontWeight: 600,
              lineHeight: 1.06,
              maxWidth: 900,
            }}
          >
            Transferts &amp; location avec chauffeur. SUV, vans et minibus.
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
