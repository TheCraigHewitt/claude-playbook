type Tier = 'Starter' | 'Operator' | 'Power User'

const tierColors: Record<Tier, string> = {
  Starter: 'bg-backgroundTertiary text-text-secondary border-border-default',
  Operator: 'bg-accent-warm/10 text-accent-warm border-accent-warm/30',
  'Power User': 'bg-accent-primary/10 text-accent-primary border-accent-primary/30',
}

interface TierBadgeProps {
  tier: Tier
}

export default function TierBadge({ tier }: TierBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${tierColors[tier]}`}>
      {tier}
    </span>
  )
}
