import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ProjectCard from '../components/ProjectCard'
import { brand, contactChannels, footer, projects, projectsHeading } from '../data/content'

export default function ProjectsSection() {
  const listRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start start', 'end end'] })

  return (
    <section id="projects" className="relative -mt-10 rounded-t-[40px] bg-ink px-4 pb-16 pt-16 sm:-mt-14 sm:rounded-t-[56px] sm:px-8 sm:pt-24 lg:px-14">
      <FadeIn y={30} className="mx-auto max-w-6xl">
        <p className="font-script text-2xl text-teal sm:text-3xl">Things I’ve built</p>
        <h2 className="gradient-text mt-1 pb-1 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">{projectsHeading}</h2>
      </FadeIn>

      <div ref={listRef} className="mx-auto mt-10 max-w-6xl pb-[8vh] sm:mt-16">
        {projects.map((p, i) => (
          <ProjectCard key={p.number} project={p} index={i} totalCards={projects.length} progress={scrollYProgress} />
        ))}
      </div>

      <footer id="contact" className="mx-auto mt-16 max-w-6xl border-t border-cream/15 pt-14 sm:mt-24">
        <FadeIn y={24}>
          <p className="max-w-xl text-xl font-light leading-snug sm:text-3xl">{footer.copy}</p>
          <a
            href={brand.contactLink}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-3 text-2xl font-black uppercase tracking-tight transition-opacity duration-200 hover:opacity-70 sm:text-5xl"
          >
            <span className="gradient-text break-all">{brand.contactLabel}</span>
            <ArrowUpRight className="h-7 w-7 shrink-0 text-rose transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:h-12 sm:w-12" aria-hidden="true" />
          </a>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {contactChannels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-[28px] border-2 border-cream/80 px-5 py-4 transition-colors duration-200 hover:bg-cream/10 sm:px-6 sm:py-5"
                >
                  <span>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-teal sm:text-xs">{c.label}</span>
                    <span className="mt-1 block text-base font-bold sm:text-lg">{c.value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-rose transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-col justify-between gap-2 text-[11px] uppercase tracking-[0.25em] text-cream/40 sm:flex-row">
            <span>© 2026 {brand.creatorName}</span>
            <span>Made with React · Tailwind · Framer Motion</span>
          </div>
        </FadeIn>
      </footer>
    </section>
  )
}
