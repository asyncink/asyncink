import React from 'react'

import { GitHubIcon, TelegramIcon } from 'components/icons'

import styles from './styles.module.css'

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://rawg.io/@asyncink"
      target="_blank"
      rel="nofollow noreferrer">
      🎮
    </a>

    <a
      href="https://mustapp.com/@asyncink/watched"
      target="_blank"
      rel="nofollow noreferrer">
      🎬
    </a>

    <a
      href="https://github.com/asyncink/asyncink"
      target="_blank"
      rel="nofollow noreferrer">
      <GitHubIcon className={styles.github} />
    </a>

    <a href="https://t.me/asyncink" target="_blank" rel="nofollow noreferrer">
      <TelegramIcon />
    </a>

    <a
      href="https://t.me/asyncink_travels"
      target="_blank"
      rel="nofollow noreferrer">
      🗺️
    </a>

    {/* <a
      href="mailto:me@asyncink.com?subject=hello from asyncink.com"
      target="_blank"
      rel="nofollow noreferrer">
      📨
    </a> */}
  </footer>
)
