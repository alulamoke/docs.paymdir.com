import Link from "next/link";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-8">
      <ContainerScroll
        titleComponent={
          <section className="flex items-center text-center flex-col justify-center max-w-screen-md gap-6 px-4 mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
              PayMdir Developer Hub
            </h1>
            <p className="text-muted-foreground">
              Comprehensive API documentation, integration guides, and resources
              to help you seamlessly connect to PayMdir&apos;s powerful payment
              system. Build, test, and deploy with ease.
            </p>
            <Link
              href="/docs"
              className="hover:shadow-sm dark:border-stone-100 dark:hover:shadow-sm border-2 border-black bg-fd-primary px-4 py-1.5 text-sm uppercase text-fd-primary-foreground shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 md:px-8 dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Get Started
            </Link>
          </section>
        }
      >
        <Image
          src="/docs.png"
          alt="docs image"
          height={720}
          width={1080}
          className="rounded-2xl object-left-bottom size-full"
          priority={true}
          draggable={false}
        />
      </ContainerScroll>
    </main>
  );
}
