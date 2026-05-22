import { BadgeCheck, BrainCircuit, Code2, Layers3, Rocket } from 'lucide-react'

import { SectionHeader } from '../components/SectionHeader'

const principles = [
  ['Product thinking first', 'We define the user, goal, flow, and demo story before jumping into screens.'],
  ['Premium UI, practical build', 'The work should feel modern, but still stay clean, usable, and easy to explain.'],
  ['Modern stack choices', 'React, Flutter, AI APIs, dashboards, and backend tools are selected based on the project need.'],
  ['Delivery-ready output', 'Students get presentation confidence. Founders get a product they can show, test, and improve.'],
]

const capabilities = [
  [Code2, 'Web systems'],
  [BrainCircuit, 'AI products'],
  [Layers3, 'Dashboards'],
  [Rocket, 'MVP launches'],
]

export function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-16 sm:py-20">
        <div className="absolute right-10 top-12 hidden h-32 w-32 rounded-full bg-mint/70 blur-3xl lg:block" />
        <div className="mx-auto grid w-full gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <SectionHeader
            eyebrow="About DevStudio Labs"
            title="A creative development studio for students, founders, and modern teams."
            description="We build polished final year projects, apps, AI tools, websites, and MVPs with a product mindset. The goal is simple: make ideas feel real, useful, and presentation-ready."
          />

          <div className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-mint text-primary">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-semibold text-foreground">What makes us different</h2>
                <p className="text-sm text-muted-foreground">Affordable builds with premium product feel</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {capabilities.map(([Icon, label]) => (
                <div key={label} className="rounded-md bg-background p-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How we think"
            title="We treat every project like a small product."
            description="Even a student project should have a clean story, usable screens, a sensible tech stack, and a demo flow that makes sense."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {principles.map(([title, text], index) => (
              <div key={title} className="rounded-lg border border-border bg-white/80 p-6 shadow-soft">
                <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
