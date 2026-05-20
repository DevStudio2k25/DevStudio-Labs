import { ArrowRight, BadgeCheck, BrainCircuit, Code2, Rocket, Smartphone } from 'lucide-react'

import { HeroSection } from '../components/HeroSection'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { buttonVariants } from '../components/ui/button'
import { featuredProjects } from '../data/projects'
import { cn } from '../lib/utils'

const serviceTiles = [
  {
    icon: Code2,
    title: 'Final Year Projects',
    text: 'Modern project builds with documentation, demo flow, and viva-friendly explanation.',
    color: 'bg-lime text-lime-950',
  },
  {
    icon: Smartphone,
    title: 'Flutter Apps',
    text: 'Android, iOS, and web-ready app interfaces with clean product architecture.',
    color: 'bg-mint text-emerald-900',
  },
  {
    icon: BrainCircuit,
    title: 'AI Products',
    text: 'Chatbots, document tools, recommendation systems, and automation workflows.',
    color: 'bg-aqua text-cyan-900',
  },
  {
    icon: Rocket,
    title: 'Startup MVPs',
    text: 'Focused product builds that help founders test, demo, and launch quickly.',
    color: 'bg-coral text-rose-900',
  },
]

export function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="border-b border-border bg-white/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="What we build"
              title="A studio stack for students, founders, and fast-moving teams."
              description="Home shows the mixed view. Dedicated pages go deeper into student projects, startup builds, services, and project showcases."
            />
            <a href="/services" className={cn(buttonVariants({ variant: 'outline' }), 'w-fit')}>
              View Services
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {serviceTiles.map((service) => {
              const Icon = service.icon

              return (
                <div key={service.title} className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
                  <span className={cn('grid h-11 w-11 place-items-center rounded-md', service.color)}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured work"
            title="Project previews that make the work feel real."
            description="These are embedded data-driven cards. Later we can connect every card to cinematic detail pages."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-white/80 p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md bg-mint px-3 py-1.5 text-sm font-semibold text-emerald-900">
                  <BadgeCheck className="h-4 w-4" />
                  Build-ready process
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Tell us the idea. We shape the product, UI, tech stack, and launch path.
                </h2>
              </div>
              <a href="/start-project" className={cn(buttonVariants(), 'w-fit')}>
                Start Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
