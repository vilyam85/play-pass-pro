import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqItems = [
    {
      question: "Гарантируете ли вы прохождение модерации?",
      answer: "Мы гарантируем качественное тестирование согласно требованиям Google. Окончательное решение принимает модерация Google, но наш опыт значительно повышает шансы на успех."
    },
    {
      question: "Что если приложение не пройдет модерацию?",
      answer: "Предоставляем детальный отчет с рекомендациями по исправлению. При заказе напрямую - дополнительная консультация бесплатно."
    },
    {
      question: "Сколько времени занимает тестирование?",
      answer: "14 дней активного тестирования + 1-2 дня на подготовку отчета."
    },
    {
      question: "Можно ли получить отчет раньше?",
      answer: "Нет, 14-дневный период - требование Google для корректной статистики."
    },
    {
      question: "Тестируете ли игры?",
      answer: "Да, тестируем приложения всех категорий, включая игры."
    },
    {
      question: "Какие устройства используются для тестирования?",
      answer: "14 реальных Android-устройств с версиями 11-15, современные модели 2022-2025 годов разных производителей и диагоналей экранов."
    },
    {
      question: "Как происходит оплата?",
      answer: "При заказе напрямую - оплата СБП самозанятому. При заказе через Kwork - по правилам платформы с защитой сделки."
    },
    {
      question: "Предоставляете ли техническую поддержку?",
      answer: "Да, предоставляем техническую поддержку и отвечаем на вопросы в течение 2 часов."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">❓ ЧАСТЫЕ ВОПРОСЫ</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о наших услугах тестирования
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  В: {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  О: {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};