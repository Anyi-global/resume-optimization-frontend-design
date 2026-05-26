"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const faqs = [
  {
    question: "How does the ATS compatibility check work?",
    answer:
      "Our AI analyzes your resume against 500+ Applicant Tracking Systems to identify compatibility issues. We check formatting, keywords, structure, and content to ensure your resume passes automated screening.",
  },
  {
    question: "Can I use JobScrutiny for multiple job applications?",
    answer:
      "You can create and optimize unlimited resumes and cover letters for different job applications. Our platform allows you to tailor your materials for each specific opportunity.",
  },
  {
    question: "Is my resume data secure and private?",
    answer:
      "Yes, we use enterprise-level encryption and never share your data with third parties. Your resume is stored securely and you have full control over your information.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support PDF and DOCX formats up to 5MB. If you have a resume in another format, you can easily convert it to one of these formats.",
  },
  {
    question: "How long does the ATS scan take?",
    answer:
      "Our AI-powered scan typically completes in under 30 seconds, providing you with instant feedback and actionable recommendations.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    question: "Do you offer team or enterprise plans?",
    answer:
      "Yes, we offer custom enterprise solutions for teams and organizations. Contact our sales team for pricing and features tailored to your needs.",
  },
  {
    question: "How often should I rescan my resume?",
    answer:
      "We recommend rescanning whenever you make significant changes or are applying to different types of positions. Our Premium plan offers unlimited scans.",
  },
  {
    question: "Can JobScrutiny improve my interview chances?",
    answer:
      "Yes, users report a 3x increase in interview invitations after using JobScrutiny. Our optimization ensures your resume gets in front of hiring managers.",
  },
  {
    question: "What makes JobScrutiny different from other resume tools?",
    answer:
      "JobScrutiny combines ATS optimization, AI-powered editing, job tracking, and career insights in one platform. Our technology is built by career experts and continuously updated.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 faq-gradient">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about JobScrutiny
          </p>
        </div>

        <div className="space-y-0 rounded-xl border border-border bg-card shadow-sm overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-brand-green-soft"
              >
                <span className="font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-secondary" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-background text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}

              {index < faqs.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
