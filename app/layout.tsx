import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Poppins as Font } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";

import "./global.css";
import { baseUrl, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: {
    template: "PayMdir | %s",
    default: "PayMdir",
  },
  description:
    "Comprehensive API documentation, integration guides, and resources to help you seamlessly connect to PayMdir's powerful payment system. Build, test, and deploy with ease.",
  keywords: [
    "PayMdir",
    "PayMdir Payment",
    "PayMdir API",
    "PayMdir Documentation",
    "PayMdir Integration",
    "PayMdir Resources",
    "PayMdir SDK",
    "API",
    "Documentation",
    "Integration",
    "Resources",
    "SDK",
  ],
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

const font = Font({
  preload: true,
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
