import { Layout } from '@/components/layout'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { FeaturesGrid } from '@/components/features-grid'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <FeaturesGrid />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </Layout>
  )
}

