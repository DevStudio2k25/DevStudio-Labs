import { useState } from 'react'
import {
  ArrowRight,
  AtSign,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'

import { SectionHeader } from '../components/SectionHeader'
import { buttonVariants } from '../components/ui/button'
import { cn } from '../lib/utils'

const handles = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 00000 00000',
    href: 'https://wa.me/910000000000',
    color: 'bg-mint text-emerald-900',
  },
  {
    icon: AtSign,
    label: 'Instagram',
    value: '@devstudiolabs',
    href: 'https://instagram.com/devstudiolabs',
    color: 'bg-coral text-rose-900',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@devstudiolabs.dev',
    href: 'mailto:hello@devstudiolabs.dev',
    color: 'bg-aqua text-cyan-900',
  },
  {
    icon: Phone,
    label: 'Call',
    value: 'Book after brief',
    href: '/start-project',
    color: 'bg-lime text-lime-950',
  },
]

const projectTypeOptions = [
  'Final year project',
  'Flutter app',
  'AI product',
  'Modern website',
  'Startup MVP',
]

const budgetOptions = [
  'Need guidance',
  'Student budget',
  'Small MVP budget',
  'Premium product build',
]

export function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-16 sm:py-20">
        <div className="absolute bottom-8 right-10 hidden h-32 w-32 rounded-full bg-aqua/70 blur-3xl lg:block" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <SectionHeader
            eyebrow="Contact us"
            title="Tell us what you want to build."
            description="Share the idea, project type, deadline, and any reference you like. We will help shape it into a clear build plan."
          />

          <div className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-mint text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-semibold text-foreground">Based in India</h2>
                <p className="text-sm text-muted-foreground">Available for remote student and startup builds</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {handles.map((handle) => {
                const Icon = handle.icon

                return (
                  <a
                    key={handle.label}
                    href={handle.href}
                    className="group flex items-center justify-between rounded-md border border-border bg-background p-3 transition-colors hover:border-primary/30 hover:bg-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className={cn('grid h-10 w-10 place-items-center rounded-md', handle.color)}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">{handle.label}</span>
                        <span className="block text-sm text-muted-foreground">{handle.value}</span>
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-white/80 p-6 shadow-soft sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Quick project brief
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Fill this quick brief so we can understand the project type, timeline,
              and scope before discussing the build.
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Project type">
                  <CustomSelect
                    name="projectType"
                    options={projectTypeOptions}
                    defaultValue="Final year project"
                  />
                </Field>
                <Field label="Budget range">
                  <CustomSelect
                    name="budgetRange"
                    options={budgetOptions}
                    defaultValue="Need guidance"
                  />
                </Field>
                <Field label="Timeline">
                  <input
                    className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                    placeholder="Example: 10 days, 3 weeks"
                    type="text"
                  />
                </Field>
                <Field label="WhatsApp / Email">
                  <input
                    className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                    placeholder="Your contact handle"
                    type="text"
                  />
                </Field>
              </div>
              <Field className="mt-4" label="Project details">
                <textarea
                  className="min-h-36 w-full resize-y rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
                  placeholder="Tell us the idea, required features, references, tech preference, and deadline."
                />
              </Field>
              <button type="submit" className={cn(buttonVariants(), 'mt-5 w-fit')}>
                Save Brief Draft
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, className, children }) {
  return (
    <label className={cn('block', className)}>
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  )
}

function CustomSelect({ name, options, defaultValue }) {
  const [value, setValue] = useState(defaultValue ?? options[0])
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        className={cn(
          'flex h-11 w-full items-center justify-between rounded-md border border-border bg-background px-3 text-left text-sm font-medium text-foreground outline-none transition-all',
          isOpen
            ? 'border-primary ring-2 ring-primary/15'
            : 'hover:border-primary/35 hover:bg-white',
        )}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{value}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-muted-foreground transition-transform',
            isOpen && 'rotate-180 text-primary',
          )}
        />
      </button>

      {isOpen ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-md border border-border bg-white p-1.5 shadow-soft">
          {options.map((option) => {
            const selected = option === value

            return (
              <button
                key={option}
                type="button"
                className={cn(
                  'flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors',
                  selected
                    ? 'bg-mint text-foreground'
                    : 'text-muted-foreground hover:bg-background hover:text-foreground',
                )}
                onClick={() => {
                  setValue(option)
                  setIsOpen(false)
                }}
              >
                {option}
                {selected ? <Check className="h-4 w-4 text-primary" /> : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
