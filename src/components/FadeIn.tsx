import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export type FadeInProps = {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
  duration?: number
  className?: string
}

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export default function FadeIn({ children, delay = 0, y = 24, x = 0, duration = 0.8, className }: FadeInProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      transition={{ duration: reduce ? 0.2 : duration, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
