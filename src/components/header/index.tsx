import React from 'react'

import { Link } from 'components/link'
import { H1, H2 } from 'components/typography'

import styles from './styles.module.css'

const LAYOUT_LOGO = 'asyncink com'
const LAYOUT_HEADLINE = 'Неустаревающие\nстатьи, видео и книги'

interface LayoutProps {
  title?: string
}

export const Header: React.FC<LayoutProps> = ({ title = LAYOUT_HEADLINE }) => (
  <header className={styles.header}>
    <H2>
      <Link href="/">{LAYOUT_LOGO}</Link>
    </H2>
    <H1>{title}</H1>
  </header>
)
