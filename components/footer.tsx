import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-neutral-dark text-neutral-light">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <Image
                src="/images/jobscrutiny-logo-group.png"
                alt="JobScrutiny"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <p className="text-sm text-neutral-gray leading-relaxed max-w-md">
              Helping job seekers optimize resumes, pass ATS screening, and gain
              visibility with recruiters using AI-powered career tools.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-light">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-neutral-gray">
              {[
                "Pricing",
                "ATS Compatibility Check",
                "Power Edit",
                "Resume Builder",
                "Cover Letter Generator",
                "LinkedIn Profile Optimizer",
                "Job Tracker",
                "Culture & Values Fit Analysis",
                "Compensation Insights",
                "Templates",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-neutral-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-light">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-neutral-gray">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-neutral-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-light">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-neutral-gray">
              {[
                "Help Center",
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-neutral-light transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="bg-border/40 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-neutral-gray">
            &copy; {currentYear} JobScrutiny. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
              { icon: Linkedin, label: "LinkedIn" },
              // { icon: TikTok, label: "TikTok" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="rounded-lg p-2 text-neutral-gray hover:text-neutral-light hover:bg-muted transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
