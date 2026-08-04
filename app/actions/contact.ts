'use server'

import { Resend } from 'resend'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Record<string, string>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function envoyerDemande(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const nom = String(formData.get('nom') ?? '').trim()
  const entreprise = String(formData.get('entreprise') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const telephone = String(formData.get('telephone') ?? '').trim()
  const secteur = String(formData.get('secteur') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: Record<string, string> = {}

  if (nom.length < 2) errors.nom = 'Merci d’indiquer votre nom.'
  if (entreprise.length < 2) errors.entreprise = 'Merci d’indiquer votre entreprise.'
  if (!EMAIL_RE.test(email)) errors.email = 'Adresse email invalide.'
  if (telephone.replace(/[^\d]/g, '').length < 9)
    errors.telephone = 'Numéro de téléphone invalide.'
  if (!secteur) errors.secteur = 'Merci de choisir un secteur d’activité.'
  if (message.length < 10)
    errors.message = 'Décrivez votre projet en quelques mots (10 caractères minimum).'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Certains champs doivent être corrigés.',
      errors,
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  console.log("Clé Resend présente :", !!process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'brendanletallec@gmail.com',
      replyTo: email,
      subject: `Nouvelle demande Vitréon Studio - ${entreprise}`,
      html: `
        <h2>Nouvelle demande de diagnostic</h2>

        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Entreprise :</strong> ${entreprise}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Secteur :</strong> ${secteur}</p>

        <h3>Message :</h3>
        <p>${message}</p>
      `,
    })

    return {
      status: 'success',
      message:
        'Merci ! Votre demande est bien reçue. Nous revenons vers vous sous 24 heures ouvrées avec votre diagnostic.',
    }
  } catch (error) {
    console.error(error)

    return {
      status: 'error',
      message:
        'Une erreur est survenue lors de l’envoi. Merci de réessayer.',
    }
  }
}