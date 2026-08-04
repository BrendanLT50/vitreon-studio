import { Reveal } from '@/components/reveal'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--primary-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--primary-foreground) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="container-x relative flex max-w-3xl flex-col gap-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-accent-soft uppercase">
            <span className="h-px w-6 bg-accent-soft/60" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-heading text-4xl leading-[1.1] font-semibold text-balance text-primary-foreground sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={160}>
            <p className="text-base leading-relaxed text-pretty text-primary-foreground/70 sm:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={240}>{children}</Reveal> : null}
      </div>
    </section>
  )
}
