import Link from 'next/link'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const plans = [
  {
    name: 'Vitréon Essentiel',
    price: '990€',
    summary: 'L’essentiel pour exister en ligne avec une image soignée.',
    features: [
      'Site jusqu’à 3 pages',
      'Design professionnel',
      'Version mobile',
      'Formulaire de contact',
    ],
    featured: false,
  },
  {
    name: 'Vitréon Business',
    price: '1490€',
    summary: 'Le meilleur équilibre entre image, visibilité et conversion.',
    badge: 'Le plus choisi',
    features: [
      'Site jusqu’à 5 pages',
      'Design personnalisé',
      'Galerie photos',
      'SEO de base',
      'Google Maps',
      'Formulaire de contact',
    ],
    featured: true,
  },
  {
    name: 'Vitréon Signature',
    price: '2490€',
    summary: 'Une vitrine sur mesure pour les entreprises qui veulent se démarquer.',
    features: [
      'Site sur mesure',
      'Animations',
      'Fonctionnalités avancées',
      'Accompagnement personnalisé',
    ],
    featured: false,
  },
]

export function Offres() {
  return (
    <section id="offres" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          eyebrow="Nos offres"
          title="Un tarif clair, annoncé dès le départ."
          description="Trois formules pensées pour les entreprises locales. Pas d’abonnement obligatoire, pas de coût caché."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal as="article" key={plan.name} delay={index * 110}>
              <div
                className={cn(
                  'flex h-full flex-col rounded-2xl border p-8 transition-all duration-300',
                  plan.featured
                    ? 'border-accent/50 bg-primary text-primary-foreground shadow-[0_40px_90px_-45px_rgba(11,17,32,0.7)] lg:-translate-y-3'
                    : 'border-border bg-card hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_28px_60px_-40px_rgba(11,17,32,0.45)]',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className={cn(
                      'font-heading text-lg font-semibold',
                      plan.featured && 'text-primary-foreground',
                    )}
                  >
                    {plan.name}
                  </h3>
                  {plan.badge ? (
                    <span className="rounded-full bg-accent px-3 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-accent-foreground uppercase">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>

                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed',
                    plan.featured
                      ? 'text-primary-foreground/70'
                      : 'text-foreground/75',
                  )}
                >
                  {plan.summary}
                </p>

                <p className="mt-7 flex items-baseline gap-2">
                  <span
                    className={cn(
                      'font-heading text-4xl font-semibold',
                      plan.featured ? 'text-primary-foreground' : 'text-primary',
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      'text-xs',
                      plan.featured
                        ? 'text-primary-foreground/55'
                        : 'text-muted-foreground',
                    )}
                  >
                    à partir de / projet
                  </span>
                </p>

                <hr
                  className={cn(
                    'mt-7',
                    plan.featured
                      ? 'border-primary-foreground/12'
                      : 'border-border',
                  )}
                />

                <ul className="mt-7 flex flex-1 flex-col gap-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        'flex items-start gap-3 text-sm leading-relaxed',
                        plan.featured
                          ? 'text-primary-foreground/80'
                          : 'text-foreground/80',
                      )}
                    >
                      <span
                        className={cn(
                          'mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full',
                          plan.featured ? 'bg-accent/25' : 'bg-accent/12',
                        )}
                      >
                        <Check
                          className={cn(
                            'size-3',
                            plan.featured ? 'text-accent-soft' : 'text-accent',
                          )}
                          aria-hidden="true"
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    'mt-8 inline-flex h-12 w-full items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                    plan.featured
                      ? 'bg-accent text-accent-foreground hover:bg-accent-strong'
                      : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
                  )}
                >
                  Demander un devis
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <p className="text-sm text-muted-foreground">
            Hébergement, nom de domaine et maintenance disponibles en option à
            partir de 29€ / mois.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
