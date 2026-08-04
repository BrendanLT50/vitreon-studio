import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBand({
  title = 'Votre entreprise mérite une vitrine digitale à son image.',
  description = 'Obtenez un diagnostic gratuit de votre présence en ligne et découvrez ce qu’un site bien conçu peut changer pour votre activité.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-background pb-20 lg:pb-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center sm:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/50"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="font-heading text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-4xl">
                {title}
              </h2>
              <p className="text-base leading-relaxed text-pretty text-primary-foreground/70">
                {description}
              </p>
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-strong focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Obtenir mon diagnostic gratuit
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
