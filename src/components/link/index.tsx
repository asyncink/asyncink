import React from 'react'
import { default as LinkNext } from 'next/link'

interface LinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({ children, href, ...props }) => (
  <LinkNext href={href}>
    <a {...props}>{children}</a>
  </LinkNext>
)
