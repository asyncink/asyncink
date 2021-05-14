import React, { FC, useMemo } from 'react'
import cn from 'classnames'
import { PostTag, TagIcons, TagNames } from 'lib/tags'
import styles from './styles.module.css'

interface Props {
  value: PostTag
  className?: string
}

const Tag: FC<Props> = ({ value, className }) => {
  const icon = useMemo(() => TagIcons[value], [value])
  const name = useMemo(() => TagNames[value], [value])
  return (
    <div className={cn(styles.tag, className)}>
      {icon}
      <span>{name}</span>
    </div>
  )
}

export default Tag
