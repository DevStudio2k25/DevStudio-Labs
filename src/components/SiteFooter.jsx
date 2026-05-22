import { Sparkles, ArrowUpRight, Mail } from 'lucide-react'

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Modern Websites", href: "/services/modern-websites" },
      { label: "Flutter Apps", href: "/services/flutter-multiplatform-apps" },
      { label: "Startup MVPs", href: "/services/startup-mvps" },
      { label: "AI-Powered Products", href: "/services/ai-powered-products" },
      { label: "Final Year Projects", href: "/services/final-year-projects" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
      { label: "Start a Project", href: "/start-project" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" }
    ]
  }
]

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-8 w-full px-4 pb-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-lg border border-border bg-white/80 p-2 shadow-soft backdrop-blur">
        {/* Glow Effect */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl">
          <div className="aspect-[1155/678] w-[40rem] bg-gradient-to-tr from-mint to-sky" />
        </div>

        <div className="rounded-md border border-border bg-white shadow-sm">
          {/* OS-like Header */}
          <div className="flex items-center justify-between border-b border-border bg-white/50 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-coral shadow-sm" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime shadow-sm" />
              <span className="h-2.5 w-2.5 rounded-full bg-aqua shadow-sm" />
            </div>
            <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
              Footer / System
            </span>
          </div>

          <div className="p-4 sm:p-6">
            <div className="xl:grid xl:grid-cols-12 xl:gap-6">
              {/* Brand Section */}
              <div className="space-y-5 xl:col-span-4">
                <a href="/" className="group flex items-center gap-3" aria-label="DevStudio Labs home">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-mint text-primary shadow-soft transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                    <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col leading-none">
                    <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      DevStudio Labs
                    </span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Creative Tech Studio
                    </span>
                  </span>
                </a>
                <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                  Empowering creators and businesses with next-generation web, mobile, and AI solutions. We build digital products that matter.
                </p>
                <div className="flex gap-x-5">
                  <a href="#" className="group text-muted-foreground transition-colors hover:text-primary">
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  </a>
                  <a href="#" className="group text-muted-foreground transition-colors hover:text-primary">
                    <span className="sr-only">GitHub</span>
                    <GithubIcon className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  </a>
                  <a href="#" className="group text-muted-foreground transition-colors hover:text-primary">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinIcon className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
              
              {/* Links Section */}
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 xl:col-span-5 xl:mt-0">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-foreground">{footerLinks[0].title}</h3>
                    <ul role="list" className="mt-3 space-y-2">
                      {footerLinks[0].links.map((item) => (
                        <li key={item.label}>
                          <a href={item.href} className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 sm:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-foreground">{footerLinks[1].title}</h3>
                    <ul role="list" className="mt-3 space-y-2">
                      {footerLinks[1].links.map((item) => (
                        <li key={item.label}>
                          <a href={item.href} className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 sm:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-foreground">{footerLinks[2].title}</h3>
                    <ul role="list" className="mt-3 space-y-2">
                      {footerLinks[2].links.map((item) => (
                        <li key={item.label}>
                          <a href={item.href} className="text-sm leading-6 text-muted-foreground transition-colors hover:text-primary">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>

              {/* Connect Section */}
              <div className="mt-8 xl:col-span-3 xl:mt-0">
                <div className="rounded-2xl bg-gradient-to-br from-mint/20 to-sky/20 p-5 shadow-soft ring-1 ring-border transition-all hover:shadow-glow">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Mail className="h-4 w-4 shrink-0 text-primary" /> Let's connect
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Have an idea? We'd love to hear about it. Reach out directly.
                  </p>
                  <a href="mailto:devstudio2k25@gmail.com" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-emerald-700">
                    <span className="truncate">devstudio2k25@gmail.com</span> <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="mt-8 border-t border-border/50 pt-5 sm:mt-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-xs leading-5 text-muted-foreground">
                  &copy; {new Date().getFullYear()} DevStudio Labs. All rights reserved.
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  Crafted with <span className="animate-pulse text-lg text-coral">♥</span> for the creative web.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
