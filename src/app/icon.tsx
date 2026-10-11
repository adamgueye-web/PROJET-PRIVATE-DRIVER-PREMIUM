import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const symbol = await readFile(join(process.cwd(), "public/brand/logo-symbol-on-dark.png"));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0A1721" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${symbol.toString("base64")}`} alt="" width={86} height={86} />
      </div>
    ),
    { ...size },
  );
}
