import React, { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './styles.module.css'

export const title = 'Mikhail T. is typing...'
export const description =
  'Блог о разработке, дизайне, чтении и управлении продуктом'

interface Props {
  home?: boolean
}

const Layout: FC<Props> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {home ? (
          <>
            <h3>{title}</h3>
            <h2>{description}</h2>
          </>
        ) : (
          <h3>
            <Link href="/">{title}</Link>
          </h3>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
