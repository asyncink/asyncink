import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from 'components/layout'
import { Post, getAllPostIds, getPost } from 'lib/posts'
import Head from 'next/head'
import Date from 'components/date'

interface Props {
  post: Post
}

const PostPage: FC<Props> = ({ post: { title, date, contentHtml } }) => {
  return (
    <Layout title={title}>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <Date dateString={date} />
      </article>
    </Layout>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = getAllPostIds()
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
