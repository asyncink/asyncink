import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

interface TypographyProps {
  className?: string
}

export const H1: React.FC<TypographyProps> = ({ children, className }) => {
  return <h1 className={clsx(styles.h1, className)}>{children}</h1>
}

export const H2: React.FC<TypographyProps> = ({ children, className }) => {
  return <h2 className={clsx(styles.h2, className)}>{children}</h2>
}
