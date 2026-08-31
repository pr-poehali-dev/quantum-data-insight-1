import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { getCookieConsent, setCookieConsent } from "@/lib/cookieConsent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [analyticsChecked, setAnalyticsChecked] = useState(true)

  useEffect(() => {
    if (!getCookieConsent()) {
      setVisible(true)
    }
    const openSettings = () => {
      setShowSettings(true)
      setAnalyticsChecked(getCookieConsent()?.analytics ?? true)
      setVisible(true)
    }
    window.addEventListener("open-cookie-settings", openSettings)
    return () => window.removeEventListener("open-cookie-settings", openSettings)
  }, [])

  const acceptAll = () => {
    setCookieConsent(true)
    setVisible(false)
  }

  const acceptNecessaryOnly = () => {
    setCookieConsent(false)
    setVisible(false)
  }

  const saveSettings = () => {
    setCookieConsent(analyticsChecked)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background shadow-xl p-5 sm:p-6 space-y-4">
        {!showSettings ? (
          <>
            <p className="text-sm text-foreground/90 leading-relaxed">
              Мы используем файлы cookie, чтобы сайт работал корректно и мы могли улучшать его на основе аналитики. Необходимые cookie включены всегда. Подробнее — в{" "}
              <Link to="/privacy-policy" target="_blank" className="underline hover:text-foreground transition-colors">
                Политике обработки персональных данных
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={acceptAll} className="rounded-full flex-1">
                Принять все
              </Button>
              <Button onClick={acceptNecessaryOnly} variant="outline" className="rounded-full flex-1">
                Только необходимые
              </Button>
              <Button onClick={() => setShowSettings(true)} variant="ghost" className="rounded-full flex-1">
                Настроить
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-3">
              <label className="flex items-start gap-3 text-sm cursor-not-allowed opacity-70">
                <input type="checkbox" checked disabled className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-input" />
                <span>
                  <span className="font-medium text-foreground">Необходимые cookie</span>
                  <br />
                  Обеспечивают базовую работу сайта. Всегда включены, отключить нельзя.
                </span>
              </label>
              <label className="flex items-start gap-3 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsChecked}
                  onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-2 border-input accent-primary"
                />
                <span>
                  <span className="font-medium text-foreground">Аналитические cookie</span>
                  <br />
                  Помогают понять, как посетители используют сайт, чтобы мы могли его улучшать.
                </span>
              </label>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={saveSettings} className="rounded-full flex-1">
                Сохранить выбор
              </Button>
              <Button onClick={() => setShowSettings(false)} variant="ghost" className="rounded-full flex-1">
                Назад
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}