import React from 'react'

import { Meta } from 'components/meta'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

interface LayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Неустаревающие\nстатьи, видео и книги',
  description
}) => (
  <>
    <Meta title={title} description={description} />

    <Header title={title} />
    <main>{children}</main>
    <Footer />
  </>
)
