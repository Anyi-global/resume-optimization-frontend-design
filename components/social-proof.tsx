export function SocialProof() {
  const companies = [
    {
      name: "Google",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
    },
    {
      name: "Microsoft",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg",
    },
    {
      name: "Netflix",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netflix.svg",
    },
    {
      name: "IBM",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg",
    },
    {
      name: "Meta",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg",
    },
    {
      name: "Amazon",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg",
    },
  ]

  return (
    <section className="py-16 social-proof-gradient border-y border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-base font-medium text-muted-foreground tracking-wide">
            JobScrutiny users have been hired by:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 rounded-xl bg-card border border-border hover:shadow-sm transition-shadow"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
