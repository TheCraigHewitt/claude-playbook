import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content', 'claude-playbook')

export function getPlaybookContent(section: string, slug: string): { content: string; frontmatter: Record<string, unknown> } | null {
  const filePath = path.join(contentDir, section, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(raw)

  return { content, frontmatter: data }
}

export function getAllPlaybookSlugs(): { section: string; slug: string }[] {
  const slugs: { section: string; slug: string }[] = []

  if (!fs.existsSync(contentDir)) return slugs

  const sectionDirs = fs.readdirSync(contentDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())

  for (const dir of sectionDirs) {
    const sectionPath = path.join(contentDir, dir.name)
    const files = fs.readdirSync(sectionPath).filter((f) => f.endsWith('.mdx'))

    for (const file of files) {
      slugs.push({
        section: dir.name,
        slug: file.replace('.mdx', ''),
      })
    }
  }

  return slugs
}
