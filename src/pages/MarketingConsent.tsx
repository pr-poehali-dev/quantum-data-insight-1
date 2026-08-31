import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function MarketingConsent() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Вернуться на главную
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Согласие на получение информационных и рекламных рассылок
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-foreground/90 mt-10">
          <section className="space-y-3">
            <p>
              Настоящим я (далее – Пользователь), в соответствии с частью 1 статьи 18 Федерального закона от 13.03.2006 № 38-ФЗ «О рекламе» и частью 1 статьи 44.1 Федерального закона от 07.07.2003 № 126-ФЗ «О связи», действуя добровольно и добросовестно, даю свое согласие на получение информационных и рекламных рассылок (далее по тексту – Согласие) от Индивидуального Предпринимателя Никулина Константина Вячеславовича, ОГРНИП 326580000037720, ИНН 583409736520, г. Пенза.
            </p>
            <p>
              Под информационными рассылками понимаются сообщения, которые предоставляют полезную информацию, новости, обновления. Под рекламными рассылками понимаются сообщения о товарах, услугах, акциях и специальных предложениях.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              Пользователь соглашается с тем, что реклама может распространяться посредством:
            </h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>СМС-сообщений;</li>
              <li>сообщений в мессенджерах;</li>
              <li>push-уведомления;</li>
              <li>телефонных звонков;</li>
              <li>сообщений по электронной почте.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              Пользователь подтверждает, что владеет информацией о том, что в любой момент вправе отозвать согласие путем:
            </h2>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>направления уведомления на электронную почту sales1@anzler.ru;</li>
              <li>нажатия на ссылку «Отписаться» в любой полученной рассылке.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <p>
              Цель предоставления персональных данных: направление субъекту рекламной информации (в том числе, в форме рекламной и иной информационной рассылки).
            </p>
            <p>
              Согласие действует с даты его предоставления до момента отказа от получения рассылки Пользователем.
            </p>
            <p>
              Пользователь информирован, что в случае отзыва данного согласия ИП Никулин К.В. прекратит направлять Пользователю информационные и рекламные рассылки немедленно с момента получения отзыва.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
