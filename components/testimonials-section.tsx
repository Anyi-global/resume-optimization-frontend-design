"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Corp",
    image: "/professional-woman-diverse.png",
    content:
      "ResumeOptimizer helped me land my dream job at a FAANG company. The ATS optimization was a game-changer!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "StartupXYZ",
    image: "/professional-man.jpg",
    content:
      "I went from 2 interviews to 15 in just one month after optimizing my resume. Absolutely worth it!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Global Brand Inc",
    image: "/professional-woman-smiling.png",
    content:
      "The AI-powered suggestions were spot-on. My resume now highlights exactly what recruiters are looking for.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    company: "Analytics Pro",
    image: "/professional-man-glasses.jpg",
    content:
      "The keyword optimization feature is incredible. My resume now passes ATS filters every time.",
    rating: 5,
  },
  {
    name: "Jessica Taylor",
    role: "UX Designer",
    company: "Design Studio",
    image: "/professional-woman-creative.png",
    content:
      "Beautiful templates and smart suggestions. I got hired within 3 weeks of using this platform!",
    rating: 5,
  },
  {
    name: "Alex Martinez",
    role: "Sales Manager",
    company: "Enterprise Solutions",
    image: "/professional-man-suit.png",
    content:
      "The cover letter generator saved me hours. Each letter is personalized and professional.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 testimonials-gradient">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
            Trusted by Job Seekers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of professionals who landed their dream jobs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border border-border shadow-sm transition-all hover:shadow-md"
            >
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                “{testimonial.content}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover border border-border"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
