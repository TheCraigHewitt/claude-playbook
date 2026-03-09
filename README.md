# The Claude Playbook

<p align="center">
  <a href="https://craighewitt.com/claude-playbook"><img src="https://img.shields.io/badge/Live_Site-craighewitt.com%2Fclaude--playbook-ff6b35?style=for-the-badge" alt="Live Site"/></a>
</p>

<p align="center">
  <a href="https://github.com/TheCraigHewitt/claude-playbook/stargazers"><img src="https://img.shields.io/github/stars/TheCraigHewitt/claude-playbook?style=for-the-badge" alt="Stars"/></a>
  <a href="./content/"><img src="https://img.shields.io/badge/Playbooks-70+-blue?style=for-the-badge" alt="Playbooks"/></a>
  <a href="./content/skills/library/"><img src="https://img.shields.io/badge/Skills-44_installable-8b5cf6?style=for-the-badge" alt="Skills"/></a>
  <a href="./lib/prompts.ts"><img src="https://img.shields.io/badge/Prompts-150+-green?style=for-the-badge" alt="Prompts"/></a>
  <img src="https://img.shields.io/badge/Cost-Free-brightgreen?style=for-the-badge" alt="Free"/>
</p>

> **Everything a business operator needs to master Claude** — across Chat, CoWork, and Code. Not theory. Not "10 prompt tips." A complete system for running real business functions with AI.

> If this helps you, [give it a star](https://github.com/TheCraigHewitt/claude-playbook/stargazers) — it helps others find it too.

---

## Who This Is For

This is **not** a developer resource. This is for the people who run businesses.

| Who you are | Start here |
|---|---|
| **CEO / Founder** | [Assessment](https://craighewitt.com/claude-playbook/assess) — find your highest-leverage starting point |
| **Head of Sales** | [Sales & Revenue playbooks](./content/sales/) — pre-call prep, outbound, proposals, CRM |
| **Marketing Lead** | [Marketing & Content](./content/marketing/) — campaigns, SEO, ad creative, brand voice |
| **Finance / Ops** | [Finance](./content/finance/) + [Operations](./content/operations/) — models, SOPs, reporting |
| **Non-technical but curious about Claude Code** | [Claude Code for Operators](./content/code-for-operators/) — the section that makes this playbook different |

---

## What's Inside

### 72 Playbooks Across 12 Business Functions

Each playbook includes context on when to use it, step-by-step workflows, ready-to-paste prompts, and before/after examples.

| Section | Playbooks | Covers |
|---------|:---------:|--------|
| Foundations | 7 | How Claude thinks, prompt anatomy, model selection, security |
| Writing & Communication | 6 | Emails, docs, presentations, meeting notes |
| Marketing & Content | 7 | Campaigns, ads, SEO, social media, brand voice |
| Sales & Revenue | 7 | Pre-call research, proposals, outbound, CRM, win/loss |
| Operations & Processes | 6 | SOPs, project management, knowledge bases, automation |
| Finance & Reporting | 7 | Excel models, board decks, scenario analysis, unit economics |
| Product & Engineering | 5 | PRDs, teardowns, research synthesis, sprint planning |
| Leadership & Management | 6 | Reviews, 1:1s, hiring, difficult conversations, AI rollout |
| Personal Productivity | 5 | Email triage, research, decision journals, admin |
| Claude Code for Operators | 7 | Claude Code without writing code — the most unique section |
| Skills Deep-Dive | 4 | Build, install, and compose Claude Skills |
| Case Studies | 2 | Real-world Claude Code setups from a non-developer CEO |

### 44 Ready-to-Install Skills

Drop these into Claude and they just work. No configuration, no coding.

| Function | Skills |
|----------|--------|
| **Sales** | Pre-call research, proposal writer, objection handler, win/loss analyzer, CRM processor |
| **Marketing** | Ad copy generator, SEO optimizer, campaign briefs, content repurposer, brand voice enforcer |
| **Finance** | Excel model builder, scenario modeler, cohort tracker, variance analyzer, financial narrator |
| **Operations** | SOP generator, process auditor, knowledge base builder, meeting processor, project kickoff |
| **Leadership** | OKR facilitator, 1:1 agendas, performance review writer, AI rollout planner, difficult conversation prep |
| **Product** | PRD writer, competitor teardown, sprint communicator, user research synthesizer |
| **Personal** | Decision journal, email triager, learning accelerator, weekly review |
| **Cross-Functional** | Data analyzer, document reviewer, presentation builder, writing style enforcer |

### 150+ Copy-Paste Prompts

Not generic "write me an email" prompts. Contextual, multi-step prompts designed for specific business scenarios — with variables you fill in and follow-up sequences that build on each other.

### Interactive Assessment

Don't know where to start? The [assessment](https://craighewitt.com/claude-playbook/assess) evaluates your current Claude usage and recommends a personalized learning path.

### Implementation Paths

Role-based guided paths that sequence the playbooks in the right order for your function, so you're not just browsing — you're building capability.

---

## What Makes This Different

**Built by an operator, not a prompt engineer.** I run a SaaS company ([Castos](https://castos.com), $1.5M ARR). Every playbook comes from real business use — hiring, board decks, sales prep, SOPs, financial models. Not hypothetical examples.

**Claude Code for non-developers.** Most Claude Code content assumes you can code. The "Code for Operators" section is written for CEOs and operators who want Claude Code's power without writing a line of code. This section alone is worth the visit.

**Skills you can actually install.** 44 Skills files you can drop into Claude's `~/.claude/commands/` directory and use immediately. Each one is a tested workflow for a specific business task.

**Three products, one system.** Covers Claude Chat, CoWork, and Code as an integrated toolkit — not three separate tools. Every playbook tells you which product to use and when.

---

## Repo Structure

```
claude-playbook/
├── app/                          # Next.js routes
│   ├── page.tsx                  # Home
│   ├── [section]/[slug]/         # Playbook articles
│   ├── assess/                   # Interactive assessment
│   ├── implementation/           # Guided paths
│   └── prompts/                  # Prompt library
├── components/                   # 17 React components
├── content/                      # 116 content files
│   ├── foundations/              #   7 playbooks
│   ├── writing/                  #   6 playbooks
│   ├── marketing/                #   7 playbooks
│   ├── sales/                    #   7 playbooks
│   ├── operations/               #   6 playbooks
│   ├── finance/                  #   7 playbooks
│   ├── product/                  #   5 playbooks
│   ├── leadership/               #   6 playbooks
│   ├── personal/                 #   5 playbooks
│   ├── code-for-operators/       #   7 playbooks
│   ├── skills/                   #   4 playbooks + 44 Skills
│   └── case-studies/             #   2 case studies + examples
├── lib/                          # Data, types, helpers
└── hooks/                        # Progress tracking
```

## Built With

[Next.js](https://nextjs.org) (App Router) / [MDX](https://mdxjs.com) / [Tailwind CSS](https://tailwindcss.com) / [Fuse.js](https://www.fusejs.io) / localStorage for progress

---

## Author

Built by [Craig Hewitt](https://craighewitt.com) — founder of [Castos](https://castos.com) and [AgentPrime](https://agentprime.io).

## License

MIT
