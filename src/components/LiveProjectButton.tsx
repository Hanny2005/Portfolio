import { ArrowUpRight } from 'lucide-react'

export type LiveProjectButtonProps = {
  href?: string
  label?: string
}

export default function LiveProjectButton({ href, label = 'Xem dự án' }: LiveProjectButtonProps) {
  if (!href) {
    return (
      <span className="inline-flex shrink-0 items-center rounded-full border-2 border-cream/40 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/60 sm:px-5 sm:py-2.5 sm:text-xs">
        Bản thiết kế
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-cream px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream transition-colors duration-200 hover:bg-cream/10 sm:px-5 sm:py-2.5 sm:text-xs"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  )
}
