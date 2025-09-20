import { FC } from "react";
import Link from "next/link";

const CTA: FC = () => (
  <section className="py-20 sm:py-32">
    <div className="max-w-4xl mx-auto text-center px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white">
        Ready to Elevate Your Payments?
      </h2>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Create an account and start integrating in minutes. Join hundreds of
        businesses building the future of commerce.
      </p>
      <Link
        href="https://dashboard.paymdir.com/auth/signup"
        target="_blank"
        className="inline-block mt-8 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
      >
        Start Building Now
      </Link>
    </div>
  </section>
);

export default CTA;
