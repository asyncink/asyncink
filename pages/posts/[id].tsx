import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from 'components/layout'
import { getAllPostIds, getPostData } from 'lib/posts'
import Head from 'next/head'
import Date from 'components/date'
import utilStyles from 'styles/utils.module.css'

interface Props {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}

const Post: FC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl} style={{ textAlign: 'center' }}>
          {postData.title}
        </h1>
        <div className={utilStyles.lightText} style={{ textAlign: 'center' }}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
