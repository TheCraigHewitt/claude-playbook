# /decision-journal

Structured decision capture, tracking, and pattern analysis. Builds institutional memory across sessions.

## Input

**Mode:** $ARGUMENTS

Parse the first word to determine mode:
- **"log [description]"** — Record a new decision
- **"update [decision slug]"** — Update an existing decision with outcomes
- **"review"** — Analyze all past decisions for patterns

If no arguments provided, ask which mode they want.

---

## Before Starting

Read `context/00-quick-reference.md` for current strategic context.
Read all files in `context/decisions/` to understand existing decisions.

---

## Mode: Log

Walk through structured decision capture. Don't make this feel like filling out a form — have a conversation, then format the output.

**Ask these questions (conversationally, not all at once):**

1. What's the decision? (One sentence)
2. What triggered it? What's the context?
3. What options did you consider? (Get at least 2, plus "do nothing")
4. For each option: what's the upside? What's the risk?
5. What did you decide?
6. Why this option over the others?
7. What do you expect to happen?
8. When should we revisit this? (Default: 30 days)

**Generate the decision file:**

```markdown
# [Decision Title]
**Date:** [YYYY-MM-DD]
**Status:** Active
**Review date:** [YYYY-MM-DD]

## Context
[What triggered this decision — 2-3 sentences]

## Options Considered
1. **[Option A]** — [Pros] / [Cons]
2. **[Option B]** — [Pros] / [Cons]
3. **Do nothing** — [Pros] / [Cons]

## Decision
[What was decided — clear, unambiguous]

## Reasoning
[Why this option. What it optimizes for. What tradeoffs were accepted.]

## Expected Outcome
[What we think will happen — specific enough to verify later]

## Actual Outcome
*[To be filled in later]*

## Lessons
*[To be filled in later]*
```

**Save to:** `context/decisions/[YYYY-MM-DD]-[slug].md`

The slug should be 2-4 words, lowercase, hyphenated (e.g., `2026-02-09-raise-pricing.md`).

After saving, confirm the file path and remind the user they can update it later with `/decision-journal update [slug]`.

---

## Mode: Update

**Parse the slug from arguments** (everything after "update").

Find the matching file in `context/decisions/`. If no exact match, list available decisions and ask which one.

**Ask:**
1. What actually happened?
2. Did the expected outcome match reality?
3. What did you learn?
4. Should the status change to "Resolved"?

**Update the file** — fill in "Actual Outcome" and "Lessons" sections. Update status if resolved.

---

## Mode: Review

Read ALL files in `context/decisions/`.

**Analyze for:**

### Decision Patterns
- What types of decisions come up most? (Product, hiring, pricing, strategy, etc.)
- How quickly are decisions being made vs. deferred?
- Any decisions that keep getting revisited without resolution?

### Bias Detection
- **Risk tolerance:** Are most decisions conservative or aggressive?
- **Speed vs. deliberation:** Quick-fire or agonizing?
- **Sunk cost:** Any decisions where past investment is driving future choices?
- **Status quo bias:** How often is "do nothing" chosen?

### Prediction Accuracy
- For resolved decisions: how often did expected outcomes match actual?
- Where were predictions most off? What does that suggest?

### Overdue Reviews
- Flag any decisions past their review date
- Prioritize which ones need attention first

### Lessons & Themes
- What recurring lessons emerge?
- What principles should inform current thinking?

**Present the analysis conversationally** — not as a dry report. Highlight the 2-3 most interesting or actionable findings.

**Save to:** `output/decision-review-[YYYY-MM-DD].md`

---

## After Delivering

For **log** mode, offer to:
- Log another decision
- Adjust the review date
- Connect this to a recent meeting follow-up

For **review** mode, offer to:
- Deep-dive on a specific pattern
- Update overdue decisions
- Create a "decision principles" doc based on patterns found
