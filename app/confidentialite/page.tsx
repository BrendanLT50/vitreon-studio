import type { Metadata } from 'next'
import { LegalContent } from '@/components/legal-content'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et traitement des données personnelles sur le site Vitréon Studio.',
  robots: { index: false },
}

const sections = [
  {
    title: 'Données collectées',
    paragraphs: [
      'Le formulaire de contact du site collecte les données suivantes : nom, entreprise, adresse email, numéro de téléphone, secteur d’activité et contenu de votre message.',
      'Ces informations sont strictement nécessaires au traitement de votre demande de diagnostic ou de devis.',
    ],
  },
  {
    title: 'Finalité du traitement',
    paragraphs: [
      'Vos données sont utilisées uniquement pour répondre à votre demande, préparer un diagnostic de votre présence en ligne et, le cas échéant, établir une proposition commerciale.',
      'Aucune donnée n’est vendue, louée ou transmise à des tiers à des fins publicitaires.',
    ],
  },
  {
    title: 'Durée de conservation',
    paragraphs: [
      'Les demandes reçues sont conservées pendant une durée maximale de trois ans à compter du dernier contact, puis supprimées.',
    ],
  },
  {
    title: 'Vos droits',
    paragraphs: [
      'Conformément au Règlement général sur la protection des données (RGPD), vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition au traitement de vos données.',
      'Pour exercer ces droits, écrivez à contact@vitreon-studio.fr. Une réponse vous sera apportée dans un délai maximum d’un mois.',
    ],
  },
  {
    title: 'Cookies et mesure d’audience',
    paragraphs: [
      'Ce site n’utilise pas de cookies publicitaires ni de traceurs à des fins de profilage.',
      'Une mesure d’audience anonymisée peut être utilisée pour connaître le nombre de visites et les pages consultées, sans identification individuelle.',
    ],
  },
  {
    title: 'Sécurité',
    paragraphs: [
      'Les échanges avec le site sont chiffrés (HTTPS). Les données transmises via le formulaire sont accessibles uniquement aux personnes en charge du traitement des demandes.',
    ],
  },
]

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Informations"
        title="Politique de confidentialité"
        description="Comment nous collectons, utilisons et protégeons vos données personnelles."
      />
      <LegalContent sections={sections} />
    </>
  )
}
