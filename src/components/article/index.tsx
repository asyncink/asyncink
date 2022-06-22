import React from 'react'
import styles from './styles.module.css'

export const Article: React.FC = ({ children }) => (
  <article className={styles.article}>{children}</article>
)
