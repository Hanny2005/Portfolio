import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'

export default function App() {
  return (
    <main className="site-main relative bg-ink text-cream">
      <div className="grain" aria-hidden="true" />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}
