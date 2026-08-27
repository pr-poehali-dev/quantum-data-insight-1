import type React from "react";
import { useState } from "react";
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
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(SUBMIT_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact: phone, message }),
      });
      if (!res.ok) throw new Error("Ошибка отправки");
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в течение рабочего дня",
      });
      setName("");
      setPhone("");
      setMessage("");
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
          </form>

          <p className="text-xs text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </div>
    </section>
  );
}
