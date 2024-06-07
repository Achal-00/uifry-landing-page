import React from "react";
import LandingSection from "./components/LandingSection/LandingSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import AdvantageSection from "./components/AdvantageSection/AdvantageSection";
import CustomizableSection from "./components/CustomizableSection/CustomizableSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import FAQSection from "./components/FAQSection/FAQSection";
import QuickSection from "./components/QuickSection/QuickSection";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <LandingSection />
      <FeatureSection />
      <AdvantageSection />
      <CustomizableSection />
      <TestimonialSection />
      <FAQSection />
      <QuickSection />
    </div>
  );
}
