'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sections } from '@/lib/playbook/sections'
import { playbooks } from '@/lib/playbook/playbooks'
import { usePlaybookProgress } from '@/hooks/usePlaybookProgress'

export default function PlaybookSidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<string[]>(() => {
    const current = sections.find((s) => pathname.includes(`/claude-playbook/${s.id}`))
    return current ? [current.id] : []
  })
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isComplete, getSectionProgress, getOverallProgress, hydrated } = usePlaybookProgress()

  const totalPlaybooks = playbooks.length
  const overall = getOverallProgress(totalPlaybooks)

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const sidebarContent = (
    <div className="space-y-1">
      {/* Overall progress bar */}
      {hydrated && overall.count > 0 && (
        <div className="px-3 pb-3">
          <div className="flex items-center justify-between text-[10px] text-text-muted mb-1">
            <span>Progress</span>
            <span>{overall.count}/{overall.total}</span>
          </div>
          <div className="h-1 bg-backgroundSecondary rounded-full overflow-hidden">
            <div
              className="h-full bg-product-code rounded-full transition-all duration-500"
              style={{ width: `${(overall.count / overall.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      <Link
        href="/claude-playbook"
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          pathname === '/claude-playbook'
            ? 'bg-accent-primary/10 text-accent-primary'
            : 'text-text-secondary hover:text-white hover:bg-surface-hover'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/claude-playbook/assess"
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          pathname.includes('/assess')
            ? 'bg-accent-primary/10 text-accent-primary'
            : 'text-text-secondary hover:text-white hover:bg-surface-hover'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        Take the Assessment
      </Link>
      <Link
        href="/claude-playbook/prompts"
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          pathname === '/claude-playbook/prompts'
            ? 'bg-accent-primary/10 text-accent-primary'
            : 'text-text-secondary hover:text-white hover:bg-surface-hover'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        Prompt Library
      </Link>

      {/* Cmd+K search hint */}
      <button
        onClick={() => {
          window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
        }}
        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-text-muted hover:text-text-secondary hover:bg-surface-hover transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span>Search</span>
        <kbd className="ml-auto text-[10px] font-mono bg-backgroundSecondary px-1.5 py-0.5 rounded border border-border-default">
          {typeof navigator !== 'undefined' && /Mac/.test(navigator.userAgent) ? '\u2318' : 'Ctrl'}K
        </kbd>
      </button>

      <div className="pt-3 pb-1">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Sections</p>
      </div>

      {sections.map((section) => {
        const sectionPlaybooks = playbooks.filter((p) => p.section === section.id)
        const isOpen = openSections.includes(section.id)
        const isActive = pathname.includes(`/claude-playbook/${section.id}`)
        const progress = getSectionProgress(section.id, sectionPlaybooks.length)

        return (
          <div key={section.id}>
            <button
              onClick={() => toggleSection(section.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'text-white bg-surface-hover'
                  : 'text-text-secondary hover:text-white hover:bg-surface-hover'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{section.icon}</span>
                <span className="truncate">{section.title}</span>
              </span>
              <span className="flex items-center gap-1.5 flex-shrink-0">
                {hydrated && progress.count > 0 && (
                  <span className="text-[10px] text-text-muted">{progress.count}/{progress.total}</span>
                )}
                <svg
                  className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="ml-4 pl-3 border-l border-border-default space-y-0.5 mt-1 mb-2">
                {sectionPlaybooks.map((pb) => {
                  const isCurrentPlaybook = pathname === `/claude-playbook/${section.id}/${pb.slug}`
                  const completed = hydrated && isComplete(`${section.id}/${pb.slug}`)
                  return (
                    <Link
                      key={pb.slug}
                      href={`/claude-playbook/${section.id}/${pb.slug}`}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
                        isCurrentPlaybook
                          ? 'text-accent-primary bg-accent-primary/5'
                          : 'text-text-muted hover:text-text-secondary'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {completed && (
                        <svg className="w-3.5 h-3.5 text-product-code flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      <span className={completed ? '' : 'ml-5'}>{pb.title}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}

      <div className="pt-3 pb-1">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-text-muted">More</p>
      </div>
      <Link
        href="/claude-playbook/implementation"
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          pathname === '/claude-playbook/implementation'
            ? 'bg-accent-primary/10 text-accent-primary'
            : 'text-text-secondary hover:text-white hover:bg-surface-hover'
        }`}
        onClick={() => setMobileOpen(false)}
      >
        Implementation Playbook
      </Link>
    </div>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent-primary text-white shadow-lg shadow-accent-primary/25 flex items-center justify-center"
        aria-label="Toggle sidebar"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-20 bottom-0 w-72 bg-background border-r border-border-default z-40 overflow-y-auto px-3 py-6 transition-transform lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
