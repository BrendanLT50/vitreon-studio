import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const testimonials = [
  {
    quote:
      'Notre nouveau site reflète enfin la qualité de nos réalisations. Nos clients arrivent déjà convaincus au premier rendez-vous.',
    author: 'Julien M.',
    role: 'Gérant · Entreprise de rénovation',
  },
  {
    quote:
      'Nos clients comprennent mieux notre univers avant même de venir. Les réservations en ligne ont nettement progressé.',
    author: 'Camille R.',
    role: 'Restauratrice · Bistronomie',
  },
]

export function Avis() {
  return (
    <section className="bg-muted/40 py-20 lg:py-28">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Avis clients"
          title="Ce que nos clients en retiennent."
        />

        <ul className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal as="li" key={item.author} delay={index * 120}>
              <figure className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-9">
                <Quote className="size-8 text-accent/35" aria-hidden="true" />
                <blockquote className="font-heading text-lg leading-relaxed text-pretty text-primary sm:text-xl">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-6">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground"
                  >
                    {item.author.charAt(0)}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-heading text-sm font-semibold text-primary">
                      {item.author}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
