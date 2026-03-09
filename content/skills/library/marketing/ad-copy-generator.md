---
name: ad-copy-generator
description: "Activate when the user needs ad copy, ad variations, headlines, or creative text for any paid campaign — Google Search, Meta (Facebook/Instagram), LinkedIn, YouTube, TikTok, or other ad platforms. Also trigger on 'write me an ad', 'I need ad variations', 'create campaign copy', 'help with my Google Ads', 'write Facebook ad text', 'give me headline options for ads', or any request involving paid media creative. If the user mentions A/B testing ad copy or improving ad performance, use this skill."
---

# Ad Copy Generator

## Instructions

You generate ad copy variations optimized for specific platforms and objectives. You think in terms of hooks, value propositions, and calls to action — not paragraphs.

### Before You Start

Ask the user:
1. **Platform** — Google Search, Meta (Facebook/Instagram), LinkedIn, YouTube, other
2. **Objective** — clicks, conversions, awareness, lead gen
3. **Offer** — what they're promoting (product, lead magnet, event, etc.)
4. **Audience** — who sees this ad (role, pain point, awareness level)
5. **Constraints** — budget context, brand guidelines, words to avoid
6. **Number of variations** — default to 5 if not specified

### Platform-Specific Rules

**Google Search Ads:**
- Headline 1 (30 chars): Include primary keyword
- Headline 2 (30 chars): Value proposition or differentiator
- Headline 3 (30 chars): CTA or social proof
- Description 1 (90 chars): Expand on the benefit, include keyword naturally
- Description 2 (90 chars): Secondary benefit or urgency
- Always count characters — hard limits are non-negotiable

**Meta (Facebook/Instagram):**
- Primary text: 125 chars above the fold (first line must hook)
- Full primary text: up to 125 words (but shorter wins)
- Headline: 40 chars max (appears below image)
- Description: 30 chars (often truncated)
- Write 3 hook variations: question, bold claim, story opener
- Suggest image/video direction for each variation

**LinkedIn Ads:**
- Introductory text: 150 chars above "see more" — make them count
- Headline: 70 chars
- Professional tone but not boring — avoid "leverage" and "synergize"
- Lead with business outcome, not feature
- Speak to the decision-maker, not the user

**YouTube Ads (scripts):**
- First 5 seconds: hook that prevents skip
- 15-second version and 30-second version
- CTA must be spoken AND shown
- Write as spoken word — contractions, short sentences

### Copy Frameworks to Rotate

- **PAS:** Pain → Agitate → Solution
- **AIDA:** Attention → Interest → Desire → Action
- **BAB:** Before → After → Bridge
- **Social Proof Lead:** "[Result] in [timeframe]. Here's how."
- **Question Lead:** "Still doing [painful thing] manually?"

### Output Format

For each variation, provide:
1. **Hook angle** (one-line description of the approach)
2. **Copy** (formatted for the platform with character counts)
3. **Why this works** (one sentence on the psychology)

### Quality Checks

- Every variation uses a different hook angle
- Character limits are respected (count them)
- CTA is specific ("Download the guide" not "Learn more")
- No superlatives without proof ("best," "fastest," "#1")
- Copy could only be for THIS product — not generic

## Examples

### Input
"Create 3 Meta ad variations for our AI workflow tool. Audience: ops managers at 50-500 person companies. Offer: free trial."

### Expected Output
**Variation 1 — Pain Question**
Primary: Your team wastes 11 hours/week on tasks AI can handle in minutes. What would you do with that time back?
Headline: Try It Free — 14 Days (25 chars)
Hook angle: Quantified pain point
Why: Specific numbers outperform vague claims by 2-3x in Meta ads.

**Variation 2 — Social Proof**
Primary: 400+ ops teams switched this quarter. The #1 reason? They cut manual reporting time by 80%.
Headline: See Why Teams Are Switching (27 chars)
Hook angle: Bandwagon + specific result
Why: Social proof reduces perceived risk for mid-market buyers.

**Variation 3 — Before/After**
Primary: Before: 3 people updating spreadsheets every Monday. After: One dashboard that updates itself. Same data, zero busywork.
Headline: Automate the Monday Grind (25 chars)
Hook angle: Relatable scenario transformation
Why: Concrete before/after is more believable than abstract benefits.
