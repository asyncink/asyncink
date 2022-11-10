import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { init } from '@socialgouv/matomo-next'

import 'styles/variables.css'
import 'styles/global.css'

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL as string
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID as string

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID })
  }, [])

  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  )
}

export default App
