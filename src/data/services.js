import { BrainCircuit, Code2, Globe2, Rocket, Smartphone } from 'lucide-react'

export const services = [
  {
    slug: 'final-year-projects',
    title: 'Final Year Projects',
    audience: 'For college students',
    text: 'Premium academic projects that look modern, explain clearly, and come with the support material students actually need.',
    longDescription: 'Our academic project service is designed specifically for students who want a high-quality, fully functioning final year project without the stress. We don\'t just deliver code; we provide comprehensive documentation, presentation materials, and a clear demo script so you can confidently present your work to your professors and evaluators.',
    icon: Code2,
    color: 'bg-lime text-lime-950',
    timeline: '7-15 days',
    price: 'Starting at ₹5,000',
    outcomes: ['Source code', 'Report + PPT', 'Demo script', 'Viva-ready flow'],
    techStack: ['React', 'Node.js', 'Python', 'MongoDB', 'Tailwind CSS'],
    benefits: [
      'Ready-to-present complete package',
      'Modern, premium user interfaces',
      'Detailed architecture diagrams',
      'Step-by-step local setup guides',
      'Priority technical support for Viva preparation'
    ]
  },
  {
    slug: 'flutter-multiplatform-apps',
    title: 'Flutter Multiplatform Apps',
    audience: 'For products and student apps',
    text: 'Clean mobile-first applications for Android, iOS, and web with polished flows and scalable feature structure.',
    longDescription: 'We build high-performance, beautiful mobile applications using Flutter. Whether you need a simple utility app for a student project or a complex MVP for your startup, our Flutter apps run seamlessly across Android, iOS, and the Web from a single codebase. We focus heavily on fluid animations, intuitive UX, and robust state management.',
    icon: Smartphone,
    color: 'bg-mint text-emerald-900',
    timeline: '2-5 weeks',
    price: 'Custom quote',
    outcomes: ['App UI', 'Auth flows', 'API-ready structure', 'Responsive screens'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST APIs'],
    benefits: [
      'Single codebase for Android & iOS',
      'Native-like performance at 60fps',
      'Beautiful, custom Material/Cupertino UI',
      'Secure authentication and database integration',
      'Play Store & App Store deployment guidance'
    ]
  },
  {
    slug: 'ai-powered-products',
    title: 'AI-Powered Products',
    audience: 'For modern ideas',
    text: 'Useful AI tools like chat assistants, document intelligence, automation systems, and recommendation workflows.',
    longDescription: 'Integrate the power of cutting-edge AI into your business or academic project. We specialize in building LLM wrappers, custom RAG (Retrieval-Augmented Generation) pipelines, and intelligent automation systems. We handle the complex prompt engineering, API orchestration, and infrastructure so you can focus on the product.',
    icon: BrainCircuit,
    color: 'bg-aqua text-cyan-900',
    timeline: '10 days-4 weeks',
    price: 'Custom quote',
    outcomes: ['AI workflows', 'Prompt logic', 'Data handling', 'Product dashboard'],
    techStack: ['OpenAI API', 'LangChain', 'Pinecone', 'Next.js', 'Python'],
    benefits: [
      'Custom LLM integrations',
      'Intelligent document parsing and chat',
      'Automated data extraction pipelines',
      'Cost-optimized API usage',
      'Scalable vector database architecture'
    ]
  },
  {
    slug: 'modern-websites',
    title: 'Modern Websites',
    audience: 'For startups and businesses',
    text: 'Multi-page websites that communicate trust, show proof, and move users toward clear inquiry or conversion actions.',
    longDescription: 'Your website is your digital storefront. We build lightning-fast, highly converting marketing websites that tell your story perfectly. Using modern frameworks and meticulous design principles, we ensure your site not only looks stunning but also ranks well on search engines and performs brilliantly on mobile devices.',
    icon: Globe2,
    color: 'bg-sky text-blue-900',
    timeline: '1-3 weeks',
    price: 'Starting at ₹15,000',
    outcomes: ['Home + pages', 'Project showcase', 'Contact flow', 'SEO-ready structure'],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    benefits: [
      'High-converting landing pages',
      'Blazing fast load times (90+ Core Web Vitals)',
      'Fully responsive fluid layouts',
      'Custom animations and interactions',
      'Built-in technical SEO optimization'
    ]
  },
  {
    slug: 'startup-mvps',
    title: 'Startup MVPs',
    audience: 'For founders',
    text: 'Focused MVP builds with the right first features, sharp UI, and launch-ready structure for testing with real users.',
    longDescription: 'Stop wasting months building features nobody wants. We help founders validate their ideas quickly by building sharp, focused Minimum Viable Products (MVPs). We help you define the absolute core feature set, build it rapidly with a premium feel, and get it into the hands of your early adopters so you can start learning immediately.',
    icon: Rocket,
    color: 'bg-coral text-rose-900',
    timeline: '2-6 weeks',
    price: 'Custom quote',
    outcomes: ['MVP scope', 'Dashboard', 'Backend base', 'Deployment support'],
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Supabase'],
    benefits: [
      'Rapid go-to-market timeline',
      'Scalable architecture from day one',
      'Founder-focused product strategy',
      'Premium UI that builds instant trust',
      'Analytics and tracking integration'
    ]
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
