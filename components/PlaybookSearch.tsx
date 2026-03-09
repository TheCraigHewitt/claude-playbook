'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import { playbooks } from '@/lib/playbook/playbooks'
import { sections } from '@/lib/playbook/sections'
import { prompts } from '@/lib/playbook/prompts'
import ProductBadge from './ProductBadge'

type ResultType = 'playbook' | 'section' | 'prompt'

interface SearchItem {
  type: ResultType
  title: string
  description: string
  href: string
  products?: ('Chat' | 'CoWork' | 'Code')[]
}

const searchItems: SearchItem[] = [
  ...playbooks.map((p) => ({
    type: 'playbook' as ResultType,
    title: p.title,
    description: p.description,
    href: `/claude-playbook/${p.section}/${p.slug}`,
    products: p.products,
  })),
  ...sections.map((s) => ({
    type: 'section' as ResultType,
    title: s.title,
    description: s.description,
    href: s.href,
  })),
  ...prompts.map((p) => ({
    type: 'prompt' as ResultType,
    title: p.title,
    description: p.prompt.slice(0, 100) + '...',
    href: `/claude-playbook/prompts#${p.id}`,
    products: p.products,
  })),
]

const fuse = new Fuse(searchItems, {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'description', weight: 1 },
  ],
  threshold: 0.4,
  includeScore: true,
})

const typeLabels: Record<ResultType, string> = {
  playbook: 'Playbook',
  section: 'Section',
  prompt: 'Prompt',
}

const typeColors: Record<ResultType, string> = {
  playbook: 'text-accent-primary',
  section: 'text-product-cowork',
  prompt: 'text-product-chat',
}

export default function PlaybookSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const results = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query).slice(0, 8).map((r) => r.item)
  }, [query])

  useEffect(() => {
    setSelectedIndex(0)
  }, [results])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setSelectedIndex(0)
  }, [])

  const navigate = useCallback(
    (href: string) => {
      close()
      router.push(href)
    },
    [close, router]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      close()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      navigate(results[selectedIndex].href)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-lg mx-4 bg-background border border-border-default rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border-default">
          <svg className="w-5 h-5 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search playbooks, sections, and prompts..."
            className="flex-1 bg-transparent text-white text-sm placeholder:text-text-muted focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono text-text-muted bg-backgroundSecondary rounded border border-border-default">
            ESC
          </kbd>
        </div>

        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto py-2">
            {results.map((item, i) => (
              <button
                key={`${item.type}-${item.title}-${i}`}
                onClick={() => navigate(item.href)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors ${
                  i === selectedIndex ? 'bg-surface-hover' : ''
                }`}
              >
                <span className={`text-[10px] font-semibold uppercase tracking-wider mt-0.5 flex-shrink-0 ${typeColors[item.type]}`}>
                  {typeLabels[item.type]}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white truncate">{item.title}</span>
                    {item.products && (
                      <div className="flex gap-1 flex-shrink-0">
                        {item.products.map((p) => (
                          <ProductBadge key={p} product={p} />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-text-muted truncate mt-0.5">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div className="px-4 py-8 text-center text-text-muted text-sm">
            No results for &ldquo;{query}&rdquo;
          </div>
        )}

        {!query.trim() && (
          <div className="px-4 py-6 text-center text-text-muted text-xs">
            Type to search across {playbooks.length} playbooks, {sections.length} sections, and {prompts.length} prompts
          </div>
        )}
      </div>
    </div>
  )
}
