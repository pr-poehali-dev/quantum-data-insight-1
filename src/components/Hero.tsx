import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { ArrowRight } from "lucide-react"
import heroCases from "@/assets/hero-cases.jpg"

const stats = [
  { icon: "Award", value: "2010", label: "год основания фабрики" },
  { icon: "Users", value: "200+", label: "клиентов по всей России" },
  { icon: "Hand", value: "100%", label: "ручная работа" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1614]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCases}
          alt="Кожаные футляры для очков Anzler"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-[#1a1614]/95" />
      </div>

      {/* Decorative lines */}
      <svg
        className="absolute right-0 bottom-0 h-2/3 w-1/2 opacity-25 pointer-events-none hidden md:block"
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
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4 text-[#d4af7a]">
            <span className="h-px w-10 bg-[#d4af7a]/50" />
            <span className="text-xs font-light tracking-[0.4em] uppercase">Since 2010</span>
            <span className="h-px w-10 bg-[#d4af7a]/50" />
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.05em] text-balance text-white">
            ANZLER
          </h1>
          <p className="text-lg md:text-xl font-extralight text-[#e8d5b5] tracking-[0.35em] uppercase">
            фабрика кожаных изделий
          </p>

          <p className="text-base md:text-lg font-light text-white/55 max-w-2xl mx-auto text-balance leading-relaxed">
            Производим футляры для очков и кожгалантерею,<br />
            вкладывая мастерство в каждую деталь
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#d4af7a] text-[#1a1614] hover:bg-[#e0c090] rounded-full px-8 h-14 text-base font-normal group"
            >
              <a href="#request-form">
                Получить расчёт
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base font-normal border border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white"
            >
              <a href="#request-form">Заказать образцы</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-16 max-w-3xl mx-auto mt-16 pt-10 border-t border-[#d4af7a]/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon name={stat.icon} size={18} className="text-[#d4af7a]/80 mb-1" />
              <div className="text-3xl md:text-4xl font-extralight text-white">{stat.value}</div>
              <div className="text-xs font-light text-white/45 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}