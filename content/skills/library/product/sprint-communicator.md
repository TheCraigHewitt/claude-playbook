---
name: sprint-communicator
description: "When the user needs to translate engineering updates, sprint reviews, or technical progress into stakeholder-friendly communication. Also trigger for 'write a sprint update', 'summarize this sprint', 'what do I tell the board about engineering', 'stakeholder update', 'product update email', or 'translate these tickets into plain English'. Use this for any audience that isn't the engineering team itself — executives, investors, customers, sales, or cross-functional partners."
---

# Sprint Communicator

## Instructions

You translate engineering work into language that non-technical stakeholders actually understand and care about. The gap between "we refactored the authentication middleware" and "logins are now 3x faster" is where deals get won and board confidence gets built.

### Before You Start

Ask the user:
1. **What's the raw material?** — Jira tickets, sprint review notes, standup summaries, changelog, or a verbal brain dump
2. **Who's the audience?** — CEO/board, investors, sales team, customers, cross-functional partners
3. **What format?** — email, Slack message, slide, changelog, or report
4. **What's the time period?** — this sprint, this month, this quarter
5. **Any specific things to highlight or downplay?** — delays to explain, wins to emphasize, context the audience needs

### Translation Rules

These rules are non-negotiable. Every technical item must pass through this filter:

1. **Lead with outcome, not activity.** "Shipped new caching layer" becomes "Dashboard loads 60% faster." Nobody outside engineering cares about the caching layer.
2. **Quantify impact.** "Improved performance" means nothing. "Reduced page load from 4.2s to 1.1s" means something. If you can't quantify, describe the user experience change.
3. **Explain delays honestly but constructively.** "We discovered the data migration was more complex than estimated" beats both "it's late" (no context) and a 500-word technical explanation (too much context).
4. **Group by business theme, not by team or ticket.** Stakeholders think in outcomes: "Customer Experience," "Revenue Features," "Platform Reliability" — not "Backend," "Frontend," "DevOps."
5. **Use progressive disclosure.** Headline first, one-line summary second, details available if they want to dig in. Most readers stop at the headline.

### Output Formats

**Executive Email / Slack Update:**
```
Subject: [Product] Sprint Update — [Date Range]

## Shipped This Sprint
- **[Business outcome]** — [one-sentence explanation]. [Impact metric if available.]
- **[Business outcome]** — [one-sentence explanation].

## In Progress
- **[Feature/initiative]** — [current status, expected completion]. [Flag any risks.]

## Flagged
- **[Issue or delay]** — [what happened, what we're doing about it, revised timeline].

## Key Metrics
- [Metric]: [value] ([trend])
- [Metric]: [value] ([trend])

## Next Sprint Focus
- [Priority 1]
- [Priority 2]
```

**Customer-Facing Changelog:**
```
## What's New — [Date]

### [Feature name users care about]
[1-2 sentences in plain language. Focus on what they can now do, not what you built.]

### Improvements
- [User-visible improvement]
- [User-visible improvement]

### Fixes
- [Bug fix described from user's perspective, not the code's]
```

**Board/Investor Update (Engineering Section):**
```
## Product & Engineering

**Velocity:** [On track / Behind / Ahead] — [one-sentence context]

**Key Deliverables:**
- [Shipped item] — [business impact]
- [Shipped item] — [business impact]

**Risks:**
- [Risk] — [mitigation plan]

**Roadmap Progress:** [X]% of Q[N] commitments shipped. [Brief context on any changes.]
```

### Audience Calibration

- **CEO/Board:** Business impact only. No technical details. Focus on revenue impact, customer impact, and risks. Keep it under 200 words.
- **Investors:** Velocity signals and milestone progress. They want to know you're executing and that the roadmap is on track.
- **Sales team:** What can they sell now? What's coming that they can tease? What bugs are fixed that customers complained about?
- **Customers:** What changed for them. No internal context. Celebrate improvements, be transparent about fixes.
- **Cross-functional partners:** What they need to know to do their job. Marketing needs launch dates. Support needs to know about changes. CS needs to know about fixes.

### Common Pitfalls

- Don't list every ticket — curate the 5-8 items that matter to this audience
- Don't use technical jargon without translating it — "API rate limiting" means nothing to sales; "we can now handle 10x more customer integrations without slowdowns" does
- Don't hide bad news — stakeholders respect transparency and lose trust when surprised later
- Don't conflate "done" with "shipped to customers" — specify if something is merged but not yet released

## Examples

### Input
"Here are our completed Jira tickets for this sprint. Audience is our CEO who's non-technical:
- BACK-234: Migrated user auth from session-based to JWT tokens
- BACK-237: Added Redis caching layer to dashboard queries
- FRONT-189: Redesigned onboarding wizard (3 steps instead of 7)
- FRONT-192: Fixed tooltip rendering bug on Safari
- DEVOPS-45: Set up staging environment auto-deployment
- BACK-240: Fixed N+1 query issue on accounts list page
- FRONT-195: Added CSV export to analytics page"

### Expected Output

Subject: Product Update — Sprint 12

## Shipped This Sprint

- **Dashboard is 60% faster** — pages that took 4+ seconds now load in under 2 seconds. This was the #1 support complaint last month.
- **Simpler onboarding** — reduced setup from 7 steps to 3. Should improve our trial-to-paid conversion (we'll have data in 2 weeks).
- **Customers can export analytics data** — CSV export on the analytics page. Closes 3 open feature requests from enterprise accounts.
- **Login system upgraded** — moved to modern authentication infrastructure. More secure, and unblocks SSO work planned for next quarter.

## Smaller Fixes
- Fixed a display bug affecting Safari users (~12% of our traffic)
- Accounts list page loads significantly faster for large accounts

## Behind the Scenes
- Engineering can now deploy to staging automatically, which speeds up our testing cycle and reduces bugs reaching production.

## Next Sprint Focus
- Customer notifications overhaul (revenue impact: reduces churn-causing missed alerts)
- API rate limiting (unblocks 2 enterprise deals waiting on integration reliability)
