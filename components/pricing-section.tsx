import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["1 ATS scan per month", "Basic resume templates", "Keyword suggestions", "Email support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium",
    price: "$29",
    period: "per month",
    description: "For serious job seekers",
    features: [
      "Unlimited ATS scans",
      "All premium templates",
      "AI-powered editing",
      "Cover letter generator",
      "Job tracker",
      "Priority support",
      "Salary insights",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For teams and organizations",
    features: [
      "Everything in Premium",
      "Team collaboration",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-brand-blue-soft">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your career goals
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card border border-border transition-all ${
                plan.popular
                  ? "shadow-lg scale-[1.03] border-secondary"
                  : "hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    / {plan.period}
                  </span>
                </div>
              </div>

              <Button
                className="w-full mb-6"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <Check className="h-5 w-5 shrink-0 text-secondary mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
