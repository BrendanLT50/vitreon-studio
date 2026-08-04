import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    number: '01',
    title: 'Analyse',
    description: 'Comprendre votre activité et vos objectifs.',
  },
  {
    number: '02',
    title: 'Conception',
    description: 'Créer une identité digitale adaptée à votre entreprise.',
  },
  {
    number: '03',
    title: 'Développement',
    description: 'Construire un site rapide, moderne et responsive.',
  },
  {
    number: '04',
    title: 'Mise en ligne',
    description: 'Vous accompagner jusqu’à la publication.',
  },
]

export function Methode() {
  return (
    <section id="methode" className="bg-primary py-20 lg:py-28">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Notre méthode"
          tone="dark"
          title="Un accompagnement simple et transparent."
          description="Quatre étapes claires, sans surprise, du premier échange jusqu’à la mise en ligne de votre site."
        />

        <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <li
            aria-hidden="true"
            className="pointer-events-none absolute top-6 right-0 left-0 hidden h-px bg-primary-foreground/12 lg:block"
          />
          {steps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 110}>
              <div className="relative flex flex-col gap-4">
                <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary font-heading text-sm font-semibold text-accent-soft">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl font-semibold text-primary-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
