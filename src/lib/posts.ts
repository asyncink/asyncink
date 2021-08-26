import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import highlight from 'remark-highlight.js'
import unwrapImages from 'remark-unwrap-images'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostIds(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
}

export function getPostItems(): any {
  const fileNames = fs.readdirSync(postsDirectory)
  const postItems: PostItem[] = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data } = matter(fileContents)
    const { title, date, tag, description, published } = data

    return {
      id,
      title,
      date: String(date),
      tag,
      description,
      published
    }
  })

  return postItems
    .filter(({ published }) => published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export async function getPost(paramsId: string | string[]): Promise<Post> {
  const id = Array.isArray(paramsId) ? paramsId[0] : paramsId

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const { title, date, tag, description, published } = data

  const processedContent = await remark()
    .use(slug)
    .use(headings, { behavior: 'append' })
    .use(highlight, { include: ['js', 'ts', 'html'] })
    .use(unwrapImages)
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    id,
    title,
    contentHtml,
    date: String(date),
    tag,
    description,
    published
  }
}
