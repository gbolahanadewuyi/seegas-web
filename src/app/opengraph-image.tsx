import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "SEEGAS — Cooking gas, refilled and delivered in Abuja";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/brand/seegas-lockup-white.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0c1d31", padding: 80, color: "#fff" }}>
        <img src={src} width={320} height={100} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, maxWidth: 900 }}>Cooking gas, refilled and delivered.</div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#9fb0c4" }}>NNPC Utako station, Abuja · Order on WhatsApp</div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 14, background: "#0866f5" }} />
      </div>
    ),
    size,
  );
}
