import Navigation from '@/components/Navigation'
import PlaybookSidebar from '@/components/claude-playbook/PlaybookSidebar'
import PlaybookSearch from '@/components/claude-playbook/PlaybookSearch'

export const metadata = {
  title: {
    template: '%s | The Claude Playbook',
    default: 'The Claude Playbook — Craig Hewitt',
  },
  description: 'The definitive resource for mastering Claude across Chat, CoWork, and Code. Built for business operators, not developers.',
}

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen">
        <PlaybookSidebar />
        <PlaybookSearch />
        <main className="lg:ml-72">
          <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
