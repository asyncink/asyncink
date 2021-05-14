import React, { FC, useMemo } from 'react'
import cn from 'classnames'
import { PostTag, PostIcons, PostTags } from 'lib/tags'
import styles from './styles.module.css'

interface Props {
  value: PostTag
  className?: string
}

const Tag: FC<Props> = ({ value, className }) => {
  const icon = useMemo(() => PostIcons[value], [value])
  const name = useMemo(() => PostTags[value], [value])
  return (
    <div className={cn(styles.tag, className)}>
      {icon}
      <span>{name}</span>
    </div>
  )
}

export default Tag
