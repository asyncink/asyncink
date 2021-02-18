import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import highlight from 'remark-highlight.js'
import { PostTag } from 'lib/tags'

const postsDirectory = path.join(process.cwd(), 'posts')

interface PostMeta {
  title: string
  date: string
  tag: PostTag
  description: string
}

export interface PostItem extends PostMeta {
  id: string
}

export interface Post extends PostItem {
  contentHtml: string
}

export function getSortedPostItems(): any {
  const fileNames = fs.readdirSync(postsDirectory)
  const postItems: PostItem[] = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data } = matter(fileContents)
    const { title, date, tag, description } = data

    return {
      id,
      title,
      date,
      tag,
      description
    }
  })

  return postItems.sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function getAllPostIds(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
}

export async function getPost(paramsId: string | string[]): Promise<Post> {
  const id = Array.isArray(paramsId) ? paramsId[0] : paramsId

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const { title, date, tag, description } = data

  const processedContent = await remark()
    .use(slug)
    .use(headings, { behavior: 'append' })
    .use(highlight, { include: ['js', 'ts', 'html'] })
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    id,
    title,
    contentHtml,
    date,
    tag,
    description
  }
}
