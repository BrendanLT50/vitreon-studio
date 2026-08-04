import { Avis } from '@/components/sections/avis'
import { Confiance } from '@/components/sections/confiance'
import { Contact } from '@/components/sections/contact'
import { Hero } from '@/components/sections/hero'
import { Methode } from '@/components/sections/methode'
import { Offres } from '@/components/sections/offres'
import { Pourquoi } from '@/components/sections/pourquoi'
import { Realisations } from '@/components/sections/realisations'
import { Specialisations } from '@/components/sections/specialisations'

export default function Page() {
  return (
    <>
      <Hero />
      <Confiance />
      <Specialisations />
      <Methode />
      <Offres />
      <Realisations />
      <Pourquoi />
      <Avis />
      <Contact />
    </>
  )
}
