import { Card, CardContent } from "@/components/ui/card";
import { Clock, Settings, BarChart3, FileText } from "lucide-react";

export const TimelineSection = () => {
  const steps = [
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "1️⃣ Подготовка (1 день)",
      description: "Получение доступов, настройка тестовых аккаунтов"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-success" />,
      title: "2️⃣ Активное тестирование (14 дней)",
      description: "Ежедневное использование на всех устройствах"
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "3️⃣ Анализ и отчет (1-2 дня)",
      description: "Подготовка детального отчета с рекомендациями"
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">⏰ СРОКИ И ПРОЦЕСС РАБОТЫ</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Четкий регламент работы для достижения максимального результата
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-hero text-primary-foreground">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-success" />
                <h3 className="text-xl font-bold mb-2">📅 Общий срок: 16-17 дней</h3>
                <p className="opacity-90">Включая все этапы от начала до получения отчета</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-success text-success-foreground">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🕐</div>
                <h3 className="text-xl font-bold mb-2">Отвечаем на вопросы в течение 2 часов</h3>
                <p className="opacity-90">Быстрая техническая поддержка на всех этапах</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};