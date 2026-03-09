export type Product = 'Chat' | 'CoWork' | 'Code'
export type Tier = 'Starter' | 'Operator' | 'Power User'
export type Role = 'Founder' | 'Marketing' | 'Sales' | 'Ops' | 'Finance' | 'Product' | 'IC'

export interface PlaybookMeta {
  title: string
  slug: string
  description: string
  products: Product[]
  tier: Tier
  roles: Role[]
  readTime: string
  section: string
  order: number
}

export interface Section {
  id: string
  title: string
  description: string
  icon: string
  href: string
  playbookCount: number
}

export interface AssessmentQuestion {
  id: string
  question: string
  options: {
    label: string
    value: string
    scores: Record<string, number>
  }[]
}

export interface AssessmentResult {
  identity: string
  identityName: string
  score: number
  description: string
  products: Product[]
  topPlaybooks: string[]
  path: string
}

export interface ImplementationPath {
  id: string
  name: string
  role: string
  focus: string
  description: string
  products: Product[]
  subscriptionTier: string
  weeks: {
    week: number
    title: string
    tasks: string[]
  }[]
  topPlaybooks: string[]
  starterPrompts: string[]
}

export interface Prompt {
  id: string
  title: string
  prompt: string
  section: string
  products: Product[]
  tier: Tier
  roles: Role[]
  variables?: { name: string; placeholder: string }[]
}
