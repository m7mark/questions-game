import type { AppProps } from 'next/app'
import '../src/assets/globals.scss'
import { Layout } from '../src/components/layout/Layout'
import { ThemeProvider } from '../src/context/theme-context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
