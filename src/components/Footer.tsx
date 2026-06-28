import { Instagram, Send, Phone, Mail, MapPin } from "lucide-react"

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
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
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
                <a href="#contact" className="hover:text-foreground transition-colors">
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
                <a href="tel:+70000000000" className="hover:text-foreground transition-colors">
                  +7 (000) 000-00-00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@anzler.ru" className="hover:text-foreground transition-colors">
                  info@anzler.ru
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
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>2025 Anzler. Фабрика кожаных изделий. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}