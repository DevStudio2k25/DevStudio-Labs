import { ArrowLeft } from 'lucide-react'

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </a>
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
      <div className="prose mt-10 text-muted-foreground">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information you provide directly to us when you use our services, fill out a contact form, or communicate with us.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about projects and offers.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Information Sharing</h2>
        <p className="mb-4">We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business.</p>
        
        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at devstudio2k25@gmail.com.</p>
      </div>
    </div>
  )
}
