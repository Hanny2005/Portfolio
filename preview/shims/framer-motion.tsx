// Bản thay thế TỐI GIẢN của framer-motion, CHỈ dùng để build bản xem trước
// trong môi trường không cài được package. Dự án thật dùng framer-motion gốc.
import { createElement, forwardRef, useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react'

type Listener<T> = (v: T) => void
export class MotionValue<T = number> {
  private v: T; private ls = new Set<Listener<T>>()
  constructor(v: T) { this.v = v }
  get() { return this.v }
  set(v: T) { this.v = v; this.ls.forEach((l) => l(v)) }
  on(_e: 'change', l: Listener<T>) { this.ls.add(l); return () => { this.ls.delete(l) } }
}

export function useReducedMotion() {
  const [r, setR] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const f = () => setR(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f)
  }, [])
  return r
}

const edge = (s: string) => (s === 'start' ? 0 : s === 'end' ? 1 : s === 'center' ? 0.5 : parseFloat(s))
export function useScroll({ target, offset = ['start end', 'end start'] }: { target: RefObject<HTMLElement | null>; offset?: string[] }) {
  const mv = useRef(new MotionValue(0)).current
  useEffect(() => {
    const [a, b] = offset.map((o) => o.split(' ').map(edge))
    let raf = 0
    const calc = () => {
      raf = 0
      const el = target.current; if (!el) return
      const r = el.getBoundingClientRect(); const top = r.top + window.scrollY; const vh = window.innerHeight
      const s0 = top + a[0] * r.height - a[1] * vh
      const s1 = top + b[0] * r.height - b[1] * vh
      const p = s1 === s0 ? 0 : (window.scrollY - s0) / (s1 - s0)
      mv.set(Math.min(1, Math.max(0, p)))
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(calc) }
    calc(); window.addEventListener('scroll', on, { passive: true }); window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])
  return { scrollYProgress: mv }
}

export function useTransform(src: MotionValue<number>, input: number[], output: number[]) {
  const map = (v: number) => {
    if (v <= input[0]) return output[0]
    if (v >= input[input.length - 1]) return output[output.length - 1]
    for (let i = 1; i < input.length; i++) if (v <= input[i]) {
      const t = (v - input[i - 1]) / (input[i] - input[i - 1]); return output[i - 1] + t * (output[i] - output[i - 1])
    }
    return output[0]
  }
  const mv = useRef<MotionValue<number> | null>(null)
  if (!mv.current) mv.current = new MotionValue(map(src.get()))
  const ir = useRef(input); ir.current = input
  useEffect(() => src.on('change', (v) => mv.current!.set(map(v))), [src])
  return mv.current
}

type Vals = { opacity?: number; x?: number; y?: number; scale?: number; rotate?: number }
const tf = (v: Vals) => `translate3d(${v.x ?? 0}px, ${v.y ?? 0}px, 0) scale(${v.scale ?? 1}) rotate(${v.rotate ?? 0}deg)`

function make(tag: string) {
  return forwardRef<HTMLElement, any>(function M({ initial, whileInView, animate, viewport, transition, style = {}, ...rest }, fwd) {
    const ref = useRef<HTMLElement | null>(null)
    const mvKeys = Object.keys(style).filter((k) => style[k] instanceof MotionValue)
    const staticStyle: any = {}
    Object.keys(style).forEach((k) => { if (!mvKeys.includes(k)) staticStyle[k] = style[k] })
    const anim = whileInView || animate
    if (initial && anim) {
      if (initial.opacity !== undefined) staticStyle.opacity = initial.opacity
      staticStyle.transform = tf(initial)
    }
    useLayoutEffect(() => {
      const el = ref.current; if (!el || !mvKeys.length) return
      const apply = () => mvKeys.forEach((k) => {
        const v = style[k].get()
        if (k === 'scale') el.style.transform = `scale(${v})`
        else if (k === 'opacity') el.style.opacity = String(v)
        else (el.style as any)[k] = typeof v === 'number' && k !== 'opacity' ? v + 'px' : v
      })
      apply()
      const offs = mvKeys.map((k) => style[k].on('change', apply))
      return () => offs.forEach((o: () => void) => o())
    })
    useEffect(() => {
      const el = ref.current; if (!el || !initial || !anim) return
      const t = transition || {}; const e = t.ease || [0.25, 0.1, 0.25, 1]
      const go = () => {
        el.style.transition = `opacity ${t.duration ?? 0.6}s cubic-bezier(${e.join(',')}) ${t.delay ?? 0}s, transform ${t.duration ?? 0.6}s cubic-bezier(${e.join(',')}) ${t.delay ?? 0}s`
        el.style.opacity = String(anim.opacity ?? 1); el.style.transform = tf(anim)
      }
      if (animate) { requestAnimationFrame(go); return }
      const io = new IntersectionObserver((en) => { en.forEach((x) => { if (x.isIntersecting) { go(); if (viewport?.once !== false) io.disconnect() } }) }, { rootMargin: viewport?.margin || '0px' })
      io.observe(el); return () => io.disconnect()
    }, [])
    return createElement(tag, { ...rest, style: staticStyle, ref: (n: HTMLElement) => { ref.current = n; if (typeof fwd === 'function') fwd(n); else if (fwd) fwd.current = n } })
  })
}
export const motion: any = new Proxy({}, { get: (c: any, k: string) => (c[k] ??= make(k)) })
