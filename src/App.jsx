import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServicesPage } from './pages/ServicesPage'
import { StartProjectPage } from './pages/StartProjectPage'

const routes = {
  '/': HomePage,
  '/services': ServicesPage,
  '/projects': ProjectsPage,
  '/about': AboutPage,
  '/contact': StartProjectPage,
  '/start-project': StartProjectPage,
}

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const projectDetailMatch = pathname.match(/^\/projects\/([^/]+)$/)
  const Page = routes[pathname] ?? HomePage

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {projectDetailMatch ? (
          <ProjectDetailPage slug={projectDetailMatch[1]} />
        ) : (
          <Page />
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
