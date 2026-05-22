import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

import { SectionHeader } from '../components/SectionHeader'
import { buttonVariants } from '../components/ui/button'
import { getServiceBySlug } from '../data/services'
import { cn } from '../lib/utils'

export function ServiceDetailPage({ slug }) {
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <a href="/services" className={cn(buttonVariants({ variant: 'outline' }), 'mb-8 w-fit')}>
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </a>
          <SectionHeader
            eyebrow="Service not found"
            title="This service is not available."
            description="No service matched this URL."
          />
        </div>
      </section>
    )
  }

  const Icon = service.icon

  return (
    <>
      <section className="border-b border-border py-10 sm:py-14">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <a href="/services" className={cn(buttonVariants({ variant: 'outline' }), 'mb-8 w-fit')}>
            <ArrowLeft className="h-4 w-4" />
            Back to services
          </a>

          <div className="grid gap-8 lg:grid-cols-[1fr_22rem] xl:grid-cols-[1fr_24rem] lg:items-start">
            <div>
              <div className="flex items-center gap-4">
                <span className={cn('grid h-16 w-16 shrink-0 place-items-center rounded-xl', service.color)}>
                  <Icon className="h-8 w-8" />
                </span>
                <span className="inline-flex rounded-md bg-muted px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {service.audience}
                </span>
              </div>
              
              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-5xl text-lg leading-8 text-muted-foreground">
                {service.text}
              </p>
              <p className="mt-4 max-w-6xl text-base leading-8 text-muted-foreground">
                {service.longDescription}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Investment
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
                {service.price}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Typical timeline: <span className="font-medium text-foreground">{service.timeline}</span>
              </p>
              <a href={`/start-project?service=${service.slug}`} className={cn(buttonVariants(), 'mt-5 w-full')}>
                Inquire about this
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid w-full gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-8">
            <SimpleBlock title="Core Technologies">
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-white/80 px-3 py-2 text-sm font-semibold text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SimpleBlock>
            
            <SimpleBlock title="What's Included">
              <div className="flex flex-wrap gap-2">
                {service.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className={cn('rounded-md px-3 py-2 text-sm font-semibold', service.color)}
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </SimpleBlock>
          </div>

          <SimpleBlock title="Why choose us for this">
            <div className="grid gap-3 sm:grid-cols-1">
              {service.benefits.map((benefit) => (
                <div className="flex items-center gap-3 rounded-md border border-border bg-white/80 p-4 shadow-sm" key={benefit}>
                  <Sparkles className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </SimpleBlock>
        </div>
      </section>
    </>
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
