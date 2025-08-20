import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const OrderInstructionsSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "1",
      title: "Создать закрытое тестирование",
      description: "Настройте закрытое тестирование в Google Play Console для вашего приложения"
    },
    {
      number: "2", 
      title: "Получить предварительное одобрение",
      description: "Убедитесь, что сборка прошла предварительную проверку Google"
    },
    {
      number: "3",
      title: "Добавить email-адреса",
      description: "Добавьте предоставленные нами тестовые email-адреса в список тестировщиков"
    },
    {
      number: "4",
      title: "Проверить доступность",
      description: "Убедитесь, что приложение доступно для скачивания в регионе тестирования"
    },
    {
      number: "5",
      title: "Отправить на проверку",
      description: "Отправьте изменения на финальную проверку Google Play"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-primary text-primary">
            Инструкция для заказа
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Что нужно для заказа услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Простой пошаговый процесс подготовки приложения к тестированию
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="ml-14">
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="bg-gradient-success text-success-foreground inline-block">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">После заказа</h3>
                <p className="mb-4">Вы получите ссылку на тестирование в личном сообщении</p>
                <Button 
                  size="lg" 
                  onClick={scrollToPricing}
                  className="bg-white text-success hover:bg-white/90 shadow-lg"
                >
                  Заказать сейчас
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};