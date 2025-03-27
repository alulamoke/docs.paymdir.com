import Image from "next/image";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import LOGO from "@/public/logo.png";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2 h-16 md:h-auto">
        <Image
          alt="Logo"
          src={LOGO}
          width={24}
          height={24}
          className="rounded-full object-cover size-6"
        />
        <p className="font-semibold">PayMdir</p>
      </div>
    ),
    transparentMode: "top",
  },
  links: [
    {
      text: "Docs",
      url: "/docs/core",
      active: "nested-url",
    },
    {
      text: "Showcase",
      url: "/showcase",
      active: "nested-url",
    },
    {
      text: "Blog",
      url: "/blog",
      active: "nested-url",
    },
  ],
};
