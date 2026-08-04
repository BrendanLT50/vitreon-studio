import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const offers = [
  {
    name: 'Vitréon Artisan',
    text: 'Valorisez votre savoir-faire avec un site professionnel pensé pour générer des demandes de devis.',
    image: '/images/offre-artisan.png',
    alt: 'Menuisier travaillant une planche de chêne dans son atelier',
    features: [
      'Galerie de réalisations',
      'Présentation des services',
      'Avis clients',
      'Formulaire de devis',
    ],
    cta: 'Découvrir l’offre Artisan',
    href: '/artisans',
  },
  {
    name: 'Vitréon Restaurant',
    text: 'Donnez envie à vos clients avant même leur première visite.',
    image: '/images/offre-restaurant.png',
    alt: 'Salle de restaurant contemporaine dressée à la lumière du soir',
    features: [
      'Menu digital',
      'Galerie photos',
      'Réservation',
      'Présentation du lieu',
    ],
    cta: 'Découvrir l’offre Restaurant',
    href: '/restaurants',
  },
]

export function Specialisations() {
  return (
    <section id="specialisations" className="bg-muted/40 py-20 lg:py-28">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Spécialisations"
          title="Des sites conçus pour votre métier."
          description="Deux approches distinctes, parce qu’un artisan et un restaurateur ne convainquent pas leurs clients de la même façon."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {offers.map((offer, index) => (
            <Reveal as="article" key={offer.name} delay={index * 120}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_36px_80px_-45px_rgba(11,17,32,0.55)]">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent"
                  />
                  <h3 className="absolute bottom-5 left-6 font-heading text-2xl font-semibold text-primary-foreground">
                    {offer.name}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col gap-6 p-8">
                  <p className="text-base leading-relaxed text-pretty text-foreground/80">
                    {offer.text}
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {offer.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-foreground/80"
                      >
                        <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/12">
                          <Check
                            className="size-3 text-accent"
                            aria-hidden="true"
                          />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={offer.href}
                    className="mt-auto inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-primary px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                  >
                    {offer.cta}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
