import React from 'react'

import type { GetStaticProps } from 'next'
import type { PostPreview } from 'types'

import { getPostPreviews } from 'lib/posts'

import { Layout } from 'components/layout'
import { List } from 'components/list'

interface HomePageProps {
  postPreviews: PostPreview[]
}

export const HomePage: React.FC<HomePageProps> = ({
  postPreviews
}): JSX.Element => {
  return (
    <Layout>
      <List items={postPreviews} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postPreviews = getPostPreviews()

  return {
    props: {
      postPreviews
    }
  }
}

export default HomePage
