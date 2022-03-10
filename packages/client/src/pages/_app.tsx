import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/MainLayout'
import { ChakraProvider, Tabs } from '@chakra-ui/react'
import theme from 'theme'
import { TransactionContextProvider } from 'context/TransactionContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TransactionContextProvider>
        <Tabs variant="soft-rounded">
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Tabs>
      </TransactionContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
