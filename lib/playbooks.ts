import { PlaybookMeta } from './types'

export const playbooks: PlaybookMeta[] = [
  // FOUNDATIONS
  { title: 'How Claude Actually Thinks', slug: 'how-claude-thinks', description: 'Context windows, tokens in plain English, and why more context = better output.', products: ['Chat', 'CoWork', 'Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '8 min', section: 'foundations', order: 1 },
  { title: 'Chat vs. CoWork vs. Code', slug: 'decision-matrix', description: 'The decision matrix for which Claude product you actually need.', products: ['Chat', 'CoWork', 'Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '10 min', section: 'foundations', order: 2 },
  { title: 'The Anatomy of a Great Prompt', slug: 'anatomy-of-a-prompt', description: 'Role, Context, Task, Format, Constraints — the RCTFC framework.', products: ['Chat'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '12 min', section: 'foundations', order: 3 },
  { title: 'Projects, Memory & Skills', slug: 'projects-memory-skills', description: 'How to give Claude persistent context across conversations.', products: ['Chat', 'CoWork', 'Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '10 min', section: 'foundations', order: 4 },
  { title: 'The Mistakes That Waste Your Time', slug: 'common-mistakes', description: '7 anti-patterns and how to fix them.', products: ['Chat'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '8 min', section: 'foundations', order: 5 },
  { title: 'Choosing the Right Claude Model', slug: 'choosing-the-right-model', description: 'Opus vs. Sonnet vs. Haiku — when to use which.', products: ['Chat', 'CoWork', 'Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '6 min', section: 'foundations', order: 6 },
  { title: 'Security & Privacy', slug: 'security-privacy', description: 'What Claude can see, data retention, and when NOT to use AI.', products: ['Chat', 'CoWork', 'Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '7 min', section: 'foundations', order: 7 },

  // WRITING
  { title: 'Email That Gets Replies', slug: 'email-that-gets-replies', description: 'Cold outreach, follow-ups, difficult comms, and customer responses.', products: ['Chat'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'IC'], readTime: '10 min', section: 'writing', order: 1 },
  { title: 'Documents That Drive Decisions', slug: 'documents-that-drive-decisions', description: 'Memos, proposals, briefs, and one-pagers that actually get read.', products: ['Chat', 'CoWork'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Product', 'IC'], readTime: '12 min', section: 'writing', order: 2 },
  { title: 'Content Creation Pipeline', slug: 'content-creation-pipeline', description: 'Blog → newsletter → social pipeline across all three products.', products: ['Chat', 'CoWork', 'Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'IC'], readTime: '15 min', section: 'writing', order: 3 },
  { title: 'Editing & Voice Matching', slug: 'editing-voice-matching', description: 'Edit your writing while keeping your voice intact.', products: ['Chat'], tier: 'Starter', roles: ['Founder', 'Marketing', 'IC'], readTime: '8 min', section: 'writing', order: 4 },
  { title: 'Meeting Notes to Action Items', slug: 'meeting-notes-actions', description: 'Paste transcript, get structured output with owners and deadlines.', products: ['Chat', 'CoWork'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Product', 'IC'], readTime: '8 min', section: 'writing', order: 5 },
  { title: 'Presentations & Slide Decks', slug: 'presentations-slide-decks', description: 'From outline to narrative to speaker notes — all AI-assisted.', products: ['Chat', 'Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Product', 'IC'], readTime: '10 min', section: 'writing', order: 6 },

  // MARKETING
  { title: 'Campaign Brief to Multi-Channel Copy', slug: 'campaign-brief-multi-channel', description: 'One brief becomes email, social, landing page, and ad copy.', products: ['Chat', 'CoWork'], tier: 'Operator', roles: ['Marketing'], readTime: '12 min', section: 'marketing', order: 1 },
  { title: 'Ad Creative That Converts', slug: 'ad-creative-that-converts', description: 'Generate Meta ad variations, test creative angles, copy winning formats.', products: ['Chat', 'Code'], tier: 'Operator', roles: ['Marketing', 'Founder'], readTime: '10 min', section: 'marketing', order: 2 },
  { title: 'SEO & Content at Scale', slug: 'seo-content-at-scale', description: 'Audit and update hundreds of pages with Claude Code.', products: ['Chat', 'Code'], tier: 'Power User', roles: ['Marketing'], readTime: '15 min', section: 'marketing', order: 3 },
  { title: 'Email Marketing Automation', slug: 'email-marketing-automation', description: 'Write, design, and load emails directly into your ESP via API.', products: ['Chat', 'Code'], tier: 'Power User', roles: ['Marketing', 'Founder'], readTime: '12 min', section: 'marketing', order: 4 },
  { title: 'Social Media & Community', slug: 'social-media-community', description: 'Content calendars, post generation, and engagement tracking.', products: ['Chat', 'CoWork'], tier: 'Starter', roles: ['Marketing', 'Founder', 'IC'], readTime: '10 min', section: 'marketing', order: 5 },
  { title: 'Customer Stories & Case Studies', slug: 'customer-stories-case-studies', description: 'Interview notes to polished case study in one session.', products: ['Chat'], tier: 'Starter', roles: ['Marketing', 'Sales'], readTime: '10 min', section: 'marketing', order: 6 },
  { title: 'Brand Voice as a System', slug: 'brand-voice-system', description: 'Create a style guide Claude uses consistently everywhere.', products: ['Chat', 'CoWork', 'Code'], tier: 'Operator', roles: ['Marketing', 'Founder'], readTime: '12 min', section: 'marketing', order: 7 },

  // SALES
  { title: 'Pre-Call Research & Prep', slug: 'pre-call-research-prep', description: 'Company analysis, stakeholder mapping, and meeting agendas.', products: ['Chat'], tier: 'Starter', roles: ['Sales', 'Founder'], readTime: '8 min', section: 'sales', order: 1 },
  { title: 'Proposals & SOWs in Minutes', slug: 'proposals-sows', description: 'Structured input to polished proposal with pricing and terms.', products: ['Chat', 'CoWork'], tier: 'Operator', roles: ['Sales', 'Founder'], readTime: '10 min', section: 'sales', order: 2 },
  { title: 'The Living Objection Playbook', slug: 'objection-playbook', description: 'Build a team-wide objection library that gets smarter over time.', products: ['CoWork'], tier: 'Operator', roles: ['Sales'], readTime: '10 min', section: 'sales', order: 3 },
  { title: 'Outbound at Scale', slug: 'outbound-at-scale', description: 'AI BDR pipelines that outperform human reps from day one.', products: ['Code'], tier: 'Power User', roles: ['Sales', 'Founder'], readTime: '15 min', section: 'sales', order: 4 },
  { title: 'CRM Integration & Data Enrichment', slug: 'crm-integration-enrichment', description: 'Connect, clean, normalize, and enrich your CRM data.', products: ['Code'], tier: 'Power User', roles: ['Sales', 'Ops'], readTime: '12 min', section: 'sales', order: 5 },
  { title: 'Win/Loss Analysis', slug: 'win-loss-analysis', description: 'Pattern analysis across deals to improve close rates.', products: ['Chat', 'Code'], tier: 'Operator', roles: ['Sales', 'Founder'], readTime: '10 min', section: 'sales', order: 6 },
  { title: 'Revenue Operations Automation', slug: 'revenue-ops-automation', description: 'Connect Stripe, CRM, and analytics into unified reporting.', products: ['Code'], tier: 'Power User', roles: ['Sales', 'Ops', 'Founder'], readTime: '15 min', section: 'sales', order: 7 },

  // OPERATIONS
  { title: 'The SOP Machine', slug: 'sop-machine', description: 'Turn tribal knowledge into documented, repeatable procedures.', products: ['Chat', 'CoWork'], tier: 'Operator', roles: ['Ops', 'Founder'], readTime: '10 min', section: 'operations', order: 1 },
  { title: 'Project Kickoffs That Actually Work', slug: 'project-kickoffs', description: 'Generate briefs, timelines, and RACI matrices from a description.', products: ['Chat'], tier: 'Starter', roles: ['Ops', 'Product', 'Founder'], readTime: '8 min', section: 'operations', order: 2 },
  { title: 'Process Improvement Analysis', slug: 'process-improvement', description: 'Describe current workflow, identify bottlenecks, suggest improvements.', products: ['Chat'], tier: 'Operator', roles: ['Ops', 'Founder'], readTime: '10 min', section: 'operations', order: 3 },
  { title: 'Build a Team Knowledge Base', slug: 'team-knowledge-base', description: 'Using CoWork to build shared institutional knowledge.', products: ['CoWork'], tier: 'Operator', roles: ['Ops', 'Founder'], readTime: '10 min', section: 'operations', order: 4 },
  { title: 'Project Management with AI', slug: 'project-management-ai', description: 'Call transcripts to automatic Trello and ClickUp updates.', products: ['Code'], tier: 'Power User', roles: ['Ops', 'Product'], readTime: '12 min', section: 'operations', order: 5 },
  { title: 'Tool Integration & Workflow Automation', slug: 'tool-integration-automation', description: 'Connect everything — the pattern for any tool integration.', products: ['Code'], tier: 'Power User', roles: ['Ops', 'Founder'], readTime: '15 min', section: 'operations', order: 6 },

  // FINANCE
  { title: 'Excel Models from Plain English', slug: 'excel-models-plain-english', description: 'Describe logic in English, get full workbooks with real formulas.', products: ['Code'], tier: 'Operator', roles: ['Finance', 'Founder'], readTime: '12 min', section: 'finance', order: 1 },
  { title: 'Monthly Reporting on Autopilot', slug: 'monthly-reporting', description: 'Upload data, get narrative reports — automated with Code.', products: ['Chat', 'Code'], tier: 'Operator', roles: ['Finance', 'Founder'], readTime: '10 min', section: 'finance', order: 2 },
  { title: 'Budget vs. Actual Analysis', slug: 'budget-vs-actual', description: 'Variance analysis with plain-English explanations.', products: ['Chat'], tier: 'Starter', roles: ['Finance', 'Founder'], readTime: '8 min', section: 'finance', order: 3 },
  { title: 'Board Deck Narrative', slug: 'board-deck-narrative', description: 'Financial data to investor-ready commentary.', products: ['Chat'], tier: 'Operator', roles: ['Finance', 'Founder'], readTime: '10 min', section: 'finance', order: 4 },
  { title: 'SEC Filing & Earnings Analysis', slug: 'sec-filing-earnings', description: 'Auto-pull filings into clean tables with change analysis.', products: ['Code'], tier: 'Power User', roles: ['Finance'], readTime: '15 min', section: 'finance', order: 5 },
  { title: 'Cohort Analysis & Unit Economics', slug: 'cohort-analysis-unit-economics', description: 'Process customer data into cohort tracking by source.', products: ['Chat', 'Code'], tier: 'Operator', roles: ['Finance', 'Founder', 'Marketing'], readTime: '12 min', section: 'finance', order: 6 },
  { title: 'Sensitivity & Scenario Modeling', slug: 'sensitivity-scenario-modeling', description: 'Monte Carlo analysis, scenario tables, and bull/base/bear mapping.', products: ['Code'], tier: 'Power User', roles: ['Finance', 'Founder'], readTime: '15 min', section: 'finance', order: 7 },

  // PRODUCT
  { title: 'Competitive Feature Teardowns', slug: 'competitive-feature-teardowns', description: '10-minute teardowns with feature mapping and effort estimates.', products: ['Chat', 'Code'], tier: 'Operator', roles: ['Product', 'Founder'], readTime: '10 min', section: 'product', order: 1 },
  { title: 'PRD & Spec Writing', slug: 'prd-spec-writing', description: 'Product requirements documents from rough ideas.', products: ['Chat', 'CoWork'], tier: 'Operator', roles: ['Product'], readTime: '12 min', section: 'product', order: 2 },
  { title: 'User Research Synthesis', slug: 'user-research-synthesis', description: 'Interview transcripts to themed analysis and feature priorities.', products: ['Chat'], tier: 'Operator', roles: ['Product'], readTime: '12 min', section: 'product', order: 3 },
  { title: 'Technical Decision Translation', slug: 'technical-decision-translation', description: 'Translate engineering trade-offs into business impact.', products: ['Chat'], tier: 'Starter', roles: ['Product', 'Founder'], readTime: '8 min', section: 'product', order: 4 },
  { title: 'Sprint Planning & Roadmap Communication', slug: 'sprint-planning-roadmap', description: 'Engineering updates to stakeholder-friendly progress reports.', products: ['Chat', 'CoWork'], tier: 'Operator', roles: ['Product'], readTime: '10 min', section: 'product', order: 5 },

  // LEADERSHIP
  { title: 'Performance Reviews That Are Actually Useful', slug: 'performance-reviews', description: 'Notes to structured, fair, specific reviews.', products: ['Chat'], tier: 'Starter', roles: ['Founder', 'IC'], readTime: '10 min', section: 'leadership', order: 1 },
  { title: '1:1 Meeting System', slug: 'one-on-one-system', description: 'Generate agendas, process notes, track action items over time.', products: ['Chat', 'CoWork'], tier: 'Operator', roles: ['Founder', 'IC'], readTime: '10 min', section: 'leadership', order: 2 },
  { title: 'Difficult Conversations, Better Outcomes', slug: 'difficult-conversations', description: 'Communication templates for hard conversations.', products: ['Chat'], tier: 'Starter', roles: ['Founder', 'IC'], readTime: '8 min', section: 'leadership', order: 3 },
  { title: 'OKRs & Goal Setting', slug: 'okrs-goal-setting', description: 'Multi-turn facilitated goal-setting with alignment checks.', products: ['Chat'], tier: 'Operator', roles: ['Founder', 'Product'], readTime: '10 min', section: 'leadership', order: 4 },
  { title: 'Rolling Out AI to Your Team', slug: 'rolling-out-ai-team', description: 'The practical playbook for getting your team on Claude.', products: ['CoWork', 'Code'], tier: 'Operator', roles: ['Founder', 'Ops'], readTime: '15 min', section: 'leadership', order: 5 },
  { title: 'Hiring & Talent', slug: 'hiring-talent', description: 'Role definition to interview questions to offer letter.', products: ['Chat'], tier: 'Operator', roles: ['Founder', 'IC'], readTime: '12 min', section: 'leadership', order: 6 },

  // PERSONAL
  { title: 'Email & Communication Triage', slug: 'email-communication-triage', description: 'Process inbox batches, draft replies, and prioritize.', products: ['Chat'], tier: 'Starter', roles: ['Founder', 'IC'], readTime: '8 min', section: 'personal', order: 1 },
  { title: 'Learning & Research Acceleration', slug: 'learning-research', description: 'Read faster, synthesize better, build mental models.', products: ['Chat'], tier: 'Starter', roles: ['Founder', 'IC'], readTime: '10 min', section: 'personal', order: 2 },
  { title: 'Tax, Legal & Admin', slug: 'tax-legal-admin', description: 'Download, read, rename, and organize documents with AI.', products: ['Chat', 'Code'], tier: 'Starter', roles: ['Founder', 'Finance', 'IC'], readTime: '8 min', section: 'personal', order: 3 },
  { title: 'Personal Knowledge Management', slug: 'personal-knowledge-management', description: 'Let Claude organize your files — the anti-Notion approach.', products: ['Code'], tier: 'Operator', roles: ['Founder', 'IC'], readTime: '10 min', section: 'personal', order: 4 },
  { title: 'Decision Journals & Thinking Partners', slug: 'decision-journals', description: 'Structured decision-making and pre-mortem analysis.', products: ['Chat'], tier: 'Operator', roles: ['Founder', 'IC'], readTime: '10 min', section: 'personal', order: 5 },

  // CODE FOR OPERATORS
  { title: 'What Claude Code Is (and Why It\'s Not Just for Developers)', slug: 'what-claude-code-is', description: 'Not a programming tool — a command-line assistant that automates anything.', products: ['Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '10 min', section: 'code-for-operators', order: 1 },
  { title: 'Getting Started: VSCode Setup in 10 Minutes', slug: 'getting-started-vscode', description: 'Installation walkthrough for Mac + Windows, optimized for non-devs.', products: ['Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '12 min', section: 'code-for-operators', order: 2 },
  { title: 'Connect Your Business Tools', slug: 'connect-business-tools', description: 'How to connect Stripe, CRM, analytics, and project management tools.', products: ['Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance'], readTime: '15 min', section: 'code-for-operators', order: 3 },
  { title: 'Skills: Teach Claude Your Workflows', slug: 'skills-teach-workflows', description: 'Build reusable Skills that automate your specific processes.', products: ['Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '12 min', section: 'code-for-operators', order: 4 },
  { title: 'CLAUDE.md: Your Business Operating System', slug: 'claude-md-business-os', description: 'The single file that transforms default Claude Code into YOUR specialist.', products: ['Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '15 min', section: 'code-for-operators', order: 5 },
  { title: 'Real Workflows That Save Hours', slug: 'real-workflows', description: '10 real-world workflows from operators who use Claude Code daily.', products: ['Code'], tier: 'Power User', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance'], readTime: '20 min', section: 'code-for-operators', order: 6 },
  { title: 'The Non-Dev Toolbox', slug: 'non-dev-toolbox', description: 'Complementary tools that extend Claude Code for operators.', products: ['Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '10 min', section: 'code-for-operators', order: 7 },
  { title: 'Staying Safe & Getting Unstuck', slug: 'staying-safe-unstuck', description: 'Security basics, context management, and troubleshooting.', products: ['Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '10 min', section: 'code-for-operators', order: 8 },

  // SKILLS
  { title: 'What Are Skills & Why They Matter', slug: 'what-are-skills', description: 'Reusable instruction packages that transform Claude into your specialist.', products: ['Chat', 'CoWork', 'Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '8 min', section: 'skills', order: 1 },
  { title: 'Building Your First Skill', slug: 'building-your-first-skill', description: 'Step-by-step walkthrough — no code required.', products: ['Chat', 'Code'], tier: 'Starter', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '12 min', section: 'skills', order: 2 },
  { title: 'The Skill Design Playbook', slug: 'skill-design-playbook', description: 'How to write skills that actually work well.', products: ['Chat', 'CoWork', 'Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '15 min', section: 'skills', order: 3 },
  { title: 'Skills for Claude Chat & CoWork', slug: 'skills-chat-cowork', description: 'How to use custom skills in the non-Code products.', products: ['Chat', 'CoWork'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '10 min', section: 'skills', order: 4 },
  { title: 'Skills for Claude Code', slug: 'skills-code', description: 'Filesystem-based skills — more powerful and flexible.', products: ['Code'], tier: 'Operator', roles: ['Founder', 'Marketing', 'Sales', 'Ops', 'Finance', 'Product', 'IC'], readTime: '12 min', section: 'skills', order: 5 },
  { title: 'Composing Skills into Systems', slug: 'composing-skill-systems', description: 'Build interconnected skill systems for your entire business.', products: ['Code'], tier: 'Power User', roles: ['Founder', 'Ops'], readTime: '15 min', section: 'skills', order: 6 },

  // CASE STUDIES
  { title: 'The Content Operations Engine', slug: 'content-operations-engine', description: '17 commands, 34+ context files — a complete content ops system built by a non-developer.', products: ['Code'], tier: 'Operator', roles: ['Founder', 'Marketing'], readTime: '20 min', section: 'case-studies', order: 1 },
  { title: 'The Virtual Cofounder', slug: 'virtual-cofounder', description: 'A CEO\'s strategic decision-making partner with live financial data.', products: ['Code'], tier: 'Operator', roles: ['Founder'], readTime: '20 min', section: 'case-studies', order: 2 },
]

export function getPlaybooksBySection(sectionId: string): PlaybookMeta[] {
  return playbooks
    .filter((p) => p.section === sectionId)
    .sort((a, b) => a.order - b.order)
}

export function getPlaybook(section: string, slug: string): PlaybookMeta | undefined {
  return playbooks.find((p) => p.section === section && p.slug === slug)
}

export function getAdjacentPlaybooks(section: string, slug: string): { prev: PlaybookMeta | null; next: PlaybookMeta | null } {
  const sectionPlaybooks = getPlaybooksBySection(section)
  const currentIndex = sectionPlaybooks.findIndex((p) => p.slug === slug)

  return {
    prev: currentIndex > 0 ? sectionPlaybooks[currentIndex - 1] : null,
    next: currentIndex < sectionPlaybooks.length - 1 ? sectionPlaybooks[currentIndex + 1] : null,
  }
}
