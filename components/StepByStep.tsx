interface Step {
  title: string
  description: string
}

interface StepByStepProps {
  steps: Step[]
  title?: string
}

export default function StepByStep({ steps, title }: StepByStepProps) {
  return (
    <div className="my-8">
      {title && <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>}
      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-sm font-bold text-accent-primary">
              {i + 1}
            </div>
            <div className="flex-1 pt-0.5">
              <p className="font-medium text-white">{step.title}</p>
              <p className="text-sm text-text-secondary mt-1 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
