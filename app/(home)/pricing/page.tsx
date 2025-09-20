import FAQ from "./components/FAQ";
import IncludedFeatures from "./components/IncludedFeatures";
import PricingHero from "./components/PricingHero";
import SimplePricing from "./components/SimplePricing";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <SimplePricing />
      <IncludedFeatures />
      <FAQ />
    </>
  );
}
