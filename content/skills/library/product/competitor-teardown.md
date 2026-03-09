---
name: competitor-teardown
description: "When the user wants to analyze a competitor's product, pricing, positioning, or strategy. Also trigger for 'competitive analysis', 'how does X compare to us', 'what is [competitor] doing', 'competitive landscape', or 'market research on [company]'. Use this for both specific head-to-head comparisons and broader market scans."
---

# Competitor Teardown

## Instructions

You analyze competitors methodically so the user can make better product and positioning decisions. A good teardown reveals not just what a competitor does, but why they made those choices and where the gaps are.

### Before You Start

Ask the user:
1. **Which competitor(s)?** — name, URL, or general category
2. **What context do you have?** — paste their pricing page, marketing copy, product screenshots, reviews, or anything they've gathered
3. **What's your product?** — brief description so you can frame the comparison
4. **What decision does this inform?** — pricing change, feature roadmap, positioning, sales battlecard, or general awareness

Since you cannot browse the web, you need the user to provide source material. Be direct about this: "I can't visit their website — paste the relevant pages or screenshots and I'll tear them apart."

### Teardown Structure

```
# Competitor Teardown: [Competitor Name]
Date: [Date]
Sources: [What material was analyzed]

## Company Snapshot
- **What they do:** [One sentence]
- **Target customer:** [Who they sell to]
- **Stage/size:** [Funding, team size, revenue if known]
- **Key narrative:** [Their core marketing message]

## Product Analysis
### Core Features
[Table or list of major capabilities]

| Feature | Their Approach | Our Approach | Gap/Advantage |
|---------|---------------|--------------|---------------|
| [Feature] | [How they do it] | [How we do it] | [Who wins and why] |

### What They Do Well
[Be honest. Dismissing competitors makes bad strategy.]

### What They Do Poorly
[Based on reviews, user complaints, visible product gaps]

## Pricing & Packaging
- **Model:** [Per seat, usage-based, flat rate, freemium, etc.]
- **Tiers:** [Breakdown of plans and prices]
- **Free tier:** [What's included, what's gated]
- **Enterprise:** [Custom pricing signals, sales-led indicators]
- **Pricing psychology:** [Anchoring, decoy tier, annual discount strategy]

## Positioning & Messaging
- **Tagline:** [Their headline]
- **Key claims:** [What they promise]
- **Social proof:** [Logos, testimonials, case studies they feature]
- **Content strategy:** [Blog, YouTube, podcast — what channels and cadence]
- **ICP signals:** [Who their marketing speaks to based on language and examples]

## Strengths to Respect
[2-3 things they genuinely do better or differently]

## Vulnerabilities to Exploit
[2-3 areas where you can win — feature gaps, underserved segments, positioning weaknesses, pricing mistakes]

## Strategic Recommendations
[3-5 actionable takeaways for the user's product or positioning]
```

### Analysis Principles

- **Be honest about strengths.** Pretending a competitor is bad when they're not leads to bad decisions. Acknowledge what they do well so you can compete with eyes open.
- **Focus on positioning gaps, not feature checklists.** The most valuable insight is rarely "they have feature X and we don't" — it's "they positioned for audience A, which leaves audience B underserved."
- **Separate facts from inferences.** Label what you know from the provided material versus what you're inferring. "Their pricing page shows..." is fact. "This suggests they're targeting mid-market..." is inference.
- **Make it actionable.** Every teardown should end with concrete recommendations, not just observations.
- **Look at what they don't say.** Gaps in messaging often reveal product weaknesses or strategic bets.

### Common Pitfalls

- Don't produce a feature checklist without strategic analysis — that's a spreadsheet, not a teardown
- Don't assume their marketing reflects their actual product — note when claims seem inflated
- Don't focus only on today — look for signals about where they're heading (job postings, recent launches, blog topics)
- Don't compare apples to oranges — if they serve a different segment, say so

## Examples

### Input
"Here's the pricing page and homepage copy for LinearB. We're building a dev productivity tool and need to understand how they position. [user pastes content]"

### Expected Output

# Competitor Teardown: LinearB
Date: March 2026
Sources: Homepage copy, pricing page, G2 reviews (provided by user)

## Company Snapshot
- **What they do:** Software engineering intelligence platform — measures DORA metrics, cycle time, and team efficiency
- **Target customer:** VP Engineering and CTO at companies with 50-500 developers
- **Stage/size:** Series B ($71M raised), ~150 employees
- **Key narrative:** "Improve developer productivity with data, not opinions"

## Product Analysis
### Core Features

| Feature | LinearB | Us | Gap/Advantage |
|---------|---------|-----|---------------|
| DORA metrics | Full suite, benchmarking | Basic dashboard | They're ahead — but metrics alone don't drive change |
| Git analytics | Deep PR-level analysis | Commit-level only | Feature gap we should close |
| Workflow automation | Limited to alerts | Full automation engine | Our advantage — we act, they report |

### What They Do Well
- Strong enterprise credibility (SOC 2, SSO, audit logs)
- Benchmarking against industry data is compelling for CTOs justifying headcount
- Clean dashboard design — low learning curve

### What They Do Poorly
- G2 reviews cite "metric overload" — too many dashboards, not enough guidance on what to do
- No individual developer experience — purely management-facing
- Setup requires significant configuration — 2-3 week onboarding commonly cited

## Vulnerabilities to Exploit
1. **They measure, we act.** LinearB tells you cycle time is slow. We tell you why and automate the fix. Position as "LinearB shows you the problem, we solve it."
2. **Developer-hostile positioning.** Their messaging is 100% management-facing. Developers feel surveilled, not supported. We can win the bottom-up motion they're ignoring.
3. **Onboarding friction.** 2-3 weeks to value vs. our 15-minute setup is a concrete differentiator for mid-market buyers with less eng ops capacity.

## Strategic Recommendations
1. Add DORA metrics to close the feature gap — but frame them as "team health" not "performance tracking"
2. Lead with "time to value" in competitive deals — their onboarding weakness is our opening
3. Build a "LinearB comparison" landing page targeting their branded search traffic
4. Target companies with 20-50 devs — below LinearB's sweet spot but big enough to need tooling
