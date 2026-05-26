"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md transition-shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/jobscrutiny-logo-group.png"
              alt="JobScrutiny"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* ATS Resume */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                ATS Resume
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute left-0 mt-2 w-52 rounded-xl border border-border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-brand-blue-soft hover:text-primary transition-colors"
                >
                  ATS Resume Scan
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-brand-blue-soft hover:text-primary transition-colors"
                >
                  Resume Builder
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-brand-blue-soft hover:text-primary transition-colors"
                >
                  Resume Templates
                </Link>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Cover Letter
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute left-0 mt-2 w-52 rounded-xl border border-border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-brand-blue-soft hover:text-primary transition-colors"
                >
                  Cover Letter Generator
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-brand-blue-soft hover:text-primary transition-colors"
                >
                  Cover Letter Templates
                </Link>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                LinkedIn
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="absolute left-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-brand-blue-soft hover:text-primary transition-colors"
                >
                  LinkedIn Profile Optimizer
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-foreground hover:bg-brand-blue-soft hover:text-primary transition-colors"
                >
                  LinkedIn Writing Guide
                </Link>
              </div>
            </div>

            <Link
              href="#pricing"
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="rounded-lg p-2 hover:bg-muted transition-colors">
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>

            <Button variant="ghost" asChild className="text-primary">
              <Link href="/login">Login</Link>
            </Button>

            <Button
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
