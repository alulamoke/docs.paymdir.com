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
            <div className="flex items-center justify-between gap-4">
              <Link href="/docs/core">
                <button
                  type="button"
                  className="px-4 py-2.5 font-medium bg-fd-primary hover:bg-fd-primary/80 hover:-translate-y-1 border border-transparent transition-all duration-300 ease-in-out text-fd-primary-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-fd-primary"
                >
                  Get Started
                </button>
              </Link>
              <Link href="https://github.com/PayMdir" target="_blank">
                <button
                  type="button"
                  className="px-4 py-2.5 font-medium bg-transparent hover:opacity-80 hover:-translate-y-1 border border-gray-300 transition-all duration-300 ease-in-out rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  GitHub
                </button>
              </Link>
            </div>
          </section>
        }
      >
        <Image
          src="/banner.png"
          alt="banner image"
          height={720}
          width={1080}
          className="mx-auto rounded-2xl object-fill size-full"
          priority={true}
          draggable={false}
        />
      </ContainerScroll>
    </main>
  );
}
