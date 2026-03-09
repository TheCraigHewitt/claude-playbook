type CalloutType = 'tip' | 'warning' | 'note'

const calloutStyles: Record<CalloutType, { bg: string; border: string; label: string; labelColor: string }> = {
  tip: { bg: 'bg-product-code/5', border: 'border-product-code/20', label: 'Pro Tip', labelColor: 'text-product-code' },
  warning: { bg: 'bg-accent-primary/5', border: 'border-accent-primary/20', label: 'Warning', labelColor: 'text-accent-primary' },
  note: { bg: 'bg-product-chat/5', border: 'border-product-chat/20', label: 'Note', labelColor: 'text-product-chat' },
}

interface TipCalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
}

export default function TipCallout({ type = 'tip', title, children }: TipCalloutProps) {
  const styles = calloutStyles[type]

  return (
    <div className={`my-6 rounded-xl border ${styles.border} ${styles.bg} p-5`}>
      <p className={`text-xs font-semibold uppercase tracking-wider ${styles.labelColor} mb-2`}>
        {title || styles.label}
      </p>
      <div className="text-sm text-text-secondary leading-relaxed">
        {children}
      </div>
    </div>
  )
}
