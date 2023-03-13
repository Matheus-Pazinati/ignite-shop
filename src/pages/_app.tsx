import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { DefaultHeader } from '@/components/Header'
import { CartProductsProvider } from '../context/CartProductsContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProductsProvider>
        <DefaultHeader />
        <Component {...pageProps} />
      </CartProductsProvider>
    </Container>
  )
}
