import { readFileSync } from "node:fs";
import { join } from "node:path";

import { type ImageResponse } from "next/og";
import { generateOGImage } from "./og";
import { metadataImage } from "@/lib/metadata";

const fontPath = join(
  process.cwd(),
  "app/docs-og/[...slug]/JetBrainsMono-Regular.ttf"
);
const fontBoldPath = join(
  process.cwd(),
  "app/docs-og/[...slug]/JetBrainsMono-Bold.ttf"
);

const font = readFileSync(fontPath);
const fontBold = readFileSync(fontBoldPath);

export const GET = metadataImage.createAPI((page): ImageResponse => {
  return generateOGImage({
    primaryTextColor: "rgb(240,240,240)",
    title: page.data.title,
    description: page.data.description,
    fonts: [
      {
        name: "Mono",
        data: font,
        weight: 400,
      },
      {
        name: "Mono",
        data: fontBold,
        weight: 600,
      },
    ],
  });
});

export function generateStaticParams(): {
  slug: string[];
}[] {
  return metadataImage.generateParams();
}

export const dynamic = "force-dynamic";
