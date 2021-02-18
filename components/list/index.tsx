import React, { FC } from 'react'
import Date from 'components/date'
import Link from 'components/link'
import { PostItem } from 'lib/posts'
import styles from './styles.module.css'

interface Props {
  items: PostItem[]
}

const List: FC<Props> = ({ items }) => {
  return (
    <ol className={styles.list}>
      {items.map(({ id, title, date, tag }) => (
        <Link key={id} href={`/posts/${id}`}>
          <li>
            <Date dateString={date} />

            <main>{title}</main>

            <aside className={styles.right}>{tag}</aside>
          </li>
        </Link>
      ))}
    </ol>
  )
}

export default List
