import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vitreon-studio.fr'),
  title: {
    default: 'Vitréon Studio — Sites vitrines pour artisans et restaurants',
    template: '%s | Vitréon Studio',
  },
  description:
    'Vitréon Studio crée des sites vitrines modernes pour les artisans et les restaurants qui souhaitent renforcer leur image et attirer davantage de clients.',
  keywords: [
    'site vitrine artisan',
    'site internet restaurant',
    'création site web artisan',
    'agence digitale locale',
    'Vitréon Studio',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Vitréon Studio',
    title: 'Votre entreprise mérite une vitrine digitale à son image.',
    description:
      'Studio digital spécialisé dans les sites vitrines des entreprises locales : artisans et restaurants.',
    images: ['/images/hero-showcase.png'],
  },
  icons: {
    icon: '/vitreon-mark.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b1120',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`bg-background ${inter.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
