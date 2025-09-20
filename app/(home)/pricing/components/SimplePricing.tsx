import { FC } from "react";
import Link from "next/link";
import { Check, Building, Globe } from "lucide-react";

const SimplePricing: FC = () => (
  <section className="py-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Frosted Glass Container */}
      <div className="relative p-8 rounded-3xl border border-white/10 bg-gray-800/50 backdrop-blur-lg shadow-2xl">
        <div className="absolute top-0 left-0 -inset-0.5  rounded-3xl blur opacity-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-white/10">
          {/* Domestic Pricing */}
          <div className="pb-8 md:pb-0 md:pr-8">
            <div className="flex items-center gap-3">
              <Building className="h-8 w-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">Domestic</h3>
            </div>
            <p className="mt-2 text-gray-400">
              For payments within your country.
            </p>
            <p className="mt-6">
              <span className="text-7xl font-extrabold text-green-400">2%</span>
              <span className="text-lg font-medium text-gray-400">
                {" "}
                / transaction
              </span>
            </p>
          </div>

          {/* International Pricing */}
          <div className="pt-8 md:pt-0 md:pl-8">
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-sky-400" />
              <h3 className="text-2xl font-bold text-white">International</h3>
            </div>
            <p className="mt-2 text-gray-400">For payments across borders.</p>
            <p className="mt-6">
              <span className="text-7xl font-extrabold text-green-400">1%</span>
              <span className="text-lg font-medium text-gray-400">
                {" "}
                / transaction
              </span>
            </p>
          </div>
        </div>

        {/* Divider and Included Features */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-xl font-semibold text-white text-center">
            Everything you need is included
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            {[
              "No Monthly Fees",
              "All Payment Methods",
              "Developer Sandbox",
              "Advanced Security",
              "Real-time Analytics",
              "Global Currencies",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="https://dashboard.paymdir.com/auth/signup"
            target="_blank"
            className="inline-block bg-green-400 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
          >
            Start Accepting Payments
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default SimplePricing;
