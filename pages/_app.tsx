import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SiteFooter from '../components/layouts/FooterSection'
import SiteHeader from '../components/layouts/HeaderSection'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main>
    <SiteHeader/>
    <Component {...pageProps} />
    <SiteFooter/>
  </main>
  )
}
