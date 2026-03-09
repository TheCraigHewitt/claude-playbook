---
name: excel-model-builder
description: "When the user needs a financial model, spreadsheet, or workbook with real formulas — projections, budgets, unit economics, headcount plans, or any structured calculation. Also use when someone says 'build me a model', 'create a spreadsheet', 'I need formulas for', 'make me a P&L', 'forecast this', or describes financial logic they want in Excel or Google Sheets. Covers SaaS models, revenue projections, fundraising models, pricing models, budget templates, and any request that should result in spreadsheet-ready output with working formulas."
---

# Excel Model Builder

## Instructions

You design spreadsheet models with real, working formulas. You output structured tables with Excel/Google Sheets formula syntax that the user can paste directly into their spreadsheet.

### What to Ask For

1. **Model type** — P&L projection, budget, unit economics, fundraising model, pricing model, headcount plan, other
2. **Time horizon** — monthly, quarterly, annual; how many periods
3. **Key assumptions** — growth rates, margins, headcount, pricing, churn
4. **Level of detail** — high-level (one sheet) or detailed (multiple tabs)
5. **Output format** — Google Sheets formulas, Excel formulas, or just the structure with logic descriptions

### Model Design Principles

- **Assumptions in one place.** Every assumption lives in a clearly labeled assumptions section. Formulas reference these cells — never hardcode numbers in formulas.
- **Inputs are blue, formulas are black.** Tell the user which cells are inputs (they'll format them blue) and which are calculated.
- **Flow top-to-bottom, left-to-right.** Assumptions at top, calculations in middle, outputs at bottom. Time flows left to right.
- **Every formula is auditable.** A finance person should be able to trace any number back to its source in under 30 seconds.
- **Label everything.** Row headers, column headers, units, section dividers.
- **Error-proof where possible.** Use IFERROR for division. Use MAX(0, value) where negatives don't make sense.

### Standard Model Structure

```
## Sheet: Assumptions
| | Value | Notes |
|---|---|---|
| Monthly revenue growth rate | 8% | [INPUT] |
| Gross margin | 65% | [INPUT] |
| Monthly churn rate | 3% | [INPUT] |
| Starting MRR | $50,000 | [INPUT] |

## Sheet: Model
| | Month 1 | Month 2 | Month 3 | ... |
|---|---|---|---|---|
| **Revenue** | | | | |
| Beginning MRR | =Assumptions!B4 | =C_EndingMRR | =D_EndingMRR | |
| New MRR | =B*Assumptions!B1 | =C*Assumptions!B1 | | |
| Churned MRR | =-B*Assumptions!B3 | =-C*Assumptions!B3 | | |
| Ending MRR | =SUM(B:B_churned) | | | |
| **COGS** | | | | |
| Cost of revenue | =B_Revenue*(1-Assumptions!B2) | | | |
| **Gross Profit** | =B_Revenue-B_COGS | | | |
```

### Formula Conventions

When writing formulas:
- Use cell references like `B4`, `C12` — but also describe what each reference points to in comments
- For cross-sheet references: `Assumptions!B4`
- Use named ranges where it improves readability: `growth_rate` instead of `Assumptions!$B$4`
- Use absolute references (`$B$4`) for assumptions that don't change across columns
- Use relative references (`B4`) for values that shift with each period
- Provide the Google Sheets version by default; note any Excel differences

### Common Model Types

**SaaS P&L Projection:** MRR build (new, expansion, churn, contraction), revenue recognition, COGS by category, opex by department, EBITDA

**Unit Economics:** CAC, LTV, LTV:CAC ratio, payback period, contribution margin by cohort

**Headcount Plan:** Roles by department, start dates, fully-loaded cost (salary + benefits + taxes at 25-35%), monthly cash impact

**Fundraising Model:** Current runway, burn rate projection, dilution scenarios, milestone-based tranches

**Budget vs. Actual:** Budget column, actual column, variance ($ and %), YTD tracking, forecast to year-end

### Output Format

Provide:
1. **Tab structure** — what sheets/tabs are needed
2. **Layout** — exact rows and columns with headers
3. **Formulas** — real spreadsheet formulas for every calculated cell
4. **Input cells** — clearly marked with [INPUT]
5. **Setup instructions** — any conditional formatting, data validation, or named ranges to create

## Examples

### Input
"Build me a 12-month SaaS revenue projection. Starting MRR is $50K, growing 8% monthly, 3% monthly churn."

### Expected Output
## Tab 1: Assumptions

| Row | A | B |
|-----|---|---|
| 1 | **Assumptions** | |
| 2 | Starting MRR | $50,000 [INPUT] |
| 3 | Monthly growth rate | 8% [INPUT] |
| 4 | Monthly churn rate | 3% [INPUT] |

## Tab 2: Revenue Model

| Row | A | B (Month 1) | C (Month 2) | D (Month 3) |
|-----|---|---|---|---|
| 1 | | Jan 2026 | Feb 2026 | Mar 2026 |
| 2 | Beginning MRR | =Assumptions!B2 | =B5 | =C5 |
| 3 | + New MRR | =B2*Assumptions!$B$3 | =C2*Assumptions!$B$3 | =D2*Assumptions!$B$3 |
| 4 | - Churned MRR | =B2*Assumptions!$B$4 | =C2*Assumptions!$B$4 | =D2*Assumptions!$B$4 |
| 5 | **Ending MRR** | =B2+B3-B4 | =C2+C3-C4 | =D2+D3-D4 |
| 6 | **Monthly Revenue** | =B5 | =C5 | =D5 |
| 7 | **ARR** | =B5*12 | =C5*12 | =D5*12 |

Copy columns B through M for months 1-12. All assumption references use absolute (`$B$3`) so they won't shift.
