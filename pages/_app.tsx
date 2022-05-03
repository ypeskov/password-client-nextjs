import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Password Manager</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
