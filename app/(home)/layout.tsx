import type { ReactNode } from "react";

import Footer from "@/components/footer";
import Section from "@/components/section";
import Navbar from "@/components/landing/navbar";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <Section
      crosses
      customPaddings
      crossesOffset="lg:translate-y-[5.25rem]"
      className="h-max"
    >
      <Navbar />
      {children}
      <Footer />
    </Section>
  );
}
