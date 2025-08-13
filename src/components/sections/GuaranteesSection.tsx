import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Calendar, Headphones, RotateCcw } from "lucide-react";

export const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: <Smartphone className="w-8 h-8 text-success" />,
      title: "14 реальных установок",
      description: "Гарантируем установку на 14 физических устройствах без использования эмуляторов"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Строгое соблюдение 14-дневного периода",
      description: "Точное выполнение временных рамок тестирования согласно требованиям Google"
    },
    {
      icon: <Headphones className="w-8 h-8 text-success" />,
      title: "Техническая поддержка",
      description: "Полная поддержка и ответы на вопросы на протяжении всего процесса тестирования"
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-primary" />,
      title: "Переустановка при необходимости",
      description: "Бесплатная переустановка приложения в случае технических проблем"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Гарантии качества
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Наши обязательства перед вами
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предоставляем железные гарантии качества услуг и полную 
            ответственность за результат тестирования
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="border-2 border-success/20 hover:border-success/40 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-success/10 rounded-lg">
                    {guarantee.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{guarantee.title}</h3>
                    <p className="text-muted-foreground">{guarantee.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Card className="inline-block bg-success/5 border-success/30">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-success mb-2">Фиксированная стоимость</h3>
              <p className="text-muted-foreground">Без скрытых платежей и дополнительных комиссий</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};