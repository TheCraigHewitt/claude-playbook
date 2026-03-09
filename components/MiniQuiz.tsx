'use client'

import { useState } from 'react'

interface QuizOption {
  label: string
  correct?: boolean
  explanation: string
}

interface MiniQuizProps {
  question: string
  options: QuizOption[]
}

export default function MiniQuiz({ question, options }: MiniQuizProps) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="my-6 rounded-xl border border-border-default bg-backgroundSecondary p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-product-chat mb-3">Quick check</p>
      <p className="text-base text-white font-medium mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            disabled={selected !== null}
            className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
              selected === null
                ? 'border-border-default hover:border-border-light hover:bg-surface-hover text-text-secondary'
                : selected === i
                  ? opt.correct
                    ? 'border-product-code/50 bg-product-code/10 text-product-code'
                    : 'border-accent-primary/50 bg-accent-primary/10 text-accent-primary'
                  : opt.correct
                    ? 'border-product-code/50 bg-product-code/10 text-product-code'
                    : 'border-border-default text-text-muted opacity-50'
            }`}
          >
            {opt.label}
            {selected !== null && (selected === i || opt.correct) && (
              <p className="text-xs mt-1 opacity-80">{opt.explanation}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
