import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, Star, Shield, Copy, Smartphone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const PricingSection = () => {
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const { toast } = useToast();

  const copyPhoneNumber = async () => {
    const phoneNumber = "+79019504450";
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast({
        title: "Номер скопирован",
        description: "Номер телефона скопирован в буфер обмена",
      });
    } catch (err) {
      toast({
        title: "Ошибка копирования",
        description: "Не удалось скопировать номер телефона",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">💰 СТОИМОСТЬ УСЛУГ</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите удобный способ заказа с разными уровнями защиты
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Direct Order */}
          <Card className="relative border-success border-2 bg-gradient-to-br from-success/5 to-success/10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold">
                🔥 ВЫГОДНО
              </div>
            </div>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-success mb-2">3 200₽</div>
                <div className="text-lg font-semibold">Заказ напрямую</div>
                <div className="text-sm text-muted-foreground">Экономия 300₽!</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span>✅ Скидка за прямое сотрудничество</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span>✅ Оплата СБП самозанятому</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span>✅ Наши расширенные гарантии</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  <span>✅ Прямая техподдержка</span>
                </li>
              </ul>
              
              <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-success hover:bg-success/90 text-success-foreground text-lg py-3">
                    Заказать напрямую за 3200₽
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold">
                      Оплата услуг тестирования
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* СБП Logo/Icon */}
                    <div className="flex justify-center">
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-lg flex items-center gap-2">
                        <Smartphone className="w-6 h-6" />
                        СБП
                      </div>
                    </div>
                    
                    {/* Phone Number */}
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">Номер телефона для перевода:</p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-bold text-primary">+79019504450</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={copyPhoneNumber}
                          className="p-2"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Amount */}
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Сумма к оплате:</p>
                      <div className="text-3xl font-bold text-success">3 200 ₽</div>
                    </div>
                    
                    {/* Instructions */}
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-center">
                        В назначении платежа укажите:
                      </p>
                      <p className="text-center font-bold text-primary mt-1">
                        "оплата услуг тестирования"
                      </p>
                    </div>
                    
                    {/* Close Button */}
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setIsPaymentDialogOpen(false)}
                    >
                      Закрыть
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          
          {/* Kwork Order */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">3 500₽</div>
                <div className="text-lg font-semibold">Через Kwork</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <Shield className="w-4 h-4" />
                  Защита платформы
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>✅ Защита сделки платформой</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>✅ Возможность оставить отзыв</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>✅ Правила платформы Kwork</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Проверенный исполнитель</span>
                </li>
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full text-lg py-3"
                onClick={() => window.open('https://kwork.ru/mobile-apps/43916279/zakrytoe-testirovanie-google-play-ot-mobile-razrabotchika', '_blank')}
              >
                Заказать через Kwork за 3500₽
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
            💡 Экономия 300₽ при заказе напрямую!
          </div>
        </div>
      </div>
    </section>
  );
};