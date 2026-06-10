'use client'

type Props = {
  /** overall size */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** colour scheme — 'dark' for use on dark backgrounds */
  variant?: 'default' | 'dark'
  /** show the "Hair & Beauty Lounge" line + divider */
  showTagline?: boolean
  className?: string
}

const SCRIPT_SIZE = {
  sm: 'text-3xl',
  md: 'text-4xl',
  lg: 'text-6xl',
  xl: 'text-7xl',
}

const TAGLINE_SIZE = {
  sm: 'text-[0.5rem]',
  md: 'text-[0.6rem]',
  lg: 'text-xs',
  xl: 'text-sm',
}

/**
 * So Bella Hair & Beauty Lounge — wordmark.
 * Recreated as scalable text + SVG so it stays crisp at any size.
 */
export default function SoBellaLogo({
  size = 'md',
  variant = 'default',
  showTagline = true,
  className = '',
}: Props) {
  const pink = '#e0a0be'
  const taglineColor = variant === 'dark' ? 'rgba(255,255,255,0.75)' : '#7a6f69'
  const ruleColor = variant === 'dark' ? 'rgba(255,255,255,0.35)' : 'rgba(122,111,105,0.5)'

  return (
    <div className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span
        className={`font-script ${SCRIPT_SIZE[size]} leading-none`}
        style={{ color: pink }}
      >
        So Bella
      </span>

      {showTagline && (
        <div className="flex items-center gap-2 mt-1">
          <span className="h-px w-5 sm:w-7" style={{ backgroundColor: ruleColor }} />
          <span
            className={`uppercase tracking-[0.25em] font-medium ${TAGLINE_SIZE[size]}`}
            style={{ color: taglineColor }}
          >
            Hair &amp; Beauty Lounge
          </span>
          <span className="h-px w-5 sm:w-7" style={{ backgroundColor: ruleColor }} />
        </div>
      )}
    </div>
  )
}
