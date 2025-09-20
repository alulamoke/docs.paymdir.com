import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface ShowcaseProps {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
  reverse?: boolean;
}

const Showcase: FC<ShowcaseProps> = ({
  tag,
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink,
  reverse = false,
}) => (
  <section className="py-20 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={clsx("grid grid-cols-1 md:grid-cols-2 gap-12 items-center")}
      >
        <div
          className={clsx("text-center md:text-left", {
            "md:order-last": reverse,
          })}
        >
          <span className="text-green-400 font-semibold uppercase">{tag}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-400">{description}</p>
          {ctaText && ctaLink && (
            <Link
              href={ctaLink}
              target="_blank"
              className="inline-flex items-center gap-2 mt-6 text-lg font-semibold text-green-400 hover:text-green-300 transition-colors"
            >
              {ctaText} <ArrowRight size={20} />
            </Link>
          )}
        </div>
        <div className={clsx("relative", { "md:order-first": reverse })}>
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-green-400 to-teal-500 opacity-20 blur-2xl" />
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={600}
            className="relative rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Showcase;
