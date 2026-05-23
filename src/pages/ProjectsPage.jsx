import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Layers3,
  Sparkles,
} from 'lucide-react'

import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { buttonVariants } from '../components/ui/button'
import { allProjects, featuredProjects } from '../data/projects'
import { cn } from '../lib/utils'

const accentClasses = {
  mint: 'bg-mint text-emerald-900',
  aqua: 'bg-aqua text-cyan-900',
  sky: 'bg-sky text-blue-900',
  lime: 'bg-lime text-lime-950',
  coral: 'bg-coral text-rose-900',
}

const categories = [...new Set(allProjects.map((project) => project.category))]
const techCount = new Set(allProjects.flatMap((project) => project.techStack)).size
const featuredProject = featuredProjects[0] ?? allProjects[0]

export function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-16 sm:py-20">
        <div className="absolute left-10 top-12 hidden h-28 w-28 rounded-full bg-mint/70 blur-3xl lg:block" />
        <div className="absolute bottom-10 right-16 hidden h-32 w-32 rounded-full bg-aqua/70 blur-3xl lg:block" />

        <div className="mx-auto grid w-full gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-primary/20 bg-white/75 px-3 py-2 text-sm font-semibold text-primary shadow-soft">
              <Sparkles className="h-4 w-4" />
              Pre-built project showcase
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Pick a ready project and make it yours.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              This library shows pre-built project concepts with clear features,
              technology stacks, timelines, and detail pages. Users can quickly
              understand what each project does and request a similar build.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#featured-project" className={cn(buttonVariants(), 'h-11 px-5')}>
                View Featured
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#project-library"
                className={cn(buttonVariants({ variant: 'outline' }), 'h-11 px-5')}
              >
                Browse Projects
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white/80 p-6 shadow-soft flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <h2 className="font-semibold text-sm text-foreground">Lab Directory Status</h2>
                </div>
                <span className="rounded-md bg-muted px-2 py-1 text-[11px] font-semibold text-muted-foreground uppercase">
                  Real-time
                </span>
              </div>

              {/* Stats Grid */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-extrabold tracking-tight text-primary">{allProjects.length}+</p>
                  <p className="mt-1 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Concepts</p>
                </div>
                <div className="text-center border-x border-border">
                  <p className="text-3xl font-extrabold tracking-tight text-foreground">{techCount}</p>
                  <p className="mt-1 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Tech Stacks</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-extrabold tracking-tight text-foreground">{categories.length}</p>
                  <p className="mt-1 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">Categories</p>
                </div>
              </div>

              {/* Active Categories Tags */}
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Active Categories</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {categories.map((category) => (
                    <span key={category} className="rounded-md bg-background border border-border px-2.5 py-1 text-xs font-semibold text-foreground">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Tech Stack Icons */}
            <div className="mt-6 border-t border-border pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Featured Stacks</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['React', 'Next.js', 'Flutter', 'Firebase', 'Supabase', 'Gemini AI', 'Tailwind'].map((tech) => (
                  <span key={tech} className="rounded-md bg-mint/55 text-emerald-950 px-2 py-0.5 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredProject ? (
        <section id="featured-project" className="border-b border-border bg-white/45 py-16 sm:py-20">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-lg border border-border bg-white/80 p-6 shadow-soft">
                <span
                  className={cn(
                    'inline-flex rounded-md px-3 py-1.5 text-sm font-semibold',
                    accentClasses[featuredProject.accent] ?? accentClasses.mint,
                  )}
                >
                  Featured project
                </span>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  {featuredProject.overview}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/projects/${featuredProject.slug}`}
                  className={cn(buttonVariants(), 'mt-7 w-fit')}
                >
                  Open Details
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-lg border border-border bg-white/80 p-4 shadow-soft">
                <div className="rounded-md border border-border bg-background p-4">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-coral" />
                      <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                      <span className="h-2.5 w-2.5 rounded-full bg-aqua" />
                    </div>
                    <span className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-muted-foreground">
                      Project Preview
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <PreviewRow label="Amount" value={featuredProject.amount} color="bg-mint" />
                    <PreviewRow label="Top features" value={featuredProject.features.slice(0, 4).join(', ')} color="bg-aqua" />
                    <PreviewRow label="Timeline" value={featuredProject.timeline} color="bg-lime" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section id="project-library" className="py-16 sm:py-20">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow="Project library"
              title="Pre-built ideas ready to customize."
              description="Use the category chips to understand the available types. Each card opens a detail page with features, tech stack, deliverables, and timeline."
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#project-library"
                  className="rounded-md border border-border bg-white/80 px-3 py-2 text-xs font-semibold text-muted-foreground shadow-soft transition-colors hover:border-primary/30 hover:bg-mint/50 hover:text-foreground"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-5 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{label}</p>
    </div>
  )
}

function PreviewRow({ label, value, color }) {
  return (
    <div className="rounded-md border border-border bg-white p-4">
      <div className="flex items-start gap-3">
        <span className={cn('mt-1 h-10 w-2 shrink-0 rounded-full', color)} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{label}</p>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">{value}</p>
        </div>
      </div>
    </div>
  )
}
