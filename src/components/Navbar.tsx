import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-semibold tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              Anzler
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 justify-self-center">
            <a
              href="#destinations"
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
            >
              Продукция
            </a>
            <a href="#about" className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}>
              О нас
            </a>
            <a
              href="#packages"
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
            >
              Условия
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"}`}
            >
              Контакты
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex justify-end">
            <Button
              asChild
              className={`rounded-full px-6 transition-colors ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-[#d4af7a] text-[#151210] hover:bg-[#e0c090]"
              }`}
            >
              <a href="#request-form">Оставить заявку</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden justify-self-end p-2 ${isScrolled ? "text-foreground" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <a href="#destinations" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Продукция
            </a>
            <a href="#about" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              О нас
            </a>
            <a href="#packages" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Условия
            </a>
            <a href="#contact" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Контакты
            </a>
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              <a href="#request-form" onClick={() => setIsMobileMenuOpen(false)}>Оставить заявку</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}