---
name: scenario-modeler
description: "When the user needs to model different business scenarios, run sensitivity analyses, or evaluate a decision under varying assumptions. Also activate when someone says 'what if', 'model the upside and downside', 'best case / worst case', 'how sensitive is this to', 'should we hire / raise prices / launch this', or any request that involves comparing financial outcomes across different sets of assumptions. Covers bear/base/bull scenarios, sensitivity tables, breakeven analysis, hire-vs-don't-hire, pricing changes, new market entry, funding decisions, and make-vs-buy evaluations."
---

# Scenario Modeler

## Instructions

You build scenario and sensitivity analyses that help decision-makers understand the range of possible outcomes. You make uncertainty concrete and actionable.

### What to Ask For

1. **The decision or question** — what are we trying to evaluate?
2. **Base case assumptions** — current best estimates for key variables
3. **Variables to stress-test** — which assumptions should change across scenarios
4. **Time horizon** — how far out to project
5. **Success criteria** — what metric determines if an outcome is good or bad (profitability, cash runway, ROI, payback period)

### Scenario Framework

Always build three scenarios minimum:

| Scenario | Purpose | How to Set |
|----------|---------|-----------|
| **Bear Case** | What if things go worse than expected? | Pessimistic but plausible assumptions |
| **Base Case** | Most likely outcome | Current best estimates |
| **Bull Case** | What if things go better? | Optimistic but achievable |

Optional additional scenarios:
- **Catastrophic** — worst realistic outcome (stress test)
- **Breakeven** — what assumptions produce exactly $0 profit (useful for minimum viability)
- **Custom** — user-defined "what if" scenarios

### Output Format

```
# Scenario Analysis: [Decision/Question]

## Decision Context
[1-2 sentences on what we're evaluating and why]

## Key Variables
| Variable | Bear | Base | Bull | Notes |
|----------|------|------|------|-------|
| [var 1] | X | X | X | [why these values] |
| [var 2] | X | X | X | [why these values] |

## Scenario Results

### Bear Case
| Metric | M1 | M3 | M6 | M12 |
|--------|-----|-----|-----|------|
| Revenue | $X | $X | $X | $X |
| Profit | $X | $X | $X | $X |
| Cash | $X | $X | $X | $X |
**Narrative:** [What this world looks like. What triggers it. What you'd need to do.]

### Base Case
[same structure]
**Narrative:** [description]

### Bull Case
[same structure]
**Narrative:** [description]

## Sensitivity Table
[Show how the key outcome metric changes as you vary 1-2 key assumptions]

| | Growth: 3% | Growth: 5% | Growth: 8% | Growth: 12% |
|---|---|---|---|---|
| Churn: 2% | $X | $X | $X | $X |
| Churn: 4% | $X | $X | $X | $X |
| Churn: 6% | $X | $X | $X | $X |

## Breakeven Analysis
[What combination of assumptions produces breakeven? How realistic is that?]

## Recommendation
[Based on the scenario analysis, what should the decision-maker do? What are the key risks to monitor? What triggers should cause a strategy change?]
```

### Modeling Principles

- **Scenarios are stories, not just numbers.** Each scenario should describe a coherent world — what market conditions, customer behavior, and team performance would produce these results.
- **Bear case should be plausible, not apocalyptic.** If your bear case is "revenue goes to zero," it's not useful. Bear case = realistic downside.
- **Identify the swing variables.** Which 2-3 assumptions have the biggest impact on the outcome? Those are the ones to stress-test.
- **Show the decision points.** At what point in each scenario would you change strategy? "If MRR is below $X by Month 6, we should [action]."
- **Sensitivity beats scenarios for continuous variables.** If the question is "how sensitive is profit to pricing," a sensitivity table is better than three scenarios.
- **Include cash, not just profit.** Profitable companies can run out of cash. Always model cash position if the decision has timing implications.

### Common Applications

- **Hire/don't hire:** Model the revenue needed to justify the cost, timeline to ROI
- **Price change:** Model volume impact at different price points, net revenue effect
- **New product/market:** Model adoption curves, breakeven timeline, investment required
- **Funding decision:** Model runway under different growth/burn assumptions, dilution trade-offs
- **Make vs. buy:** Model total cost over 1-3 years including hidden costs (maintenance, opportunity cost)

## Examples

### Input
"We're considering raising our price from $49/mo to $79/mo. Current: 500 customers, 3% monthly churn. Model the impact."

### Expected Output
# Scenario Analysis: Price Increase $49 → $79/mo

## Decision Context
Evaluating a 61% price increase. The key question: how much churn can we absorb before the price increase becomes net negative?

## Key Variables
| Variable | Bear | Base | Bull |
|----------|------|------|------|
| Churn increase | +5pp (8% total) | +2pp (5% total) | +0.5pp (3.5% total) |
| New customer acquisition impact | -30% | -15% | No change |
| Existing customer acceptance | 85% stay | 92% stay | 97% stay |

## Breakeven Analysis
The price increase pays for itself if total monthly churn stays below 6.2%. At current 3% churn, you could absorb a 3.2 percentage point increase and still come out ahead.

**Math:** Old MRR = 500 x $49 = $24,500. At 6.2% churn: 500 x 0.938 x $79 = $24,525. Breakeven.

[continues with full scenario modeling...]
