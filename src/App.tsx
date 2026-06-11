import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { SkillsMarquee } from '@/components/SkillsMarquee'
import { Philosophy } from '@/components/Philosophy'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { Certifications } from '@/components/Certifications'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/CustomCursor'
import { Toaster } from '@/components/ui/toaster'

export default function App() {
  return (
    <div className="bg-background text-on-background selection:bg-primary selection:text-on-primary min-h-screen relative overflow-hidden">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <SkillsMarquee />
        <Philosophy />
        <Services />
        <Projects />
        <Certifications />
        <CTASection />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}
