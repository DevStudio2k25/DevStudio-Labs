import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import { studentProjects } from '../data/projects'

export function StudentsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="For students"
          title="Premium final year projects without the boring project feel."
          description="Project ideas, source code, documentation, PPT, setup guidance, and demo flows designed for confident presentations."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {studentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
