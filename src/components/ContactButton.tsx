import { ArrowUpRight } from 'lucide-react'

export type ContactButtonProps = {
  label: string
  href: string
  className?: string
}

export default function ContactButton({ label, href, className = '' }: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full border border-white px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink outline outline-2 -outline-offset-[5px] outline-white/50 shadow-[inset_0_2px_10px_rgba(255,255,255,0.55),inset_0_-6px_14px_rgba(58,44,40,0.35)] transition-transform duration-300 hover:-translate-y-0.5 sm:px-7 sm:py-3.5 sm:text-sm ${className}`}
      style={{ background: 'var(--cta-gradient)' }}
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
    </a>
  )
}
