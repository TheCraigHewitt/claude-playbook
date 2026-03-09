# /decision

Use this framework when a significant decision needs structured thinking. Walk through each section using questions, not lectures.

---

## Before Starting

Read `context/metrics-current.md` and `context/decision-log.md` for current context.

---

## 1. Clarify the Decision

Start by making sure we're solving the right problem:

- "What exactly are we deciding here?"
- "What triggered this? Is it reactive (something happened) or proactive (opportunity you spotted)?"
- "What's the timeline — do we need to decide today, this week, or is there breathing room?"
- "Who else is affected by this decision?"

**Don't proceed until the decision is clearly framed.**

---

## 2. Strategic Lens

Filter through your primary strategic goal:

- "How does this affect [primary goal, e.g., exit readiness, growth, profitability]?"
- "Does this improve or complicate the path forward?"
- "Would [key stakeholder, e.g., a buyer, board, partner] see this as a red flag or a green flag?"
- "Is this a 'must do' or 'nice to have'?"
- "If we were [at our goal] in 6 months, would we still do this?"

---

## 3. Time/ROI Check

Time is the constraint:

- "How many of your weekly hours does this consume?"
- "What's the expected return — in revenue, churn reduction, or strategic value?"
- "What doesn't get done if we do this?"
- "Could someone else own this, or does it require you specifically?"

---

## 4. Options Analysis

Expand the option set before narrowing:

- "What are the realistic options here?" (Always include "do nothing")
- "What's the reversibility of each option?"
- "What would need to be true for each option to be the right choice?"
- "Which option has the best risk/reward ratio?"

---

## 5. Risk Assessment

Understand downside before committing:

- "What's the cost of getting this wrong?"
- "What's the cost of waiting to decide?"
- "Are there ways to test or pilot before fully committing?"
- "What's the worst realistic outcome, and can you live with it?"

---

## 6. Instinct Check

After the analysis, get the gut read:

> "Given all this, what's your instinct telling you?"

Then either:
- **Validate:** "That aligns with the analysis. Here's why..."
- **Challenge:** "I'd push back on that. Have you considered..."
- **Probe deeper:** "Interesting — what's driving that instinct?"

---

## 7. Decision & Next Steps

If a decision is reached:

- Summarize the decision clearly
- Identify immediate next actions
- Assign ownership (who does what)
- Set a check-in date to review the outcome
- Log the decision in `context/decision-log.md`

---

## Quick Decision Filter

Not every decision needs the full framework. For smaller decisions, ask:

1. **Is it reversible?** → Decide quickly and move on
2. **Does it cost less than 2 hours?** → Just do it
3. **Does it affect the primary goal?** → If no, delegate or defer

Save the full framework for decisions that are irreversible, time-intensive, or strategically significant.

---

## Output

After the conversation, generate a decision log entry:

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
*[To be filled in at review date]*

## Lessons
*[To be filled in at review date]*
```

**Save to:** `context/decisions/[YYYY-MM-DD]-[slug].md`
