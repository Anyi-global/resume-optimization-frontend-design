import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-brand-soft">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance text-foreground">
            Ready to Land Your Dream Job?
          </h2>

          <p className="mb-8 text-lg text-muted-foreground text-balance">
            Join over 50,000 professionals who have optimized their resumes,
            passed ATS screening, and increased their interview rates by up to
            3×.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-brand-blue-soft bg-transparent"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
