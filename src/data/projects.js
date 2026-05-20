const studentProjectModules = import.meta.glob('./students/projects/*.json', {
  eager: true,
})

const freelancerProjectModules = import.meta.glob('./freelancer/projects/*.json', {
  eager: true,
})

function normalizeProjects(modules) {
  return Object.values(modules).map((module) => module.default)
}

export const studentProjects = normalizeProjects(studentProjectModules)

export const freelancerProjects = normalizeProjects(freelancerProjectModules)

export const allProjects = [...studentProjects, ...freelancerProjects]

export const featuredProjects = allProjects.filter((project) => project.featured)

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug)
}
