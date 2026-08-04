'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { label: 'Accueil', href: '/' },
  { label: 'Offre Artisan', href: '/artisans' },
  { label: 'Offre Restaurant', href: '/restaurants' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'Tarifs', href: '/#offres' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Toutes les pages démarrent par une bannière bleu nuit : tant que l'on n'a
  // pas défilé, l'en-tête doit passer en version claire pour rester lisible.
  const onDark = !scrolled && !open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        onDark
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-border/70 bg-background/85 backdrop-blur-xl',
      )}
    >
      <div className="container-x flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/vitreon-mark.png"
            alt=""
            width={90}
            height={140}
            priority
            className="h-8 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-heading text-[0.95rem] font-semibold tracking-[0.22em] uppercase transition-colors',
                onDark ? 'text-primary-foreground' : 'text-primary',
              )}
            >
              Vitréon
            </span>
            <span
              className={cn(
                'mt-1 text-[0.6rem] font-medium tracking-[0.42em] uppercase transition-colors',
                onDark
                  ? 'text-primary-foreground/60'
                  : 'text-muted-foreground',
              )}
            >
              Studio
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full',
                    onDark
                      ? 'text-primary-foreground/75 hover:text-primary-foreground'
                      : 'text-foreground/75 hover:text-primary',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-[0_10px_30px_-12px_rgba(20,184,166,0.75)] transition-all hover:bg-accent-strong focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            Diagnostic gratuit
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={cn(
            'inline-flex size-11 items-center justify-center rounded-lg border transition-colors lg:hidden',
            onDark
              ? 'border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10'
              : 'border-border bg-card text-primary hover:bg-muted',
          )}
        >
          <span className="sr-only">
            {open ? 'Fermer le menu' : 'Ouvrir le menu'}
          </span>
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Navigation mobile" className="container-x py-6">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 font-heading text-base font-medium text-primary transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground"
          >
            Obtenir mon diagnostic gratuit
          </Link>
        </nav>
      </div>
    </header>
  )
}
