import { FC } from "react";
import {
  Layers,
  Shield,
  Code,
  Globe,
  BarChart2,
  Briefcase,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "All Payment Methods",
    description: "Access cards, wallets, and bank payments through one API.",
  },
  {
    icon: Shield,
    title: "Advanced Fraud Protection",
    description: "Industry-leading security to protect your revenue.",
  },
  {
    icon: Code,
    title: "Developer-First APIs",
    description: "Clean, robust, and well-documented APIs and SDKs.",
  },
  {
    icon: Globe,
    title: "Global Currencies",
    description: "Accept payments in 135+ currencies from around the world.",
  },
  {
    icon: BarChart2,
    title: "Real-time Analytics",
    description: "A powerful dashboard to track sales and customer data.",
  },
  {
    icon: Briefcase,
    title: "Full Developer Sandbox",
    description: "Test your integration thoroughly before going live.",
  },
];

const IncludedFeatures: FC = () => (
  <section className="py-20 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">
        One Plan, All The Power
      </h2>
      <p className="mt-4 text-lg text-gray-400">
        Every FumaPay account gets full access to our entire platform. No
        feature-gating, no up-sells.
      </p>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group relative text-left p-6 rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:!border-green-400"
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background-image:radial-gradient(ellipse_at_center,rgba(52,211,153,0.15)_0%,transparent_70%)]" />
            <feature.icon className="h-8 w-8 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IncludedFeatures;
