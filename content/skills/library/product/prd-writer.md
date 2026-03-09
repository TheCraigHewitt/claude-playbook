---
name: prd-writer
description: "When the user has a rough product idea, feature request, enhancement, or bug that needs a structured product requirements document. Also trigger when someone says 'write a spec', 'document this feature', 'create requirements', 'write a PRD', or 'what should we build for X'. Use this even if the input is just a Slack message, a bullet list, or a verbal brain dump — the skill turns messy into structured."
---

# PRD Writer

## Instructions

You transform rough product ideas into structured requirements documents that engineering teams can actually build from. The goal is to eliminate ambiguity before a single line of code gets written.

### Before You Start

Ask the user:
1. **What's the idea?** — paste notes, Slack messages, feature requests, whatever they have
2. **Who is this for?** — which user type or persona benefits
3. **What problem does it solve?** — the pain point or opportunity
4. **Any constraints?** — timeline, technical limitations, dependencies, budget
5. **Audience for this doc?** — engineering team, stakeholders, or both

If they give you enough context upfront, skip the questions and draft directly.

### PRD Structure

```
# [Feature Name]
Status: Draft | In Review | Approved
Author: [Name]
Date: [Date]
Last updated: [Date]

## Problem Statement
[2-3 sentences. What pain exists today? Who feels it? What's the cost of not solving it?]

## Goal
[One sentence. What does success look like when this ships?]

## Non-Goals
[Explicitly list what this feature does NOT do. This prevents scope creep and aligns expectations.]

## User Stories
- As a [user type], I want to [action] so that [outcome]
- As a [user type], I want to [action] so that [outcome]

## Requirements

### Must Have (P0)
- [ ] [Requirement with clear acceptance criteria]
- [ ] [Requirement with clear acceptance criteria]

### Should Have (P1)
- [ ] [Requirement — important but not launch-blocking]

### Nice to Have (P2)
- [ ] [Requirement — future consideration]

## User Flow
[Step-by-step walkthrough of the primary user path. Number each step.]

1. User navigates to [location]
2. User clicks [action]
3. System responds with [behavior]
...

## Edge Cases & Error States
[What happens when things go wrong? Empty states, invalid inputs, permission errors, timeouts.]

## Technical Considerations
[API changes, data model impacts, migration needs, performance requirements. Flag unknowns explicitly.]

## Success Metrics
[How will you measure if this worked? Be specific — "increase conversion" is not a metric, "increase trial-to-paid conversion by 5% within 30 days" is.]

## Open Questions
[List unresolved decisions. Tag the person who owns each one.]
```

### Writing Principles

- **Be specific about acceptance criteria.** "User can search" is not a requirement. "User can search by name, email, or company with results appearing within 200ms and supporting partial matches" is.
- **Name what's out of scope.** Non-goals prevent 50% of scope creep conversations.
- **Flag unknowns honestly.** An Open Questions section with three items is more useful than a PRD that pretends everything is decided.
- **Write for the engineer who will build this, not the exec who approved it.** Clarity over polish.
- **Prioritize ruthlessly.** Everything cannot be P0. If the user says "it's all important," push back and ask what they'd cut if they had half the timeline.

### Common Pitfalls

- Don't write a solution before defining the problem — resist jumping to UI details
- Don't leave acceptance criteria vague — "fast" means nothing, "under 500ms at p95" means something
- Don't skip edge cases — they account for most production bugs
- Don't include implementation details unless they're genuine constraints — let engineering decide how

## Examples

### Input
"We need to let customers export their data. People keep asking for it in support tickets and some enterprise prospects won't sign without it. Probably CSV and maybe PDF. Needs to work for accounts with up to 100K records."

### Expected Output

# Data Export

Status: Draft
Author: [Product Manager]
Date: March 2026

## Problem Statement
Customers cannot export their own data from the platform. This generates 15+ support tickets per month and is a blocker in enterprise sales conversations where data portability is a procurement requirement.

## Goal
Customers can self-serve export their data in standard formats without contacting support.

## Non-Goals
- Real-time data sync or API-based export (separate initiative)
- Import functionality
- Scheduled/recurring exports

## User Stories
- As an account admin, I want to export my account data as CSV so that I can analyze it in my own tools
- As an enterprise buyer, I want to verify data portability so that I can satisfy procurement requirements

## Requirements

### Must Have (P0)
- [ ] Export all primary data types (contacts, activity, billing history) as CSV
- [ ] Handle accounts with up to 100K records without timeout
- [ ] Restrict export to account admin role
- [ ] Email download link when export is ready (async processing for large datasets)

### Should Have (P1)
- [ ] PDF export for billing history and summary reports
- [ ] Allow column selection before export
- [ ] Export history log visible to account admins

### Nice to Have (P2)
- [ ] JSON export format
- [ ] Date range filters on export

## Edge Cases & Error States
- Account with 0 records: show empty state with message, not an error
- Export exceeds 100K rows: warn user, suggest date range filter
- Export fails mid-processing: notify user, allow retry, no partial files
- User starts second export while first is processing: queue it, show status

## Success Metrics
- Reduce "data export" support tickets by 80% within 60 days
- Zero enterprise deals lost to data portability objection in Q3

## Open Questions
- [ ] Do we need to include deleted/archived records? (Owner: Product)
- [ ] What's the retention period for export files? (Owner: Engineering)
- [ ] Does GDPR require specific export formatting? (Owner: Legal)
