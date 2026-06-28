import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Newsletter() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Заявка:", { name, phone, message })
    setName("")
    setPhone("")
    setMessage("")
  }

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
              Оставьте <span className="font-semibold">заявку</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-balance leading-relaxed">
              Рассчитаем стоимость партии и бесплатно подготовим макет с вашим логотипом. Свяжемся в течение рабочего дня.
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
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base"
            >
              Отправить заявку
            </Button>
          </form>

          <p className="text-xs text-muted-foreground">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </div>
    </section>
  )
}