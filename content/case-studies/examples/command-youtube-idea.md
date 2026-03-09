# /youtube-idea

Take a raw video idea and sharpen it into a shoot-ready concept — or generate fresh ideas if none provided.

## Instructions

You are a YouTube idea development tool. Your job is to take a rough idea and optimize it against proven growth frameworks before committing to a script.

**Read these files before starting:**
- `context/youtube/ideation-rubric.md` (scoring, formulas, hook patterns)
- `context/07-content-strategy.md` (pillars, content mix, platform strategy)
- `context/03-ideal-customer.md` (ICP language and pain points)
- `context/05-frameworks.md` (teaching frameworks to reference)
- `context/08-voice-style-guide.md` (tone and voice)

**Also scan** `output/` for recent scripts to avoid repetition.

---

## Mode Detection

**If `$ARGUMENTS` contains a video idea:** Run the full 7-step refinement workflow below.

**If `$ARGUMENTS` is empty or blank:** Run batch ideation mode — generate 5-7 topic options across the content pillars. Present them for selection, then run the full workflow on any chosen idea.

---

## Batch Ideation Mode (No Arguments)

Generate 5-7 distinct YouTube video ideas. For each:

1. Balance across content pillars (check strategy doc for your mix)
2. **Broad packaging first** — would someone outside your core audience click this?
3. Your practitioner edge comes through in the delivery, not the title
4. Include at least 1 news/opinion idea if something is trending

**Format for each idea:**

### Option [N]: [Working Title]
- **Pillar:** [Which content pillar]
- **Title:** [Best title option, 50-70 chars — curiosity-first]
- **Thumbnail:** [One-line visual concept]
- **Hook:** [Opening line, ~15 words]
- **Type:** [Talking Head / Screenshare / Mixed]
- **Quick Score:** [Total /25]
- **Why now:** [What makes this timely]

After presenting, ask which idea(s) to develop further.

---

## 7-Step Refinement Workflow

### Step 1: Idea Validation Score

Rate the idea 1-5 on each dimension:

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| Audience Fit | /5 | [Why] |
| Unique Angle | /5 | [Why] |
| Proof Available | /5 | [Why] |
| Emotional Pull | /5 | [Why] |
| Clarity | /5 | [Why] |
| **Total** | **/25** | |

Then check:
- **Audience breadth:** Would both core fans and new viewers click?
- **Credibility gate:** Have you done this / can you prove it?
- **Through-line:** Does this fit the channel's core promise?
- **Overall:** Green / Yellow / Red

### Step 2: Angle Refinement

- Identify the **sharpest version** — what's the single most compelling angle?
- Apply "Common Topic + Unique POV" formula
- **Practitioner angle:** Can this be framed as "I did this on my real business"?
- **Contrarian reframe:** Is there a way to challenge what everyone else is saying?
- **Belief shift:** What should the viewer believe differently after watching?

### Step 3: Title Options (5 Variations)

Generate 5 titles using different archetypes:

| # | Archetype | Title | CTR Notes |
|---|-----------|-------|-----------|
| 1 | Curiosity gap | [Title] | [Why it works] |
| 2 | Power word / emotional | [Title] | [Why it works] |
| 3 | Number / result | [Title] | [Why it works] |
| 4 | Contrarian / provocative | [Title] | [Why it works] |
| 5 | Search-optimized | [Title] | [Why it works] |

Note which titles work better for search vs. browse traffic.

### Step 4: Thumbnail Concepts (2-3 Ideas)

For each concept:
- **Visual:** Composition (face expression, objects, layout)
- **Text overlay:** 3-5 words, placement
- **Psychology:** What emotion or tension does this create?
- **First-millisecond read:** What does the viewer process instantly?

Pair each thumbnail concept with its best matching title from Step 3.

### Step 5: Hook Options (3 Approaches)

Write three ~30-second hooks:

**Hook A: Bold Claim**
- Visual: [What viewer sees]
- Written: [On-screen text]
- Spoken: [Full script, ~30 seconds]

**Hook B: Story Open**
- Visual: [What viewer sees]
- Written: [On-screen text]
- Spoken: [Full script, ~30 seconds]

**Hook C: Pattern Interrupt**
- Visual: [What viewer sees]
- Written: [On-screen text]
- Spoken: [Full script, ~30 seconds]

### Step 6: Content Skeleton

- **Sections:** 3-5 key sections with bullet points for each
- **Proof points:** What demos, data, or stories support each section?
- **Rehook moments:** Where to re-engage the viewer (every 2-3 min)
- **Estimated runtime:** [X-Y minutes]
- **Format:** [Talking head / Screenshare / Mixed] with reasoning
- **CTA:** Best call to action for this content

### Step 7: Package & Next Steps

**Recommended combo:**
- **Title:** [Best title from Step 3]
- **Thumbnail:** [Best thumbnail from Step 4]
- **Hook:** [Best hook from Step 5]
- **Why this pairing:** [Brief reasoning]

**Go / No-Go:** [Assessment with reasoning]

**Next steps:**
- Offer to generate full script via `/youtube-script`
- If the idea scored Yellow or Red, suggest alternative angles to strengthen it

---

## Scoring Guide

- **40-50:** Green light — produce this week
- **30-39:** Promising — refine the angle
- **20-29:** Maybe — needs a stronger hook or unique angle
- **Below 20:** Pass — not worth the production effort

## Output

Save the complete output to `output/youtube-idea-[topic-slug].md`.
