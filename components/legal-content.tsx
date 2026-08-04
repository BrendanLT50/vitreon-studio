export function LegalContent({
  sections,
}: {
  sections: { title: string; paragraphs: string[] }[]
}) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container-x flex max-w-3xl flex-col gap-10">
        {sections.map((section) => (
          <article key={section.title} className="flex flex-col gap-3">
            <h2 className="font-heading text-xl font-semibold">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 30)}
                className="text-sm leading-relaxed text-pretty text-foreground/80"
              >
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  )
}
