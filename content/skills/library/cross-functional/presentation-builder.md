---
name: presentation-builder
description: "When the user wants to turn content into a slide deck, pitch deck, or presentation structure. Also use when someone says 'make this into slides', 'build a deck', 'presentation outline', 'help me structure a talk', 'I need to present this', or 'create a pitch deck'. Trigger on any request to convert information into a sequenced, visual presentation format with narrative flow."
---

# Presentation Builder

## Instructions

You convert raw content into a structured slide deck with narrative flow. A great presentation is not a document reformatted — it is a story told visually, one idea per slide.

### Before You Start

Ask the user:
1. **Source content** — paste it, describe it, or share the file
2. **Audience** — who is in the room? (Board, customers, team, investors, conference)
3. **Goal** — what should the audience think, feel, or do after the last slide?
4. **Length** — how many minutes is the presentation? (Determines slide count)
5. **Constraints** — existing template, brand colors, required sections?

### Slide Count Guidelines

- **5-minute talk:** 5-8 slides
- **10-minute talk:** 8-12 slides
- **20-minute talk:** 15-20 slides
- **Investor pitch deck:** 10-12 slides (follow standard order)

Rule of thumb: 1-2 minutes per slide. Fewer slides is almost always better.

### Narrative Structure

Every presentation follows one of these arcs. Choose the one that fits the goal.

**Problem → Solution → Proof → Ask** (best for pitches and proposals)
1. Here's what's broken
2. Here's how to fix it
3. Here's evidence it works
4. Here's what I need from you

**Situation → Complication → Resolution** (best for strategy and board decks)
1. Here's where we are
2. Here's what changed or went wrong
3. Here's the path forward

**Hook → Teach → Apply** (best for conference talks and training)
1. Surprising stat, question, or story
2. The core insight or framework
3. How the audience uses it starting tomorrow

### Slide Design Principles

Apply these to every slide:

**One idea per slide.** If you need a second bullet point that says something different, it's a second slide.

**Headlines are claims, not labels.** "Revenue grew 34% in Q2" not "Q2 Revenue Update." The headline should communicate the takeaway even if the audience reads nothing else.

**Minimal text.** Maximum 6 words in a headline, 3 bullet points per slide, 6 words per bullet. If you need more words, you need more slides or a handout.

**Visual hierarchy matters.** Specify what's large (the key number, the headline), what's supporting (a chart, a quote), and what's small (source attribution, footnotes).

**Speaker notes carry the detail.** Put the full explanation in speaker notes, not on the slide.

### Output Format

For each slide, provide:

```
### Slide [N]: [Headline as a claim]

**Visual:** [What the audience sees — chart type, image description, key number, or layout]

**Text on slide:**
- [Bullet 1]
- [Bullet 2]

**Speaker notes:** [What the presenter says — 2-4 sentences]

**Transition:** [One sentence connecting to the next slide]
```

### Special Slide Types

**Title Slide:** Presentation title, speaker name, date, one-line subtitle that frames the talk.

**Section Dividers:** Use when shifting between major sections. One word or short phrase, full-bleed background.

**Data Slides:** Lead with the insight, not the chart. "Churn dropped 40%" with the chart as proof, not "Q3 Churn Data" with a chart the audience has to decode.

**Closing Slide:** Restate the one thing you want the audience to remember. Include contact info or next step.

### Quality Checks

- Does the deck tell a coherent story if you just read the headlines in order?
- Could someone who missed the talk understand the key message from the slides alone?
- Is every slide earning its place? Cut any slide that doesn't advance the narrative.
- Are data slides showing the insight, not just displaying numbers?

## Examples

### Input

"Turn this blog post about AI reducing customer support costs into a 10-minute presentation for a CEO audience. Goal: get budget approval for an AI support pilot."

### Expected Output

### Slide 1: AI Can Cut Our Support Costs 40% in 90 Days

**Visual:** Clean title slide, company logo, presenter name, date

**Text on slide:**
- A Pilot Proposal for [Company] Customer Support
- [Presenter Name] | [Date]

**Speaker notes:** Today I'm going to walk you through a focused pilot that can reduce our support costs by 40% in one quarter, based on what similar companies have done. I'll show the problem, the solution, the evidence, and exactly what I need from you.

**Transition:** Let's start with where we are today.

---

### Slide 2: Support Costs Have Grown 3x Faster Than Revenue

**Visual:** Dual-line chart — revenue growth (steady) vs. support cost growth (steep) over 8 quarters

**Text on slide:**
- Support costs: +45% YoY
- Revenue: +15% YoY

**Speaker notes:** Our support team has grown from 12 to 22 people in two years. Costs are scaling linearly with customer count, but revenue isn't keeping pace. Every new customer makes this gap wider.

**Transition:** The root cause is volume, not complexity.

---

### Slide 3: 62% of Tickets Are Repetitive and Predictable

**Visual:** Pie chart — 62% repetitive (highlighted), 24% moderate complexity, 14% requires human judgment

**Text on slide:**
- Password resets, billing questions, how-to guides
- These don't need a human

**Speaker notes:** We audited 3 months of tickets. Nearly two-thirds follow predictable patterns with known answers. These are the tickets that burn out good support reps and slow down response times for the complex issues that actually need human attention.

**Transition:** This is exactly what AI handles well.

---

[Continues for 8-12 total slides following the Problem → Solution → Proof → Ask arc]
