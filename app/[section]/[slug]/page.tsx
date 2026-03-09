import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { sections } from '@/lib/playbook/sections'
import { getPlaybook, getAdjacentPlaybooks } from '@/lib/playbook/playbooks'
import { getPlaybookContent } from '@/lib/playbook/mdx'
import PlaybookBreadcrumb from '@/components/claude-playbook/PlaybookBreadcrumb'
import PlaybookNav from '@/components/claude-playbook/PlaybookNav'
import ProductBadge from '@/components/claude-playbook/ProductBadge'
import TierBadge from '@/components/claude-playbook/TierBadge'
import PromptBlock from '@/components/claude-playbook/PromptBlock'
import ScenarioCard from '@/components/claude-playbook/ScenarioCard'
import ProductPicker from '@/components/claude-playbook/ProductPicker'
import BeforeAfter from '@/components/claude-playbook/BeforeAfter'
import StepByStep from '@/components/claude-playbook/StepByStep'
import RealWorldProof from '@/components/claude-playbook/RealWorldProof'
import TipCallout from '@/components/claude-playbook/TipCallout'
import MiniQuiz from '@/components/claude-playbook/MiniQuiz'
import MarkCompleteButton from '@/components/claude-playbook/MarkCompleteButton'
import { getAllPlaybookSlugs } from '@/lib/playbook/mdx'

const mdxComponents = {
  PromptBlock,
  ScenarioCard,
  ProductPicker,
  BeforeAfter,
  StepByStep,
  RealWorldProof,
  TipCallout,
  MiniQuiz,
}

export function generateStaticParams() {
  return getAllPlaybookSlugs()
}

export async function generateMetadata({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params
  const playbook = getPlaybook(section, slug)
  if (!playbook) return {}

  return {
    title: playbook.title,
    description: playbook.description,
  }
}

export default async function PlaybookPage({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section: sectionId, slug } = await params
  const playbook = getPlaybook(sectionId, slug)
  if (!playbook) notFound()

  const section = sections.find((s) => s.id === sectionId)
  if (!section) notFound()

  const mdxData = getPlaybookContent(sectionId, slug)
  const { prev, next } = getAdjacentPlaybooks(sectionId, slug)

  let content = null
  if (mdxData) {
    const result = await compileMDX({
      source: mdxData.content,
      components: mdxComponents,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        parseFrontmatter: false,
      },
    })
    content = result.content
  }

  const tierMap: Record<string, string> = { 'Starter': 'Beginner', 'Operator': 'Intermediate', 'Power User': 'Expert' }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: playbook.title,
        description: playbook.description,
        author: { '@type': 'Person', name: 'Craig Hewitt' },
        url: `https://craighewitt.com/claude-playbook/${sectionId}/${slug}`,
        proficiencyLevel: tierMap[playbook.tier] || 'Intermediate',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Claude Playbook', item: 'https://craighewitt.com/claude-playbook' },
          { '@type': 'ListItem', position: 2, name: section.title, item: `https://craighewitt.com/claude-playbook/${sectionId}` },
          { '@type': 'ListItem', position: 3, name: playbook.title },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PlaybookBreadcrumb
        items={[
          { label: 'Claude Playbook', href: '/claude-playbook' },
          { label: section.title, href: `/claude-playbook/${sectionId}` },
          { label: playbook.title },
        ]}
      />

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {playbook.products.map((p) => (
            <ProductBadge key={p} product={p} />
          ))}
          <TierBadge tier={playbook.tier} />
          <span className="text-xs text-text-muted ml-auto">{playbook.readTime} read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          {playbook.title}
        </h1>
        <p className="text-lg text-text-secondary">{playbook.description}</p>
      </header>

      {/* Content */}
      {content ? (
        <article className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-white
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-text-secondary prose-p:leading-relaxed
          prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-code:text-accent-primary prose-code:bg-backgroundSecondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-backgroundSecondary prose-pre:border prose-pre:border-border-default prose-pre:rounded-xl
          prose-ul:text-text-secondary prose-ol:text-text-secondary
          prose-li:text-text-secondary
          prose-blockquote:border-accent-primary prose-blockquote:text-text-secondary
          prose-hr:border-border-default
        ">
          {content}
        </article>
      ) : (
        <div className="py-20 text-center">
          <p className="text-text-muted text-lg mb-2">This playbook is coming soon.</p>
          <p className="text-text-muted text-sm">Check back shortly — we&apos;re publishing new playbooks regularly.</p>
        </div>
      )}

      <MarkCompleteButton section={sectionId} slug={slug} />
      <PlaybookNav prev={prev} next={next} />
    </>
  )
}
