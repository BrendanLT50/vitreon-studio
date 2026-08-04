import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

const columns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Accueil', href: '/' },
      { label: 'Réalisations', href: '/realisations' },
      { label: 'Tarifs', href: '/#offres' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Nos offres',
    links: [
      { label: 'Vitréon Artisan', href: '/artisans' },
      { label: 'Vitréon Restaurant', href: '/restaurants' },
      { label: 'Vitréon Essentiel', href: '/#offres' },
      { label: 'Vitréon Signature', href: '/#offres' },
    ],
  },
  {
    title: 'Informations',
    links: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:py-20">
        <div className="flex flex-col gap-6">
          <Image
            src="/vitreon-logo-full-light.png"
            alt="Vitréon Studio"
            width={600}
            height={473}
            className="h-24 w-auto"
          />
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Création de sites vitrines professionnels pour les artisans et les
            restaurants. Votre entreprise mérite une vitrine digitale à son
            image.
          </p>
          <ul className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-accent-soft" aria-hidden="true" />
              <a
                href="mailto:contact@vitreon-studio.fr"
                className="transition-colors hover:text-primary-foreground"
              >
                contact@vitreon-studio.fr
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-accent-soft" aria-hidden="true" />
              <a
                href="tel:+33600000000"
                className="transition-colors hover:text-primary-foreground"
              >
                06 59 44 59 16
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-accent-soft" aria-hidden="true" />
              France — accompagnement à distance
            </li>
          </ul>
        </div>

        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className="font-heading text-xs font-semibold tracking-[0.18em] text-primary-foreground/50 uppercase">
              {column.title}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-accent-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Vitréon Studio. Tous droits réservés.
          </p>
          <p>Le studio digital spécialisé dans les sites vitrines des entreprises locales.</p>
        </div>
      </div>
    </footer>
  )
}
