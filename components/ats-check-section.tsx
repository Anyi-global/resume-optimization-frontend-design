"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, CheckCircle2, Sparkles } from "lucide-react"

export function ATSCheckSection() {
  const [step, setStep] = useState(1)

  return (
    <section className="py-20 bg-brand-blue-soft">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
            ATS Compatibility Check
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload your resume and get instant feedback on how well it performs with Applicant Tracking Systems
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Progress Tracker */}
          <div className="mb-12 flex items-center justify-center gap-4">
            {[
              { stepNum: 1, label: "Upload" },
              { stepNum: 2, label: "Analyze" },
              { stepNum: 3, label: "Results" },
            ].map((item, index) => (
              <div key={item.stepNum} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                      step >= item.stepNum
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.stepNum}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>

                {index < 2 && (
                  <div
                    className={`h-px w-16 transition-colors ${
                      step > item.stepNum ? "bg-secondary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Upload Card */}
          <Card className="p-8 bg-card shadow-lg">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-green-soft">
                <Upload className="h-12 w-12 text-secondary" />
              </div>

              <div className="text-center">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Upload Your Resume
                </h3>
                <p className="text-sm text-muted-foreground">
                  Supports PDF and DOCX formats, up to 5MB
                </p>
              </div>

              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Upload className="mr-2 h-4 w-4" />
                Choose File
              </Button>

              {/* ATS Preview */}
              <div className="mt-8 w-full rounded-lg border border-border bg-background p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    ATS Score Preview
                  </span>
                  <span className="text-3xl font-bold text-primary">
                    87/100
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Keyword optimization: Excellent</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    <span>Formatting: ATS-friendly</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                    <span>Suggestions: 3 improvements available</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-fit mt-6 border-secondary text-secondary hover:bg-brand-green-soft bg-transparent"
                >
                  View Sample
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
