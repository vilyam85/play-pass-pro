import { Card, CardContent } from "@/components/ui/card";
import { Award, Smartphone, Target, Users, Trophy } from "lucide-react";

export const ExpertiseSection = () => {
  const expertise = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      text: "5+ лет опыта разработки мобильных приложений"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-success" />,
      text: "Десятки успешно опубликованных приложений в Google Play"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      text: "Глубокое знание требований и алгоритмов модерации"
    },
    {
      icon: <Users className="w-8 h-8 text-success" />,
      text: "Понимание специфики разных категорий приложений"
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      text: "Опыт решения сложных случаев модерации"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">📱 НАША ЭКСПЕРТИЗА</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Многолетний опыт и глубокие знания в области мобильной разработки 
            и модерации Google Play
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-muted/50 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-medium">✓ {item.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-gradient-success text-success-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Результат нашей экспертизы</h3>
                <p className="text-lg opacity-90">
                  Высокий процент успешного прохождения модерации с первого раза 
                  благодаря глубокому пониманию требований Google Play
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};