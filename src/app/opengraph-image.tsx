import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "SenegalDrive — Chauffeur privé au Sénégal, van devant l'océan au coucher du soleil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [hero, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/images/hero-van-social.jpg")),
    readFile(join(process.cwd(), "public/brand/logo-horizontal-on-dark.png")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#0A1721",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Photo réelle de la flotte, cadrée pour le format des aperçus sociaux. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/jpeg;base64,${hero.toString("base64")}`}
          alt=""
          width={1200}
          height={670}
          style={{ position: "absolute", top: -20, left: 0 }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            zIndex: 1,
            display: "flex",
            backgroundImage: "linear-gradient(90deg, rgba(10,23,33,0.88) 0%, rgba(10,23,33,0.7) 40%, rgba(10,23,33,0.08) 76%, transparent 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "48px 64px 58px",
          }}
        >
          {/* Le PNG officiel contient de la marge transparente autour du logo. */}
          <div style={{ display: "flex", position: "relative", width: 390, height: 75, overflow: "hidden" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`data:image/png;base64,${logo.toString("base64")}`}
              alt="SenegalDrive — Chauffeur privé"
              width={390}
              height={390}
              style={{ position: "absolute", top: -156, left: 0 }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontSize: 70, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            <span>Chauffeur</span>
            <span>privé au</span>
            <span style={{ color: "#D9A441" }}>Sénégal.</span>
          </div>

          <div style={{ display: "flex", fontSize: 26, fontWeight: 600, letterSpacing: 1.5, color: "#ffffff" }}>
            Transferts · Location · Excursions
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
