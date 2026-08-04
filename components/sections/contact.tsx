import { Clock, Mail, Phone, ShieldCheck } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const reassurance = [
  {
    icon: Clock,
    title: 'Réponse sous 24 h',
    text: 'Un échange téléphonique de 20 minutes, sans engagement.',
  },
  {
    icon: ShieldCheck,
    title: 'Diagnostic offert',
    text: 'Nous analysons votre présence en ligne actuelle et vos priorités.',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Parlons de votre projet."
            description="Décrivez-nous votre activité en quelques lignes. Nous vous répondons avec un diagnostic clair et des recommandations concrètes."
          />

          <Reveal delay={120}>
            <ul className="flex flex-col gap-5">
              {reassurance.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-heading text-sm font-semibold text-primary">
                      {item.title}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/75">
                      {item.text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-muted/50 p-6">
              <p className="font-heading text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                Vous préférez échanger directement ?
              </p>
              <a
                href="tel:+33600000000"
                className="flex items-center gap-3 text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                <Phone className="size-4 text-accent" aria-hidden="true" />
                06 00 00 00 00
              </a>
              <a
                href="mailto:contact@vitreon-studio.fr"
                className="flex items-center gap-3 text-sm font-medium text-primary transition-colors hover:text-accent"
              >
                <Mail className="size-4 text-accent" aria-hidden="true" />
                contact@vitreon-studio.fr
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
