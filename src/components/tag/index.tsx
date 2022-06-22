import React, { useMemo } from 'react'
import clsx from 'clsx'

import { PostTag, TagIcons, TagNames } from 'lib/tags'
import styles from './styles.module.css'

interface TagProps {
  value: PostTag
  className?: string
}

export const Tag: React.FC<TagProps> = ({ value, className }) => {
  const [icon, name] = useMemo(
    () => [TagIcons[value], TagNames[value]],
    [value]
  )

  return (
    <div className={clsx(styles.tag, className)}>
      {icon}
      <span>{name}</span>
    </div>
  )
}
