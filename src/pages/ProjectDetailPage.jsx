import { ArrowLeft, ArrowRight, CheckCircle2, Image, Monitor, Smartphone, Sparkles } from 'lucide-react'

import { SectionHeader } from '../components/SectionHeader'
import { buttonVariants } from '../components/ui/button'
import { getProjectBySlug } from '../data/projects'
import { cn } from '../lib/utils'

const accentClasses = {
  mint: 'bg-mint text-emerald-900',
  aqua: 'bg-aqua text-cyan-900',
  sky: 'bg-sky text-blue-900',
  lime: 'bg-lime text-lime-950',
  coral: 'bg-coral text-rose-900',
}

export function ProjectDetailPage({ slug }) {
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-[92vw] max-w-[100rem] px-0">
          <a href="/projects" className={cn(buttonVariants({ variant: 'outline' }), 'mb-8 w-fit')}>
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </a>
          <SectionHeader
            eyebrow="Project not found"
            title="This project is not available yet."
            description="No project matched this URL."
          />
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="border-b border-border py-10 sm:py-14">
        <div className="mx-auto w-[92vw] max-w-[100rem] px-0">
          <a href="/projects" className={cn(buttonVariants({ variant: 'outline' }), 'mb-8 w-fit')}>
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </a>

          <div className="grid gap-8 lg:grid-cols-[1fr_22rem] xl:grid-cols-[1fr_24rem] lg:items-start">
            <div>
              <span
                className={cn(
                  'inline-flex rounded-md px-3 py-1.5 text-sm font-semibold',
                  accentClasses[project.accent] ?? accentClasses.mint,
                )}
              >
                {project.category}
              </span>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-5xl text-lg leading-8 text-muted-foreground">
                {project.overview}
              </p>
              {project.longDescription ? (
                <p className="mt-4 max-w-6xl text-base leading-8 text-muted-foreground">
                  {project.longDescription}
                </p>
              ) : null}
            </div>

            <div className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Amount
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                {project.amount ?? 'Custom quote'}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Final price depends on features, timeline, documentation, and customization.
              </p>
              <a href={`/start-project?project=${project.slug}`} className={cn(buttonVariants(), 'mt-5 w-full')}>
                Get this project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid w-[92vw] max-w-[100rem] gap-8 px-0 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-8">
            <SimpleBlock title="Tech stack">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-white/80 px-3 py-2 text-sm font-semibold text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SimpleBlock>

            <SimpleBlock title="Logo / identity">
              <div className="flex items-center gap-4 rounded-lg border border-border bg-white/80 p-4">
                {project.media?.logo ? (
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                    <img
                      src={project.media.logo}
                      alt={`${project.title} logo`}
                      className="max-h-16 max-w-16 object-contain"
                    />
                  </div>
                ) : (
                  <span className={cn('grid h-16 w-16 place-items-center rounded-lg', accentClasses[project.accent] ?? accentClasses.mint)}>
                    <Sparkles className="h-7 w-7" />
                  </span>
                )}
                <div>
                  <h2 className="font-semibold text-foreground">{project.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{project.category}</p>
                </div>
              </div>
            </SimpleBlock>
          </div>

          <SimpleBlock title="What is included">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-md border border-border bg-white/80 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </SimpleBlock>
        </div>
      </section>

      <section className="border-t border-border bg-white/45 py-14 sm:py-16">
        <div className="mx-auto w-[92vw] max-w-[100rem] px-0">
          <div className="space-y-10">
            <ScreenshotCarousel
              title="Desktop screenshots"
              icon={Monitor}
              aspect="aspect-[16/10]"
              items={project.media?.desktopScreenshots}
              fallback={['Dashboard desktop', 'Main workflow desktop', 'Details desktop']}
            />
            <ScreenshotCarousel
              title="Mobile screenshots"
              icon={Smartphone}
              aspect="aspect-[9/16]"
              mobile
              items={project.media?.mobileScreenshots}
              fallback={['Home mobile', 'Menu mobile', 'Form mobile']}
            />
          </div>
        </div>
      </section>
    </>
  )
}

function ScreenshotCarousel({ title, icon: Icon, items, fallback, aspect, mobile = false }) {
  const slides = items?.length ? items : fallback.map((label) => ({ label, src: '' }))
  const loopSlides = [...slides, ...slides, ...slides, ...slides]

  return (
    <section>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-mint text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      </div>

      <div className="relative mt-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white/80 to-transparent backdrop-blur-[1px]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white/80 to-transparent backdrop-blur-[1px]" />
        <div
          className={cn(
            'flex w-max gap-4 will-change-transform',
            mobile
              ? 'animate-[carouselScrollMobile_24s_linear_infinite]'
              : 'animate-[carouselScrollDesktop_30s_linear_infinite]',
          )}
        >
        {loopSlides.map((slide, index) => (
          <div
            key={`${slide.label}-${index}`}
            className={cn(
              'rounded-lg border border-border bg-background p-4 shadow-soft',
              mobile ? 'w-56 shrink-0' : 'w-[34rem] max-w-[85vw] shrink-0',
            )}
          >
            <div className={cn('overflow-hidden rounded-md border border-border bg-white', aspect)}>
              {slide.src ? (
                <img
                  src={slide.src}
                  alt={slide.label}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center border border-dashed border-border bg-white/70 text-center">
                  <Image className="h-7 w-7 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{slide.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Screenshot placeholder</p>
                </div>
              )}
            </div>
            <p className="mt-3 text-sm font-semibold text-foreground">{slide.label}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

function SimpleBlock({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}
