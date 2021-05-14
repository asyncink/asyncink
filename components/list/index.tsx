import React, { FC } from 'react'
import { PostItem } from 'lib/posts'
import Date from 'components/date'
import Link from 'components/link'
import Tag from 'components/tag'
import styles from './styles.module.css'

interface Props {
  items: PostItem[]
}

const List: FC<Props> = ({ items }) => {
  return (
    <ol className={styles.list}>
      {items.map(({ id, title, date, tag }) => (
        <li key={id}>
          <Link href={`/${id}`}>
            <Date value={date} className={styles.date} />
            <main>{title}</main>
            <Tag value={tag} className={styles.tag} />
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default List
