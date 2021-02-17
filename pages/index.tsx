import React, { FC } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { title } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import { getSortedPostsData } from 'lib/posts'
import Link from 'next/link'
import Date from 'components/date'

interface Props {
  allPostsData: any[]
}

export const Home: FC<Props> = ({ allPostsData }): JSX.Element => {
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tech</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
