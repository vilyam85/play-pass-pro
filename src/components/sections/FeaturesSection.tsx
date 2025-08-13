import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Shield, Users, Clock } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "14 реальных устройств",
      description: "Android 11-15, современные модели 2022-2025 годов от разных производителей"
    },
    {
      icon: <Shield className="w-8 h-8 text-success" />,
      title: "Разные диагонали экранов",
      description: "Тестирование на устройствах различных размеров и разрешений экранов"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "14 Google-аккаунтов",
      description: "Уникальные аккаунты с IP-адресами из Казахстана для естественного тестирования"
    },
    {
      icon: <Clock className="w-8 h-8 text-success" />,
      title: "Ежедневное использование",
      description: "Запуск приложения каждый день в течение 14 дней для имитации реального использования"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Преимущества нашего тестирования
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы используем только реальные устройства и настоящие аккаунты для максимально 
            естественного процесса тестирования
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg-custom transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};