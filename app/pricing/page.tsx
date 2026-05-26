import { Navbar } from "@/components/navbar"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Content */}
      <div className="pt-20">
        {/* Pricing */}
        <PricingSection />

        {/* Final CTA */}
        <CTASection />
      </div>

      <Footer />
    </main>
  )
}
