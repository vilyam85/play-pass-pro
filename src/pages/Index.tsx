import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BonusesSection } from "@/components/sections/BonusesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { GuaranteesSection } from "@/components/sections/GuaranteesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { OrderInstructionsSection } from "@/components/sections/OrderInstructionsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { StickyOrderButton } from "@/components/ui/StickyOrderButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BonusesSection />
      <WhyChooseSection />
      <ExpertiseSection />
      <GuaranteesSection />
      <ReviewsSection />
      <TimelineSection />
      <OrderInstructionsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <StickyOrderButton />
    </div>
  );
};

export default Index;
