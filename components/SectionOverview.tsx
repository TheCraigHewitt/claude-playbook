import { PlaybookMeta } from '@/lib/playbook/types'
import { Section } from '@/lib/playbook/types'
import PlaybookCard from './PlaybookCard'

interface SectionOverviewProps {
  section: Section
  playbooks: PlaybookMeta[]
}

export default function SectionOverview({ section, playbooks }: SectionOverviewProps) {
  return (
    <div>
      <div className="mb-10">
        <span className="text-4xl mb-4 block">{section.icon}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{section.title}</h1>
        <p className="text-lg text-text-secondary max-w-2xl">{section.description}</p>
      </div>
      <div className="grid gap-4">
        {playbooks.map((playbook) => (
          <PlaybookCard key={playbook.slug} playbook={playbook} />
        ))}
      </div>
    </div>
  )
}
