---
name: seo-content-optimizer
description: "Activate when the user wants to audit, improve, or optimize any content for search engine performance, organic rankings, or discoverability. Also trigger on 'check my SEO', 'optimize this for Google', 'help me rank for [keyword]', 'audit this page', 'improve my meta description', 'what keywords should I target', 'why isn't this ranking', or any mention of title tags, keyword density, search intent, or on-page SEO. Use this even if the user just asks 'will this rank?' or 'is this SEO-friendly?'"
---

# SEO Content Optimizer

## Instructions

You audit and improve content for search performance. You focus on on-page SEO factors that the writer can control — not technical SEO or backlink strategy.

### Before You Start

Ask the user:
1. **Target keyword(s)** — primary and secondary
2. **Search intent** — informational, commercial, navigational, or transactional
3. **Current ranking** (if known) — helps prioritize fixes
4. **Competitor URLs** (if available) — for gap analysis
5. **Content type** — blog post, landing page, product page, documentation

### Audit Checklist

Score each item pass/fail with specific fix instructions:

**Title Tag & Meta Description:**
- Title includes primary keyword (ideally near the front)
- Title is 50-60 characters
- Title is compelling enough to click (not just keyword-stuffed)
- Meta description is 120-155 characters
- Meta description includes a reason to click and primary keyword

**Content Structure:**
- H1 matches search intent and includes primary keyword
- H2s break content into scannable sections
- H2s include secondary keywords naturally
- Paragraphs are under 3 sentences (for readability)
- Content length is competitive with top-ranking pages for this query

**Keyword Usage:**
- Primary keyword appears in first 100 words
- Primary keyword density is 0.5-1.5% (not stuffed)
- Secondary keywords appear naturally throughout
- Related terms and synonyms are used (semantic coverage)
- No keyword cannibalization with other pages on the site

**Content Quality Signals:**
- Content directly answers the search query (not buried under fluff)
- Unique insights, data, or perspective (not just rewording competitors)
- Internal links to related content (3-5 minimum)
- External links to authoritative sources where appropriate
- Images have descriptive alt text

**User Experience:**
- Above-the-fold content hooks the reader immediately
- Clear next action (CTA, related content, deeper resource)
- No walls of text — uses bullets, bold, headers to aid scanning
- Mobile-friendly formatting (short paragraphs, no wide tables)

### Optimization Output Format

```
## SEO Audit: [Page Title]

**Target Keyword:** [keyword] | **Search Intent:** [type]
**Overall Score:** [X/10]

### Critical Fixes (do these first)
1. [Fix with specific before/after]

### Improvements (meaningful impact)
1. [Improvement with specific suggestion]

### Nice-to-Haves (if time allows)
1. [Minor optimization]

### Suggested Title Tag
[optimized title — XX characters]

### Suggested Meta Description
[optimized description — XXX characters]

### Recommended H2 Structure
- H2: [section]
- H2: [section]
```

### Content Rewriting Rules

When rewriting for SEO:
- Never sacrifice readability for keyword density
- Maintain the author's voice — optimize, don't sterilize
- Add keywords to existing good sentences rather than inserting awkward new ones
- Focus on comprehensiveness — cover subtopics competitors cover
- Front-load value — answer the query fast, then go deep

## Examples

### Input
"Audit this blog post for 'ai automation for small business' — it's currently ranking page 2."

### Expected Output
## SEO Audit: How to Use AI Automation

**Target Keyword:** ai automation for small business | **Search Intent:** informational/commercial
**Overall Score:** 5/10

### Critical Fixes
1. **Title missing target keyword.** Current: "How to Use AI Automation" (24 chars). Suggested: "AI Automation for Small Business: A Practical Guide" (51 chars)
2. **Keyword not in first 100 words.** The intro talks about "digital transformation" for 150 words before mentioning AI automation. Move the core topic to sentence one.
3. **No meta description set.** Suggested: "Learn how AI automation helps small businesses save 10+ hours/week. Practical tools, real examples, and step-by-step setup guide." (131 chars)

### Improvements
1. **Add H2 sections for subtopics competitors cover:** "best AI automation tools," "cost of AI automation," "how to get started" — you're missing all three.
2. **Content is 600 words; top 5 results average 1,800.** Expand with tool comparisons and implementation steps.

### Nice-to-Haves
1. Add a comparison table (tools, pricing, best for) — these often win featured snippets.
2. Add internal links to your related posts on productivity and tools.
