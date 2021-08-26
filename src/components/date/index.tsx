import React, { FC, useMemo } from 'react'
import cn from 'classnames'
import dayjs from 'dayjs'
import styles from './styles.module.css'

interface Props {
  value: string
  className?: string
}

const Date: FC<Props> = ({ value, className }) => {
  const date = useMemo(() => dayjs(value).format('D MMMM'), [value])
  return (
    <time className={cn(styles.date, className)} dateTime={value}>
      {date}
    </time>
  )
}

export default Date
