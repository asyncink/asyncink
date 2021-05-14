import React, { ReactNode } from 'react'
import { AppProps } from 'next/app'

import 'styles/global.css'
import 'styles/variables.css'

import dayjs from 'dayjs'
import 'dayjs/locale/ru'

dayjs.locale('ru')

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />
}

export default App
