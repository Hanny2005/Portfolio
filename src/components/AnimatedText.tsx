import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion'

export type AnimatedTextProps = {
  text: string
  className?: string
}

type CharProps = { char: string; progress: MotionValue<number>; range: [number, number] }

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return <motion.span style={{ opacity }}>{char}</motion.span>
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })

  if (reduce) return <p className={className}>{text}</p>

  const words = text.split(' ')
  const total = Array.from(text).length
  let index = 0

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, w) => {
        const chars = Array.from(word)
        const node = (
          <span key={w} className="inline-block whitespace-nowrap" aria-hidden="true">
            {chars.map((c, i) => {
              const start = (index + i) / total
              return <Char key={i} char={c} progress={scrollYProgress} range={[start, Math.min(1, start + 1 / total * 8)]} />
            })}
          </span>
        )
        index += chars.length + 1
        return (
          <span key={w}>
            {node}{w < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </p>
  )
}
