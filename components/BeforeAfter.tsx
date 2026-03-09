'use client'

import { useState } from 'react'

interface BeforeAfterProps {
  before: { label?: string; content: string }
  after: { label?: string; content: string }
  annotation?: string
}

export default function BeforeAfter({ before, after, annotation }: BeforeAfterProps) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="my-6 space-y-3">
      <div className="rounded-xl border border-border-default bg-backgroundSecondary overflow-hidden">
        <div className="px-4 py-2.5 border-b border-border-default">
          <span className="text-sm font-medium text-accent-primary">{before.label || 'Before'}</span>
        </div>
        <pre className="p-4 text-sm text-text-secondary whitespace-pre-wrap font-sans leading-relaxed">
          {before.content}
        </pre>
      </div>

      {!showAfter ? (
        <button
          onClick={() => setShowAfter(true)}
          className="w-full py-3 text-sm font-medium text-accent-primary rounded-xl border border-dashed border-accent-primary/30 hover:bg-accent-primary/5 transition-colors"
        >
          See the improved version →
        </button>
      ) : (
        <>
          <div className="rounded-xl border border-product-code/30 bg-product-code/5 overflow-hidden animate-fade-in">
            <div className="px-4 py-2.5 border-b border-product-code/20">
              <span className="text-sm font-medium text-product-code">{after.label || 'After'}</span>
            </div>
            <pre className="p-4 text-sm text-text-primary whitespace-pre-wrap font-sans leading-relaxed">
              {after.content}
            </pre>
          </div>
          {annotation && (
            <p className="text-sm text-text-muted italic px-1">{annotation}</p>
          )}
        </>
      )}
    </div>
  )
}
