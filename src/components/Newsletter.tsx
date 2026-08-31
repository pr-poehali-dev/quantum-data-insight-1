import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SUBMIT_LEAD_URL = "https://anzler.ru/send_form.php";

export function Newsletter() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [consentGivenAt, setConsentGivenAt] = useState<string | null>(null);
  const [marketingConsentGiven, setMarketingConsentGiven] = useState(false);
  const [marketingConsentGivenAt, setMarketingConsentGivenAt] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConsentChange = (checked: boolean) => {
    setConsentGiven(checked);
    setConsentGivenAt(checked ? new Date().toISOString() : null);
  };

  const handleMarketingConsentChange = (checked: boolean) => {
    setMarketingConsentGiven(checked);
    setMarketingConsentGivenAt(checked ? new Date().toISOString() : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentGiven || !consentGivenAt) {
      toast({
        title: "Подтвердите согласие",
        description: "Отметьте согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(SUBMIT_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact: phone,
          message,
          consent_given: true,
          consent_given_at: consentGivenAt,
          marketing_consent_given: marketingConsentGiven,
          marketing_consent_given_at: marketingConsentGivenAt,
        }),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в течение рабочего дня",
      });
      setName("");
      setPhone("");
      setMessage("");
      setConsentGiven(false);
      setConsentGivenAt(null);
      setMarketingConsentGiven(false);
      setMarketingConsentGivenAt(null);
    } catch {
      toast({
        title: "Не удалось отправить заявку",
        description: "Попробуйте ещё раз или позвоните нам",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="request-form" className="py-16 bg-muted/30">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Оставьте <span className="font-semibold">заявку</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance leading-relaxed">
              Рассчитаем стоимость партии и бесплатно подготовим макет с вашим
              логотипом. Свяжемся в течение рабочего дня.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <Input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="h-12 rounded-2xl border-2 px-5"
            />
            <Input
              type="tel"
              placeholder="Телефон или email"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="h-12 rounded-2xl border-2 px-5"
            />
            <Textarea
              placeholder="Опишите задачу: объём партии, материал, пожелания по логотипу"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="rounded-2xl border-2 px-5 py-3"
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base"
            >
              {loading ? "Отправляем..." : "Отправить заявку"}
            </Button>

            <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={consentGiven}
                onChange={(e) => handleConsentChange(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-input accent-primary"
              />
              <span>
                Нажимая кнопку "Отправить заявку", я даю своё{" "}
                <Link to="/consent-policy" target="_blank" className="underline hover:text-foreground transition-colors">
                  Согласие
                </Link>{" "}
                на обработку моих персональных данных в соответствии с Федеральным законом от 27.07.2006 года № 152-ФЗ «О персональных данных» на условиях и для целей, определённых{" "}
                <Link to="/privacy-policy" target="_blank" className="underline hover:text-foreground transition-colors">
                  Политикой конфиденциальности
                </Link>
                .
              </span>
            </label>

            <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={marketingConsentGiven}
                onChange={(e) => handleMarketingConsentChange(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-input accent-primary"
              />
              <span>
                Нажимая кнопку "Отправить заявку", я даю своё согласие на получение сообщений информационного (рекламного) характера в соответствии с Федеральным законом от 13.03.2006 г № 38-ФЗ «О рекламе» на условиях и для целей, определённых{" "}
                <Link to="/privacy-policy" target="_blank" className="underline hover:text-foreground transition-colors">
                  Политикой конфиденциальности
                </Link>
                ,{" "}
                <Link to="/marketing-consent" target="_blank" className="underline hover:text-foreground transition-colors">
                  Согласием на осуществление рекламной рассылки
                </Link>
                .
              </span>
            </label>
          </form>
        </div>
      </div>
    </section>
  );
}