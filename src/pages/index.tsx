import React, { FC } from 'react'
import { GetStaticProps } from 'next'

import { getPostItems } from 'lib/posts'

import Layout from 'components/layout'
import List from 'components/list'

interface Props {
  postItems: PostItem[]
}

export const Home: FC<Props> = ({ postItems }): JSX.Element => {
  return (
    <Layout title="Блог о разработке, дизайне, мышлении и управлении продуктом">
      <List items={postItems} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postItems = getPostItems()
  return {
    props: {
      postItems
    }
  }
}

export default Home