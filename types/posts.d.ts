import { PostTag } from 'lib/tags'

declare global {
  interface PostMeta {
    title: string
    date: string
    tag: PostTag
    description: string
    published: boolean
  }

  interface PostItem extends PostMeta {
    id: string
  }

  interface Post extends PostItem {
    contentHtml: string
  }
}
