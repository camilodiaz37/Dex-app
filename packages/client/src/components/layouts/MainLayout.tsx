import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Head from 'next/head'

const PageContainer = styled(Box)`
  min-height: 100vh;
  height: 100vh;
  display: flex;
`
const Content = styled.div`
  height: 100%;
  margin-top: 1.5rem;
`

const MainLayout: React.FC = ({ children }) => {
  return (
    <PageContainer flexDir="column">
      <Head>
        <title> Dex App </title>
        <meta content="DEX" name="description" />
        <meta content="width=1336" name="viewport" />
      </Head>
      <Navbar />
      <Content>{children}</Content>
    </PageContainer>
  )
}

export default MainLayout
