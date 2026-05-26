import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ATSCheckSection } from "@/components/ats-check-section"
import { FeatureBlocks } from "@/components/feature-blocks"
import { SocialProof } from "@/components/social-proof"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServicesSection } from "@/components/services-section"
import { FAQSection } from "@/components/faq-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Content */}
      <div className="pt-20">
        <HeroSection />
        <ATSCheckSection />
        <FeatureBlocks />
        <SocialProof />
        <TestimonialsSection />
        <ServicesSection />
        <FAQSection />
        <PricingSection />
        <CTASection />
      </div>

      <Footer />
    </main>
  )
}
