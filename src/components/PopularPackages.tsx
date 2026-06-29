import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Star } from "lucide-react"

const packages = [
  {
    title: "Заказ образцов",
    duration: "Срок 1-3 дня",
    groupSize: "от 5 шт",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/e6594fd8-b236-46e2-8c8c-a2124acf23d3.jpg",
    highlights: ["Экокожа", "Логотип", "Доставка по РФ"],
    price: "БЕСПЛАТНО",
  },
  {
    title: "Оптовая поставка",
    duration: "Срок 7-14 дней",
    groupSize: "от 150 шт",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/e4a0a49b-4ba1-48e1-b9e4-30e8f2566cf6.jpg",
    highlights: ["Подсортировка", "Спеццена", "Логотип бесплатно"],
    price: "от 150 ₽/шт",
  },
  {
    title: "Для сетей оптики",
    duration: "Индивидуально",
    groupSize: "от 200 шт",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/b60cb585-4eda-4454-92be-3906d5f41227.jpg",
    highlights: ["Фирменный стиль", "Линейка цветов", "Бесплатная доставка по РФ", "Логотип бесплатно"],
    price: "по запросу",
  },
]

export function PopularPackages() {
  return (
    <section id="packages" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-balance">
            Условия <span className="font-semibold">сотрудничества</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Гибкие условия под любой объём — от пробной партии до поставок для сетей оптики
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />


              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Стоимость</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}