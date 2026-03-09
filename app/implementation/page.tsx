'use client'

import { Suspense } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { implementationPaths } from '@/lib/playbook/implementation-paths'
import ProductBadge from '@/components/claude-playbook/ProductBadge'
import PromptBlock from '@/components/claude-playbook/PromptBlock'
import Link from 'next/link'

function ImplementationContent() {
  const searchParams = useSearchParams()
  const recommendedPath = searchParams.get('path')
  const [selectedPath, setSelectedPath] = useState(recommendedPath || implementationPaths[0].id)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const activePath = implementationPaths.find((p) => p.id === selectedPath) || implementationPaths[0]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    try {
      const formData = new FormData()
      formData.append('email_address', email)
      formData.append('fields[implementation_path]', activePath.name)

      await fetch('https://app.kit.com/forms/5521281/subscriptions', {
        method: 'POST',
        body: formData,
      })

      setSubmitted(true)
    } catch {
      // Silently fail — show content anyway
      setSubmitted(true)
    }
  }

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Implementation Playbook</h1>
      <p className="text-lg text-text-secondary mb-8">
        Your personalized week-by-week roadmap for getting real results with Claude.
      </p>

      {/* Path selector */}
      <div className="mb-10">
        <p className="text-sm font-medium text-white mb-3">Choose your path</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {implementationPaths.map((path) => (
            <button
              key={path.id}
              onClick={() => setSelectedPath(path.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selectedPath === path.id
                  ? 'border-accent-primary bg-accent-primary/10'
                  : 'border-border-default bg-backgroundSecondary hover:border-border-light'
              }`}
            >
              <p className="text-sm font-semibold text-white mb-1">{path.name}</p>
              <p className="text-xs text-text-muted">{path.role} — {path.focus}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Active path details */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{activePath.name}</h2>
          <p className="text-text-secondary mb-4">{activePath.description}</p>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-text-muted">Recommended:</span>
            {activePath.products.map((p) => (
              <ProductBadge key={p} product={p} />
            ))}
          </div>
          <p className="text-sm text-text-muted">{activePath.subscriptionTier}</p>
        </div>

        {/* Week by week */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Your 4-Week Roadmap</h3>
          <div className="space-y-4">
            {activePath.weeks.map((week) => (
              <div key={week.week} className="p-5 rounded-xl border border-border-default bg-backgroundSecondary">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-sm font-bold text-accent-primary">
                    {week.week}
                  </span>
                  <h4 className="font-semibold text-white">Week {week.week}: {week.title}</h4>
                </div>
                <ul className="space-y-2 ml-11">
                  {week.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-1.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Top playbooks */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Your Top 5 Playbooks</h3>
          <div className="space-y-2">
            {activePath.topPlaybooks.map((pbPath, i) => {
              const parts = pbPath.split('/')
              return (
                <Link
                  key={pbPath}
                  href={`/claude-playbook/${pbPath}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border-default hover:border-border-light hover:bg-surface-hover transition-all group"
                >
                  <span className="text-sm font-bold text-accent-primary">{i + 1}.</span>
                  <span className="text-sm text-white group-hover:text-accent-primary transition-colors">
                    {parts[parts.length - 1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Starter prompts */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Starter Prompts</h3>
          {activePath.starterPrompts.map((prompt, i) => (
            <PromptBlock key={i} prompt={prompt} title={`Starter Prompt ${i + 1}`} />
          ))}
        </div>

        {/* Email gate */}
        {!submitted ? (
          <div className="rounded-2xl border border-accent-primary/20 bg-accent-primary/5 p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Get your full Implementation Playbook</h3>
            <p className="text-text-secondary mb-6">
              Receive a detailed PDF with your complete roadmap, all starter prompts, and setup guides — personalized for your path.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-backgroundSecondary border border-border-default text-white placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-hover text-white font-semibold shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                Send It
              </button>
            </form>
          </div>
        ) : (
          <div className="rounded-2xl border border-product-code/20 bg-product-code/5 p-8 text-center">
            <p className="text-lg font-semibold text-white mb-2">Check your inbox</p>
            <p className="text-text-secondary">Your personalized Implementation Playbook is on its way.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ImplementationPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-text-muted">Loading...</div>}>
      <ImplementationContent />
    </Suspense>
  )
}
