'use client'

import { useState } from 'react'

interface Variable {
  name: string
  placeholder: string
}

interface PromptBlockProps {
  prompt: string
  variables?: Variable[]
  title?: string
}

export default function PromptBlock({ prompt, variables, title }: PromptBlockProps) {
  const [copied, setCopied] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [customValues, setCustomValues] = useState<Record<string, string>>({})

  const getProcessedPrompt = () => {
    let processed = prompt
    for (const [key, value] of Object.entries(customValues)) {
      if (value) {
        processed = processed.replace(`[${key}]`, value)
      }
    }
    return processed
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getProcessedPrompt())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 rounded-xl border border-border-default bg-backgroundSecondary overflow-hidden">
      {title && (
        <div className="px-4 py-2.5 border-b border-border-default flex items-center justify-between">
          <span className="text-sm font-medium text-text-secondary">{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 text-sm text-text-primary overflow-x-auto whitespace-pre-wrap font-sans leading-relaxed">
          {getProcessedPrompt()}
        </pre>
        <div className="absolute top-3 right-3 flex gap-2">
          {variables && variables.length > 0 && (
            <button
              onClick={() => setShowCustomize(!showCustomize)}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-backgroundTertiary border border-border-default text-text-secondary hover:text-white hover:border-border-light transition-colors"
            >
              {showCustomize ? 'Hide' : 'Customize'}
            </button>
          )}
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-backgroundTertiary border border-border-default text-text-secondary hover:text-white hover:border-border-light transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      {showCustomize && variables && (
        <div className="px-4 py-3 border-t border-border-default bg-background/50 space-y-3">
          {variables.map((v) => (
            <div key={v.name}>
              <label className="block text-xs font-medium text-text-muted mb-1">{v.name}</label>
              <input
                type="text"
                placeholder={v.placeholder}
                value={customValues[v.name] || ''}
                onChange={(e) => setCustomValues({ ...customValues, [v.name]: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-backgroundSecondary border border-border-default rounded-lg text-white placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
