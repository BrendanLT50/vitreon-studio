import type { Metadata } from 'next'
import { LegalContent } from '@/components/legal-content'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Vitréon Studio.',
  robots: { index: false },
}

const sections = [
  {
    title: 'Éditeur du site',
    paragraphs: [
      'Vitréon Studio — studio de création de sites vitrines pour artisans et restaurants.',
      'Adresse électronique : contact@vitreon-studio.fr — Téléphone : 06 59 44 59 16.',
      'Les informations d’immatriculation (SIREN, forme juridique, capital, TVA intracommunautaire) sont à compléter avant la mise en ligne définitive du site.',
    ],
  },
  {
    title: 'Responsable de la publication',
    paragraphs: [
      'Le responsable de la publication est le représentant légal de Vitréon Studio, joignable à l’adresse contact@vitreon-studio.fr.',
    ],
  },
  {
    title: 'Hébergement',
    paragraphs: [
      'Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.',
    ],
  },
  {
    title: 'Propriété intellectuelle',
    paragraphs: [
      'L’ensemble des contenus présents sur ce site (textes, identité visuelle, logo, illustrations, mise en page et code) est protégé par le droit de la propriété intellectuelle et demeure la propriété de Vitréon Studio, sauf mention contraire.',
      'Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.',
    ],
  },
  {
    title: 'Limitation de responsabilité',
    paragraphs: [
      'Les informations publiées sur ce site sont fournies à titre indicatif. Vitréon Studio s’efforce de les maintenir exactes et à jour, sans garantir l’absence d’erreurs ou d’omissions.',
      'Les exemples de projets et les témoignages présentés sur ce site sont des illustrations de notre approche et ne constituent pas un engagement de résultat.',
    ],
  },
  {
    title: 'Droit applicable',
    paragraphs: [
      'Le présent site est soumis au droit français. En cas de litige, les tribunaux français sont seuls compétents.',
    ],
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations"
        title="Mentions légales"
        description="Informations légales relatives à l’édition et à l’exploitation du site vitreon-studio.fr."
      />
      <LegalContent sections={sections} />
    </>
  )
}
