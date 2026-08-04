import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex max-w-3xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            'inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase',
            tone === 'dark' ? 'text-accent-soft' : 'text-accent',
          )}
        >
          <span
            className={cn(
              'h-px w-6',
              tone === 'dark' ? 'bg-accent-soft/60' : 'bg-accent/60',
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={cn(
          'text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl lg:text-[2.75rem]',
          tone === 'dark' && 'text-primary-foreground',
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'text-base leading-relaxed text-pretty sm:text-lg',
            tone === 'dark' ? 'text-primary-foreground/70' : 'text-foreground/80',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
