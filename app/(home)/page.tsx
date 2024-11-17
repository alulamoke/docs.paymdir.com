import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col gap-8 h-full">
      <section className="flex items-center text-center flex-1 flex-col justify-center max-w-screen-md gap-4 mx-auto">
        <h1 className="mb-4 text-5xl font-bold">DinarPay Developer Hub</h1>
        <p className="text-muted-foreground">
          Comprehensive API documentation, integration guides, and resources to
          help you seamlessly connect to DinarPay's powerful payment system.
          Build, test, and deploy with ease.
        </p>
        <Link href="/docs">
          <button
            type="button"
            className="px-4 py-3 font-semibold bg-primary text-sm hover:bg-primary/80 text-primary-foreground rounded focus:outline-none focus:ring-2 focus:ring-primary uppercase"
          >
            Get Started
          </button>
        </Link>
      </section>
    </main>
  );
}
