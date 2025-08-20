import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";

export const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">🌟 ОТЗЫВЫ И ПРИМЕРЫ РАБОТ</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Посмотрите отзывы довольных клиентов и примеры наших детальных отчетов 
            на нашей странице в Kwork
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Высокие оценки клиентов</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Наши клиенты оценивают качество работы на 5 звезд. 
                Детальные отчеты, профессиональный подход и своевременное выполнение.
              </p>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Смотреть отзывы и примеры →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};