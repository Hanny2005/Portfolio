import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import ContactButton from '../components/ContactButton'
import { about, hero } from '../data/content'

type DecorProps = { src: string; alt: string; className: string; rotate: number; x: number; y: number; delay: number }

function Decor({ src, alt, className, rotate, x, y, delay }: DecorProps) {
  return (
    <FadeIn x={x} y={y} delay={delay} duration={1} className={`absolute ${className}`}>
      <figure className="bg-[#f4efe6] p-2 pb-7 shadow-[0_18px_40px_rgba(0,0,0,0.5)] sm:p-2.5 sm:pb-9" style={{ transform: `rotate(${rotate}deg)` }}>
        <img src={src} alt={alt} loading="lazy" className="aspect-[4/5] w-full object-cover [filter:sepia(0.18)_contrast(1.02)]" />
      </figure>
    </FadeIn>
  )
}

export default function AboutSection() {
  const d = about.decor
  return (
    <section id="about" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink px-5 py-28 sm:px-10">
      <Decor {...d.topLeft} rotate={-8} x={-60} y={20} delay={0} className="left-[-6%] top-[3%] w-[24vw] max-w-[220px] sm:left-[4%] sm:w-[18vw]" />
      <Decor {...d.bottomLeft} rotate={6} x={-40} y={60} delay={0.1} className="bottom-[3%] left-[-2%] w-[24vw] max-w-[200px] sm:left-[9%] sm:w-[15vw]" />
      <Decor {...d.topRight} rotate={7} x={60} y={-30} delay={0.15} className="right-[-6%] top-[3%] w-[23vw] max-w-[210px] sm:right-[6%] sm:w-[16vw]" />
      <Decor {...d.bottomRight} rotate={-5} x={50} y={60} delay={0.05} className="bottom-[3%] right-[-4%] w-[24vw] max-w-[230px] sm:right-[3%] sm:w-[18vw]" />

      <div className="relative z-10 flex max-w-[560px] flex-col items-center text-center">
        <FadeIn y={30}>
          <p className="font-script text-2xl text-teal sm:text-3xl">About me</p>
          <h2 className="gradient-text mt-2 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">{about.heading}</h2>
        </FadeIn>
        <AnimatedText
          text={about.description}
          className="mt-8 text-[clamp(1rem,2.4vw,1.35rem)] font-light leading-relaxed text-cream"
        />
        <FadeIn y={20} delay={0.1} className="mt-10">
          <ContactButton label={hero.ctaLabel} href={hero.ctaTarget} />
        </FadeIn>
      </div>
    </section>
  )
}
