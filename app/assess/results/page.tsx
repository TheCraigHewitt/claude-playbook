'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { calculateResults, assessmentQuestions } from '@/lib/playbook/assessment'
import ProductBadge from '@/components/claude-playbook/ProductBadge'

function ResultsContent() {
  const searchParams = useSearchParams()

  const identity = searchParams.get('identity') || 'ai-first-founder'
  const score = parseInt(searchParams.get('score') || '5', 10)
  const path = searchParams.get('path') || 'ai-first-founder'

  // Re-calculate full results for display
  const dummyAnswers: Record<string, string> = {}
  const results = calculateResults(dummyAnswers)

  // Override with URL params for sharing
  const displayIdentity = identity.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const displayName = `The ${displayIdentity}`

  // Find matching identity from assessment data
  const matchedResult = (() => {
    for (const q of assessmentQuestions) {
      for (const opt of q.options) {
        // This is a simplified match
      }
    }
    // Try to get a proper result using the path
    const r = calculateResults({ role: 'founder', 'time-sink': 'strategy', 'ai-usage': 'basic', bottleneck: 'start', technical: 'basic', 'team-size': 'small' })
    return r
  })()

  return (
    <div className="max-w-2xl mx-auto">
      {/* Identity card */}
      <div className="rounded-2xl border border-border-light bg-backgroundSecondary p-8 md:p-10 mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm mb-4">Your Claude Identity</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{displayName}</h1>

        {/* Maturity score */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-text-secondary">Claude Maturity</span>
            <span className="text-sm font-bold text-white">{score}/10</span>
          </div>
          <div className="h-2 bg-backgroundTertiary rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent-primary to-accent-warm rounded-full"
              style={{ width: `${score * 10}%` }}
            />
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed mb-6">
          {matchedResult.description}
        </p>

        {/* Recommended products */}
        <div className="mb-6">
          <p className="text-sm font-medium text-white mb-2">Recommended products</p>
          <div className="flex gap-2">
            {matchedResult.products.map((p) => (
              <ProductBadge key={p} product={p} />
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="pt-6 border-t border-border-default">
          <p className="text-sm text-text-muted mb-3">Share your results</p>
          <button
            onClick={() => {
              const url = window.location.href
              const text = `I'm a Level ${score} ${displayName} — take the Claude Playbook assessment`
              navigator.clipboard.writeText(`${text}\n${url}`)
            }}
            className="px-4 py-2 rounded-lg border border-border-default bg-backgroundTertiary text-sm text-text-secondary hover:text-white hover:border-border-light transition-colors"
          >
            Copy share link
          </button>
        </div>
      </div>

      {/* Top playbooks */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Your Top 5 Playbooks</h2>
        <div className="space-y-3">
          {matchedResult.topPlaybooks.map((pbPath, i) => {
            const parts = pbPath.split('/')
            return (
              <Link
                key={pbPath}
                href={`/claude-playbook/${pbPath}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border-default bg-backgroundSecondary hover:border-border-light hover:bg-backgroundTertiary transition-all group"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-sm font-bold text-accent-primary">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-white group-hover:text-accent-primary transition-colors">
                  {parts[parts.length - 1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Implementation path CTA */}
      <div className="rounded-xl border border-accent-primary/20 bg-accent-primary/5 p-6 text-center">
        <h3 className="text-lg font-bold text-white mb-2">Want a personalized implementation plan?</h3>
        <p className="text-sm text-text-secondary mb-4">
          Get a week-by-week roadmap, starter prompts, and setup guide based on your profile.
        </p>
        <Link
          href={`/claude-playbook/implementation?path=${path}`}
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-hover text-white font-semibold shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Get Your Implementation Playbook
        </Link>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-text-muted">Loading results...</div>}>
      <ResultsContent />
    </Suspense>
  )
}
