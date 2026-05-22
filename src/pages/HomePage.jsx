import { ArrowRight, BadgeCheck, BrainCircuit, Code2, MessageCircle, Rocket, Smartphone } from 'lucide-react'

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
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
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
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
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
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-white/80 p-6 shadow-soft sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-md bg-mint px-3 py-1.5 text-sm font-semibold text-emerald-900">
                  <BadgeCheck className="h-4 w-4" />
                  Build-ready brief
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Fill one smart brief and get a clean WhatsApp message ready to send.
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  No database or login needed. Add your project type, timeline,
                  budget, and requirements. The page converts everything into a
                  structured message you can copy or send directly.
                </p>
                <a href="/start-project" className={cn(buttonVariants(), 'mt-6 w-fit')}>
                  Start Project
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['01', 'Choose project', 'Pick a service or pre-built project.'],
                  ['02', 'Add details', 'Share features, timeline, and contact.'],
                  ['03', 'Send brief', 'Copy or send the WhatsApp draft.'],
                ].map(([step, title, text]) => (
                  <div key={step} className="rounded-md border border-border bg-background p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-primary">{step}</span>
                      <MessageCircle className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
