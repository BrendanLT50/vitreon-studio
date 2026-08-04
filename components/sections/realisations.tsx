import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projets } from '@/lib/projets'

export function Realisations({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="realisations" className="scroll-mt-24 bg-muted/40 py-20 lg:py-28">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Réalisations"
          title="Des vitrines digitales qui produisent des résultats."
          description="Quelques exemples de projets représentatifs de notre approche, chez des artisans et des restaurateurs."
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet, index) => (
            <Reveal as="li" key={projet.slug} delay={index * 110}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_-42px_rgba(11,17,32,0.5)]">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={projet.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-7">
                  <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                    {projet.categorie}
                  </p>
                  <h3 className="font-heading text-lg leading-snug font-semibold">
                    {projet.titre}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    {projet.description}
                  </p>
                  <p className="mt-auto flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-primary">
                    <TrendingUp
                      className="size-4 text-accent"
                      aria-hidden="true"
                    />
                    {projet.resultat}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {showCta ? (
          <Reveal className="text-center">
            <Link
              href="/realisations"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-primary px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              Voir toutes nos réalisations
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
