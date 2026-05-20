import { ArrowUpRight, Menu, Sparkles } from 'lucide-react'

import { Button, buttonVariants } from './ui/button'
import { cn } from '../lib/utils'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
]

export function SiteHeader() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="group relative flex items-center gap-3"
          aria-label="DevStudio Labs home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/25 bg-mint shadow-soft transition-transform duration-200 group-hover:-translate-y-0.5">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-wide text-foreground transition-colors group-hover:text-primary">
              DevStudio Labs
            </span>
            <span className="mt-1 text-[11px] font-medium uppercase text-muted-foreground">
              Creative Tech Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href === '/projects' && pathname.startsWith('/projects/'))

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'group relative overflow-hidden border border-transparent',
                  isActive &&
                    'border-primary/20 bg-white/80 text-foreground shadow-soft',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <span
                  className={cn(
                    'absolute inset-x-3 bottom-1 h-1 rounded-full transition-transform duration-200 group-hover:scale-x-100',
                    isActive ? 'scale-x-100' : 'scale-x-0',
                    index % 4 === 0 && 'bg-mint',
                    index % 4 === 1 && 'bg-aqua',
                    index % 4 === 2 && 'bg-sky',
                    index % 4 === 3 && 'bg-lime',
                  )}
                />
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/contact"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              pathname === '/contact' &&
                'border-primary/30 bg-mint/70 text-primary',
            )}
            aria-current={pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </a>
          <a
            href="/start-project"
            className={cn(
              buttonVariants({ size: 'sm' }),
              'bg-primary text-primary-foreground shadow-glow hover:bg-primary/90',
              pathname === '/start-project' && 'ring-2 ring-primary/25',
            )}
            aria-current={pathname === '/start-project' ? 'page' : undefined}
          >
            Start Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="border-primary/25 bg-mint text-primary lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </header>
  )
}
