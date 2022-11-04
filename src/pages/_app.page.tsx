import React from 'react'
import type { AppProps } from 'next/app'

import Script from 'next/script'

import 'styles/variables.css'
import 'styles/global.css'

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <React.StrictMode>
    <Script
      src="https://microanalytics.io/js/script.js"
      data-host="https://microanalytics.io"
      data-dnt="false"
      id="ZwSg9rf6GA"
    />

    <Component {...pageProps} />
  </React.StrictMode>
)

export default App
