import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

import type { PostPreview, Post } from 'types'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostIds(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => fileName.replace(/\.md$/, ''))
}

export function getPostPreviews(): PostPreview[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const postItems: PostPreview[] = fileNames.map(fileName => {
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

export async function getPost(
  postId?: string | string[]
): Promise<Post | null> {
  if (!postId) {
    return null
  }

  const id = Array.isArray(postId) ? postId[0] : postId

  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const { title, date, tag, description, published } = data
  const html = marked.parse(content)

  return {
    id,
    title,
    html,
    date: String(date),
    tag,
    description,
    published
  }
}
