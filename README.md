# The Claude Playbook

The definitive resource for mastering Claude across Chat, CoWork, and Code. Built for business operators, not developers.

**Live at [craighewitt.com/claude-playbook](https://craighewitt.com/claude-playbook)**

## What's Inside

- **70+ playbooks** covering 12 business functions
- **150+ ready-to-use prompts** you can copy and run today
- **44 installable Skills** for Claude Code (no coding required)
- **Interactive assessment** to find your starting point
- **Implementation paths** based on your role and goals
- **2 real-world case studies** from a non-developer running a SaaS company

## Sections

| Section | Playbooks | What You'll Learn |
|---------|-----------|-------------------|
| Foundations | 7 | How Claude thinks, prompt anatomy, model selection |
| Writing & Communication | 6 | Emails, docs, presentations, meeting notes |
| Marketing & Content | 7 | Campaigns, ads, SEO, social, brand voice |
| Sales & Revenue | 7 | Pre-call prep, proposals, outbound, CRM |
| Operations & Processes | 6 | SOPs, project management, knowledge bases |
| Finance & Reporting | 7 | Excel models, board decks, scenario analysis |
| Product & Engineering | 5 | Specs, teardowns, research synthesis |
| Leadership & Management | 6 | Reviews, 1:1s, hiring, team AI rollout |
| Personal Productivity | 5 | Email triage, research, decision-making |
| Claude Code for Operators | 7 | Claude Code for non-developers |
| Skills Deep-Dive | 4 + 44 Skills | Build and install Claude Skills |
| Case Studies | 2 | Real-world Claude Code setups |

## Skills Library

The repo includes 44 ready-to-install Claude Skills organized by function:

- **Sales** — Pre-call research, proposal writer, objection handler, win/loss analyzer, CRM processor
- **Marketing** — Ad copy, SEO optimizer, campaign briefs, content repurposer, brand voice
- **Finance** — Excel model builder, scenario modeler, cohort tracker, variance analyzer
- **Operations** — SOP generator, process auditor, knowledge base builder, meeting processor
- **Leadership** — OKR facilitator, 1:1 agendas, performance reviews, AI rollout planner
- **Product** — PRD writer, competitor teardown, sprint communicator, research synthesizer
- **Personal** — Decision journal, email triager, learning accelerator, weekly review
- **Cross-Functional** — Data analyzer, document reviewer, presentation builder, writing style enforcer

## Tech Stack

This playbook is built with:

- [Next.js](https://nextjs.org) (App Router)
- [MDX](https://mdxjs.com) for content
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Fuse.js](https://www.fusejs.io) for search
- localStorage for progress tracking

## Repository Structure

```
claude-playbook/
├── app/                    # Next.js route files
│   ├── layout.tsx          # Playbook layout with sidebar
│   ├── page.tsx            # Home page
│   ├── [section]/          # Dynamic section + article routes
│   ├── assess/             # Interactive assessment
│   ├── implementation/     # Implementation paths
│   └── prompts/            # Prompt library
├── components/             # 17 React components
│   ├── PlaybookSidebar.tsx
│   ├── PlaybookSearch.tsx
│   ├── PromptBlock.tsx
│   └── ...
├── content/                # 116 MDX/MD content files
│   ├── foundations/
│   ├── writing/
│   ├── marketing/
│   ├── sales/
│   ├── operations/
│   ├── finance/
│   ├── product/
│   ├── leadership/
│   ├── personal/
│   ├── code-for-operators/
│   ├── skills/
│   │   └── library/        # 44 installable Skills
│   └── case-studies/
├── lib/                    # Data, types, and helpers
│   ├── types.ts
│   ├── playbooks.ts
│   ├── sections.ts
│   ├── prompts.ts
│   ├── assessment.ts
│   ├── implementation-paths.ts
│   └── mdx.ts
└── hooks/
    └── usePlaybookProgress.ts
```

## How It Works

This repo is the source of truth for all Claude Playbook content. It powers the live site at [craighewitt.com/claude-playbook](https://craighewitt.com/claude-playbook), built with Next.js App Router.

Import paths use the `@/` alias convention:
- `@/components/claude-playbook/*` — Components
- `@/lib/playbook/*` — Data and helpers
- `@/hooks/*` — Hooks

## Author

Built by [Craig Hewitt](https://craighewitt.com) — founder of [Castos](https://castos.com) and [FounderLevel](https://founderlevel.co).

## License

MIT
