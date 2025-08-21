import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-testing.jpg";

export const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    timelineSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Профессиональное тестирование мобильных приложений"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Гарантированное прохождение модерации 
            <span className="block text-success">Google Play Console</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Профессиональное тестирование на 14 реальных Android-устройствах. 
            Соответствие новым требованиям Google Play. Без эмуляторов и виртуальных машин.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToPricing}
              className="bg-success hover:bg-success/90 text-success-foreground shadow-success text-lg px-8 py-4"
            >
              Заказать тестирование
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToTimeline}
              className="border-white text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-4"
            >
              Узнать подробности
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-success">14</div>
              <div className="text-sm">реальных устройств</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-success">100%</div>
              <div className="text-sm">гарантия установки</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-success">14</div>
              <div className="text-sm">дней тестирования</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};