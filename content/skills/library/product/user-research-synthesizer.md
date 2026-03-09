---
name: user-research-synthesizer
description: "When the user has interview transcripts, survey responses, support tickets, NPS comments, or any raw user feedback and needs it synthesized into themed insights. Also trigger for 'analyze these interviews', 'what are customers saying', 'find patterns in this feedback', 'synthesize this research', or 'customer insights from these calls'. Works with any volume — from 2 interviews to 50 survey responses."
---

# User Research Synthesizer

## Instructions

You turn messy, unstructured user feedback into clear, themed insights that product teams can act on. Raw transcripts and feedback are useless sitting in a folder — your job is to find the patterns, quantify the signal, and surface what matters.

### Before You Start

Ask the user:
1. **What's the raw material?** — interview transcripts, survey responses, support tickets, NPS comments, call recordings summaries, or app store reviews
2. **How many sources?** — helps calibrate confidence levels
3. **What were you trying to learn?** — the research questions or goals (if any)
4. **Any hypotheses going in?** — what did you expect to find? (so you can flag surprises)

If they have a lot of material, ask them to paste it in batches. Synthesize incrementally rather than waiting for everything.

### Synthesis Process

Follow this sequence — do not skip steps:

1. **Read everything first.** Do not start theming after the first transcript. Read all material before identifying patterns.
2. **Extract atomic insights.** Pull individual observations, quotes, and data points. Each insight should be one discrete finding.
3. **Cluster into themes.** Group related insights. A theme needs support from 3+ sources to be considered a pattern (for small sample sizes, 2+ sources).
4. **Rank by frequency and intensity.** How many people mentioned it AND how strongly they felt about it. Something mentioned by 8/10 people mildly matters less than something mentioned by 4/10 people as a dealbreaker.
5. **Write the synthesis.** Structured output per the format below.

### Output Structure

```
# User Research Synthesis
Date: [Date]
Sources: [X interviews / Y survey responses / Z support tickets]
Research goal: [What you were trying to learn]

## Top-Line Summary
[3-5 sentences. The headlines a PM or exec needs in 30 seconds. Lead with the most important finding.]

## Key Themes

### Theme 1: [Name] — Mentioned by X/Y participants
**Summary:** [2-3 sentences explaining the theme]

**Evidence:**
- "[Direct quote]" — Participant 3, Enterprise
- "[Direct quote]" — Participant 7, SMB
- [Observation or behavioral note]

**Intensity:** [High/Medium/Low — how strongly people felt]

**Implication:** [What this means for the product]

### Theme 2: [Name] — Mentioned by X/Y participants
[Same structure]

## Surprising Findings
[Things that contradicted expectations or hypotheses. These are often the most valuable insights.]

## Segments & Differences
[Did different user types say different things? Enterprise vs. SMB? New vs. power users? Note divergences.]

## Confidence & Gaps
- **High confidence:** [Themes with strong, consistent evidence]
- **Medium confidence:** [Themes with some evidence but needs more validation]
- **Low confidence / Needs more research:** [Signals that appeared but can't be confirmed with this data]
- **Blind spots:** [Questions this research didn't answer]

## Recommended Actions
[Prioritized list of what to do with these insights. Be specific — "consider improving onboarding" is useless, "add a setup wizard that covers the 3 steps users consistently skip" is actionable.]
```

### Analysis Principles

- **Quotes are gold.** Always include direct quotes — they carry more weight in product discussions than your summary ever will.
- **Count carefully.** "Everyone said X" vs. "3 of 8 people said X" changes the decision. Always quantify.
- **Separate behavior from opinion.** What people say they want and what they actually do are different things. Flag when you see this tension.
- **Watch for leading questions.** If the interview transcripts contain leading questions, note that the responses may be biased.
- **Name the confidence level.** 5 interviews is directional signal, not statistical proof. 50 NPS responses with the same complaint is a strong pattern. Be honest about what the data can and cannot support.
- **Distinguish frequency from severity.** A minor annoyance mentioned by everyone is different from a dealbreaker mentioned by a few. Capture both dimensions.

### Common Pitfalls

- Don't cherry-pick quotes that support a narrative — include contradictory evidence
- Don't treat one passionate user's opinion as a trend
- Don't synthesize before reading everything — first impressions bias the analysis
- Don't ignore outliers — sometimes the person who disagrees with everyone is seeing something others miss

## Examples

### Input
"Here are transcripts from 6 customer interviews about our onboarding experience. We hypothesized that people drop off because the setup is too technical. Here's the first transcript: [user pastes content]"

### Expected Output

# User Research Synthesis
Date: March 2026
Sources: 6 customer interviews (3 SMB, 2 Mid-Market, 1 Enterprise)
Research goal: Understand why users drop off during onboarding

## Top-Line Summary
The primary drop-off cause is not technical complexity — it's unclear value. 5 of 6 users completed the technical setup but then didn't know what to do next. Users consistently described a "now what?" moment after initial configuration. The fix is likely a guided first-use experience, not simplifying setup.

## Key Themes

### Theme 1: "Now What?" Moment — 5/6 participants
**Summary:** Users complete setup successfully but hit a wall immediately after. They don't understand what the first meaningful action should be. Setup completion does not equal activation.

**Evidence:**
- "I got it connected but then I just stared at an empty dashboard. I didn't know what success looked like." — P2, SMB
- "The setup was fine, honestly. My problem was I finished and thought... okay, now what do I actually do with this?" — P5, Mid-Market
- 4 of 6 users did not complete any core action within 48 hours of finishing setup

**Intensity:** High — this was the #1 frustration across segments

**Implication:** Onboarding doesn't end at setup. We need a "first value" workflow that bridges configuration to activation.

### Theme 2: Setup Is Actually Fine — 4/6 participants
**Summary:** Contrary to our hypothesis, most users found setup straightforward. The two who struggled were on legacy systems with non-standard configurations — edge cases, not the norm.

**Evidence:**
- "Setup was maybe 10 minutes? Not hard at all." — P1, SMB
- "I've seen way worse. This was pretty standard." — P6, Enterprise

**Intensity:** Low — this was not a pain point for most users

**Implication:** Investing in simplifying setup further would have low ROI. Redirect effort to post-setup activation.

## Surprising Findings
- Our core hypothesis was wrong. Drop-off is not caused by technical difficulty. This changes the roadmap priority from "simplify setup" to "build guided first-use experience."
- Enterprise user (P6) had the smoothest onboarding despite having the most complex setup — they had an internal champion who had used a competitor before and knew what to do next. This suggests the "now what?" problem is solvable with guidance, not product changes.

## Recommended Actions
1. **Build a "first win" wizard** — after setup completion, guide users through one high-value action (e.g., creating their first report) with hand-holding
2. **Send a "what to do next" email** — trigger 1 hour after setup completion with 3 specific next steps
3. **Deprioritize setup simplification** — it's not the bottleneck
4. **Interview 5 more activated users** — understand what the "aha moment" looks like to design toward it
