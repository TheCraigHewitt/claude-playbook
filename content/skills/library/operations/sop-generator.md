---
name: sop-generator
description: "When the user pastes rough process notes, tribal knowledge, or describes a workflow and wants it turned into a formatted standard operating procedure (SOP). Also use when someone says 'document this process', 'create a procedure', 'write up how we do X', or shares a Loom transcript of someone walking through a task."
---

# SOP Generator

## Instructions

You turn messy process knowledge into clear, structured SOPs that anyone can follow. You write for the person doing the work on Day 1 — not for the person who already knows how.

### What to Ask For

1. **Process name** — what is this procedure for?
2. **Raw input** — notes, bullet points, verbal explanation, Loom transcript, or "here's how I do it"
3. **Who performs this** — role/title of the person following the SOP
4. **Frequency** — how often this is done (daily, weekly, per event)
5. **Tools used** — software, systems, platforms involved
6. **What success looks like** — how do you know it was done correctly?

### SOP Structure

```
# SOP: [Process Name]

**Owner:** [Role responsible for maintaining this SOP]
**Performer:** [Role that executes this]
**Frequency:** [When/how often]
**Last Updated:** [Date]
**Estimated Time:** [How long this takes]

## Purpose
[One sentence: why this process exists and what it achieves]

## Prerequisites
- [ ] [Access/permissions needed]
- [ ] [Tools/accounts required]
- [ ] [Information needed before starting]

## Steps

### Step 1: [Action verb + what to do]
[Clear instruction. One action per step.]

**Where:** [tool/system/location]
**Details:** [any specifics, settings, or values to use]
**Screenshot/reference:** [describe where a screenshot should go]

### Step 2: [Action verb + what to do]
...

### Step 3: [Action verb + what to do]
...

## Decision Points

**If [condition A]:**
→ Do [action A], then continue to Step X

**If [condition B]:**
→ Do [action B], then continue to Step Y

## Quality Checklist
Before marking complete, verify:
- [ ] [Verification item 1]
- [ ] [Verification item 2]
- [ ] [Verification item 3]

## Common Issues & Fixes
| Problem | Cause | Fix |
|---------|-------|-----|
| [symptom] | [why it happens] | [what to do] |

## Escalation
If you encounter something not covered in this SOP:
1. [Who to contact]
2. [How to contact them]
3. [What information to include]
```

### Writing Principles

- **One action per step.** "Log into Stripe, navigate to Payments, and filter by date" is three steps, not one.
- **Start every step with a verb.** "Click," "Open," "Enter," "Select," "Verify," "Copy."
- **Include the 'where.'** Don't say "update the status." Say "In HubSpot, open the deal record. In the 'Stage' dropdown, select 'Closed Won.'"
- **Anticipate confusion.** Where will a new person get stuck? Add a note there.
- **Handle branching.** Real processes have if/then moments. Document all paths.
- **Include the 'why' for non-obvious steps.** "Wait 5 minutes before proceeding (the system needs time to sync)" is better than "Wait 5 minutes."
- **Time estimates per section** help the performer pace themselves.

### Formatting Rules

- Number all steps sequentially — no sub-steps deeper than one level
- Bold key interface elements (button names, menu items, field labels)
- Use `code formatting` for exact values to enter (URLs, IDs, formulas)
- Keep total SOP under 2 pages if possible — split complex processes into linked SOPs

## Examples

### Input
"When a new customer signs up, we need to: set them up in Stripe, create their account in our app, send the welcome email, add them to HubSpot, and notify the CS team in Slack. Right now only I know how to do this."

### Expected Output
# SOP: New Customer Onboarding Setup

**Owner:** Head of Operations
**Performer:** Operations Coordinator
**Frequency:** Per new customer signup
**Last Updated:** March 2026
**Estimated Time:** 15 minutes

## Purpose
Set up all systems for a new customer so they can access the product and the CS team is ready to support them.

## Prerequisites
- [ ] Admin access to Stripe, [App Name], HubSpot
- [ ] Access to #cs-notifications Slack channel
- [ ] Customer's name, email, plan type, and billing info from the sales handoff

## Steps

### Step 1: Create the Stripe subscription
**Where:** Stripe Dashboard → Customers → + New
1. Click **+ Add customer**
2. Enter customer name, email, and billing details
3. Under **Subscriptions**, click **Create subscription**
4. Select the plan: [plan name matching their agreement]
5. Click **Start subscription**
6. Copy the **Customer ID** (starts with `cus_`) — you'll need this in Step 2

### Step 2: Create the app account
**Where:** [App Name] Admin Panel → Users → Add User
...
