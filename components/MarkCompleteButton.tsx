'use client'

import { usePlaybookProgress } from '@/hooks/usePlaybookProgress'

interface MarkCompleteButtonProps {
  section: string
  slug: string
}

export default function MarkCompleteButton({ section, slug }: MarkCompleteButtonProps) {
  const { isComplete, markComplete, markIncomplete, hydrated } = usePlaybookProgress()
  const key = `${section}/${slug}`
  const done = isComplete(key)

  if (!hydrated) {
    return (
      <div className="mt-10 pt-6 border-t border-border-default">
        <div className="h-10 w-48 rounded-lg bg-backgroundSecondary animate-pulse" />
      </div>
    )
  }

  return (
    <div className="mt-10 pt-6 border-t border-border-default">
      <button
        onClick={() => (done ? markIncomplete(key) : markComplete(key))}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
          done
            ? 'bg-product-code/15 text-product-code border border-product-code/30 hover:bg-product-code/25'
            : 'bg-backgroundSecondary text-text-secondary border border-border-default hover:text-white hover:border-border-light'
        }`}
      >
        {done ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth={2} />
          </svg>
        )}
        {done ? 'Completed' : 'Mark as Complete'}
      </button>
    </div>
  )
}
