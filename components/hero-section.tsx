"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Upload, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative -mt-20 pt-32 pb-20 hero-gradient overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="mb-6 inline-block rounded-full bg-brand-blue-soft px-4 py-2 text-sm font-medium text-primary">
              AI-Powered Resume Optimization
            </div>

            <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-balance text-foreground">
              Land Your Dream Job with AI-Optimized Resumes
            </h1>

            <p className="mb-8 text-lg text-muted-foreground text-balance leading-relaxed">
              Beat Applicant Tracking Systems with our intelligent ATS compatibility check. Get instant AI-powered
              feedback, keyword optimization, and formatting suggestions to increase your interview chances by 3x.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-brand-blue-soft bg-transparent"
              >
                <Upload className="mr-2 h-4 w-4" />
                Scan Your Resume
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">ATS Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Users Hired</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">3x</div>
                <div className="text-sm text-muted-foreground">More Interviews</div>
              </div>
            </div>
          </div>

          {/* Right Side - ATS Result Sample */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  ATS Scan Result
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full Match Report
                </p>
              </div>

              {/* Match Score */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center">
                  <div className="relative h-32 w-32">
                    <svg className="transform -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="var(--border)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="var(--secondary)"
                        strokeWidth="8"
                        strokeDasharray="204 339"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary">87</div>
                        <div className="text-xs text-muted-foreground">/ 100</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">
                  Excellent Match
                </p>
              </div>

              {/* Feedback Items */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Keyword Optimization
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Strong industry keywords detected
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Formatting
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ATS-friendly structure
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0 flex items-center justify-center text-xs">
                    ⚠
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Missing Skills
                    </div>
                    <div className="text-xs text-muted-foreground">
                      3 suggestions for improvement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
