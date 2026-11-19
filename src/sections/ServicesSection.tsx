import FadeIn from '../components/FadeIn'
import { services, servicesHeading } from '../data/content'

export default function ServicesSection() {
  return (
    <section id="services" className="relative rounded-t-[40px] bg-paper px-5 pb-28 pt-16 text-ink sm:rounded-t-[56px] sm:px-10 sm:pb-36 sm:pt-24 lg:px-16">
      <FadeIn y={30}>
        <p className="font-script text-2xl text-[#2b8f99] sm:text-3xl">My skills</p>
        <h2 className="mt-1 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">{servicesHeading}</h2>
      </FadeIn>

      <ul className="mt-10 border-t border-ink/20 sm:mt-14">
        {services.map((s, i) => (
          <li key={s.number} className="border-b border-ink/20">
            <FadeIn delay={i * 0.1} y={24} className="flex items-start gap-5 py-6 sm:gap-10 sm:py-9 lg:py-11">
              <span className="w-[2.2ch] shrink-0 font-black leading-[0.85] text-[#a8786d]" style={{ fontSize: 'clamp(2.6rem, 7vw, 6rem)' }}>{s.number}</span>
              <div className="pt-1 sm:pt-3">
                <h3 className="text-base font-medium uppercase tracking-[0.12em] sm:text-xl lg:text-2xl">{s.name}</h3>
                <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed opacity-60 sm:text-base">{s.description}</p>
              </div>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  )
}
