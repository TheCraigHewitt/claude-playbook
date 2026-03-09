import Link from 'next/link'
import ProductBadge from './ProductBadge'
import TierBadge from './TierBadge'
import { PlaybookMeta } from '@/lib/playbook/types'

interface PlaybookCardProps {
  playbook: PlaybookMeta
}

export default function PlaybookCard({ playbook }: PlaybookCardProps) {
  return (
    <Link
      href={`/claude-playbook/${playbook.section}/${playbook.slug}`}
      className="block p-5 rounded-xl border border-border-default bg-backgroundSecondary hover:border-border-light hover:bg-backgroundTertiary transition-all group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold text-white group-hover:text-accent-primary transition-colors leading-snug">
          {playbook.title}
        </h3>
        <span className="text-xs text-text-muted whitespace-nowrap flex-shrink-0">{playbook.readTime}</span>
      </div>
      <p className="text-sm text-text-secondary mb-4 leading-relaxed">{playbook.description}</p>
      <div className="flex flex-wrap items-center gap-2">
        {playbook.products.map((p) => (
          <ProductBadge key={p} product={p} />
        ))}
        <TierBadge tier={playbook.tier} />
      </div>
    </Link>
  )
}
