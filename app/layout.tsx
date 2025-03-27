import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Poppins } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import { Banner } from "fumadocs-ui/components/banner";

import "./global.css";
import { Background } from "@/components/Background";
import { baseUrl, createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: {
    template: "PayMdir | %s",
    default: "PayMdir",
  },
  description:
    "Comprehensive API documentation, integration guides, and resources to help you seamlessly connect to PayMdir's powerful payment system. Build, test, and deploy with ease.",
  metadataBase: baseUrl,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Banner id="banner-id" className="grid place-items-center p-4">
            🎉 Welcome! Explore our comprehensive documentation to get started
          </Banner>
          <Background />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
