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
  title: 'Offre Artisan — Site vitrine pour artisans',
  description:
    'Valorisez votre savoir-faire avec un site professionnel pensé pour générer des demandes de devis : galerie de réalisations, présentation de services, avis clients et formulaire de devis.',
}

const metiers = [
  'Menuisiers',
  'Entreprises de rénovation',
  'Couvreurs',
  'Plombiers',
  'Électriciens',
  'Paysagistes',
  'Piscinistes',
  'Peintres',
]

const inclus = [
  {
    title: 'Galerie de réalisations',
    description:
      'Vos chantiers présentés proprement, avec avant / après, matériaux utilisés et lieu d’intervention.',
  },
  {
    title: 'Présentation des services',
    description:
      'Chaque prestation détaillée dans un langage clair, pour que le client sache exactement ce que vous faites.',
  },
  {
    title: 'Avis clients',
    description:
      'Les témoignages de vos clients mis en avant aux moments décisifs du parcours.',
  },
  {
    title: 'Formulaire de devis',
    description:
      'Un formulaire court et guidé qui vous transmet directement les informations utiles au chiffrage.',
  },
]

const besoins = [
  'Mieux présenter votre savoir-faire',
  'Obtenir plus de demandes de devis',
  'Rassurer vos futurs clients',
  'Avoir une image professionnelle',
]

export default function ArtisansPage() {
  return (
    <>
      <PageHero
        eyebrow="Vitréon Artisan"
        title="Valorisez votre savoir-faire avec un site pensé pour générer des devis."
        description="Vos clients jugent votre travail avant de vous rencontrer. Nous transformons vos chantiers en arguments visuels convaincants."
      >
        <ul className="flex flex-wrap gap-2">
          {metiers.map((metier) => (
            <li
              key={metier}
              className="rounded-full border border-primary-foreground/18 px-3.5 py-1.5 text-xs font-medium text-primary-foreground/75"
            >
              {metier}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="bg-background py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/offre-artisan.png"
                alt="Artisan menuisier travaillant une pièce de chêne dans son atelier"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Vos enjeux"
              title="Un site qui parle le langage de vos clients."
              description="Pas de vocabulaire technique, pas d’effets inutiles. Une présentation claire de ce que vous faites, pour qui, et comment vous contacter."
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
        </div>
      </section>

      <section className="bg-muted/40 py-20 lg:py-28">
        <div className="container-x flex flex-col gap-14">
          <SectionHeading
            eyebrow="Ce qui est inclus"
            title="Les quatre piliers d’un site vitrine d’artisan efficace."
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
        title="Prêt à donner à votre entreprise l’image qu’elle mérite ?"
        description="Nous analysons votre présence en ligne actuelle et vous indiquons précisément ce qui freine vos demandes de devis."
      />
    </>
  )
}
