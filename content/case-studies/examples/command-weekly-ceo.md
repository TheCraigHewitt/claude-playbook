# /weekly-ceo

A structured weekly ritual in 3 phases: automated metrics brief, interactive review, saveable output. Run every Sunday or Monday.

---

## Phase 1 — Automated Brief

**Do this immediately — no questions, just data.**

### Pull Live Metrics

Use your analytics MCP connection to pull current data:

1. **MRR:** Current MRR, month-over-month change, 3-month trend
2. **Churn:** Customer and revenue churn rates
3. **Customer count:** Total active customers, net adds/losses
4. **Recent activity:** Last 7 days of upgrades, downgrades, cancellations, new customers

### Read Context Files

- `context/metrics-current.md` — Compare live data to stored targets
- `context/exit-parameters.md` — Keep strategic goals in frame
- `context/team-structure.md` — Reference for delegation suggestions

### Present the Dashboard

```
## Weekly Dashboard — [Date]

| Metric | Current | Last Week | Trend | Target |
|--------|---------|-----------|-------|--------|
| MRR | $XXX | $XXX | ↑/↓/→ X% | $XXX |
| Customer Churn | X.X% | X.X% | ↑/↓/→ | <X% |
| MRR Churn | X.X% | X.X% | ↑/↓/→ | <X% |
| Active Customers | XXX | XXX | +/-X | XXX |

### Notable Activity (Last 7 Days)
- [X] new customers
- [X] upgrades ($XXX MRR added)
- [X] downgrades ($XXX MRR lost)
- [X] cancellations ($XXX MRR lost)
- Net MRR change: +/- $XXX
```

### Flag Anomalies

After presenting the dashboard, proactively flag:
- Any metric trending wrong for 2+ weeks
- Unusual spikes in cancellations or downgrades
- MRR churn exceeding customer churn (big accounts leaving)
- Anything that looks different from the normal pattern

**Be direct.** If the numbers look bad, say so. Don't bury the lead.

---

## Phase 2 — Interactive Review

Shift to conversation. Keep Phase 1 data visible as context.

### Fires (3 min)
- "Any fires this week? What consumed unexpected time?"
- "Anything that almost became a fire but didn't?"

### Priorities (5 min)

**Last Week:**
- "What did you commit to last week?"
- "Did it happen? If not, what got in the way?"

**This Week:**
- "What's the ONE thing for this week that matters most?"
- "Is that thing actually [goal]-relevant, or just urgent?"
- "What would make this week a win?"

**Traps to Avoid:**
- "Is there anything on your plate that shouldn't be?"
- "What are you tempted to do that you should resist?"

### Time Audit (3 min)
- "How many hours did [the business] take this week?"
- "Was it maintenance, or did something pull you deeper?"
- "What from this week can be systematized or delegated?"

### Strategic Goal Check (2 min)
- "Any progress on [primary strategic goal] this week?"
- "Anything that would embarrass us in [relevant scenario]?"
- "What's the one thing that would most improve [goal] readiness right now?"

### The Wrestling Question

End with this:

> "What's the one question you're wrestling with right now?"

Then dig into it. This is often where the real value is.

---

## Phase 3 — Output

After the conversation, generate a saveable weekly brief. Don't ask — just do it.

```markdown
# Weekly CEO Brief — [Date]

## Metrics Snapshot
[Dashboard table from Phase 1]

## Anomalies & Flags
- [Anything flagged from Phase 1]

## Key Discussion Points
- [Summary of Phase 2 conversation]

## Decisions Made
- [Any decisions, with brief rationale]

## Action Items
| Action | Owner | Deadline |
|--------|-------|----------|
| [Item] | [Who] | [When] |

## This Week's Focus
**The ONE thing:** [From Phase 2 discussion]

## Strategic Goal Update
- [Progress noted, or lack thereof]

## Next Week
- [Anything to carry forward]
- [Review dates for any logged decisions]
```

**Save to:** `working/weekly-brief-[YYYY-MM-DD].md`

---

## Red Flags to Watch For

If the CEO reports any of these repeatedly, dig deeper:

- Business consuming more hours than budgeted, consistently
- Avoiding team conversations
- Metrics trending wrong with no plan
- No progress on strategic goal for 3+ weeks
- Same problem surfacing week after week
- Revenue churn outpacing customer churn (losing bigger accounts)
