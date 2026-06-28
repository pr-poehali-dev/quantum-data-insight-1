import { Card } from "@/components/ui/card"

const benefits = [
  { icon: "👁", title: "Узнаваемость и лояльность" },
  { icon: "⭐", title: "Премиум-позиция на рынке" },
  { icon: "❤️", title: "Эмоциональная связь с клиентом" },
  { icon: "🏆", title: "Уникальное конкурентное преимущество" },
]

const stampings = [
  {
    symbol: "✦",
    type: "Горячее тиснение",
    subtitle: "Фольгированное тиснение",
    description:
      "Яркий блестящий эффект — для премиум-дизайнов и брендов, которые хотят выделяться. Золото, серебро, цветная фольга. Подчёркивает статус бренда.",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/b5c0ca2e-5324-48ad-9753-d697ad028379.jpg",
  },
  {
    symbol: "◻",
    type: "Блинтовое тиснение",
    subtitle: "Слепое тиснение",
    description:
      "Стильный минимализм и ощущение премиальности за счёт рельефа. Идеально сочетается с натуральной кожей, подчёркивая её фактуру.",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/ddbb9452-23b5-4f84-843d-298882eef741.jpg",
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="text-center space-y-3 p-6 rounded-2xl bg-background border border-border">
              <div className="text-4xl">{b.icon}</div>
              <p className="text-sm font-medium leading-snug">{b.title}</p>
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
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{s.subtitle}</p>
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