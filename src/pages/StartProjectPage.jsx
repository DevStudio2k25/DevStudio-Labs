import { useMemo, useState } from 'react'
import { ArrowRight, Check, Clipboard, MessageCircle, Send } from 'lucide-react'

import { SectionHeader } from '../components/SectionHeader'
import { buttonVariants } from '../components/ui/button'
import { getProjectBySlug } from '../data/projects'
import { cn } from '../lib/utils'

const whatsappNumber = '917073949813'

const initialBrief = {
  name: '',
  contactMethod: 'WhatsApp',
  whatsapp: '',
  email: '',
  projectType: 'Final year project',
  budget: 'Need guidance',
  timeline: 'Need guidance',
  customTimeline: '',
  title: '',
  details: '',
  hasReferences: false,
  references: '',
  needPPT: false,
}

const projectTypes = [
  'Final year project',
  'Pre-built project customization',
  'Flutter app',
  'AI product',
  'Modern website',
  'Startup MVP',
]

const budgets = [
  'Need guidance',
  'Student budget',
  'Small MVP budget',
  'Premium product build',
]

const contactMethods = ['WhatsApp', 'Email', 'Both']

const timelines = [
  'Need guidance',
  '3-5 days',
  '1 week',
  '10-15 days',
  '2-3 weeks',
  '1 month',
  'Custom timeline',
]

export function StartProjectPage() {
  const selectedProject = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    const projectSlug = params.get('project')

    return projectSlug ? getProjectBySlug(projectSlug) : null
  }, [])

  const [brief, setBrief] = useState(() => {
    if (!selectedProject) return initialBrief

    return {
      ...initialBrief,
      projectType: 'Pre-built project customization',
      budget: selectedProject.amount ?? 'Need guidance',
      timeline: selectedProject.timeline ?? 'Need guidance',
      title: selectedProject.title,
      details: `I am interested in the "${selectedProject.title}" project.\n\nCategory: ${selectedProject.category}\nIncluded features:\n- ${selectedProject.features.join('\n- ')}\n\nTech stack:\n- ${selectedProject.techStack.join('\n- ')}`,
      hasReferences: false,
      references: '',
    }
  })
  const [copied, setCopied] = useState(false)

  const message = useMemo(() => createBriefMessage(brief), [brief])
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  function updateBrief(field, value) {
    setBrief((current) => ({ ...current, [field]: value }))
    setCopied(false)
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(message)
    setCopied(true)
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-16 sm:py-20">
        <div className="absolute right-10 top-12 hidden h-32 w-32 rounded-full bg-mint/70 blur-3xl lg:block" />
        <div className="mx-auto grid w-full gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <SectionHeader
            eyebrow="Start project"
            title="Fill the brief. We turn it into a clear WhatsApp message."
            description="No database needed right now. Your inputs generate a clean project request that you can copy or send directly to DevStudio Labs on WhatsApp."
          />

          <div className="rounded-lg border border-border bg-white/80 p-5 shadow-soft">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-mint text-primary">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-semibold text-foreground">How it works</h2>
                <p className="text-sm text-muted-foreground">Fill, review, copy, or send on WhatsApp.</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {['Choose project type', 'Add your details', 'Review generated message', 'Send on WhatsApp'].map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-md bg-background p-3">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-white text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/45 border-b border-border py-12">
        <div className="mx-auto w-[92vw] max-w-[100rem] px-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            
            <div className="rounded-lg border border-border bg-white p-5 shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">Tier 1: Basic Customization</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">₹4,000 - ₹6,000</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Simple landing pages, portfolio websites, offline mobile app interfaces, and minor academic projects.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-5 shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">Tier 2: Intermediate SaaS</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">₹8,000 - ₹11,000</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Dynamic databases (Supabase, Firebase), user accounts, basic API tools, and multi-screen apps (like DevStudio & DevGPT).
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-5 shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">Tier 3: Flagship Enterprise</span>
              <h3 className="mt-2 text-xl font-bold text-foreground">₹12,000 - ₹15,000+</h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Role-based administrative dashboards, dynamic PDF generation, Recharts analytics, and complex web apps (like MentorHub).
              </p>
            </div>

            <div className="rounded-lg border border-primary/20 bg-mint/45 p-5 shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  💡 Flexible Budget
                </span>
                <h3 className="mt-2.5 text-sm font-semibold text-emerald-950">Worried about the cost?</h3>
                <p className="mt-1 text-xs leading-5 text-emerald-950/70">
                  Talk to us! We can adjust the features to match your exact budget, or recommend an excellent alternative project that fits your budget.
                </p>
              </div>
              <a href="https://wa.me/917073949813?text=Hi%20DevStudio%20Labs%2C%20I%20want%20to%20discuss%20a%20project%20in%20my%20custom%20budget." target="_blank" rel="noreferrer" className="mt-4 text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                Direct WhatsApp Chat &rarr;
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <form
            className="rounded-lg border border-border bg-white/80 p-6 shadow-soft sm:p-8"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Project brief
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Add as much detail as you know. Empty fields will stay marked as not provided.
            </p>
            {selectedProject ? (
              <div className="mt-5 rounded-md border border-primary/20 bg-mint/55 p-4">
                <p className="text-sm font-semibold text-primary">
                  Selected project: {selectedProject.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  We pre-filled the brief with this project's features and tech stack.
                </p>
              </div>
            ) : null}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Your name">
                <Input
                  placeholder="Your full name"
                  value={brief.name}
                  onChange={(event) => updateBrief('name', event.target.value)}
                />
              </Field>
              <Field label="Preferred contact">
                <CustomSelect
                  value={brief.contactMethod}
                  options={contactMethods}
                  onChange={(value) => updateBrief('contactMethod', value)}
                />
              </Field>
              {(brief.contactMethod === 'WhatsApp' || brief.contactMethod === 'Both') ? (
                <Field label="WhatsApp number">
                  <Input
                    placeholder="Your WhatsApp number"
                    value={brief.whatsapp}
                    onChange={(event) => updateBrief('whatsapp', event.target.value)}
                  />
                </Field>
              ) : null}
              {(brief.contactMethod === 'Email' || brief.contactMethod === 'Both') ? (
                <Field label="Email address">
                  <Input
                    placeholder="your@email.com"
                    value={brief.email}
                    onChange={(event) => updateBrief('email', event.target.value)}
                  />
                </Field>
              ) : null}
              <Field label="Project type">
                <CustomSelect
                  value={brief.projectType}
                  options={projectTypes}
                  onChange={(value) => updateBrief('projectType', value)}
                />
              </Field>
              <Field label="Budget range">
                <CustomSelect
                  value={brief.budget}
                  options={budgets}
                  onChange={(value) => updateBrief('budget', value)}
                />
              </Field>
              <Field label="Timeline">
                <CustomSelect
                  value={brief.timeline}
                  options={timelines}
                  onChange={(value) => updateBrief('timeline', value)}
                />
              </Field>
              {brief.timeline === 'Custom timeline' ? (
                <Field label="Custom timeline">
                  <Input
                    placeholder="Example: 12 days, before 20 June"
                    value={brief.customTimeline}
                    onChange={(event) => updateBrief('customTimeline', event.target.value)}
                  />
                </Field>
              ) : null}
              <Field label="Project title / idea">
                <Input
                  placeholder="Example: AI Study Companion"
                  value={brief.title}
                  onChange={(event) => updateBrief('title', event.target.value)}
                />
              </Field>
            </div>

            <Field className="mt-4" label="Project details">
              <Textarea
                placeholder="Features, pages, modules, login roles, documentation, demo needs..."
                value={brief.details}
                onChange={(event) => updateBrief('details', event.target.value)}
              />
            </Field>

            <div className="mt-4 rounded-lg border border-border bg-white/70 p-4 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Reference links
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Add examples, screenshots, or inspiration links only if you have them.
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 rounded-md border border-border bg-background p-1 sm:w-40">
                  {[
                    { label: 'No', value: false },
                    { label: 'Yes', value: true },
                  ].map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      className={cn(
                        'h-9 rounded-sm text-sm font-semibold transition-all',
                        brief.hasReferences === option.value
                          ? 'bg-primary text-primary-foreground shadow-glow'
                          : 'text-muted-foreground hover:bg-white hover:text-foreground',
                      )}
                      aria-pressed={brief.hasReferences === option.value}
                      onClick={() => updateBrief('hasReferences', option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {brief.hasReferences ? (
                <Field className="mt-4" label="Reference links">
                  <Textarea
                    placeholder="Paste website/app/project references, GitHub links, screenshots links, or notes."
                    value={brief.references}
                    onChange={(event) => updateBrief('references', event.target.value)}
                  />
                </Field>
              ) : null}
            </div>

            <div className="mt-4 rounded-lg border border-border bg-white/70 p-4 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Presentation (PPT) Add-on
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Do you want us to design a premium, viva-ready presentation deck? (Fixed charge of +₹1,500)
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 rounded-md border border-border bg-background p-1 sm:w-40">
                  {[
                    { label: 'No', value: false },
                    { label: 'Yes', value: true },
                  ].map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      className={cn(
                        'h-9 rounded-sm text-sm font-semibold transition-all',
                        brief.needPPT === option.value
                          ? 'bg-primary text-primary-foreground shadow-glow'
                          : 'text-muted-foreground hover:bg-white hover:text-foreground',
                      )}
                      aria-pressed={brief.needPPT === option.value}
                      onClick={() => updateBrief('needPPT', option.value)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-fit')} onClick={copyMessage}>
                {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy Message'}
              </button>
              <button type="submit" className={cn(buttonVariants(), 'w-full sm:w-fit')}>
                Send on WhatsApp
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          <aside className="rounded-lg border border-border bg-white/80 p-5 shadow-soft lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <h2 className="font-semibold text-foreground">Generated message</h2>
                <p className="text-sm text-muted-foreground">Updates live as you type</p>
              </div>
              <span className="rounded-md bg-mint px-2.5 py-1 text-xs font-semibold text-primary">
                Draft
              </span>
            </div>
            <pre className="mt-4 max-h-[34rem] overflow-auto whitespace-pre-wrap rounded-md border border-border bg-background p-4 text-sm leading-6 text-foreground">
              {message}
            </pre>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants(), 'mt-4 w-full')}
            >
              Direct WhatsApp Send
              <ArrowRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>
    </>
  )
}

function createBriefMessage(brief) {
  const value = (text) => text?.trim() || 'Not provided'
  const contactLines = [`Preferred contact: ${value(brief.contactMethod)}`]

  if (brief.contactMethod === 'WhatsApp' || brief.contactMethod === 'Both') {
    contactLines.push(`WhatsApp: ${value(brief.whatsapp)}`)
  }

  if (brief.contactMethod === 'Email' || brief.contactMethod === 'Both') {
    contactLines.push(`Email: ${value(brief.email)}`)
  }

  const referenceSection = brief.hasReferences
    ? `

Reference links:
${value(brief.references)}`
    : ''

  const pptLine = brief.needPPT ? `\nPresentation (PPT) Add-on: Yes (+ ₹1,500 fixed charge)` : `\nPresentation (PPT) Add-on: No`

  return `Hi DevStudio Labs,

I want to start a project. Here are my details:

Name: ${value(brief.name)}
${contactLines.join('\n')}
Project type: ${value(brief.projectType)}
Budget range: ${value(brief.budget)}
Timeline: ${brief.timeline === 'Custom timeline' ? value(brief.customTimeline) : value(brief.timeline)}
Project title / idea: ${value(brief.title)}${pptLine}

Project details:
${value(brief.details)}${referenceSection}

Please review this brief and share the next steps.`
}

function Field({ label, className, children }) {
  return (
    <label className={cn('block', className)}>
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
      {children}
    </label>
  )
}

function Input(props) {
  const { value, ...inputProps } = props

  return (
    <input
      className="h-11 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
      type="text"
      value={value ?? ''}
      {...inputProps}
    />
  )
}

function Textarea(props) {
  const { value, ...textareaProps } = props

  return (
    <textarea
      className="min-h-32 w-full resize-y rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
      value={value ?? ''}
      {...textareaProps}
    />
  )
}

function CustomSelect({ value, options, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        className={cn(
          'flex h-11 w-full items-center justify-between rounded-md border border-border bg-background px-3 text-left text-sm font-medium text-foreground outline-none transition-all',
          isOpen ? 'border-primary ring-2 ring-primary/15' : 'hover:border-primary/35 hover:bg-white',
        )}
        onClick={() => setIsOpen((current) => !current)}
      >
        {value}
        <ArrowRight className={cn('h-4 w-4 text-muted-foreground transition-transform', isOpen && 'rotate-90 text-primary')} />
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
                  selected ? 'bg-mint text-foreground' : 'text-muted-foreground hover:bg-background hover:text-foreground',
                )}
                onClick={() => {
                  onChange(option)
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
