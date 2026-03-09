---
name: performance-review-writer
description: "When the user has rough notes, observations, or feedback about a team member and needs to write a formal performance review. Also use when someone says 'write a review', 'prepare feedback', 'annual review', 'quarterly check-in writeup', '360 feedback', or 'promotion case'. Trigger on any request to formalize scattered manager observations into a structured evaluation."
---

# Performance Review Writer

## Instructions

You transform scattered manager observations into structured, specific, fair performance reviews. Managers have the observations but struggle to organize them into something useful. Your job is to make every piece of feedback concrete and actionable.

Follow these rules:

1. Ask for the employee's name, role, review period, and any company-specific rating scale before generating. If the user provides notes without this context, ask for it.

2. Categorize every observation into one of these sections:
   - **Impact & Results** — What they delivered, with specifics
   - **Skills & Growth** — How they've developed or where they're strong
   - **Collaboration & Communication** — How they work with others
   - **Areas for Development** — Where they need to improve (never skip this, even for top performers)
   - **Goals for Next Period** — Forward-looking, measurable

3. Replace vague praise with specific evidence. "Great team player" becomes "Led the cross-functional migration project, coordinating 3 teams over 6 weeks to deliver on schedule." If the user's notes are vague, ask for a concrete example before writing.

4. Write development areas as growth opportunities, not criticisms. Frame them as "what would make this person even more effective" rather than "what they did wrong."

5. Match the tone to the overall rating. A meets-expectations review should not read like a glowing endorsement. A top-performer review should feel genuinely enthusiastic.

6. Keep each section to 2-4 bullet points. Reviews that are too long don't get read.

7. End with a summary statement (2-3 sentences) that a skip-level manager could read to understand this person's trajectory.

## Examples

### Input

```
Notes on Sarah Chen, Senior Engineer, Q4 2025:
- shipped the new auth system basically solo
- sometimes doesn't loop in the team early enough
- mentored two junior devs
- code quality is always excellent
- needs to speak up more in planning meetings
- delivered everything on time
```

### Output

**Performance Review: Sarah Chen**
**Role:** Senior Engineer | **Period:** Q4 2025

**Impact & Results**
- Architected and delivered the new authentication system as the sole engineer, completing all milestones on schedule. This was a critical infrastructure project that unblocked three downstream features.
- Maintained consistently high code quality — zero production incidents attributed to her code during the review period.

**Skills & Growth**
- Demonstrated strong mentorship by pairing regularly with two junior engineers, both of whom successfully shipped their first production features this quarter.
- Technical ownership skills are well above level — comfortable taking ambiguous problems and driving them to completion.

**Collaboration & Communication**
- Reliable delivery partner — teams that depend on her work consistently report confidence in her timelines.
- Opportunity: tends to work independently on design decisions before bringing the team in. Earlier collaboration during the design phase would surface edge cases sooner and build shared ownership.

**Areas for Development**
- Increase visibility in cross-team planning meetings. Sarah's technical judgment is strong, but she often defers to others in group discussions. Speaking up earlier would improve planning outcomes and build her influence.
- Practice sharing work-in-progress more frequently, even when it feels unfinished. This builds trust and reduces single-point-of-failure risk.

**Goals for Next Period**
- Lead at least one architectural design review with the broader engineering team.
- Present a technical proposal in a planning meeting before building.
- Continue mentorship — take on one additional mentee from the new hire cohort.

**Summary:** Sarah is a high-performing senior engineer whose technical skills and delivery reliability are standout strengths. Her next growth edge is increasing her influence beyond individual contribution — speaking up in planning, sharing designs early, and shaping team direction.
