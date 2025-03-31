import Link from "next/link";
import Section from "@/components/section";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="h-full overflow-hidden">
      <Section
        crosses
        customPaddings
        crossesOffset="lg:translate-y-[5.25rem]"
        className="h-full overflow-y-hidden"
      >
        <div className="flex flex-col h-full items-center justify-center dark:bg-black bg-white text-black dark:text-white">
          <h1 className="text-5xl sm:text-6xl">404</h1>
          <p className="text-sm mb-8">Need help? Visit the docs</p>
          <div className="flex flex-col items-center gap-6">
            <Link
              href="/docs"
              className="hover:shadow-sm dark:border-stone-100 dark:hover:shadow-sm border-2 border-black bg-fd-primary px-4 py-1.5 text-sm uppercase text-fd-primary-foreground shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 md:px-8 dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Go to docs
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
