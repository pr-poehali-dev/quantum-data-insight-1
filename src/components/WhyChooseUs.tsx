import { Stamp, Truck, Boxes, Award } from "lucide-react"

const features = [
  {
    icon: Stamp,
    title: "Логотип бесплатно",
    description: <>Наносим логотип вашей оптики <span className="font-semibold text-primary">бесплатно</span> — повышаем узнаваемость бренда и возвращаем клиентов к вам</>,
  },
  {
    icon: Truck,
    title: "От 7 дней",
    description: <>Изготовление и отправка от 7 дней. Доставка по всей России — <span className="font-semibold text-primary">бесплатно</span></>,
  },
  {
    icon: Boxes,
    title: "От 50 штук",
    description: <>Минимальная партия от 50 шт — легко делать оперативную подсортировку под спрос</>,
  },
  {
    icon: Award,
    title: "От 150 ₽ за штуку",
    description: <>Достойная цена российского производства. Каждый футляр проходит через руки мастеров с 2010 года</>,
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-balance">
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