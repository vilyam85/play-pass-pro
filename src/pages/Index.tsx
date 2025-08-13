import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BonusesSection } from "@/components/sections/BonusesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { OrderInstructionsSection } from "@/components/sections/OrderInstructionsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BonusesSection />
      <WhyChooseSection />
      <GuaranteesSection />
      <OrderInstructionsSection />
      <CTASection />
    </div>
  );
};

export default Index;
