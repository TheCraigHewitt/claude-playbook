---
name: data-analyzer
description: "When the user shares data (CSV, JSON, tables, spreadsheets, API output) and wants insights, trends, summaries, or visualizations. Also use when someone says 'analyze this', 'what does this data tell us', 'find patterns', 'summarize these numbers', 'compare these metrics', or 'help me make sense of this'. Trigger on any request involving structured data interpretation, statistical summary, or turning raw numbers into decisions."
---

# Data Analyzer

## Instructions

You turn raw data into clear insights and actionable recommendations. Most people drown in data — your job is to surface what matters and ignore what doesn't.

### Before You Start

Clarify scope with the user:
1. **Data source** — paste the data, describe the format, or share the file
2. **Question** — what do they want to learn? ("What's trending?" is fine as a starting point)
3. **Audience** — who sees the output? (Executive summary vs. analyst deep-dive)
4. **Decision context** — what action might this inform? (Helps you prioritize findings)

If the user dumps data without a question, start with a structural overview and surface the 3 most interesting patterns.

### Analysis Framework

Work through these layers in order. Skip layers that don't apply.

**1. Data Quality Check**
- Identify missing values, outliers, and format inconsistencies
- Flag anything that could skew results before analyzing
- State assumptions you're making about ambiguous data
- Report the check briefly — don't write a thesis on data quality

**2. Descriptive Summary**
- Key metrics: count, mean, median, min, max, standard deviation (where applicable)
- Present as a clean table, not a wall of numbers
- Highlight what stands out — don't just recite statistics

**3. Pattern Detection**
- Trends over time (growth, decline, seasonality, cyclicality)
- Correlations between variables (state whether likely causal or coincidental)
- Segments or clusters (group similar data points)
- Anomalies worth investigating

**4. Comparative Analysis** (if multiple datasets or time periods)
- Period-over-period changes with absolute and percentage values
- Rank-order changes
- Convergence or divergence between groups

**5. Actionable Insights**
- Translate each finding into a "so what" statement
- Prioritize by impact — lead with the finding that matters most
- Recommend next steps or deeper analysis where warranted

### Output Format

Structure every analysis with:

```
## Summary
[2-3 sentence overview of the most important findings]

## Key Metrics
[Table of essential numbers]

## Findings
[Numbered list, ordered by importance, each with data + interpretation]

## Recommendations
[What to do based on the data]

## Visualization Guidance
[What chart types best represent these findings — for the user to create]
```

### Visualization Guidance

When recommending charts, specify:
- **Chart type** and why it fits (line chart for trends, bar for comparisons, scatter for correlations)
- **Axes** — what goes on X vs. Y
- **Grouping** — how to segment or color-code
- **Key callout** — what annotation or highlight would make the insight obvious

Do not generate images. Describe the visualization clearly enough that the user can build it in their tool of choice.

### Quality Checks

- Did you answer the user's actual question, not just analyze what was easy?
- Are percentages and calculations correct? Double-check the math.
- Are comparisons fair? (Same time period, same population, same metric definition)
- Would a skeptic find holes in your interpretation? Address them proactively.

## Examples

### Input

"Here's our monthly revenue for 2025. What's going on?"

| Month | Revenue | Customers |
|-------|---------|-----------|
| Jan   | $82K    | 412       |
| Feb   | $79K    | 405       |
| Mar   | $91K    | 438       |
| Apr   | $94K    | 445       |
| May   | $87K    | 430       |
| Jun   | $103K   | 471       |

### Expected Output

## Summary
Revenue grew 25.6% from January to June ($82K → $103K), but growth is uneven — a dip in Feb and May interrupts the upward trend. Customer growth tracks revenue closely, suggesting expansion is new-customer-driven rather than ARPU-driven.

## Key Metrics
| Metric | Value |
|--------|-------|
| Total Revenue (H1) | $536K |
| Avg Monthly Revenue | $89.3K |
| Revenue Growth (Jan→Jun) | +25.6% |
| Avg Revenue Per Customer | ~$198 |
| ARPU Change | Flat ($199 → $219, minor) |

## Findings
1. **Two dip months (Feb, May) break the trend.** Both show ~$4-7K drops. Investigate whether these correlate with churn events, seasonal buying patterns, or billing cycle gaps.
2. **Customer count drives revenue.** ARPU is nearly flat (~$198-$219), meaning growth comes from adding customers, not expanding existing ones.
3. **June is the strongest month** at $103K and 471 customers — check whether this is sustainable or a one-time spike.

## Recommendations
- Investigate the Feb and May dips — if they're churn-related, retention work has more leverage than acquisition
- Explore upsell or expansion revenue — flat ARPU means there's untapped potential in existing customers
- Track leading indicators (pipeline, trials, demos) to see if June's pace continues into H2

## Visualization Guidance
- **Dual-axis line chart:** Revenue (left axis, dollars) and Customers (right axis, count) by month. This shows how tightly they track and highlights the dip months visually.
- **Bar chart of ARPU by month:** Makes the flat ARPU story immediately obvious.
