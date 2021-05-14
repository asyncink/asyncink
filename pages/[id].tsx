import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from 'components/layout'
import Article from 'components/article'
import Tag from 'components/tag'
import { Post, getPostIds, getPost } from 'lib/posts'
import Head from 'next/head'
import Date from 'components/date'

interface Props {
  post: Post
}

const PostPage: FC<Props> = ({ post: { title, date, tag, contentHtml } }) => {
  return (
    <Layout title={title}>
      <Head>
        <title>{title}</title>
      </Head>
      <Article>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <header>
          <Date value={date} />
          <Tag value={tag} />
        </header>
      </Article>
    </Layout>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getPostIds()
  const paths = ids.map(id => ({ params: { id } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost(params.id)
  return {
    props: {
      post
    }
  }
}
