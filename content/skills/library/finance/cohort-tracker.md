---
name: cohort-tracker
description: "When the user has customer or user data and wants to analyze it by cohort — retention curves, revenue by signup month, churn patterns, or lifecycle behavior over time. Also activate when someone says 'build a cohort analysis', 'show me retention by month', 'what does our churn look like over time', 'LTV by cohort', or has customer data with signup dates and wants to understand how different groups behave. Covers retention cohorts, revenue cohorts, usage cohorts, segmented comparisons (by channel, plan, geography), and LTV projections from cohort data."
---

# Cohort Tracker

## Instructions

You build cohort analyses from customer data. You group customers by when they started and track their behavior over time to reveal retention patterns, revenue trends, and lifecycle dynamics.

### What to Ask For

1. **Customer data** — at minimum: customer ID, signup/purchase date, and the metric to track (revenue, activity, status)
2. **Cohort grouping** — monthly (default), weekly, or quarterly
3. **Metric to track** — retention rate, revenue per cohort, cumulative LTV, usage, or other
4. **Time periods** — how many periods to track (6 months, 12 months, etc.)
5. **Any segments** — plan type, acquisition channel, geography, company size

### Cohort Table Construction

**Step 1: Assign cohorts** — group customers by their start period (e.g., all January signups = "Jan 2026 cohort")

**Step 2: Build the triangle** — for each cohort, track the metric at Month 0, Month 1, Month 2, etc.

**Step 3: Calculate rates** — convert absolute numbers to percentages (retention) or per-customer averages (revenue)

### Output Format

```
# Cohort Analysis: [Metric]
Period: [date range] | Cohorts: [N] | Customers: [total]

## Retention Cohort Table
| Cohort | Size | M0 | M1 | M2 | M3 | M4 | M5 | M6 |
|--------|------|-----|-----|-----|-----|-----|-----|-----|
| Jan 26 | 120 | 100% | 78% | 65% | 58% | 55% | 52% | 50% |
| Feb 26 | 145 | 100% | 82% | 70% | 63% | 60% | | |
| Mar 26 | 130 | 100% | 75% | 62% | | | | |

## Key Findings

### Retention Curve Shape
[Is retention stabilizing? At what month? What's the steady-state rate?]

### Cohort Comparisons
[Are newer cohorts better or worse? Why might that be?]

### Revenue Impact
[What does the retention pattern mean for LTV and revenue forecasting?]

## Actionable Insights
1. [Finding + recommendation]
2. [Finding + recommendation]
3. [Finding + recommendation]
```

### Analysis Patterns to Look For

- **Early drop-off:** If most churn happens in Month 1-2, the onboarding experience is the problem
- **Gradual decay:** If churn is steady across all periods, there's no "aha moment" keeping people
- **Stabilization:** If retention flattens (e.g., at Month 4), you've found your core users — identify what makes them different
- **Cohort improvement:** If newer cohorts retain better, your product or onboarding is improving
- **Cohort degradation:** If newer cohorts retain worse, you may be acquiring lower-quality customers (channel mix shift?)
- **Seasonal patterns:** Do cohorts from certain months behave differently?
- **Revenue expansion:** In revenue cohorts, look for months where revenue per cohort grows (expansion > churn)

### Formulas (for spreadsheet implementation)

When the user wants to build this in a spreadsheet:

```
Retention rate = Customers active in Month N / Customers in cohort at Month 0

Cohort revenue = SUM of revenue from all customers in that cohort during Month N

Revenue per customer = Cohort revenue in Month N / Customers in cohort at Month 0
(use Month 0 denominator to show true per-customer value including churn)

Cumulative LTV = Running sum of revenue per customer through Month N
```

### Advanced Analyses

**Segmented cohorts:** When comparing acquisition channels or plan types, build separate cohort tables and compare curves side by side.

**LTV projection:** If the retention curve has stabilized, project LTV using:
`Projected LTV = (Average revenue per period) / churn rate`

**Payback period:** Overlay CAC on the cumulative LTV curve. The intersection = payback period.

## Examples

### Input
"Here's 6 months of customer data with signup date and monthly revenue. Build me a retention cohort analysis."

### Expected Output
# Cohort Analysis: Customer Retention
Period: Sep 2025 - Feb 2026 | Cohorts: 6 | Customers: 780

## Retention Cohort Table
| Cohort | Size | M0 | M1 | M2 | M3 | M4 | M5 |
|--------|------|------|------|------|------|------|------|
| Sep 25 | 110 | 100% | 72% | 61% | 55% | 52% | 50% |
| Oct 25 | 125 | 100% | 74% | 63% | 57% | 54% | |
| Nov 25 | 140 | 100% | 78% | 68% | 62% | | |
| Dec 25 | 115 | 100% | 80% | 70% | | | |
| Jan 26 | 145 | 100% | 82% | | | | |
| Feb 26 | 145 | 100% | | | | | |

## Key Findings

### Retention is improving
Month 1 retention has climbed from 72% (Sep) to 82% (Jan) — a 10-point improvement over 5 months. If you made onboarding changes in Q4, they're working.

### The curve stabilizes at Month 4
For mature cohorts, retention flattens around 52-54%. This means roughly half of every cohort becomes long-term customers. The critical window is Month 0-2 where you lose 30-35% of signups.

### Focus area: the Month 1 cliff
28% of customers leave in the first month (Sep cohort). This is your highest-leverage retention opportunity. Investigate what the 72% who stay did differently in their first 30 days.
