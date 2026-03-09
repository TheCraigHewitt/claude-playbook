import { notFound } from 'next/navigation'
import { sections } from '@/lib/playbook/sections'
import { getPlaybooksBySection } from '@/lib/playbook/playbooks'
import SectionOverview from '@/components/claude-playbook/SectionOverview'
import PlaybookBreadcrumb from '@/components/claude-playbook/PlaybookBreadcrumb'

export function generateStaticParams() {
  return sections.map((s) => ({ section: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }) {
  const { section: sectionId } = await params
  const section = sections.find((s) => s.id === sectionId)
  if (!section) return {}

  return {
    title: section.title,
    description: section.description,
  }
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section: sectionId } = await params
  const section = sections.find((s) => s.id === sectionId)
  if (!section) notFound()

  const sectionPlaybooks = getPlaybooksBySection(sectionId)

  return (
    <>
      <PlaybookBreadcrumb
        items={[
          { label: 'Claude Playbook', href: '/claude-playbook' },
          { label: section.title },
        ]}
      />
      <SectionOverview section={section} playbooks={sectionPlaybooks} />
    </>
  )
}
