import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Avis } from '@/components/sections/avis'
import { CtaBand } from '@/components/sections/cta-band'
import { Realisations } from '@/components/sections/realisations'

export const metadata: Metadata = {
  title: 'Réalisations — Sites vitrines artisans et restaurants',
  description:
    'Découvrez des exemples de sites vitrines conçus par Vitréon Studio pour des artisans et des restaurateurs, et les résultats obtenus.',
}

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Des projets qui transforment un savoir-faire en présence digitale."
        description="Chaque projet démarre par une analyse du métier, du territoire et des attentes des clients. Voici comment cela se traduit concrètement."
      />
      <Realisations showCta={false} />
      <Avis />
      <CtaBand />
    </>
  )
}
