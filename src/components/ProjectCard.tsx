import { motion, useTransform, type MotionValue } from 'framer-motion'
import LiveProjectButton from './LiveProjectButton'
import type { Project } from '../data/content'

export type ProjectCardProps = {
  project: Project
  index: number
  totalCards: number
  progress: MotionValue<number>
}

export default function ProjectCard({ project, index, totalCards, progress }: ProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale])

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: index * 28 }}
        className="relative flex w-full origin-top flex-col gap-5 rounded-[40px] border-2 border-cream bg-ink p-5 will-change-transform sm:gap-6 sm:p-8 lg:rounded-[56px] lg:p-10"
      >
        <header className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <span className="text-3xl font-black leading-none text-rose sm:text-5xl">{project.number}</span>
          <div className="min-w-[11rem] flex-1">
            <p className="text-[10px] font-light uppercase tracking-[0.25em] text-cream/60 sm:text-xs">{project.category}</p>
            <h3 className="mt-1 text-xl font-bold uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">{project.name}</h3>
          </div>
          <LiveProjectButton href={project.link} />
        </header>

        <p className="max-w-2xl text-sm font-light leading-relaxed text-cream/70 sm:text-base">{project.description}</p>

        <div className="grid h-[34vh] grid-cols-[40%_1fr] grid-rows-[minmax(0,1fr)] gap-3 sm:h-[42vh] sm:gap-4 lg:h-[46vh]">
          <div className="grid min-h-0 grid-rows-[minmax(0,1fr)_minmax(0,1fr)] gap-3 sm:gap-4">
            <img src={project.imageOne} alt={`${project.name}: ảnh 1`} loading="lazy" className="h-full min-h-0 w-full rounded-[22px] object-cover object-top sm:rounded-[28px]" />
            <img src={project.imageTwo} alt={`${project.name}: ảnh 2`} loading="lazy" className="h-full min-h-0 w-full rounded-[22px] object-cover object-top sm:rounded-[28px]" />
          </div>
          <img src={project.imageThree} alt={`${project.name}: ảnh 3`} loading="lazy" className="h-full min-h-0 w-full rounded-[22px] object-cover object-top sm:rounded-[28px]" />
        </div>
      </motion.article>
    </div>
  )
}
