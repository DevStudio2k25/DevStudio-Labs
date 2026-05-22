import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react'

import { Button, buttonVariants } from './ui/button'
import { cn } from '../lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
]

export function SiteHeader() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border" />
      <div className="mx-auto flex h-[4.75rem] w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="group relative flex items-center gap-3 rounded-full bg-white/55 py-1.5 pl-1.5 pr-4 shadow-soft ring-1 ring-border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
          aria-label="DevStudio Labs home"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-primary transition-transform duration-200 group-hover:rotate-6">
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

        <nav className="hidden items-center gap-2 rounded-full bg-white/60 p-1.5 shadow-soft ring-1 ring-border lg:flex" aria-label="Main navigation">
          {navItems.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href === '/projects' && pathname.startsWith('/projects/'))

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full px-5 text-sm font-semibold transition-all duration-200',
                  isActive
                    ? 'bg-background text-foreground shadow-soft'
                    : 'text-muted-foreground hover:bg-white/75 hover:text-foreground',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <span
                  className={cn(
                    'absolute bottom-1.5 left-1/2 h-1 rounded-full transition-all duration-200 group-hover:w-6 group-hover:-translate-x-1/2',
                    isActive ? 'w-6 -translate-x-1/2' : 'w-0 -translate-x-1/2',
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
            href="/start-project"
            className={cn(
              'group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-foreground px-5 text-sm font-semibold text-background shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground',
              pathname === '/start-project' && 'ring-2 ring-primary/25',
            )}
            aria-current={pathname === '/start-project' ? 'page' : undefined}
          >
            Start Project
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-transform duration-200 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-full border-border bg-white/80 text-primary shadow-soft lg:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      {isMenuOpen ? (
      <div className="fixed inset-0 z-50 lg:hidden">
        <button
          type="button"
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          aria-label="Close menu overlay"
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className="absolute right-3 top-3 flex h-[calc(100vh-1.5rem)] w-[min(22rem,calc(100vw-1.5rem))] animate-[mobileSheetIn_220ms_ease-out] flex-col overflow-hidden rounded-lg border border-border bg-background shadow-soft"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between border-b border-border bg-white/70 p-4">
            <a
              href="/"
              className="flex items-center gap-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="grid h-10 w-10 place-items-center rounded-md border border-primary/25 bg-mint shadow-soft">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-wide text-foreground">
                  DevStudio Labs
                </span>
                <span className="mt-1 text-[11px] font-medium uppercase text-muted-foreground">
                  Creative Tech Studio
                </span>
              </span>
            </a>

            <Button
              variant="outline"
              size="icon"
              className="border-primary/25 bg-white text-primary"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          <nav className="grid gap-2 p-4" aria-label="Mobile navigation links">
            {navItems.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.href === '/projects' && pathname.startsWith('/projects/'))

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group flex items-center justify-between rounded-md border border-border bg-white/70 p-4 text-sm font-semibold text-foreground transition-all',
                    isActive
                      ? 'border-primary/25 bg-mint/65 text-primary'
                      : 'hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        'h-3 w-3 rounded-full',
                        index % 4 === 0 && 'bg-mint',
                        index % 4 === 1 && 'bg-aqua',
                        index % 4 === 2 && 'bg-sky',
                        index % 4 === 3 && 'bg-lime',
                      )}
                    />
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              )
            })}
          </nav>

          <div className="mt-auto border-t border-border bg-white/65 p-4">
            <div className="rounded-md bg-background p-3">
              <p className="text-sm font-semibold text-foreground">
                Ready to build something?
              </p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Share your idea and we will shape the project scope.
              </p>
            </div>
            <div className="mt-3 grid gap-2">
              <a
                href="/start-project"
                className={cn(buttonVariants(), 'w-full')}
                onClick={() => setIsMenuOpen(false)}
              >
                Start Project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </aside>
      </div>
      ) : null}
    </header>
  )
}
