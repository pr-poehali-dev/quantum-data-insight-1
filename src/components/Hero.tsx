import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { ArrowRight } from "lucide-react"
import heroCases from "@/assets/hero-cases.jpg"

const stats = [
  { icon: "Award", value: "15 лет", label: "на рынке кожгалантереи" },
  { icon: "Users", value: "200+", label: "клиентов по всей России" },
  { icon: "Hand", value: "100%", label: "ручная работа" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#151210]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCases}
          alt="Кожаные футляры для очков Anzler"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#151210]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />
      </div>

      {/* Decorative lines */}
      <svg
        className="absolute right-0 bottom-0 h-2/3 w-1/2 opacity-20 pointer-events-none hidden md:block"
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

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-4 text-[#d4af7a]">
            <span className="h-px w-10 bg-[#d4af7a]/60" />
            <span className="text-xs tracking-[0.4em] uppercase">Anzler</span>
            <span className="h-px w-10 bg-[#d4af7a]/60" />
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-balance text-white">
            ANZLER
          </h1>
          <p className="text-xl md:text-2xl font-light text-[#e8d5b5] tracking-[0.2em] uppercase">
            фабрика кожаных изделий
          </p>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto text-balance leading-relaxed">
            Производим футляры для очков и кожгалантерею<br />
            под бренд вашей оптики с 2010 года
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-[#d4af7a] text-[#151210] hover:bg-[#e0c090] rounded-full px-8 h-14 text-base font-semibold group"
            >
              Получить расчёт
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base border-2 border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              Заказать образцы
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-[#d4af7a]/25 bg-white/5 backdrop-blur-sm px-5 py-4 text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d4af7a]/15 text-[#d4af7a] shrink-0">
                <Icon name={stat.icon} size={20} />
              </div>
              <div>
                <div className="text-2xl font-semibold text-white leading-none">{stat.value}</div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}