import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { freelancerProjects } from '../data/projects'

export function StartupsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="For startups"
          title="MVPs, websites, dashboards, and AI tools built for real validation."
          description="Founder-friendly execution: clear scope, polished UI, practical architecture, and a launch path that helps you test quickly."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {freelancerProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
