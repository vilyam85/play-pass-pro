import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, FileText, HelpCircle } from "lucide-react";

export const BonusesSection = () => {
  const bonuses = [
    {
      icon: <CheckCircle className="w-6 h-6 text-success" />,
      title: "Проверка корректности запуска",
      description: "Тестируем все основные функции приложения на предмет корректной работы"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-destructive" />,
      title: "Отчет о критических ошибках",
      description: "Подробный отчет с описанием найденных проблем и рекомендациями по исправлению"
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Детальный отчет о тестировании",
      description: "Полный отчет с результатами тестирования на всех устройствах и аккаунтах"
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-accent" />,
      title: "Базовая консультация",
      description: "Помощь и консультация по вопросам Google Play Console и публикации приложений"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Бонусы от разработчика
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Дополнительные услуги, которые помогут вам успешно пройти модерацию 
            и избежать распространенных ошибок
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border-2 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  {bonus.icon}
                  {bonus.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{bonus.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};