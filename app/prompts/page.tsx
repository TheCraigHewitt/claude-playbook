'use client'

import { useState, useMemo } from 'react'
import PromptBlock from '@/components/claude-playbook/PromptBlock'
import ProductBadge from '@/components/claude-playbook/ProductBadge'
import { Product } from '@/lib/playbook/types'
import { prompts } from '@/lib/playbook/prompts'

const allSections = [...new Set(prompts.map(p => p.section))]
const allProducts: Product[] = ['Chat', 'CoWork', 'Code']

export default function PromptsPage() {
  const [search, setSearch] = useState('')
  const [filterSection, setFilterSection] = useState<string | null>(null)
  const [filterProduct, setFilterProduct] = useState<Product | null>(null)

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      if (filterSection && p.section !== filterSection) return false
      if (filterProduct && !p.products.includes(filterProduct)) return false
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.prompt.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [search, filterSection, filterProduct])

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Prompt Library</h1>
      <p className="text-lg text-text-secondary mb-8">
        {prompts.length} ready-to-use prompts across every business function. Copy, customize, and use.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <input
          type="text"
          placeholder="Search prompts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-backgroundSecondary border border-border-default text-white text-sm placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-primary focus:border-accent-primary w-full sm:w-64"
        />
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setFilterSection(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              !filterSection ? 'border-accent-primary bg-accent-primary/10 text-accent-primary' : 'border-border-default text-text-muted hover:text-white'
            }`}
          >
            All Sections
          </button>
          {allSections.map((s) => (
            <button
              key={s}
              onClick={() => setFilterSection(filterSection === s ? null : s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors capitalize ${
                filterSection === s ? 'border-accent-primary bg-accent-primary/10 text-accent-primary' : 'border-border-default text-text-muted hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {allProducts.map((p) => (
            <button
              key={p}
              onClick={() => setFilterProduct(filterProduct === p ? null : p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                filterProduct === p
                  ? p === 'Chat' ? 'border-product-chat bg-product-chat/15 text-product-chat' :
                    p === 'CoWork' ? 'border-product-cowork bg-product-cowork/15 text-product-cowork' :
                    'border-product-code bg-product-code/15 text-product-code'
                  : 'border-border-default text-text-muted hover:text-white'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        {filtered.map((prompt) => (
          <div key={prompt.id}>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold text-white">{prompt.title}</h3>
              <div className="flex gap-1">
                {prompt.products.map((p) => (
                  <ProductBadge key={p} product={p} />
                ))}
              </div>
            </div>
            <PromptBlock prompt={prompt.prompt} />
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-12">No prompts match your filters.</p>
        )}
      </div>
    </div>
  )
}
