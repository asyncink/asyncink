import React from 'react'
import styles from './styles.module.css'

interface ArticleProps {
  children: React.ReactNode
}

export const Article: React.FC<ArticleProps> = ({ children }: ArticleProps) => (
  <article className={styles.article}>{children}</article>
)
