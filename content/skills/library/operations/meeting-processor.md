---
name: meeting-processor
description: "When the user pastes a meeting transcript, call notes, or recording summary and wants it processed into action items, decisions, owners, and deadlines. Also use when someone says 'process this meeting', 'what were the action items', 'summarize this call', or shares an Otter/Fireflies/Fathom transcript."
---

# Meeting Processor

## Instructions

You extract signal from meeting noise. Most meetings generate zero written output — which means decisions get forgotten, action items slip, and the same conversations repeat. Your job is to turn raw transcripts into accountability documents that take two minutes to read.

### What to Ask For

1. **Transcript or notes** — full transcript, AI summary, or rough notes from the meeting
2. **Meeting type** — standup, strategy, client call, 1:1, board meeting, brainstorm
3. **Attendees** — who was there, with roles if known (so you can assign owners correctly)
4. **Output needs** — summary only, action items, follow-up email, or all of the above

If the user only provides the transcript, infer what you can from the content and flag assumptions.

### Processing Steps

1. **Read the full transcript before outputting anything.** The most important decisions often surface at the end. Don't start summarizing from the top down.
2. **Separate decisions from discussion.** A decision is something the group committed to. Discussion is everything else. Most transcripts are 90% discussion — your job is to find the 10%.
3. **Extract action items with owners.** An action item without an owner is a wish. If ownership was unclear in the meeting, flag it as "OWNER TBD" — don't guess.
4. **Assign deadlines.** Use explicit deadlines from the transcript. If none were stated, mark as "No deadline set — suggest: [reasonable date]."
5. **Note open questions.** Things that were raised but not resolved become the agenda for the next meeting.
6. **Flag risks and blockers.** Anything someone flagged as a concern or dependency.

### Output Format

```
# Meeting Summary: [Topic/Title]

**Date:** [date] | **Duration:** [length if known]
**Attendees:** [names and roles]

## TL;DR
[2-3 sentences. A busy exec reading only this should know what happened and what matters.]

## Decisions Made
1. **[Decision]** — [who decided, brief context on why]
2. **[Decision]** — [who decided, brief context on why]

## Action Items
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | [specific, verifiable task] | [name] | [date] | Open |
| 2 | [specific, verifiable task] | [name] | [date] | Open |

## Key Discussion Points
### [Topic 1]
[2-3 sentence summary of what was discussed and conclusions drawn]

### [Topic 2]
[2-3 sentence summary]

## Open Questions
- [Question raised but not resolved — needs follow-up]
- [Topic deferred to next meeting]

## Risks & Blockers
- [Risk or dependency flagged during the meeting]

## Next Meeting
**Date:** [if scheduled] | **Agenda:** [carry-forward items from open questions]
```

### Meeting Type Adaptations

**Client Calls:** Add a "Client Sentiment" note (positive/neutral/concerned). Flag any commitments made to the client that need internal follow-through. Note requests that need scoping before responding.

**Board Meetings:** Add "Board Requests" as a separate section. Track every question a board member asked that wasn't fully answered — these always need follow-up.

**Brainstorms:** Replace "Decisions Made" with "Ideas Generated" with rough priority or vote counts. Capture ideas faithfully — don't editorialize or rank them unless the group did.

**1:1s:** Focus on personal commitments, feedback given/received, and development items. Keep it brief. Mark confidential items clearly.

**Standups:** Keep it tight — blockers, help needed, and commitments only. No narrative summary needed.

### Follow-Up Email Generator

When asked to also draft a follow-up email, append this to the output:

```
---

## Follow-Up Email Draft

**Subject:** [Meeting Name] — Summary & Action Items ([Date])

Hi [team/name],

Thanks for [meeting today / the call]. Quick summary:

**Decisions:**
- [Key decision 1]
- [Key decision 2]

**Action items:**
- [Name]: [task] by [date]
- [Name]: [task] by [date]

**Next steps:** [what happens next]

Let me know if I missed anything.

[Name]
```

### Processing Principles

- **Action items must be specific and verifiable.** "Follow up with the client" is vague. "Send the revised SOW to Sarah by Friday" is actionable.
- **Attribute decisions to people.** "We decided" is weak. "Sarah decided, with the team's input" creates accountability.
- **Don't editorialize.** Report what was said, not what you think should have been said.
- **Capture dissent.** If someone disagreed with a decision, note it. Dissent that disappears from the record causes problems later.
- **Note what was skipped.** If an agenda item was never addressed, flag it as a carry-forward.

## Examples

### Input
"Quick call with the dev team. Jake said the API migration is behind by a week because the vendor docs were wrong. Maria suggested we bring in a contractor to help. Tom pushed back — said onboarding a contractor would take as long as just doing it. Jake agreed with Tom. Maria said fine but wants a hard deadline. Jake committed to March 15. Also talked about the dashboard redesign. Sarah showed mockups, everyone liked direction B. We'll go with that. Need to get final assets from the design team. Tom mentioned the staging server keeps crashing — needs DevOps to look at it."

### Expected Output
# Meeting Summary: Dev Team Sync

**Date:** [date] | **Attendees:** Jake, Maria, Tom, Sarah

## TL;DR
API migration delayed one week — Jake committed to March 15 hard deadline with no contractor. Dashboard redesign moving forward with Direction B. Staging server instability needs DevOps attention.

## Decisions Made
1. **No contractor for API migration** — Tom argued onboarding overhead would negate time savings; Jake agreed. Handling internally.
2. **Dashboard redesign: Direction B** — Team consensus after Sarah's mockup review.

## Action Items
| # | Action | Owner | Deadline | Status |
|---|--------|-------|----------|--------|
| 1 | Complete API migration | Jake | March 15 | Open |
| 2 | Get final design assets for dashboard Direction B | Sarah | No deadline set — suggest: March 10 | Open |
| 3 | Investigate staging server crashes | OWNER TBD (DevOps) | No deadline set — suggest: this week | Open |

## Open Questions
- Who on DevOps will own the staging server investigation?

## Risks & Blockers
- API migration already one week behind — March 15 deadline has no buffer
- Staging server instability could block testing if not resolved before launch
