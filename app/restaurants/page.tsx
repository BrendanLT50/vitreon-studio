import type { Metadata } from 'next'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/sections/cta-band'
import { Methode } from '@/components/sections/methode'
import { Offres } from '@/components/sections/offres'

export const metadata: Metadata = {
  title: 'Offre Restaurant — Site vitrine pour restaurants',
  description:
    'Donnez envie à vos clients avant même leur première visite : menu digital, galerie photos, réservation et présentation du lieu.',
}

const etablissements = [
  'Restaurants traditionnels',
  'Restaurants gastronomiques',
  'Bistronomie',
  'Hôtels-restaurants',
]

const inclus = [
  {
    title: 'Menu digital',
    description:
      'Une carte lisible sur mobile, facile à mettre à jour au fil des saisons et des suggestions du jour.',
  },
  {
    title: 'Galerie photos',
    description:
      'Vos plats et votre salle mis en scène, dans une présentation qui donne envie de réserver.',
  },
  {
    title: 'Réservation',
    description:
      'Un bouton de réservation accessible partout, relié à votre outil ou directement à votre téléphone.',
  },
  {
    title: 'Présentation du lieu',
    description:
      'Votre histoire, votre équipe et votre univers : ce qui fait qu’on choisit votre table plutôt qu’une autre.',
  },
]

const besoins = [
  'Donner envie avant une réservation',
  'Présenter votre cuisine',
  'Valoriser votre univers',
  'Faciliter les prises de contact',
]

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Vitréon Restaurant"
        title="Donnez envie à vos clients avant même leur première visite."
        description="Le choix d’une table se fait en ligne, souvent en moins d’une minute. Votre site doit transmettre l’atmosphère de votre établissement immédiatement."
      >
        <ul className="flex flex-wrap gap-2">
          {etablissements.map((item) => (
            <li
              key={item}
              className="rounded-full border border-primary-foreground/18 px-3.5 py-1.5 text-xs font-medium text-primary-foreground/75"
            >
              {item}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Vos enjeux"
              title="Transmettre votre univers en quelques secondes."
              description="Photographies soignées, carte accessible et réservation évidente : trois éléments qui transforment un visiteur curieux en client attablé."
            />
            <Reveal delay={120}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {besoins.map((besoin) => (
                  <li
                    key={besoin}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-relaxed text-foreground/80"
                  >
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/12">
                      <Check className="size-3 text-accent" aria-hidden="true" />
                    </span>
                    {besoin}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/offre-restaurant.png"
                alt="Salle de restaurant contemporaine dressée à la lumière du soir"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-x flex flex-col gap-14">
          <SectionHeading
            eyebrow="Ce qui est inclus"
            title="Tout ce qu’un client cherche avant de réserver."
          />
          <ul className="grid gap-6 md:grid-cols-2">
            {inclus.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 100}>
                <div className="h-full rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                  <h3 className="font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Methode />
      <Offres />
      <CtaBand
        title="Faisons de votre site la meilleure invitation à votre table."
        description="Nous étudions votre présence en ligne et vous proposons un plan concret pour augmenter vos réservations."
      />
    </>
  )
}
