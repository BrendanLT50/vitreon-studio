import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Contact } from '@/components/sections/contact'
import { Methode } from '@/components/sections/methode'

export const metadata: Metadata = {
  title: 'Contact — Demandez votre diagnostic gratuit',
  description:
    'Parlons de votre projet de site vitrine. Décrivez votre activité et recevez un diagnostic gratuit de votre présence en ligne sous 24 heures.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Un échange simple, sans engagement, pour comprendre votre activité et vous dire honnêtement ce qui peut être amélioré."
      />
      <Contact />
      <Methode />
    </>
  )
}
