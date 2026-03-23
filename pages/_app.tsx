import type { AppProps } from 'next/app'
import { Layout } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import themeConfig from '../theme.config'

export default function App({ Component, pageProps }: AppProps) {
  // Extract and clean pageProps to remove any problematic keys like statusCode and hostname
  // We use a non-empty array for pageMap to satisfy normalizePages until the real map is available
  const { pageMap = [{ name: 'index', route: '/' }], statusCode, hostname, ...restProps } = pageProps as any
  
  return (
    <Layout {...themeConfig} {...restProps} pageMap={pageMap}>
      <Component {...pageProps} />
    </Layout>
  )
}
