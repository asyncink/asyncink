import type { PostTag } from 'lib/tags'

export interface PostMeta {
  title: string
  date: string
  tag: PostTag
  description: string
  published: boolean
}

export interface PostPreview extends PostMeta {
  id: string
}

export interface Post extends PostPreview {
  html: string
}
