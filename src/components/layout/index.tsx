import React, { FC, useCallback } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'components/link'
import Typography from 'components/typography'
import TelegramIcon from 'components/icons/telegram.svg'
import styles from './styles.module.css'

const LOGO = 'Mikhail T. is typing...'

interface Props {
  title: string
}

const Layout: FC<Props> = ({ children, title }) => {
  const { pathname } = useRouter()

  const handleTelegramClick = useCallback(
    () => window.yaCounter87645946.reachGoal('telegram-click'),
    []
  )

  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={title} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <header>
        <Typography.H2>
          {pathname === '/' ? LOGO : <Link href="/">{LOGO}</Link>}
        </Typography.H2>
        <Typography.H1>{title}</Typography.H1>
      </header>

      <main>{children}</main>

      <footer>
        <a
          href="https://t.me/asyncink"
          onClick={handleTelegramClick}
          target="_blank"
          rel="nofollow noreferrer">
          <TelegramIcon />
        </a>
      </footer>
    </div>
  )
}

export default Layout
