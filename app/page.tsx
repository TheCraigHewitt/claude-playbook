import Link from 'next/link'
import { sections } from '@/lib/playbook/sections'
import { playbooks } from '@/lib/playbook/playbooks'

export const metadata = {
  title: 'The Claude Playbook — Master Claude for Business',
  description: 'The definitive resource for mastering Claude across Chat, CoWork, and Code. 70+ playbooks, real-world case studies, and interactive assessments. Built for business operators, not developers.',
  openGraph: {
    title: 'The Claude Playbook — Master Claude for Business',
    description: '70+ playbooks for mastering Claude. Built for operators, not developers.',
    images: ['/images/claude-playbook-og.png'],
  },
}

const stats = [
  { number: '70+', label: 'Playbooks' },
  { number: '150+', label: 'Ready-to-Use Prompts' },
  { number: '10', label: 'Business Functions' },
  { number: '2', label: 'Real Case Studies' },
]

export default function ClaudePlaybookPage() {
  return (
    <div className="-mx-6 md:-mx-10 -mt-10">
      {/* Hero */}
      <section className="px-6 md:px-10 pt-16 pb-20 border-b border-border-default">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light bg-backgroundSecondary text-sm text-text-secondary mb-6">
            <span className="w-2 h-2 rounded-full bg-product-code animate-pulse" />
            Free resource — no login required
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The Claude <span className="font-display italic text-accent-primary">Playbook</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
            The definitive resource for mastering Claude across Chat, CoWork, and Code.
            Built for business operators, not developers. 70+ playbooks with real prompts,
            real workflows, and real results.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/claude-playbook/assess"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-hover text-white font-semibold shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Take the Assessment
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link
              href="/claude-playbook/foundations/how-claude-thinks"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-border-light text-white font-semibold hover:bg-surface-hover hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Reading
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="px-6 md:px-10 py-16 border-b border-border-default">
        <h2 className="text-2xl font-bold text-white mb-2">Three products. One Playbook.</h2>
        <p className="text-text-secondary mb-8">Claude comes in three forms. This Playbook covers all of them.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Claude Chat', color: 'product-chat', desc: 'Your personal AI — conversations, analysis, and writing. The starting point for everyone.' },
            { name: 'Claude CoWork', color: 'product-cowork', desc: 'Team AI with integrations — shared knowledge, scheduled tasks, and connected tools.' },
            { name: 'Claude Code', color: 'product-code', desc: 'Automation AI — reads files, connects APIs, and automates anything from the command line.' },
          ].map((product) => (
            <div
              key={product.name}
              className={`p-5 rounded-xl border border-${product.color}/20 bg-${product.color}/5`}
            >
              <div className={`w-3 h-3 rounded-full bg-${product.color} mb-3`} />
              <h3 className={`text-lg font-semibold text-${product.color} mb-2`}>{product.name}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sections grid */}
      <section className="px-6 md:px-10 py-16 border-b border-border-default">
        <h2 className="text-2xl font-bold text-white mb-2">All Sections</h2>
        <p className="text-text-secondary mb-8">Jump into any section — everything is accessible, no login required.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="p-5 rounded-xl border border-border-default bg-backgroundSecondary hover:border-border-light hover:bg-backgroundTertiary transition-all group"
            >
              <span className="text-2xl mb-3 block">{section.icon}</span>
              <h3 className="text-base font-semibold text-white group-hover:text-accent-primary transition-colors mb-1">
                {section.title}
              </h3>
              <p className="text-sm text-text-secondary mb-3">{section.description}</p>
              <p className="text-xs text-text-muted">{section.playbookCount} playbooks</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Case Studies callout */}
      <section className="px-6 md:px-10 py-16 border-b border-border-default">
        <div className="rounded-2xl border border-accent-warm/20 bg-accent-warm/5 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-3">Real Systems, Built by a Non-Developer</h2>
          <p className="text-text-secondary mb-6 max-w-2xl">
            Two de-identified Claude Code setups from real businesses. See exactly how a founder built
            a content operations engine and a virtual cofounder — with zero coding experience.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/claude-playbook/case-studies/content-operations-engine"
              className="p-5 rounded-xl border border-border-default bg-background hover:border-border-light transition-all group"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm mb-2">Case Study 1</p>
              <h3 className="text-base font-semibold text-white group-hover:text-accent-primary transition-colors mb-1">The Content Operations Engine</h3>
              <p className="text-sm text-text-secondary">17 commands, 34+ context files, 3 content platforms automated.</p>
            </Link>
            <Link
              href="/claude-playbook/case-studies/virtual-cofounder"
              className="p-5 rounded-xl border border-border-default bg-background hover:border-border-light transition-all group"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm mb-2">Case Study 2</p>
              <h3 className="text-base font-semibold text-white group-hover:text-accent-primary transition-colors mb-1">The Virtual Cofounder</h3>
              <p className="text-sm text-text-secondary">6 decision frameworks, live financial data, weekly CEO ritual.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-16">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Want a hands-on partner for your AI implementation?</h2>
          <p className="text-text-secondary mb-6">
            I help companies restructure their revenue operations around AI.
          </p>
          <Link
            href="/work-with-me"
            className="inline-flex items-center px-7 py-3.5 rounded-full border border-border-light text-white font-semibold hover:bg-surface-hover hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  )
}
