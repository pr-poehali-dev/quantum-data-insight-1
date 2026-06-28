import { Stamp, Truck, Boxes, Award } from "lucide-react"

const features = [
  {
    icon: Stamp,
    title: "Логотип бесплатно",
    description: "Наносим логотип вашей оптики бесплатно — повышаем узнаваемость бренда и возвращаем клиентов к вам",
  },
  {
    icon: Truck,
    title: "Быстрая логистика",
    description: "Производим и отправляем по всей России оперативно — без долгого ожидания поставок из Китая",
  },
  {
    icon: Boxes,
    title: "Небольшая партия",
    description: "Минимальная партия невелика — легко делать оперативную подсортировку под спрос",
  },
  {
    icon: Award,
    title: "Качество с 2010 года",
    description: "Каждый футляр проходит через руки мастеров. Среди клиентов — премиальный бренд очков GRESSO",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">Anzler</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Российское производство кожаных футляров для оптики с понятными преимуществами для оптовиков и сетей оптики
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}