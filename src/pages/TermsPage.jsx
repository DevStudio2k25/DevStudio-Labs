import { ArrowLeft } from 'lucide-react'

export function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </a>
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
      <div className="prose mt-10 text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing and using DevStudio Labs, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Description of Service</h2>
        <p className="mb-4">DevStudio Labs provides web development, app development, UI/UX design, and AI integration services. We reserve the right to modify or discontinue any service with or without notice.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Intellectual Property</h2>
        <p className="mb-4">All content, features, and functionality on this site are owned by DevStudio Labs and are protected by international copyright and intellectual property laws.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Limitation of Liability</h2>
        <p>DevStudio Labs shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use our services.</p>
      </div>
    </div>
  )
}
