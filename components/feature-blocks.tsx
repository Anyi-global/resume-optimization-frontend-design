"use client"

import { Button } from "@/components/ui/button"
import { FileCheck, Wand2, Briefcase, Mail } from "lucide-react"

const features = [
  {
    title: "ATS Resume Scan",
    subtitle: "Beat the Robots",
    description:
      "Our advanced algorithm analyzes your resume against 500+ ATS systems to ensure it gets past the initial screening.",
    cta: "Scan Your Resume",
    icon: FileCheck,
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    reverse: false,
  },
  {
    title: "AI Resume Builder",
    subtitle: "Build, Don't Copy",
    description:
      "Create professionally designed resumes from scratch with intelligent suggestions that adapt to your industry and experience level.",
    cta: "Start Building",
    icon: Wand2,
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1000&q=80",
    reverse: true,
  },
  {
    title: "Cover Letter Generator",
    subtitle: "Write Smarter",
    description:
      "Generate tailored cover letters in seconds that match job descriptions and highlight your unique strengths.",
    cta: "Generate Now",
    icon: Mail,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    reverse: false,
  },
  {
    title: "Job Application Tracker",
    subtitle: "Stay Organized",
    description:
      "Track all your applications, interviews, and follow-ups in one place with intelligent reminders and insights.",
    cta: "Track Applications",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    reverse: true,
  },
]

export function FeatureBlocks() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools designed to optimize every step of your job
            search journey
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const contentOrder = feature.reverse ? "lg:order-2" : "lg:order-1"
            const imageOrder = feature.reverse ? "lg:order-1" : "lg:order-2"

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Text Content */}
                <div className={contentOrder}>
                  <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider">
                    <Icon className="h-4 w-4 text-secondary" />
                    {feature.subtitle}
                  </div>

                  <h3 className="mb-4 text-3xl font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    {feature.cta}
                  </Button>
                </div>

                {/* Image / Visual */}
                <div className={imageOrder}>
                  <div className="rounded-2xl bg-brand-soft p-8 shadow-md">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto rounded-lg bg-white"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
