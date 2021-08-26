import React, { FC } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'

interface Props {
  className?: string
}

const H1: FC<Props> = ({ children, className }) => {
  return <h1 className={cn(styles.h1, className)}>{children}</h1>
}

const H2: FC<Props> = ({ children, className }) => {
  return <h2 className={cn(styles.h2, className)}>{children}</h2>
}

export default { H1, H2 }
