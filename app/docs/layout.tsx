import type { ReactNode } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { Slot } from "@radix-ui/react-slot";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      tree={source.pageTree}
      sidebar={{
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node);
            if (!meta) return option;

            return {
              ...option,
              icon: (
                <Slot
                  className="bg-gradient-to-t from-background/80 p-1 [&_svg]:size-5"
                  style={{
                    color: `var(--${meta.file.dirname}-color)`,
                    backgroundColor: `var(--${meta.file.dirname}-color)/.3`,
                  }}
                >
                  {node.icon}
                </Slot>
              ),
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
