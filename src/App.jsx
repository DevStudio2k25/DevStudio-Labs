import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { StartProjectPage } from './pages/StartProjectPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { CookiesPage } from './pages/CookiesPage'

const routes = {
  '/': HomePage,
  '/services': ServicesPage,
  '/projects': ProjectsPage,
  '/about': AboutPage,
  '/contact': StartProjectPage,
  '/start-project': StartProjectPage,
  '/privacy': PrivacyPage,
  '/terms': TermsPage,
  '/cookies': CookiesPage,
}

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const projectDetailMatch = pathname.match(/^\/projects\/([^/]+)$/)
  const serviceDetailMatch = pathname.match(/^\/services\/([^/]+)$/)
  const Page = routes[pathname] ?? HomePage
  const showFooter = !['/privacy', '/terms', '/cookies'].includes(pathname)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {projectDetailMatch ? (
          <ProjectDetailPage slug={projectDetailMatch[1]} />
        ) : serviceDetailMatch ? (
          <ServiceDetailPage slug={serviceDetailMatch[1]} />
        ) : (
          <Page />
        )}
      </main>
      {showFooter && <SiteFooter />}
    </div>
  )
}

export default App
