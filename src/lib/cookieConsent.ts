export type CookieCategory = "necessary" | "analytics";

export interface CookieConsentState {
  necessary: true;
  analytics: boolean;
  decidedAt: string;
}

const STORAGE_KEY = "cookie-consent";

export function getCookieConsent(): CookieConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics === "boolean" && typeof parsed?.decidedAt === "string") {
      return { necessary: true, analytics: parsed.analytics, decidedAt: parsed.decidedAt };
    }
    return null;
  } catch {
    return null;
  }
}

export function setCookieConsent(analytics: boolean): CookieConsentState {
  const state: CookieConsentState = {
    necessary: true,
    analytics,
    decidedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: state }));
  return state;
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent()?.analytics === true;
}

/**
 * Загружает внешний скрипт (например, счётчик аналитики) только если
 * пользователь дал согласие на аналитические cookie. Используйте эту
 * функцию вместо прямой вставки <script> для любых аналитических/рекламных
 * интеграций, чтобы соблюдать выбор пользователя из cookie-баннера.
 */
export function loadScriptIfConsented(category: CookieCategory, src: string, attrs?: Record<string, string>) {
  if (category === "analytics" && !hasAnalyticsConsent()) return;
  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value));
  }
  document.head.appendChild(script);
}
