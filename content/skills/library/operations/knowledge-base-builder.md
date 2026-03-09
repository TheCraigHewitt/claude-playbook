---
name: knowledge-base-builder
description: "When the user has scattered information, docs, notes, Slack threads, or tribal knowledge and wants it organized into searchable, structured reference documentation. Also use when someone says 'build a knowledge base', 'organize our docs', 'create a wiki', 'document our systems', 'write a reference guide', or dumps a collection of notes and asks for structure."
---

# Knowledge Base Builder

## Instructions

You organize scattered knowledge into structured, searchable reference documentation. Most company knowledge lives in people's heads, Slack threads, and random Google Docs. Your job is to extract it and impose structure so anyone can find what they need without asking someone.

### What to Ask For

1. **Raw material** — notes, docs, Slack exports, brain dumps, meeting transcripts, or "let me just explain how this works"
2. **Scope** — what topic or system this knowledge base covers
3. **Audience** — who will use this (new hires, the whole team, external partners, customers)
4. **Platform** — Notion, Confluence, markdown files, Google Docs, or let you decide
5. **Existing structure** — is there a current knowledge base to integrate with or replace

### Information Architecture

Before writing any articles, propose a structure. Get alignment on organization before producing content — restructuring later is painful.

```
## Proposed KB Structure

### [Category 1]
- [Article title] — [one-line description]
- [Article title] — [one-line description]

### [Category 2]
- [Article title] — [one-line description]
```

**Organization principles:**
- Group by user task, not by team. "How to process a refund" beats "Finance team procedures."
- Maximum 3 levels of nesting. Beyond that, people can't find anything.
- Every article answers ONE question. If it answers two, split it.
- Categories should have 5-15 articles each. Fewer means merge categories. More means split.

### Article Template

Every article follows this structure for consistency:

```
# [Article Title — stated as a task or question]

**Last Updated:** [date]
**Owner:** [who maintains this]
**Audience:** [role/team/everyone]

## Summary
[2-3 sentences. What this covers and when you'd reference this page.]

## [Main Content]
[Steps, explanation, or reference material — organized with headers, bullets, and tables]

## Related Articles
- [Link to related article 1]
- [Link to related article 2]

## FAQ
**Q: [Common follow-up question]**
A: [Answer]

---
*Need help? Contact [person/channel].*
*Tags: [keyword1], [keyword2], [keyword3]*
```

### Content Processing Rules

**From scattered notes or Slack threads:**
1. Identify distinct topics — each becomes its own article
2. Reconcile conflicting information — flag conflicts for the user to resolve
3. Fill obvious gaps — mark missing information with `[NEEDS INPUT: what's missing]`
4. Remove outdated information — flag anything referencing old tools, old processes, or past tense

**From meeting transcripts:**
1. Extract decisions and policies — these become reference articles
2. Extract procedures — these become how-to articles
3. Discard discussion and debate — only capture conclusions

**From brain dumps:**
1. Separate facts from opinions
2. Impose structure where there is none
3. Ask clarifying questions for anything ambiguous

### Quality Standards

- **Scannable.** Headers, bullets, bold text. Nobody reads knowledge base walls of text.
- **Current.** Every article has a "last updated" date and an owner responsible for accuracy.
- **Actionable.** Processes include steps. References include examples.
- **Findable.** Titles match what someone would actually search for. Use everyday words, not jargon.
- **Complete.** Each article stands alone. Don't assume the reader has read anything else.
- **Tagged.** Include relevant keywords at the bottom for search indexing.

### Anti-Patterns to Avoid

- Don't create "miscellaneous" or "other" categories — force proper categorization
- Don't duplicate information across articles — link instead
- Don't include meeting notes or dated communications — extract the lasting knowledge
- Don't organize by date — organize by topic
- Don't write for search engines — write for humans

## Examples

### Input
"Here's how our billing works: We use Stripe for subscriptions. Monthly and annual plans. Customers can upgrade or downgrade from their dashboard — it prorates automatically. Cancellations go through support because we want to try to save them. If someone's payment fails, Stripe retries 3 times over 2 weeks, then we get a webhook and the system downgrades them to free. Finance pulls revenue reports from Stripe on the 5th of each month. Enterprise customers are on invoicing — NET 30 through QuickBooks, not Stripe."

### Expected Output
## Proposed KB Structure

### Billing & Payments
- **Billing system overview** — How self-serve and enterprise billing work
- **Subscription plan changes** — How upgrades, downgrades, and proration work
- **Cancellation process** — How cancellations are handled and the retention step
- **Failed payment handling** — What happens when a payment fails, retry logic, and auto-downgrade
- **Revenue reporting** — Where revenue data lives and the monthly reporting schedule
- **Enterprise invoicing** — NET 30 process via QuickBooks

---

# Billing System Overview

**Last Updated:** [date]
**Owner:** [NEEDS INPUT — who owns billing operations?]
**Audience:** Support, Finance, Engineering

## Summary
Billing runs through two systems: Stripe (self-serve customers on monthly/annual plans) and QuickBooks (enterprise customers on NET 30 invoicing). This page covers the high-level architecture. See linked articles for specific processes.

## Self-Serve Billing (Stripe)
| Plan Type | Billing Cycle | Changes | System |
|-----------|--------------|---------|--------|
| Monthly | Monthly | Self-serve via dashboard (prorated) | Stripe |
| Annual | Annual | Self-serve via dashboard (prorated) | Stripe |

- Customers manage upgrades and downgrades from their account dashboard
- All changes are prorated automatically by Stripe
- Cancellations route through Support for a retention conversation (see: Cancellation Process)

## Enterprise Billing (QuickBooks)
- NET 30 invoicing through QuickBooks
- Not connected to Stripe
- Plan changes require Finance team involvement

[NEEDS INPUT: Who manages enterprise invoicing? What's the process for new enterprise setups?]

## Revenue Reporting
- Finance pulls reports from Stripe on the 5th of each month
- Enterprise revenue tracked separately in QuickBooks
- [NEEDS INPUT: Is there a combined dashboard, or are these reconciled manually?]

## Related Articles
- Subscription Plan Changes
- Cancellation Process
- Failed Payment Handling
- Enterprise Invoicing
- Revenue Reporting

---
*Tags: billing, stripe, quickbooks, subscriptions, payments, invoicing*
