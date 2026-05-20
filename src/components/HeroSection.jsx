import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  Code2,
  Layers3,
  Rocket,
  Smartphone,
} from 'lucide-react'

import { buttonVariants } from './ui/button'
import { cn } from '../lib/utils'

const services = [
  { icon: BrainCircuit, label: 'AI Products', color: 'bg-aqua text-cyan-800' },
  { icon: Smartphone, label: 'Flutter Apps', color: 'bg-mint text-emerald-800' },
  { icon: Rocket, label: 'Startup MVPs', color: 'bg-coral text-rose-800' },
  { icon: Code2, label: 'Final Year Projects', color: 'bg-lime text-lime-900' },
]

const projectModules = [
  { title: 'Student AI Project', meta: 'Docs, demo, viva support', color: 'bg-mint' },
  { title: 'Founder MVP Sprint', meta: 'Prototype to launch build', color: 'bg-aqua' },
  { title: 'Modern Web System', meta: 'Website, dashboard, backend', color: 'bg-sky' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute left-8 top-24 hidden h-28 w-28 rounded-full bg-mint/70 blur-3xl lg:block" />
      <div className="absolute bottom-10 right-12 hidden h-32 w-32 rounded-full bg-aqua/70 blur-3xl lg:block" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-white/75 px-3 py-2 text-sm font-medium text-primary shadow-soft">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Next-gen studio for students and startups
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            We turn raw ideas into polished digital products.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Premium final year projects, Flutter apps, AI tools, modern websites,
            and startup MVPs built with clean UI, strong engineering, and launch-ready
            execution.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/start-project"
              className={cn(buttonVariants({ size: 'default' }), 'h-11 px-5')}
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/projects"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'default' }),
                'h-11 px-5',
              )}
            >
              Explore Showcase
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <div
                  key={service.label}
                  className="flex items-center gap-3 rounded-md border border-border bg-white/70 p-3 shadow-soft"
                >
                  <span className={cn('grid h-9 w-9 place-items-center rounded-md', service.color)}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{service.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-lg border border-border bg-white/80 p-3 shadow-soft backdrop-blur">
            <div className="rounded-md border border-border bg-white">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                  <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                  <span className="h-2.5 w-2.5 rounded-full bg-aqua" />
                </div>
                <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                  Live Lab Preview
                </span>
              </div>

              <div className="space-y-4 p-4">
                <div className="flex items-start justify-between gap-4 rounded-md bg-mint/55 p-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
                      <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                      Product Blueprint
                    </div>
                    <p className="mt-2 text-sm leading-6 text-emerald-950/70">
                      Idea validation, feature planning, UI direction, tech stack,
                      and working demo flow before build.
                    </p>
                  </div>
                  <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-primary">
                    Ready
                  </span>
                </div>

                <div className="grid gap-3">
                  {projectModules.map((module) => (
                    <div
                      key={module.title}
                      className="flex items-center justify-between rounded-md border border-border bg-white p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn('h-10 w-2 rounded-full', module.color)} />
                        <div>
                          <h2 className="text-sm font-semibold text-foreground">
                            {module.title}
                          </h2>
                          <p className="text-xs text-muted-foreground">{module.meta}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-md bg-aqua/55 p-3">
                    <Blocks className="h-4 w-4 text-cyan-800" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-cyan-950">42+</p>
                    <p className="text-xs text-cyan-950/65">modules shipped</p>
                  </div>
                  <div className="rounded-md bg-sky/65 p-3">
                    <Layers3 className="h-4 w-4 text-blue-800" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-blue-950">8</p>
                    <p className="text-xs text-blue-950/65">tech tracks</p>
                  </div>
                  <div className="rounded-md bg-lime/70 p-3">
                    <Rocket className="h-4 w-4 text-lime-900" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-lime-950">MVP</p>
                    <p className="text-xs text-lime-950/65">launch ready</p>
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
