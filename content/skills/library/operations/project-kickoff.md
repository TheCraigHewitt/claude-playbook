---
name: project-kickoff
description: "When the user is starting a new project and needs a project brief, timeline, RACI matrix, or launch plan. Also use when someone says 'kick off this project', 'create a project plan', 'who owns what', 'build a RACI', 'what's the timeline for this', or describes a new initiative that needs structure before execution begins."
---

# Project Kickoff

## Instructions

You generate complete project kickoff documentation from a project description. You produce the artifacts that prevent the "wait, I thought YOU were doing that" conversations three weeks in. Every project that fails without a kickoff doc fails for the same reasons: unclear ownership, unrealistic timelines, and unspoken assumptions.

### What to Ask For

1. **Project description** — what are we building, doing, or launching
2. **Goal** — what does success look like (specific metric or outcome)
3. **Timeline** — when does this need to be done
4. **Team** — who's involved and their roles
5. **Constraints** — budget, dependencies, fixed deadlines, technical limitations
6. **Stakeholders** — who needs to be informed or approve things

### Kickoff Package Structure

```
# Project Kickoff: [Project Name]

## Project Overview
**Goal:** [One sentence — what we're achieving and why it matters]
**Success metric:** [How we'll know this worked — measurable]
**Timeline:** [Start date - End date]
**Sponsor:** [Who owns the outcome]
**Project lead:** [Who runs the day-to-day]

## Scope

### In Scope
- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]

### Out of Scope
- [Thing people might assume is included but isn't]
- [Adjacent work that belongs to a separate project]

### Assumptions
- [Assumption 1 — if wrong, scope changes]
- [Assumption 2 — if wrong, timeline changes]

## RACI Matrix

| Deliverable / Decision | [Person 1] | [Person 2] | [Person 3] | [Person 4] |
|------------------------|------------|------------|------------|------------|
| [Deliverable 1]        | R          | A          | C          | I          |
| [Deliverable 2]        | C          | R          | A          | I          |
| [Key decision 1]       | I          | R          | A          | C          |

**R** = Responsible (does the work)
**A** = Accountable (approves / owns the outcome)
**C** = Consulted (gives input before the decision)
**I** = Informed (told after the decision)

Rules: Every row has exactly one A. R and A can be the same person. If everyone is C, nobody is.

## Workback Schedule

Start from the deadline and work backward. This reveals whether the timeline is realistic before anyone writes a line of code.

| Date | Milestone | Owner | Dependencies |
|------|-----------|-------|-------------|
| [end date] | Ship / Launch | [name] | All phases complete |
| [date] | Final review & approval | [name] | Draft / build complete |
| [date] | Build / execute complete | [name] | Design approved |
| [date] | Design / plan approved | [name] | Research done |
| [date] | Kickoff | All | None |

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| [specific risk] | High / Med / Low | High / Med / Low | [concrete action to reduce risk] |
| [specific risk] | High / Med / Low | High / Med / Low | [concrete action] |

## Communication Plan
- **Status updates:** [format, frequency, audience]
- **Check-ins:** [meeting cadence, attendees]
- **Async channel:** [Slack channel, project board, etc.]
- **Escalation path:** [who to go to when blocked]

## Decision Log
| # | Decision | Made By | Date | Context |
|---|----------|---------|------|---------|
| 1 | [filled during project] | | | |

## Open Questions
- [ ] [Question that needs answering before Phase 1 starts]
- [ ] [Question that affects scope or timeline]

## Immediate Next Steps
1. [First action after kickoff] — [owner] — by [date]
2. [Second action] — [owner] — by [date]
3. [Third action] — [owner] — by [date]
```

### Planning Principles

- **Work backward from the deadline.** Start with the end date and build the schedule in reverse. This forces realistic planning and reveals impossible timelines before they become missed deadlines.
- **One owner per deliverable.** "The team" is never an owner. A specific person is. Shared ownership means no ownership.
- **Identify dependencies early.** If Phase 2 can't start until Phase 1 is approved, that approval is on the critical path. Plan for it.
- **Build in buffer.** Add 20% time buffer for unknowns. If the project can't absorb a 20% buffer, the timeline is already too aggressive.
- **Scope is a negotiation.** If the timeline is fixed, scope must flex. If scope is fixed, timeline must flex. You cannot fix both and also fix quality.
- **Out of scope is as important as in scope.** Explicitly listing what you're NOT doing prevents scope creep and misaligned expectations.
- **Risks should be probable, not theoretical.** List the 3-5 things that are genuinely likely to derail the project, not worst-case fantasies.

### RACI Guidelines

- Every row needs exactly one **A** (Accountable). If nobody is accountable, nobody will make the call.
- **R** and **A** can be the same person on small teams. On larger teams, separate them.
- Limit **C** (Consulted) to people whose input actually changes the outcome. Too many consulted = decision paralysis.
- **I** (Informed) is not optional — it's how you prevent "why wasn't I told about this" conversations.
- If a row has more than 2 people as R, the work isn't broken down enough.

## Examples

### Input
"We're redesigning our customer onboarding flow. Team is me (PM), Jordan (design), Alex (engineering), and Taylor (QA). Needs to ship by April 15. Goal is to reduce time-to-value from 14 days to 3 days. We have no budget for new tools."

### Expected Output
# Project Kickoff: Onboarding Flow Redesign

## Project Overview
**Goal:** Reduce new customer time-to-value from 14 days to 3 days
**Success metric:** Median time from signup to first [key action] drops below 3 days (currently 14)
**Timeline:** March 10 - April 15 (5.5 weeks)
**Project lead:** [User — PM]

## Scope

### In Scope
- Redesigned onboarding UI/UX (signup through first key action)
- Updated onboarding email sequence
- Progress tracking / completion metrics

### Out of Scope
- Changes to the pricing page or signup form
- New tool purchases (zero budget constraint)
- Mobile-specific onboarding (web only)

### Assumptions
- Current onboarding data is available to measure the baseline (14-day claim)
- No major feature releases will compete for Alex's time during this window
- Design system components exist for the new UI (no new component library work)

## RACI Matrix

| Deliverable / Decision | PM (You) | Jordan | Alex | Taylor |
|------------------------|----------|--------|------|--------|
| User research & requirements | R, A | C | C | I |
| UX/UI design | C | R, A | C | I |
| Design review & approval | A | R | C | I |
| Frontend implementation | I | C | R, A | I |
| QA test plan & execution | I | I | C | R, A |
| Launch decision | A | C | C | C |

## Workback Schedule

| Date | Milestone | Owner | Dependencies |
|------|-----------|-------|-------------|
| Apr 15 | Ship to production | Alex | QA sign-off |
| Apr 11 | QA complete, launch go/no-go | Taylor → You | Dev complete |
| Apr 4 | Development complete | Alex | Approved designs |
| Mar 28 | Design review with stakeholders | Jordan | Research synthesis |
| Mar 21 | Design exploration complete | Jordan | Requirements doc |
| Mar 14 | Requirements & user research done | You | Kickoff |
| Mar 10 | Kickoff meeting | All | None |

**Buffer:** 4 working days between QA complete (Apr 11) and ship date (Apr 15). Tight but workable if phases stay on track.

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Alex gets pulled to production bugs | High | High | Get engineering lead commitment now; identify backup dev |
| Stakeholder feedback causes design rework | Med | Med | Limit review to one round; PM makes final call on conflicts |
| Baseline metric (14 days) is wrong | Low | High | Pull actual data in Week 1 before committing to the 3-day target |

## Immediate Next Steps
1. Pull current onboarding completion data to validate 14-day baseline — You — by Mar 11
2. Schedule stakeholder alignment meeting — You — by Mar 12
3. Begin user research interviews (3-5 recent signups) — You — by Mar 14
