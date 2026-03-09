import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PlaybookBreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function PlaybookBreadcrumb({ items }: PlaybookBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-text-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
