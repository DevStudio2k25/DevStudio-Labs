import { ArrowUpRight, Clock, Layers3 } from 'lucide-react'

import { cn } from '../lib/utils'

const accentClasses = {
  mint: 'bg-mint text-emerald-900',
  aqua: 'bg-aqua text-cyan-900',
  sky: 'bg-sky text-blue-900',
  lime: 'bg-lime text-lime-950',
  coral: 'bg-coral text-rose-900',
}

export function ProjectCard({ project }) {
  return (
    <a
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-lg border border-border bg-white/80 p-4 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-primary/35"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          <span
            className={cn(
              'rounded-md px-2.5 py-1 text-xs font-semibold',
              accentClasses[project.accent] ?? accentClasses.mint,
            )}
          >
            {project.category}
          </span>
          {project.hasAdminPanel && (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
              Admin + User
            </span>
          )}
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {project.timeline}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Layers3 className="h-3.5 w-3.5" />
          {project.features.length} features
        </span>
      </div>
    </a>
  )
}
