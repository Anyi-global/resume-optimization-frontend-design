import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileCheck,
  Wand2,
  FileText,
  Mail,
  Briefcase,
  Users,
  DollarSign,
} from "lucide-react"

const services = [
  {
    icon: FileCheck,
    title: "ATS Check",
    description:
      "Scan your resume against ATS algorithms and get a compatibility score with detailed feedback.",
  },
  {
    icon: Wand2,
    title: "Power Edit",
    description:
      "AI-powered editing suggestions to enhance your resume content and make it more impactful.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description:
      "Create professional resumes from scratch with our intuitive builder and expert templates.",
  },
  {
    icon: Mail,
    title: "Cover Letter Generator",
    description:
      "Generate personalized cover letters tailored to specific job descriptions in seconds.",
  },
  {
    icon: Briefcase,
    title: "Job Tracker",
    description:
      "Track your applications, interviews, and follow-ups all in one organized dashboard.",
  },
  {
    icon: Users,
    title: "Culture Fit Analysis",
    description:
      "Analyze company culture and get insights on how well you align with potential employers.",
  },
  {
    icon: DollarSign,
    title: "Salary Insights",
    description:
      "Get data-driven salary ranges and negotiation tips based on your role and location.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
            Comprehensive Career Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to optimize your job search and land your dream
            role
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Card
                key={index}
                className="
                group p-6 rounded-xl
                bg-primary
                border border-primary
                transition-all
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              <div
                className="
                  mb-4 flex h-12 w-12 items-center justify-center rounded-lg
                  bg-white/15
                  group-hover:bg-white/20
                  transition-colors
                "
              >
                <service.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mb-4 text-sm text-white/80 leading-relaxed">
                {service.description}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="
                  group/btn px-0 text-white
                  hover:text-secondary
                  hover:bg-transparent
                  transition-colors
                "
              >
                Learn More
                <span className="ml-1 transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
              </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
