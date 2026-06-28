import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

const destinations = [
  {
    name: "Футляр Classic",
    country: "Экокожа",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/e4a0a49b-4ba1-48e1-b9e4-30e8f2566cf6.jpg",
    description: "Жёсткий футляр из экокожи с тиснением золотом",
    price: "от 150 ₽",
    button: "Рассчитать",
  },
  {
    name: "Футляр Premium",
    country: "Натуральная кожа",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/e6594fd8-b236-46e2-8c8c-a2124acf23d3.jpg",
    description: "Футляр кармашек из премиальной кожи с блинтовым тиснением",
    price: "от 300 ₽",
    button: "Рассчитать",
  },
  {
    name: "Серия Color",
    country: "",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/b60cb585-4eda-4454-92be-3906d5f41227.jpg",
    description: "Доступна линейка цветов под фирменный стиль вашей оптики",
    price: "",
    button: "Подробнее",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-balance">
            Наша <span className="font-semibold">продукция</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Футляры для очков из премиальной экокожи и натуральной кожи — с бесплатным нанесением вашего логотипа
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Location Badge */}
                {destination.country && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium">{destination.country}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{destination.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{destination.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    {destination.button}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Запросить каталог
          </Button>
        </div>
      </div>
    </section>
  )
}