import type { Metadata } from "next/types";
import { createMetadataImage } from "fumadocs-core/server";
import { source } from "./source";

export const metadataImage = createMetadataImage({
  source,
  imageRoute: "/docs-og",
});

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://docs.paymdir.com",
      images: [
        {
          url: "/docs.png",
          width: 1200,
          height: 630,
        },
      ],
      siteName: "PayMdir",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@alulamoke",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: [
        {
          url: "/docs.png",
          width: 1200,
          height: 630,
        },
      ],
      ...override.twitter,
    },
  };
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://docs.paymdir.com");
