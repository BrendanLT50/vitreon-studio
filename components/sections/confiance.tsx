import { Camera, LayoutTemplate, MousePointerClick } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: Camera,
    title: 'Image professionnelle',
    description:
      'Des photos, des textes et une mise en page qui donnent immédiatement confiance à vos futurs clients.',
  },
  {
    icon: LayoutTemplate,
    title: 'Design moderne',
    description:
      'Une esthétique actuelle et sobre, conçue pour votre métier plutôt que pour un modèle générique.',
  },
  {
    icon: MousePointerClick,
    title: 'Expérience optimisée',
    description:
      'Une navigation claire sur mobile comme sur ordinateur, où l’information essentielle est toujours accessible.',
  },
]

export function Confiance() {
  return (
    <section className="border-b border-border bg-background py-20 lg:py-28">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Première impression"
          title="Votre site est souvent le premier contact avec vos futurs clients."
          description="Aujourd’hui, vos prospects recherchent votre entreprise en ligne avant de vous contacter. Votre site doit refléter la qualité de votre travail."
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={index * 100}>
              <div className="group h-full rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_28px_60px_-38px_rgba(11,17,32,0.5)]">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <pillar.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-lg font-semibold">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
