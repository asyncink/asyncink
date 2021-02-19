import React, { FC } from 'react'
import { default as LinkNext } from 'next/link'

interface Props {
  href: string
  className?: string
}

const Link: FC<Props> = ({ children, href, ...props }) => (
  <LinkNext href={href}>
    <a {...props}>{children}</a>
  </LinkNext>
)

export default Link
