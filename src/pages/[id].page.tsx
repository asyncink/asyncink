import React from 'react'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { Post } from 'types'

import { getPostIds, getPost } from 'lib/posts'

import { Layout } from 'components/layout'
import { Article } from 'components/article'
import { Tag } from 'components/tag'
import { PostDate } from 'components/post-date'

interface PostPageProps {
  post: Post
}

const PostPage: React.FC<PostPageProps> = ({
  post: { title, description, date, tag, html }
}) => (
  <Layout title={title} description={description}>
    <Article>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <header>
        <PostDate value={date} />
        <Tag value={tag} />
      </header>
    </Article>
  </Layout>
)

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getPostIds()
  const paths = ids.map(id => ({ params: { id } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const postId = context.params?.id

  const post = await getPost(postId)

  return {
    props: {
      post
    }
  }
}
