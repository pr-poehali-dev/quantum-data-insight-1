export function Production() {
  const stats = [
    { value: "2010", label: "год основания" },
    { value: "10+", label: "специалистов\nстаж от 35 лет" },
    { value: "500", label: "футляров в день\nмаксимальная мощность" },
    { value: "15+", label: "машин и станков\nсовременное оборудование" },
  ]

  return (
    <section className="py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-balance">
            Производство{" "}
            <span className="font-semibold">в Пензе</span>
          </h2>
          <p className="text-lg text-background/70 leading-relaxed">
            Anzler — российская фабрика полного цикла.<br />
            Всё производится у нас — от раскроя кожи до упаковки готового изделия.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-10 border-b border-background/20">
          {stats.map((s, i) => (
            <div key={i} className="space-y-3">
              <div className="text-5xl md:text-6xl font-light">{s.value}</div>
              <p className="text-sm text-background/60 leading-snug whitespace-pre-line">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="mt-10 text-lg text-background/70 leading-relaxed max-w-2xl">
          Наши мастера работают в отрасли более 35 лет.
          Мы контролируем каждый этап — от выбора материала
          до финальной проверки качества перед отгрузкой.
        </p>
      </div>
    </section>
  )
}