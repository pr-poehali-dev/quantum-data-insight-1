import { Card } from "@/components/ui/card"
import { Eye, Star, Heart, Trophy } from "lucide-react"
import stampingHot from "@/assets/stamping-hot.jpg"
import stampingBlind from "@/assets/stamping-blind.jpg"

const benefits = [
  { icon: Eye, title: "Узнаваемость и лояльность" },
  { icon: Star, title: "Премиум-позиция на рынке" },
  { icon: Heart, title: "Эмоциональная связь с клиентом" },
  { icon: Trophy, title: "Уникальное конкурентное преимущество" },
]

const stampings = [
  {
    symbol: "✦",
    type: "Горячее тиснение",
    subtitle: "",
    description:
      "Стильный минимализм и ощущение премиальности за счёт рельефа. Идеально сочетается с премиальной экокожей, подчёркивая её фактуру.",
    image: stampingBlind,
  },
  {
    symbol: "◻",
    type: "Фольгированное тиснение",
    subtitle: "",
    description:
      "Яркий блестящий эффект — для премиум-дизайнов и брендов, которые хотят выделяться. Золото, серебро, цветная фольга. Подчёркивает статус бренда.",
    image: stampingHot,
  },
]

export function Branding() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-balance">
            Брендирование — это{" "}
            <span className="font-semibold">не просто логотип</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Это мощный инструмент роста продаж<br />
            и укрепления позиций на рынке
          </p>
        </div>

        {/* 4 иконки */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-background border border-border">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary shrink-0">
                <b.icon className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium leading-snug text-left">{b.title}</p>
            </div>
          ))}
        </div>

        {/* 2 карточки тиснения */}
        <div className="grid md:grid-cols-2 gap-8">
          {stampings.map((s, i) => (
            <Card key={i} className="overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.type}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold text-lg">{s.symbol}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{s.type}</h3>
                    {s.subtitle && <p className="text-xs text-muted-foreground uppercase tracking-widest">{s.subtitle}</p>}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}