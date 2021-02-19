import React, { FC } from 'react'
import styles from './styles.module.css'

const Article: FC = ({ children }) => (
  <article className={styles.article}>{children}</article>
)

export default Article
