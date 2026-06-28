import { Card } from "@/components/ui/card"

const materials = [
  {
    tag: "Натуральная кожа",
    title: "Натуральная кожа класса «A»",
    thickness: "Толщина 1.2–1.5 мм",
    description:
      "Закупаем напрямую с заводов, только 1 и 2 сорт. Выдерживает более 10 000 циклов сгибания без трещин — сохраняет эластичность и текстуру на годы вперёд.",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/4f54d999-958c-4726-8717-dbf48686f9b4.jpg",
  },
  {
    tag: "Эко-кожа",
    title: "Эко-кожа высокого класса",
    thickness: "Толщина 1.0–1.3 мм",
    description:
      "Устойчивость к истиранию свыше 30 000 циклов по стандарту Martindale. Выглядит и ощущается как натуральная кожа, при этом более доступна по цене.",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/70854732-a552-4491-8834-7443bca0672b.jpg",
  },
  {
    tag: "Микрофибра",
    title: "Текстильная микрофибра",
    thickness: "Плотность 300–400 г/м²",
    description:
      "Мягкая структура не царапает линзы и оправы. Используем для салфеток и внутренней отделки футляров — идеальная защита для оптики.",
    image: "https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/3a3c1572-6496-4bbb-86ce-5befd4f97073.jpg",
  },
]

export function Materials() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-balance">
            Наши <span className="font-semibold">материалы</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Работаем напрямую с кожевенными заводами. 50+ цветов на ваш выбор.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((mat, index) => (
            <Card key={index} className="overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={mat.image}
                  alt={mat.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {mat.tag}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold leading-snug">{mat.title}</h3>
                  <p className="text-sm text-muted-foreground">{mat.thickness}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{mat.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}