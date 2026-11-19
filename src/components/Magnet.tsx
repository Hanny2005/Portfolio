import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

export type MagnetProps = {
  children: ReactNode
  /** vùng kích hoạt tính thêm ra ngoài phần tử (px) */
  padding?: number
  /** số càng lớn, phần tử dịch càng ít */
  strength?: number
  className?: string
}

export default function Magnet({ children, padding = 120, strength = 4, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const inside =
        e.clientX > r.left - padding && e.clientX < r.right + padding &&
        e.clientY > r.top - padding && e.clientY < r.bottom + padding
      if (inside) {
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        setActive(true)
        setOffset({ x: (e.clientX - cx) / strength, y: (e.clientY - cy) / strength })
      } else {
        setActive(false)
        setOffset({ x: 0, y: 0 })
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength, reduce])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
