import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const proofPoints = [
  'Livraison en 3 semaines',
  'Sans jargon technique',
  'Accompagnement jusqu’à la mise en ligne',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--primary-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--primary-foreground) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="flex flex-col items-start gap-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium tracking-[0.14em] text-accent-soft uppercase">
              Artisans &amp; Restaurants
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-heading text-4xl leading-[1.08] font-semibold text-balance text-primary-foreground sm:text-5xl lg:text-[3.4rem]">
              Votre activité mérite une vitrine digitale professionnelle.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-base leading-relaxed text-pretty text-primary-foreground/70 sm:text-lg">
              Vitréon Studio crée des sites vitrines modernes pour les artisans
              et restaurants qui souhaitent renforcer leur image et attirer
              davantage de clients.
            </p>
          </Reveal>

          <Reveal delay={240} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-[0_18px_45px_-18px_rgba(20,184,166,0.9)] transition-all hover:bg-accent-strong focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Obtenir mon diagnostic gratuit
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/realisations"
                className="inline-flex h-13 items-center justify-center rounded-lg border border-primary-foreground/25 px-6 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/50 hover:bg-primary-foreground/5 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Découvrir nos réalisations
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320} className="w-full">
            <ul className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {proofPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-primary-foreground/65"
                >
                  <Check className="size-4 text-accent-soft" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/12 bg-primary-foreground/[0.04] p-2 shadow-[0_50px_120px_-45px_rgba(0,0,0,0.8)]">
            <Image
              src="/images/hero-showcase.png"
              alt="Site vitrine Vitréon Studio affiché sur un ordinateur portable et un smartphone dans un atelier lumineux"
              width={1200}
              height={900}
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-border bg-card px-5 py-4 shadow-[0_24px_60px_-30px_rgba(11,17,32,0.55)] sm:block">
            <p className="font-heading text-2xl font-semibold text-primary">
              +38%
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              de demandes entrantes
              <br />
              après refonte
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
