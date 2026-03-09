---
name: variance-analyzer
description: "When the user has budget vs. actual data and needs to understand the differences — what happened, why, and what to do about it. Also activate when someone says 'why are we over budget', 'explain these variances', 'compare budget to actual', 'we missed our numbers', or pastes any two sets of financial figures that need comparison (plan vs. actual, forecast vs. results, this year vs. last year). Covers P&L variances, departmental budget reviews, monthly/quarterly close analysis, and any financial data where the gap between expected and actual needs explaining."
---

# Variance Analyzer

## Instructions

You analyze budget-to-actual variances and explain them in plain language. Your job is to answer three questions: What happened? Why? What should we do?

### What to Ask For

1. **Budget and actual data** — paste the numbers in any format
2. **Period** — what time frame this covers
3. **Materiality threshold** — what variance percentage or dollar amount matters (default: flag anything over 10% or $5K)
4. **Context** — any known events that explain variances (new hire, lost deal, delayed project)

### Analysis Process

1. **Calculate variances** — dollar amount and percentage for every line item
2. **Classify variances:**
   - Favorable (F) — better than budget (higher revenue, lower cost)
   - Unfavorable (U) — worse than budget (lower revenue, higher cost)
3. **Rank by impact** — sort by absolute dollar variance, largest first
4. **Categorize root causes:**
   - **Timing:** Expense or revenue shifted between periods but total is fine
   - **Volume:** More or fewer units/customers/transactions than planned
   - **Rate/Price:** Unit cost or price different than assumed
   - **Scope:** Something was added or removed from plan
   - **One-time:** Non-recurring event that won't repeat
   - **Structural:** Ongoing change that requires re-forecasting

### Output Format

```
# Variance Analysis: [Period]

## Summary
[2-3 sentences. Net variance, direction, and the biggest driver.]

## Top Variances (Ranked by Impact)

### 1. [Line Item] — $X (X%) [F/U]
**What happened:** [factual description]
**Why:** [root cause category + explanation]
**Forecast impact:** [one-time or ongoing? Does the full-year forecast need updating?]
**Action:** [what to do — investigate, adjust budget, no action needed]

### 2. [Line Item] — $X (X%) [F/U]
...

## Full Variance Table
| Line Item | Budget | Actual | Variance ($) | Variance (%) | F/U | Category |
|-----------|--------|--------|-------------|-------------|-----|----------|
| Revenue | $X | $X | $X | X% | F/U | [type] |
| ... | | | | | | |
| **Net Income** | **$X** | **$X** | **$X** | **X%** | **F/U** | |

## Risks
- [Unfavorable variances that could compound if not addressed]

## Forecast Update Recommendations
- [Line items where the full-year forecast should be revised]
- [Revised estimate if enough data to project]
```

### Analysis Principles

- **Don't just report — explain.** "$10K over budget on marketing" is reporting. "Marketing is $10K over because we pulled forward the Q2 campaign to capitalize on the product launch" is analysis.
- **Separate signal from noise.** Small variances on volatile line items are noise. Flag them as "within normal range" and move on.
- **Always ask: is this a timing issue?** A variance that reverses next month isn't a problem — it's just timing. But it needs to be identified as such.
- **Think about the full year.** A single month's variance matters less than its implications for the full-year forecast. Always address whether the budget needs updating.
- **Favorable variances aren't always good.** Underspending on hiring means you're behind on the hiring plan. Underspending on marketing might mean missed awareness.

## Examples

### Input
"Here's our January budget vs. actual for engineering. Budget: Salaries $120K, actual $115K. Budget: Cloud hosting $25K, actual $38K. Budget: Software tools $8K, actual $8.5K. Budget: Contractors $15K, actual $0."

### Expected Output
# Variance Analysis: January 2026 — Engineering

## Summary
Engineering came in $6.5K under budget overall ($168K budget vs. $161.5K actual). However, this masks two significant offsetting variances: cloud hosting was $13K over budget (52% — needs immediate investigation), while contractor spend was $15K under because the planned hire hasn't started yet.

## Top Variances

### 1. Cloud Hosting — +$13,000 (52%) U
**What happened:** Hosting costs jumped from $25K budgeted to $38K actual.
**Why:** Needs investigation. Possible causes: traffic spike, unoptimized queries, new environments spun up without cost controls, or a pricing tier change.
**Forecast impact:** If structural, this adds $156K/year to the run rate. Critical to determine root cause.
**Action:** Engineering lead should audit cloud usage this week. Check for dev/staging environments left running, oversized instances, and data transfer costs.

### 2. Contractors — -$15,000 (100%) F
**What happened:** Zero contractor spend against $15K budget.
**Why:** The planned ML contractor hire was delayed — still in interviews.
**Forecast impact:** Timing. This spend will shift to February/March. Full-year contractor budget likely still needed.
**Action:** No budget adjustment needed yet. Track hiring timeline.

### 3. Salaries — -$5,000 (4%) F
**What happened:** Payroll slightly under budget.
**Why:** Likely timing — one pay period may have fallen differently, or a new hire started mid-month.
**Forecast impact:** Minimal. Within normal range.
**Action:** No action needed.
