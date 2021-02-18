import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'components/link'
import Typography from 'components/typography'
import styles from './styles.module.css'

export const LOGO = 'Mikhail T. is typing...'

interface Props {
  title: string
}

const Layout: FC<Props> = ({ children, title }) => {
  const { pathname } = useRouter()

  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={title} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <header>
        <Typography.H2>
          {pathname === '/' ? LOGO : <Link href="/">{LOGO}</Link>}
        </Typography.H2>
        <Typography.H1>{title}</Typography.H1>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
