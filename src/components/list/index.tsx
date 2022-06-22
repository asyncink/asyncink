import React, { useMemo } from 'react'

import type { PostPreview } from 'types'

import { PostDate } from 'components/post-date'
import { Link } from 'components/link'
import { Tag } from 'components/tag'

import styles from './styles.module.css'

interface ListProps {
  items: PostPreview[]
}

export const List: React.FC<ListProps> = ({ items }) => {
  const itemNodes = useMemo(
    () =>
      items.map(({ id, title, date, tag }) => (
        <li key={id}>
          <Link href={`/${id}`}>
            <PostDate value={date} className={styles.date} />
            <main>{title}</main>
            <Tag value={tag} className={styles.tag} />
          </Link>
        </li>
      )),
    [items]
  )

  return <ol className={styles.list}>{itemNodes}</ol>
}
