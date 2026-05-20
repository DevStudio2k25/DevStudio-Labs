import { SectionHeader } from '../components/SectionHeader'

const briefSteps = ['Choose service', 'Share idea', 'Select timeline', 'Get build plan']

export function StartProjectPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Start project"
          title="A focused project brief flow will live here."
          description="For now this is the page foundation. Next we can make it a beautiful multi-step form."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {briefSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
              <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
              <h3 className="mt-3 font-semibold text-foreground">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
