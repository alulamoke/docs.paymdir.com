import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

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
            <div className="flex items-center gap-4">
              <Link href="/docs/core">
                <button
                  type="button"
                  className="px-4 py-2.5 font-medium bg-primary hover:bg-primary/80 hover:-translate-y-1 border border-transparent transition-all duration-300 ease-in-out text-primary-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Get Started
                </button>
              </Link>
              <a href="https://github.com/alulamoke" target="_blank">
                <button
                  type="button"
                  className="px-4 py-2.5 font-medium bg-transparent border hover:-translate-y-1 transition-all duration-300 ease-in-out border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-1"
                >
                  <GithubIcon className="size-5" />
                  GitHub
                </button>
              </a>
            </div>
          </section>
        }
      >
        <Image
          src="/banner.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </main>
  );
}
