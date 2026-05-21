const projectModules = import.meta.glob('./projects/*.json', {
  eager: true,
})

export const allProjects = Object.values(projectModules).map((module) => module.default)

export const featuredProjects = allProjects.filter((project) => project.featured)

export function getProjectBySlug(slug) {
  return allProjects.find((project) => project.slug === slug)
}
