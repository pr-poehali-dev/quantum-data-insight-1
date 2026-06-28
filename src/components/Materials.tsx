import { Card } from "@/components/ui/card"

const materials = [
  {
    tag: "Натуральная кожа",
    title: "Натуральная кожа класса «A»",
    thickness: "Толщина 1.2–1.5 мм",
    description:
      "Закупаем напрямую с заводов, только 1 и 2 сорт. Выдерживает более 10 000 циклов сгибания без трещин — сохраняет эластичность и текстуру на годы вперёд.",
  },
  {
    tag: "Эко-кожа",
    title: "Эко-кожа высокого класса",
    thickness: "Толщина 1.0–1.3 мм",
    description:
      "Устойчивость к истиранию свыше 30 000 циклов по стандарту Martindale. Выглядит и ощущается как натуральная кожа, при этом более доступна по цене.",
  },
  {
    tag: "Микрофибра",
    title: "Текстильная микрофибра",
    thickness: "Плотность 300–400 г/м²",
    description:
      "Мягкая структура не царапает линзы и оправы. Используем для салфеток и внутренней отделки футляров — идеальная защита для оптики.",
  },
]

export function Materials() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Наши <span className="font-semibold">материалы</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Работаем напрямую с кожевенными заводами.<br />
            50+ цветов материала на ваш выбор.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {materials.map((mat, index) => (
            <Card key={index} className="border border-border bg-card p-8 space-y-5 hover:shadow-xl transition-all duration-300">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                {mat.tag}
              </span>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold leading-snug">{mat.title}</h3>
                <p className="text-sm text-muted-foreground">{mat.thickness}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{mat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
