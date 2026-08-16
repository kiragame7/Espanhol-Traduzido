'use client'

type CtaButtonProps = {
  children: React.ReactNode
  href?: string
  isOffer?: boolean
}

export function CtaButton({ children, href, isOffer }: CtaButtonProps) {
  const className =
    'group relative inline-flex w-full items-center justify-center rounded-2xl bg-success px-8 py-5 text-base font-bold uppercase tracking-wide text-success-foreground shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:bg-success/90 active:translate-y-0 sm:text-lg'

  const content = (
    <>
      {children}
      <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button type="button" onClick={isOffer ? undefined : scrollToOffer} className={className}>
      {content}
    </button>
  )
}
