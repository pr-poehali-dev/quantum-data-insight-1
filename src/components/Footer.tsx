import { Instagram, Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Anzler</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Фабрика кожаных изделий. Производим футляры для очков и кожгалантерею своими руками в Пензе с 2010 года.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/anzler" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
              </a>
              <a href="https://max.ru/id583409736520_biz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#destinations" className="hover:text-foreground transition-colors">
                  Продукция
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-foreground transition-colors">
                  Условия сотрудничества
                </a>
              </li>
              <li>
                <a href="#request-form" className="hover:text-foreground transition-colors">
                  Оставить заявку
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+79933985090" className="hover:text-foreground transition-colors">
                  +7 (993) 398-50-90
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:sales1@anzler.ru" className="hover:text-foreground transition-colors">
                  sales1@anzler.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>г. Пенза, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-sm text-muted-foreground">
          <p>Anzler. Фабрика кожаных изделий. Все права защищены.</p>
          <span className="hidden sm:inline">·</span>
          <Link to="/privacy-policy" className="underline hover:text-foreground transition-colors">
            Политика обработки персональных данных
          </Link>
          <span className="hidden sm:inline">·</span>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
            className="underline hover:text-foreground transition-colors"
          >
            Настройки cookie
          </button>
        </div>
      </div>
    </footer>
  )
}