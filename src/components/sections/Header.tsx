import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
export const Header = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Smartphone className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">MobileAppTest</span>
          </div>
          
          <Button onClick={scrollToPricing} className="bg-success hover:bg-success/90 text-success-foreground">
            Заказать тестирование
          </Button>
        </div>
      </div>
    </header>;
};