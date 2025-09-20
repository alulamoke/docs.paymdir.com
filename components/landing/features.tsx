import { FC } from "react";
import { Layers, Shield, Code } from "lucide-react";

const FEATURES_DATA = [
  {
    icon: Layers,
    title: "Unified Payment Methods",
    description:
      "Accept payments from all major cards, wallets, and bank accounts through a single, unified API.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "Protect your business and customers with industry-leading fraud detection and PCI-compliant infrastructure.",
  },
  {
    icon: Code,
    title: "Developer-First API",
    description:
      "Integrate in minutes with our elegant, well-documented API, client libraries, and Fuma-powered docs.",
  },
];

const Features: FC = () => (
  <section id="features" className="py-20 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        Everything You Need. Nothing You Don't.
      </h2>
      <p className="mt-4 text-lg text-gray-400">
        A complete payments toolkit, beautifully designed.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES_DATA.map((feature) => (
          <div
            key={feature.title}
            className="group relative p-8 rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:!border-green-400"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:radial-gradient(ellipse_at_center,rgba(52,211,153,0.15)_0%,transparent_80%)]" />
            <feature.icon className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
