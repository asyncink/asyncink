import React from 'react'

import { H1, H2 } from 'components/typography'
import Link from 'next/link'
import Image from 'next/image'
import avatarImg from './avatar.jpeg'

import styles from './styles.module.css'

interface LayoutProps {
  title: string
  logo: string
}

export const Header: React.FC<LayoutProps> = ({ title, logo }) => (
  <header className={styles.header}>
    <H2 className={styles.logo}>
      <Image src={avatarImg} alt="asyncink.com" className={styles.avatar} />

      <Link href="/">{logo}</Link>
    </H2>
    <H1 className={styles.title}>{title}</H1>
  </header>
)
