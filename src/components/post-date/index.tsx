import React, { useMemo } from 'react'
import clsx from 'clsx'

import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import styles from './styles.module.css'

interface PostDateProps {
  value: string
  className?: string
}

export const PostDate: React.FC<PostDateProps> = ({ value, className }) => {
  const date = useMemo(
    () => format(new Date(value), 'd MMMM', { locale: ru }),
    [value]
  )

  return (
    <time className={clsx(styles.date, className)} dateTime={value}>
      {date}
    </time>
  )
}
