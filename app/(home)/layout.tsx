import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { Footer } from "@/components/footer";
import Section from "@/components/section";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <HomeLayout {...baseOptions}>
      <Section
        crosses
        customPaddings
        crossesOffset="lg:translate-y-[5.25rem]"
        className="h-full overflow-y-hidden"
      >
        {children}
        <Footer />
      </Section>
    </HomeLayout>
  );
}
