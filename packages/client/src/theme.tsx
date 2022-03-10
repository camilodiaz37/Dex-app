import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    tabScheme: {
      100: '#212429',
    },
    connectBg: '#172A42',
    connectColor: '#377CDC',
    primary: '#191b1f',
  },
  styles: {
    global: {
      body: {
        backgroundColor: '#2A242C',
        color: '#ffffff',
      },
    },
  },
})

export default theme
