'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { envoyerDemande, type ContactState } from '@/app/actions/contact'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle', message: '' }

const secteurs = [
  'Menuiserie',
  'Rénovation',
  'Couverture',
  'Plomberie',
  'Électricité',
  'Paysagisme',
  'Piscine',
  'Peinture',
  'Restaurant traditionnel',
  'Restaurant gastronomique',
  'Bistronomie',
  'Hôtel-restaurant',
  'Autre activité',
]

const fieldClass =
  'h-12 w-full rounded-lg border border-border bg-card px-4 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none'

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-heading text-xs font-semibold tracking-[0.08em] text-primary uppercase"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-strong focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          Envoi en cours…
        </>
      ) : (
        <>
          Demander mon diagnostic gratuit
          <Send className="size-4" aria-hidden="true" />
        </>
      )}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(envoyerDemande, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent/40 bg-card p-10 text-center">
        <CheckCircle2 className="size-10 text-accent" aria-hidden="true" />
        <h3 className="font-heading text-xl font-semibold">Demande envoyée</h3>
        <p className="max-w-md text-sm leading-relaxed text-foreground/75">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nom" label="Nom" error={state.errors?.nom}>
          <input
            id="nom"
            name="nom"
            type="text"
            autoComplete="name"
            required
            placeholder="Jean Dupont"
            className={cn(fieldClass, state.errors?.nom && 'border-destructive')}
          />
        </Field>

        <Field
          id="entreprise"
          label="Entreprise"
          error={state.errors?.entreprise}
        >
          <input
            id="entreprise"
            name="entreprise"
            type="text"
            autoComplete="organization"
            required
            placeholder="Dupont Menuiserie"
            className={cn(
              fieldClass,
              state.errors?.entreprise && 'border-destructive',
            )}
          />
        </Field>

        <Field id="email" label="Email" error={state.errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="contact@votre-entreprise.fr"
            className={cn(
              fieldClass,
              state.errors?.email && 'border-destructive',
            )}
          />
        </Field>

        <Field id="telephone" label="Téléphone" error={state.errors?.telephone}>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="06 12 34 56 78"
            className={cn(
              fieldClass,
              state.errors?.telephone && 'border-destructive',
            )}
          />
        </Field>
      </div>

      <Field id="secteur" label="Secteur d’activité" error={state.errors?.secteur}>
        <select
          id="secteur"
          name="secteur"
          required
          defaultValue=""
          className={cn(
            fieldClass,
            'appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10',
            state.errors?.secteur && 'border-destructive',
          )}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Choisissez votre activité
          </option>
          {secteurs.map((secteur) => (
            <option key={secteur} value={secteur}>
              {secteur}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message" error={state.errors?.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Parlez-nous de votre activité, de vos objectifs et de votre site actuel s’il en existe un."
          className="w-full resize-y rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none"
        />
      </Field>

      {state.status === 'error' && !state.errors ? (
        <p className="text-sm text-destructive" role="alert">
          {state.message}
        </p>
      ) : null}

      <SubmitButton />

      <p className="text-xs leading-relaxed text-muted-foreground">
        Vos informations sont utilisées uniquement pour vous répondre. Aucune
        donnée n’est transmise à un tiers.
      </p>
    </form>
  )
}
