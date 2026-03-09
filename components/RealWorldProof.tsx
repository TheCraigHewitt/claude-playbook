interface RealWorldProofProps {
  quote: string
  author: string
  context?: string
}

export default function RealWorldProof({ quote, author, context }: RealWorldProofProps) {
  return (
    <div className="my-6 rounded-xl border border-accent-warm/20 bg-accent-warm/5 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm mb-2">Real example</p>
      <blockquote className="text-base text-text-primary leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className="text-sm text-text-secondary mt-3">— {author}</p>
      {context && <p className="text-xs text-text-muted mt-1">{context}</p>}
    </div>
  )
}
