import React, { FC } from 'react'
import { PostItem } from 'lib/posts'
import Date from 'components/date'
import Link from 'components/link'
import { PostIcons, PostTags } from 'lib/tags'
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
            <Date dateString={date} />
            <main>{title}</main>
            <aside>
              {PostIcons[tag]}
              <span>{PostTags[tag]}</span>
            </aside>
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default List
