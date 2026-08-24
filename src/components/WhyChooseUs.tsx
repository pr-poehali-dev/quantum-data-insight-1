import { Stamp, Truck, Boxes, Award } from "lucide-react"
import whychooseBg from "@/assets/whychoose-bg.jpg"

const features = [
  {
    icon: Stamp,
    title: "Логотип бесплатно",
    description: <>Наносим логотип вашей оптики <span className="text-[#d4af7a]">бесплатно</span> — повышаем узнаваемость бренда и возвращаем клиентов к вам</>,
  },
  {
    icon: Truck,
    title: "От 7 дней",
    description: <>Изготовление и отправка от 7 дней. Доставка по всей России — <span className="text-[#d4af7a]">бесплатно</span></>,
  },
  {
    icon: Boxes,
    title: "От 100 штук",
    description: <>Минимальная партия от 100 шт (в ассортименте) — легко делать оперативную подсортировку под спрос</>,
  },
  {
    icon: Award,
    title: "От 157 ₽ за штуку",
    description: <>Достойная цена российского производства. Каждый футляр проходит через руки мастеров с 2010 года</>,
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="relative py-20 bg-[#1a1614] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={whychooseBg}
          alt="Кожгалантерея Anzler"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614]/80 via-[#1a1614]/70 to-[#1a1614]" />
      </div>

      {/* Decorative lines */}
      <svg
        className="absolute left-0 top-0 h-2/3 w-1/2 opacity-20 pointer-events-none hidden md:block -scale-x-100"
        viewBox="0 0 600 500"
        fill="none"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <path
            key={i}
            d={`M ${650 - i * 22} 500 Q ${450 - i * 10} ${300 - i * 15} ${520 - i * 5} 0`}
            stroke="#d4af7a"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 text-[#d4af7a] mb-4">
            <span className="h-px w-10 bg-[#d4af7a]/50" />
            <span className="text-xs font-light tracking-[0.4em] uppercase">Преимущества</span>
            <span className="h-px w-10 bg-[#d4af7a]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-4 text-balance text-white">
            Почему выбирают <span className="text-[#e8d5b5]">Anzler</span>
          </h2>
          <p className="text-base md:text-lg font-light text-white/55 text-balance leading-relaxed">
            Российское производство кожаных футляров для оптики с понятными преимуществами для оптовиков и сетей оптик
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#d4af7a]/30 text-[#d4af7a] mb-2">
                <feature.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-normal text-white">{feature.title}</h3>
              <p className="text-sm font-light text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}