import React, { useCallback } from 'react'

import { useRouter } from 'next/router'

import { Meta } from 'components/meta'
import { Link } from 'components/link'
import { H1, H2 } from 'components/typography'

import MustIcon from 'components/icons/must.svg'
import TelegramIcon from 'components/icons/telegram.svg'
import RawgIcon from 'components/icons/rawg.svg'
import GitHubIcon from 'components/icons/github.svg'

import styles from './styles.module.css'

const LOGO = 'Mikhail T. is typing...'

interface LayoutProps {
  title: string
  description?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description
}) => {
  const { pathname } = useRouter()

  const handleTelegramClick = useCallback(
    () => window.yaCounter87645946.reachGoal('telegram-click'),
    []
  )

  return (
    <div className={styles.layout}>
      <header>
        <H2>{pathname === '/' ? LOGO : <Link href="/">{LOGO}</Link>}</H2>
        <H1>{title}</H1>
      </header>

      <main>{children}</main>

      <footer>
        <a
          href="https://rawg.io/@asyncink"
          target="_blank"
          rel="nofollow noreferrer">
          <RawgIcon />
        </a>

        <a
          href="https://mustapp.com/@asyncink/watched"
          target="_blank"
          rel="nofollow noreferrer">
          <MustIcon />
        </a>

        <a
          onClick={handleTelegramClick}
          href="https://t.me/asyncink"
          target="_blank"
          rel="nofollow noreferrer">
          <TelegramIcon />
        </a>

        <a
          href="https://github.com/asyncink/asyncink"
          target="_blank"
          rel="nofollow noreferrer">
          <GitHubIcon />
        </a>
      </footer>

      <Meta title={title} description={description} />
    </div>
  )
}
