import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileText,
  Sparkles,
} from 'lucide-react'

import { SectionHeader } from '../components/SectionHeader'
import { buttonVariants } from '../components/ui/button'
import { services } from '../data/services'
import { cn } from '../lib/utils'

const process = [
  ['01', 'Map the idea', 'We clarify audience, features, deadline, and the real outcome the build needs to create.'],
  ['02', 'Design the product flow', 'We shape screens, journeys, project modules, and demo logic before deep development.'],
  ['03', 'Build the system', 'We implement the UI, app logic, integrations, database/API base, and content structure.'],
  ['04', 'Polish for launch', 'We refine UI details, prepare demo material, and make the project presentation-ready.'],
]

const proofStats = [
  ['Student-ready', 'Reports, PPTs, guides, and demo flows included where needed.'],
  ['Founder-focused', 'MVPs built around validation, not unnecessary feature bloat.'],
  ['UI-first', 'Every build gets a clean interface that feels credible from first view.'],
]

export function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-16 sm:py-20">
        <div className="absolute right-8 top-10 hidden h-32 w-32 rounded-full bg-aqua/70 blur-3xl lg:block" />
        <div className="absolute bottom-8 left-12 hidden h-28 w-28 rounded-full bg-mint/70 blur-3xl lg:block" />

        <div className="mx-auto grid w-full gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-white/75 px-3 py-2 text-sm font-semibold text-primary shadow-soft">
              <Sparkles className="h-4 w-4" />
              Service systems, not random packages
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Choose the build path that fits your idea.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              From student projects to startup MVPs, every service is shaped like a
              small product: clear scope, strong UI, useful features, and a polished
              final delivery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/start-project" className={cn(buttonVariants(), 'h-11 px-5')}>
                Start Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/projects"
                className={cn(buttonVariants({ variant: 'outline' }), 'h-11 px-5')}
              >
                See Showcase
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-mint text-primary">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-semibold text-foreground">What you get</h2>
                <p className="text-sm text-muted-foreground">A practical product delivery model</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {proofStats.map(([title, text]) => (
                <div key={title} className="rounded-md bg-background p-4">
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core services"
            title="Five focused ways to build with us."
            description="Each service is designed for a specific use case, so users can quickly understand where they fit."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <a
                  href={`/services/${service.slug}`}
                  key={service.title}
                  className="group flex min-h-[360px] flex-col rounded-lg border border-border bg-white/80 p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={cn('grid h-12 w-12 place-items-center rounded-md', service.color)}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-primary">
                        {service.audience}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                      {service.timeline}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                    {service.text}
                  </p>

                  <div className="mt-5 grid gap-2">
                    {service.outcomes.map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-md bg-background px-3 py-2.5 text-sm font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                    View full details <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white/45 py-16 sm:py-20">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Process"
            title="A calm build process from idea to usable product."
            description="This keeps students confident and founders clear about what is being built, why it matters, and how it will be delivered."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([step, title, text]) => (
              <article key={step} className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
                <span className="text-sm font-semibold text-primary">{step}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1fr]">
            <div className="rounded-lg border border-border bg-white/80 p-6 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-aqua text-cyan-900">
                <FileText className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
                Deliverables depend on the service, but clarity is standard.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                For student projects, documentation and demo support matter. For
                startups, launch structure and product clarity matter. We tune the
                delivery to the real use case.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Source code and setup guide',
                'Modern responsive UI',
                'Documentation where needed',
                'Demo or product walkthrough',
                'Deployment guidance',
                'Future upgrade roadmap',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-white/80 p-4 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
