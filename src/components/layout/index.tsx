import React from 'react'

import { Meta } from 'components/meta'
import { Header } from 'components/header'
import { Footer } from 'components/footer'

const LAYOUT_LOGO = 'asyncink'
const LAYOUT_HEADLINE =
  'Неустаревающие\nстатьи, видео и книги,\nредкие переводы и посты'

interface LayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = LAYOUT_HEADLINE,
  description
}) => (
  <>
    <Meta title={title} description={description} />

    <Header logo={LAYOUT_LOGO} title={title} />
    <main>{children}</main>
    <Footer />
  </>
)
