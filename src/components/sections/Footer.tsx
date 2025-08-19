import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">📋 Правовая информация:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    • Договор публичной оферты
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    • Политика конфиденциальности
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    • Реквизиты ИП/самозанятого
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 Email: mobileapptest@yandex.ru</p>
                <p>📱 Telegram: @apptestpro</p>
                <p>📞 WhatsApp: +7 XXX XXX XX XX</p>
              </div>
            </div>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Важно:</strong> При заказе через Kwork действуют правила платформы Kwork
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 AppTestPro. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};