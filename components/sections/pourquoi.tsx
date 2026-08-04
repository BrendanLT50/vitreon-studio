import { HeartHandshake, MessagesSquare, PenTool, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const advantages = [
  {
    icon: PenTool,
    title: 'Design professionnel',
    description: 'Votre image mérite mieux qu’un modèle standard.',
  },
  {
    icon: Target,
    title: 'Pensé pour convertir',
    description: 'Chaque élément encourage la prise de contact.',
  },
  {
    icon: HeartHandshake,
    title: 'Adapté aux entreprises locales',
    description: 'Une approche simple et humaine.',
  },
  {
    icon: MessagesSquare,
    title: 'Sans jargon technique',
    description: 'Un accompagnement clair de A à Z.',
  },
]

export function Pourquoi() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <SectionHeading
          align="left"
          eyebrow="Pourquoi Vitréon"
          title="Plus qu’un site internet, votre meilleur commercial."
          description="Un site vitrine bien conçu travaille pour vous en continu : il rassure, il explique et il déclenche la prise de contact, même quand vous êtes sur un chantier ou en service."
          className="max-w-xl"
        />

        <ul className="grid gap-5 sm:grid-cols-2">
          {advantages.map((advantage, index) => (
            <Reveal as="li" key={advantage.title} delay={index * 90}>
              <div className="h-full rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                <advantage.icon
                  className="size-6 text-accent"
                  aria-hidden="true"
                />
                <h3 className="mt-5 font-heading text-base font-semibold">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {advantage.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
