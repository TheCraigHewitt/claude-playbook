import Link from 'next/link'
import { PlaybookMeta } from '@/lib/playbook/types'

interface PlaybookNavProps {
  prev: PlaybookMeta | null
  next: PlaybookMeta | null
}

export default function PlaybookNav({ prev, next }: PlaybookNavProps) {
  if (!prev && !next) return null

  return (
    <div className="mt-16 pt-8 border-t border-border-default flex justify-between gap-4">
      {prev ? (
        <Link
          href={`/claude-playbook/${prev.section}/${prev.slug}`}
          className="flex-1 p-4 rounded-xl border border-border-default hover:border-border-light hover:bg-surface-hover transition-all group"
        >
          <p className="text-xs text-text-muted mb-1">Previous</p>
          <p className="text-sm font-medium text-white group-hover:text-accent-primary transition-colors">
            &larr; {prev.title}
          </p>
        </Link>
      ) : <div className="flex-1" />}
      {next ? (
        <Link
          href={`/claude-playbook/${next.section}/${next.slug}`}
          className="flex-1 p-4 rounded-xl border border-border-default hover:border-border-light hover:bg-surface-hover transition-all group text-right"
        >
          <p className="text-xs text-text-muted mb-1">Next</p>
          <p className="text-sm font-medium text-white group-hover:text-accent-primary transition-colors">
            {next.title} &rarr;
          </p>
        </Link>
      ) : <div className="flex-1" />}
    </div>
  )
}
