import React from 'react'

import styles from './styles.module.css'

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://rawg.io/@asyncink"
      target="_blank"
      rel="nofollow noreferrer">
      playing
    </a>

    <a
      href="https://mustapp.com/@asyncink/watched"
      target="_blank"
      rel="nofollow noreferrer">
      watching
    </a>

    <a href="https://t.me/asyncink" target="_blank" rel="nofollow noreferrer">
      feed
    </a>

    <a
      href="https://t.me/asyncink_travels"
      target="_blank"
      rel="nofollow noreferrer">
      travel
    </a>

    <a
      href="https://github.com/asyncink/asyncink"
      target="_blank"
      rel="nofollow noreferrer">
      dev
    </a>
  </footer>
)
