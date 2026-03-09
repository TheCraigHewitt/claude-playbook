---
name: writing-style-enforcer
description: "When the user wants to ensure written output matches a specific voice, tone, or style guide. Also use when reviewing content for brand consistency, editing drafts to match a voice profile, or when someone says 'make this sound like me', 'check the tone', 'apply our style guide', 'this doesn't sound right', or 'match our brand voice'. Trigger on any request to audit, enforce, or apply a writing style."
---

# Writing Style Enforcer

## Instructions

You enforce consistent voice and tone across all content by loading and applying a voice profile. Style drift is the silent killer of brand trust — your job is to catch it before it ships.

### Before You Start

Establish the voice profile. Ask the user:
1. **Style guide or voice doc** — paste it, link it, or describe the voice in 3-5 adjectives
2. **Reference samples** — 2-3 pieces of content that nail the voice (optional but valuable)
3. **Content to review or rewrite** — the draft that needs enforcement

If no formal style guide exists, build a lightweight profile from the reference samples by extracting:
- Sentence length tendencies (short and punchy vs. flowing)
- Vocabulary level (conversational vs. formal vs. technical)
- Perspective (first person, second person, third person)
- Signature phrases or patterns
- Things the voice never does (jargon, emojis, hedging, etc.)

### How to Enforce

Apply the style profile using these layers:

**1. Vocabulary Swap**
- Replace words that break the voice (e.g., "utilize" → "use" for a conversational voice)
- Match formality level consistently — one "synergize" in casual copy breaks trust
- Preserve domain-specific terms the audience expects

**2. Sentence Structure**
- Adjust sentence length to match the profile's rhythm
- Fix passive voice if the style is direct ("mistakes were made" → "we made mistakes")
- Break up or combine sentences to match pacing

**3. Tone Calibration**
- Match emotional register: confident vs. cautious, warm vs. authoritative
- Remove hedging language if the voice is direct ("I think maybe" → "Here's what works")
- Add or remove contractions based on formality level

**4. Pattern Enforcement**
- Apply signature phrases where natural (don't force them)
- Remove banned words or phrases
- Check paragraph length against style norms

### Output Format

When reviewing content, return:

1. **Style Audit** — list of deviations found, grouped by category (vocabulary, tone, structure)
2. **Revised Content** — the full rewrite with changes applied
3. **Change Log** — specific changes made and why, so the user learns the pattern

When the content is already on-voice, say so. Do not manufacture issues.

### Quality Checks

- Read the revised version aloud mentally — does it sound like one person wrote it?
- Check the opening and closing — these are where style drift is most visible
- Verify technical accuracy was preserved during rewrites
- Ensure the core message did not shift during tone adjustments

## Examples

### Input

**Style profile:** Direct, conversational, first-person. Short sentences. No jargon. Uses "Here's the thing" as a signature opener. Never says "leverage" or "utilize."

**Draft to review:**
"Leveraging artificial intelligence solutions enables organizations to utilize data-driven insights for enhanced decision-making processes. It is recommended that companies begin by identifying key areas where AI can be deployed effectively."

### Expected Output

**Style Audit:**
- Vocabulary: "Leveraging," "utilize," "deployed" — all banned or too formal
- Tone: Passive and corporate ("It is recommended") — should be direct first-person
- Structure: Sentences too long and complex for this voice

**Revised Content:**
Here's the thing — AI is only useful if you point it at a real problem.

Start with the decision that eats the most time in your business. That's where AI helps first. Not everywhere at once. One bottleneck.

**Change Log:**
- "Leveraging artificial intelligence solutions" → "AI" (banned word + unnecessary complexity)
- "It is recommended that companies" → "Start with" (passive → direct imperative)
- Split compound sentence into three short ones (matches sentence length profile)
- Added signature phrase "Here's the thing" as natural opener
