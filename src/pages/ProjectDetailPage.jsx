import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  Box,
  CheckCircle2,
  Clock,
  Layers3,
  Target,
} from 'lucide-react'

import { SectionHeader } from '../components/SectionHeader'
import { buttonVariants } from '../components/ui/button'
import { getProjectBySlug } from '../data/projects'
import { cn } from '../lib/utils'

const accentClasses = {
  mint: 'bg-mint text-emerald-900 border-primary/20',
  aqua: 'bg-aqua text-cyan-900 border-cyan-300/35',
  sky: 'bg-sky text-blue-900 border-blue-300/35',
  lime: 'bg-lime text-lime-950 border-lime-300/40',
  coral: 'bg-coral text-rose-900 border-rose-200/60',
}

export function ProjectDetailPage({ slug }) {
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <a href="/projects" className={cn(buttonVariants({ variant: 'outline' }), 'mb-8 w-fit')}>
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </a>
          <SectionHeader
            eyebrow="Project not found"
            title="This project page is not available yet."
            description="The detail page route works, but no JSON project matched this slug."
          />
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <a href="/projects" className={cn(buttonVariants({ variant: 'outline' }), 'mb-8 w-fit')}>
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </a>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr]">
          <div className="rounded-lg border border-border bg-white/80 p-6 shadow-soft sm:p-8">
            <span
              className={cn(
                'inline-flex rounded-md border px-3 py-1.5 text-sm font-semibold',
                accentClasses[project.accent] ?? accentClasses.mint,
              )}
            >
              {project.category}
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              {project.overview}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <InfoTile icon={Clock} label="Timeline" value={project.timeline} />
              <InfoTile icon={Layers3} label="Features" value={`${project.features.length} modules`} />
              <InfoTile icon={Box} label="Audience" value={project.audience} />
            </div>
          </div>

          <aside className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-foreground">Project actions</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Use this detail page to show demo links, case study links, tech stack,
              and client-ready information.
            </p>
            <div className="mt-5 grid gap-3">
              <a href="/start-project" className={cn(buttonVariants(), 'w-full')}>
                Build Similar Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={project.links.caseStudy} className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}>
                Case Study URL
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <ContentPanel icon={Target} title="Problem">
              {project.problem}
            </ContentPanel>
            <ContentPanel icon={BadgeCheck} title="Solution">
              {project.solution}
            </ContentPanel>
          </div>

          <div className="rounded-lg border border-border bg-white/80 p-6 shadow-soft">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Core features
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-md border border-border bg-background p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <ListPanel title="Tech stack" items={project.techStack} />
          <ListPanel title="Deliverables" items={project.deliverables} />
        </div>
      </div>
    </section>
  )
}

function InfoTile({ icon: Icon, label, value }) {
  return (
    <div className="rounded-md border border-border bg-background p-4">
      <Icon className="h-4 w-4 text-primary" />
      <p className="mt-3 text-xs font-semibold uppercase text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold capitalize text-foreground">{value}</p>
    </div>
  )
}

function ContentPanel({ icon: Icon, title, children }) {
  return (
    <article className="rounded-lg border border-border bg-white/80 p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-mint text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{children}</p>
    </article>
  )
}

function ListPanel({ title, items }) {
  return (
    <article className="rounded-lg border border-border bg-white/80 p-6 shadow-soft">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}
