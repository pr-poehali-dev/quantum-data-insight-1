import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/71574c78-1c5e-4c6b-8896-b4ec8c8bb0e2/files/b60cb585-4eda-4454-92be-3906d5f41227.jpg"
          alt="Кожаные футляры для очков Anzler"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-balance">
            ANZLER
          </h1>
          <p className="text-2xl md:text-3xl font-light text-foreground/80 tracking-wide">
            фабрика кожаных изделий
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Производим футляры для очков и кожгалантерею<br />
            под бренд вашей оптики с 2010 года
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
            >
              Получить расчёт
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 bg-transparent">
              Заказать образцы
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-12 pt-10 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">15 лет</div>
            <div className="text-sm text-muted-foreground">На рынке кожгалантереи</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">120+</div>
            <div className="text-sm text-muted-foreground">Партнёров по всей России</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">100%</div>
            <div className="text-sm text-muted-foreground">Ручная работа</div>
          </div>
        </div>
      </div>
    </section>
  )
}