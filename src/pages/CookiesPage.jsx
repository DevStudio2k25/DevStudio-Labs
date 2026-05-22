import { ArrowLeft } from 'lucide-react'

export function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </a>
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground">Cookie Policy</h1>
      <div className="prose mt-10 text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. What Are Cookies</h2>
        <p className="mb-4">Cookies are small pieces of text sent to your web browser by a website you visit. They help that website remember information about your visit.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. How We Use Cookies</h2>
        <p className="mb-4">We use cookies to analyze site traffic, remember your preferences, and optimize your overall experience on DevStudio Labs.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Types of Cookies We Use</h2>
        <p className="mb-4">We use essential cookies that are required for the operation of our website, and analytical cookies that help us understand how visitors interact with our site.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Managing Cookies</h2>
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.</p>
      </div>
    </div>
  )
}
