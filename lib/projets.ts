export type Projet = {
  slug: string
  titre: string
  categorie: string
  image: string
  alt: string
  resultat: string
  description: string
}

export const projets: Projet[] = [
  {
    slug: 'renovation-premium',
    titre: 'Entreprise de rénovation premium',
    categorie: 'Artisan · Rénovation',
    image: '/images/projet-renovation.png',
    alt: 'Séjour rénové dans une maison en pierre avec poutres apparentes',
    resultat: '+42% de demandes de devis en 3 mois',
    description:
      'Refonte complète avec une galerie avant / après, des fiches chantier détaillées et un parcours de demande de devis simplifié en deux étapes.',
  },
  {
    slug: 'restaurant-gastronomique',
    titre: 'Restaurant gastronomique',
    categorie: 'Restauration · Gastronomie',
    image: '/images/projet-gastronomique.png',
    alt: 'Assiette gastronomique dressée sur une céramique sombre',
    resultat: '2× plus de réservations en ligne',
    description:
      'Univers visuel immersif, menu digital mis à jour par le chef et réservation accessible depuis chaque page du site.',
  },
  {
    slug: 'menuiserie-artisanale',
    titre: 'Menuiserie artisanale',
    categorie: 'Artisan · Menuiserie',
    image: '/images/projet-menuiserie.png',
    alt: 'Escalier et bibliothèque sur mesure en chêne dans un intérieur clair',
    resultat: '1re page Google sur 6 requêtes locales',
    description:
      'Mise en valeur des pièces sur mesure, présentation du savoir-faire atelier et optimisation SEO locale sur la zone d’intervention.',
  },
]
