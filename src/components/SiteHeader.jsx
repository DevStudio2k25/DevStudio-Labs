import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react'

import { Button, buttonVariants } from './ui/button'
import { cn } from '../lib/utils'

const navItems = [
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
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          className={cn(
            'absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300',
            isMenuOpen ? 'opacity-100' : 'opacity-0',
          )}
          aria-label="Close menu overlay"
          onClick={() => setIsMenuOpen(false)}
        />

        <aside
          className={cn(
            'absolute right-3 top-3 flex h-[calc(100vh-1.5rem)] w-[min(22rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-lg border border-border bg-background shadow-soft transition-all duration-300',
            isMenuOpen
              ? 'translate-x-0 opacity-100'
              : 'translate-x-6 opacity-0',
          )}
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
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'w-full',
                  pathname === '/contact' && 'border-primary/30 bg-mint/70 text-primary',
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
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
    </header>
  )
}
