export const site = {
  name: 'Anish Gayen',
  initials: 'AG.',
  title: 'ANISH GAYEN | Editorial Portfolio',
  description:
    'Portfolio of Anish Gayen — AI Agent Architect, backend developer, and B.Tech IT student at MCKV Institute of Engineering.',
  email: 'anishvis007@gmail.com',
  portrait: '/anish-portrait.png',
} as const

export const navLinks = [
  { label: 'Intro', href: '#hero' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Works', href: '#works' },
  { label: 'Tactical', href: '#tactical' },
] as const

export const heroRoles = [
  'AI Agent Architect',
  'Backend Developer',
  'IT Strategist',
] as const

export const tickerItems = [
  'AI Agent Architect',
  '©2026 ANISH GAYEN',
  'Backend Engineering',
  'CGPA 8.63 · MCKV IT',
  'LangChain & Gemini Pipelines',
  'Editorial Precision',
] as const

export const expertiseIntro =
  'From AI document intelligence systems to enterprise ORM layers — I gravitate toward problems at the intersection of data, intelligence, and meaningful product impact.'

export const expertise = [
  {
    index: '01 /',
    title: 'AI & LLM Systems',
    description:
      'Building intelligent pipelines with Gemini, LangChain, and vector databases like Qdrant for RAG-based applications.',
  },
  {
    index: '02 /',
    title: 'Backend Engineering',
    description:
      'REST APIs, ORM layers, and microservice orchestration with Java/Hibernate, Python/FastAPI, and Celery task queues.',
  },
  {
    index: '03 /',
    title: 'Data & DevOps',
    description:
      'Containerised deployments with Docker Compose, PostgreSQL & Redis datastores, and Cloud Vision OCR pipelines.',
  },
  {
    index: '04 /',
    title: 'API Design',
    description:
      'Designing and documenting APIs using OAS 2.0 / Swagger — certified via Infosys Springboard.',
  },
] as const

export const projects = [
  {
    title: 'HIDMS',
    category: 'AI / Healthcare',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Hibernate ORM',
    category: 'Backend / Java',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Agentic Pipelines',
    category: 'LLM / RAG',
    image:
      'https://images.unsplash.com/photo-1677440866019-21780ecad995?w=800&q=80&auto=format&fit=crop',
  },
] as const

export const feedItems = [
  {
    date: '[ JUNE 2026, 11:24 ]',
    title: 'Final Year Project — HIDMS Live',
    body: 'Shipping an AI-powered document intelligence platform that extracts, verifies, and structures clinical data from unorganised medical PDFs. Dual-pipeline combining Google Cloud Vision OCR + Gemini LLM.',
    active: true,
  },
  {
    date: '[ MAY 2026, 09:45 ]',
    title: 'Agentic AI Certification Complete',
    body: "Completed IBM SkillsBuild's Agentic AI: From Learner to Builder — now architecting multi-step agent pipelines with LangChain and vector retrieval.",
    active: false,
  },
  {
    date: '[ APR 2026, 14:02 ]',
    title: 'Backend Systems at Scale',
    body: 'Breaking monolithic patterns with FastAPI microservices, Celery task queues, and PostgreSQL + Redis data layers. Controlled complexity is the goal.',
    active: false,
  },
] as const

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Email', href: `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}` },
] as const
