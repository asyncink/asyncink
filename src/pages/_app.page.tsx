import React from 'react'
import type { AppProps } from 'next/app'

import { Metrika } from 'components/metrika'

import 'styles/variables.css'
import 'styles/global.css'

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <React.StrictMode>
    <Metrika />

    <Component {...pageProps} />
  </React.StrictMode>
)

export default App
