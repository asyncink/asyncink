import React, { ReactNode } from 'react'
import { AppProps } from 'next/app'

import 'styles/global.css'

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />
}

export default App
