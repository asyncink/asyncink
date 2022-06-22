import React from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'

const ORIGIN = process.env.NEXT_PUBLIC_ORIGIN

export interface MetaProps {
  title: string
  description?: string
}

export const Meta: React.FC<MetaProps> = ({ title, description }) => {
  const { pathname, locale } = useRouter()

  const canonicalUrl = `${ORIGIN}${pathname}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />

      <link rel="alternate" hrefLang={locale} href={canonicalUrl} />

      <meta property="og:locale" key="og:locale" content="ru_RU" />

      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={description || title} />
      <meta property="og:description" content={description || title} />

      <meta property="og:type" key="og:type" content="website" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  )
}
