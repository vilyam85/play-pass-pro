import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneReveal } from "@/components/ui/PhoneReveal";
import { Mail, MessageCircle, Phone } from "lucide-react";
export const CTASection = () => {
  return <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Готовы пройти модерацию Google Play?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами для заказа профессионального тестирования
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-success hover:bg-success/90 text-success-foreground shadow-success text-lg px-8 py-4">
              Написать в Telegram
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-4"
              onClick={() => window.location.href = 'mailto:mobileapptest@yandex.ru?subject=Вопрос по тестированию приложений'}
            >
              Задать вопрос
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-success" />
                <h3 className="font-semibold mb-2 text-white">Email</h3>
                <p className="text-white/80 text-sm">mobileapptest@yandex.ru</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 mx-auto mb-3 text-success" />
                <h3 className="font-semibold mb-2 text-white">Telegram</h3>
                <p className="text-white/80 text-sm">@mobileapptg</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-success" />
                <h3 className="font-semibold mb-2 text-white">WhatsApp</h3>
                <PhoneReveal phone="+79014541501" className="text-white/80 text-sm justify-center" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};