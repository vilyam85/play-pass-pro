import { Card, CardContent } from "@/components/ui/card";
import { Code, Shield, Settings, Rocket } from "lucide-react";
export const WhyChooseSection = () => {
  const reasons = [{
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Опыт разработки",
    description: "Многолетний опыт создания мобильных приложений и понимание специфики разработки"
  }, {
    icon: <Shield className="w-12 h-12 text-success" />,
    title: "Знание требований Google",
    description: "Глубокое понимание политики и требований Google Play Store для успешной публикации"
  }, {
    icon: <Settings className="w-12 h-12 text-primary" />,
    title: "Понимание модерации",
    description: "Знание всех нюансов процесса модерации и способов избежать отклонения приложения"
  }, {
    icon: <Rocket className="w-12 h-12 text-success" />,
    title: "Помощь в публикации",
    description: "Сопровождение на всех этапах публикации приложения в Google Play Store"
  }];
  return <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему выбирают именно нас</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Профессиональный подход, основанный на практическом опыте 
            и глубоком понимании экосистемы Google Play
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{reason.title}</h3>
                <p className="text-white/80 text-sm">{reason.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};