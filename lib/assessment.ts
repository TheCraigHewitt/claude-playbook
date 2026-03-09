import { AssessmentQuestion, AssessmentResult, Product } from './types'

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'role',
    question: "What's your role?",
    options: [
      { label: 'Founder / CEO', value: 'founder', scores: { founder: 3, leadership: 1 } },
      { label: 'Marketing / Content', value: 'marketing', scores: { marketing: 3, writing: 1 } },
      { label: 'Sales / Revenue', value: 'sales', scores: { sales: 3 } },
      { label: 'Operations / Project Management', value: 'ops', scores: { operations: 3 } },
      { label: 'Finance / Accounting', value: 'finance', scores: { finance: 3 } },
      { label: 'Product / Engineering Leader', value: 'product', scores: { product: 3 } },
      { label: 'Individual Contributor', value: 'ic', scores: { personal: 3 } },
    ],
  },
  {
    id: 'time-sink',
    question: 'What takes most of your time?',
    options: [
      { label: 'Writing and communication', value: 'writing', scores: { writing: 3, marketing: 1 } },
      { label: 'Meetings and follow-ups', value: 'meetings', scores: { operations: 2, leadership: 2 } },
      { label: 'Data analysis and reporting', value: 'data', scores: { finance: 3, operations: 1 } },
      { label: 'Prospecting and sales prep', value: 'sales', scores: { sales: 3 } },
      { label: 'Managing processes and people', value: 'processes', scores: { operations: 2, leadership: 2 } },
      { label: 'Strategy and decision-making', value: 'strategy', scores: { founder: 3, leadership: 1 } },
    ],
  },
  {
    id: 'ai-usage',
    question: 'How are you using AI today?',
    options: [
      { label: "I haven't started yet", value: 'none', scores: { maturity: 1 } },
      { label: 'Basic ChatGPT / Claude for writing', value: 'basic', scores: { maturity: 3 } },
      { label: 'Daily workflows with Projects or custom instructions', value: 'intermediate', scores: { maturity: 5 } },
      { label: 'Claude Code, automations, or API integrations', value: 'advanced', scores: { maturity: 8 } },
      { label: 'Building AI-powered systems for my team', value: 'expert', scores: { maturity: 10 } },
    ],
  },
  {
    id: 'bottleneck',
    question: "What's your biggest bottleneck?",
    options: [
      { label: "I don't know where to start with AI", value: 'start', scores: { foundations: 3 } },
      { label: 'My prompts give mediocre results', value: 'prompts', scores: { foundations: 2, writing: 2 } },
      { label: 'Repetitive tasks eat my day', value: 'repetitive', scores: { operations: 2, code: 2 } },
      { label: 'I need better data and reporting', value: 'data', scores: { finance: 2, code: 1 } },
      { label: 'I want to scale what works across my team', value: 'scale', scores: { leadership: 2, code: 2, skills: 1 } },
    ],
  },
  {
    id: 'technical',
    question: 'How technical are you?',
    options: [
      { label: 'Not at all — I avoid anything technical', value: 'none', scores: { technical: 1 } },
      { label: 'I can use spreadsheets and basic tools', value: 'basic', scores: { technical: 3 } },
      { label: 'Comfortable with APIs, no-code tools, some scripting', value: 'moderate', scores: { technical: 6 } },
      { label: 'I can code or have a technical background', value: 'technical', scores: { technical: 9 } },
    ],
  },
  {
    id: 'team-size',
    question: 'Team size?',
    options: [
      { label: 'Just me', value: 'solo', scores: { personal: 2, founder: 1 } },
      { label: '2-10 people', value: 'small', scores: { leadership: 1, operations: 1 } },
      { label: '11-50 people', value: 'medium', scores: { leadership: 2, operations: 2 } },
      { label: '50+ people', value: 'large', scores: { leadership: 3, operations: 2 } },
    ],
  },
]

interface IdentityProfile {
  identity: string
  identityName: string
  description: string
  products: Product[]
  path: string
  primaryScores: string[]
  topPlaybooks: string[]
}

const identityProfiles: IdentityProfile[] = [
  {
    identity: 'ai-first-founder',
    identityName: 'The AI-First Founder',
    description: 'You think in systems and see AI as a force multiplier across every function. Your path is broad — strategy, operations, and team enablement.',
    products: ['Chat', 'Code'],
    path: 'ai-first-founder',
    primaryScores: ['founder', 'leadership'],
    topPlaybooks: [
      'foundations/how-claude-thinks',
      'code-for-operators/what-claude-code-is',
      'code-for-operators/claude-md-business-os',
      'leadership/rolling-out-ai-team',
      'personal/decision-journals',
    ],
  },
  {
    identity: 'content-machine',
    identityName: 'The Content Machine',
    description: 'You live in words — writing, campaigns, and brand voice. Claude becomes your editorial team, style enforcer, and content multiplier.',
    products: ['Chat', 'CoWork'],
    path: 'content-engine',
    primaryScores: ['writing', 'marketing'],
    topPlaybooks: [
      'writing/content-creation-pipeline',
      'marketing/brand-voice-system',
      'marketing/campaign-brief-multi-channel',
      'writing/editing-voice-matching',
      'skills/building-your-first-skill',
    ],
  },
  {
    identity: 'revenue-architect',
    identityName: 'The Revenue Architect',
    description: 'You drive revenue — outbound, proposals, CRM, and pipeline. Claude becomes your research analyst, proposal writer, and sales intelligence layer.',
    products: ['Chat', 'Code'],
    path: 'revenue-architect',
    primaryScores: ['sales'],
    topPlaybooks: [
      'sales/pre-call-research-prep',
      'sales/proposals-sows',
      'sales/outbound-at-scale',
      'sales/crm-integration-enrichment',
      'code-for-operators/connect-business-tools',
    ],
  },
  {
    identity: 'data-operator',
    identityName: 'The Data Operator',
    description: 'You live in spreadsheets, reports, and dashboards. Claude becomes your analyst — building models, narrating data, and automating reports.',
    products: ['Chat', 'Code'],
    path: 'data-operator',
    primaryScores: ['finance'],
    topPlaybooks: [
      'finance/excel-models-plain-english',
      'finance/monthly-reporting',
      'finance/cohort-analysis-unit-economics',
      'finance/sensitivity-scenario-modeling',
      'code-for-operators/connect-business-tools',
    ],
  },
  {
    identity: 'systems-builder',
    identityName: 'The Systems Builder',
    description: 'You design how work gets done. Claude becomes your process architect — SOPs, knowledge bases, project management, and workflow automation.',
    products: ['Chat', 'CoWork', 'Code'],
    path: 'systems-builder',
    primaryScores: ['operations'],
    topPlaybooks: [
      'operations/sop-machine',
      'operations/tool-integration-automation',
      'operations/project-management-ai',
      'code-for-operators/skills-teach-workflows',
      'skills/composing-skill-systems',
    ],
  },
  {
    identity: 'product-leader',
    identityName: 'The Product Leader',
    description: 'You ship products — specs, research, roadmaps, and stakeholder communication. Claude becomes your product analyst and requirements partner.',
    products: ['Chat', 'CoWork'],
    path: 'product-leader',
    primaryScores: ['product'],
    topPlaybooks: [
      'product/competitive-feature-teardowns',
      'product/prd-spec-writing',
      'product/user-research-synthesis',
      'product/sprint-planning-roadmap',
      'foundations/projects-memory-skills',
    ],
  },
  {
    identity: 'team-multiplier',
    identityName: 'The Team Multiplier',
    description: 'You lead people and want AI to make your team stronger. Claude becomes your management partner — reviews, coaching, and team AI rollout.',
    products: ['Chat', 'CoWork'],
    path: 'team-multiplier',
    primaryScores: ['leadership'],
    topPlaybooks: [
      'leadership/rolling-out-ai-team',
      'leadership/performance-reviews',
      'leadership/one-on-one-system',
      'leadership/okrs-goal-setting',
      'code-for-operators/what-claude-code-is',
    ],
  },
  {
    identity: 'efficiency-machine',
    identityName: 'The Efficiency Machine',
    description: 'You want to do more with less. Claude becomes your personal chief of staff — triage, research, admin, and decision-making support.',
    products: ['Chat'],
    path: 'efficiency-machine',
    primaryScores: ['personal'],
    topPlaybooks: [
      'personal/email-communication-triage',
      'personal/learning-research',
      'personal/decision-journals',
      'foundations/anatomy-of-a-prompt',
      'foundations/common-mistakes',
    ],
  },
]

export function calculateResults(answers: Record<string, string>): AssessmentResult {
  const scores: Record<string, number> = {}

  // Tally scores from answers
  for (const [questionId, answerValue] of Object.entries(answers)) {
    const question = assessmentQuestions.find((q) => q.id === questionId)
    if (!question) continue
    const option = question.options.find((o) => o.value === answerValue)
    if (!option) continue
    for (const [key, value] of Object.entries(option.scores)) {
      scores[key] = (scores[key] || 0) + value
    }
  }

  // Find best matching identity
  let bestMatch = identityProfiles[0]
  let bestScore = 0

  for (const profile of identityProfiles) {
    let profileScore = 0
    for (const key of profile.primaryScores) {
      profileScore += scores[key] || 0
    }
    if (profileScore > bestScore) {
      bestScore = profileScore
      bestMatch = profile
    }
  }

  // Calculate maturity score (1-10)
  const maturity = Math.min(10, Math.max(1, scores.maturity || 3))
  const technical = scores.technical || 3

  // Adjust product recommendations based on technical level
  let products = [...bestMatch.products]
  if (technical >= 6 && !products.includes('Code')) {
    products.push('Code')
  }

  return {
    identity: bestMatch.identity,
    identityName: bestMatch.identityName,
    score: maturity,
    description: bestMatch.description,
    products: products as Product[],
    topPlaybooks: bestMatch.topPlaybooks,
    path: bestMatch.path,
  }
}
