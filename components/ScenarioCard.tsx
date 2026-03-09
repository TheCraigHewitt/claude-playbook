'use client'

import { useState } from 'react'

interface ScenarioCardProps {
  scenario: string
  answer: string
  prompt?: string
}

export default function ScenarioCard({ scenario, answer, prompt }: ScenarioCardProps) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="my-6 rounded-xl border border-border-default bg-backgroundSecondary overflow-hidden">
      <div className="p-5">
        <p className="text-sm font-medium text-accent-warm mb-3">Scenario</p>
        <p className="text-base text-text-primary leading-relaxed">{scenario}</p>
      </div>
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="w-full px-5 py-3 text-sm font-medium text-accent-primary bg-accent-primary/5 border-t border-border-default hover:bg-accent-primary/10 transition-colors text-left"
        >
          Click to reveal the approach →
        </button>
      ) : (
        <div className="border-t border-border-default p-5 space-y-3 animate-fade-in">
          <p className="text-sm font-medium text-product-code">Recommended approach</p>
          <p className="text-sm text-text-secondary leading-relaxed">{answer}</p>
          {prompt && (
            <div className="mt-3 p-3 rounded-lg bg-background border border-border-default">
              <p className="text-xs font-medium text-text-muted mb-2">Try this prompt</p>
              <p className="text-sm text-text-primary font-mono">{prompt}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
