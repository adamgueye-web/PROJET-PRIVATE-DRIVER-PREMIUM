import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const symbol = await readFile(join(process.cwd(), "public/brand/logo-symbol-on-dark.png"));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0A1721" }}>
        {/* L'original contient une marge transparente autour du symbole. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${symbol.toString("base64")}`} alt="" width={240} height={240} />
      </div>
    ),
    { ...size },
  );
}
