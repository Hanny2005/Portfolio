import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import { brand, hero, navLinks } from '../data/content'

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-x-clip bg-ink">
      {/* đường kẻ mảnh + ngôi sao, nhắc lại bản portfolio Canva */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-[72px] h-px bg-gradient-to-r from-transparent via-teal/40 to-teal/70 sm:inset-x-10 sm:top-[88px]" />
      <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-[60px] h-6 w-6 text-teal sm:right-8 sm:top-[76px]">
        <path fill="currentColor" d="M12 0l1.6 10.4L24 12l-10.4 1.6L12 24l-1.6-10.4L0 12l10.4-1.6z" />
      </svg>

      <FadeIn delay={0} y={-20} className="relative z-30">
        <nav aria-label="Điều hướng chính" className="flex items-center justify-between px-5 pt-6 text-[10px] font-medium uppercase tracking-[0.25em] sm:px-10 sm:pt-8 sm:text-xs lg:text-sm">
          <a href="#top" className="text-sm font-black tracking-[0.12em] transition-opacity duration-200 hover:opacity-70 sm:text-base lg:text-lg">
            {brand.wordmark}
          </a>
          <ul className="flex items-center gap-3 sm:gap-8">
            {navLinks.map((l, i) => (
              <li key={l.target} className={i === 0 ? 'hidden sm:block' : ''}>
                <a href={l.target} className="transition-opacity duration-200 hover:opacity-70">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </FadeIn>

      <div className="relative flex flex-1 flex-col">
        <FadeIn delay={0.15} y={40} className="relative z-10 mt-14 px-3 sm:mt-16 lg:mt-12">
          <p className="mb-2 pl-1 text-[10px] font-black uppercase tracking-[0.35em] text-rose/80 sm:text-sm">{hero.kicker}</p>
          <h1
            className="gradient-text select-none whitespace-nowrap text-center font-black uppercase leading-[0.9] tracking-[-0.04em] [filter:drop-shadow(4px_5px_0_#3a2c28)] lg:[filter:drop-shadow(8px_9px_0_#3a2c28)]"
            style={{ fontSize: 'clamp(3.2rem, 17vw, 20rem)' }}
          >
            {hero.heading}
          </h1>
        </FadeIn>

        {/* chữ ký kiểu vintage hai bên ảnh */}
        <FadeIn delay={0.45} y={10} className="pointer-events-none relative z-20 hidden md:block">
          <div className="absolute inset-x-0 -top-2 flex justify-between px-[10vw] font-script text-teal lg:px-[14vw]" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3.4rem)' }}>
            <span>Phạm Nguyễn</span>
            <span>Yến Hà</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.6} y={30} className="relative z-10 mt-6 flex flex-1 items-center justify-center md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:items-end">
          <Magnet padding={120} strength={6}>
            <img
              src={hero.portrait}
              alt={hero.portraitAlt}
              className="w-[min(68vw,300px)] object-contain [filter:drop-shadow(0_24px_40px_rgba(0,0,0,0.55))] sm:w-[340px] md:w-[min(34vw,400px)] lg:w-[min(30vw,440px)]"
            />
          </Magnet>
        </FadeIn>

        <div className="relative z-20 mt-6 flex flex-col items-center gap-5 px-5 pb-8 text-center sm:px-10 md:mt-auto md:flex-row md:items-end md:justify-between md:pb-10 md:text-left">
          <FadeIn delay={0.35} y={20}>
            <p className="max-w-[240px] text-[11px] font-light uppercase leading-snug tracking-[0.18em] text-cream/80 sm:max-w-[200px] lg:max-w-[260px] lg:text-xs">
              {hero.supportingCopy}
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton label={hero.ctaLabel} href={hero.ctaTarget} />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
