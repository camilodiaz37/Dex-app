import type { NextPage } from 'next'
import { TabPanels, TabPanel } from '@chakra-ui/react'
import styled from '@emotion/styled'
import DexForm from 'components/DexForm'

const TabContentWrapper = styled(TabPanels)`
  height: calc(100vh - 72px - 24px);
`
const CustomTabPanel = styled(TabPanel)`
  height: 100%;
`
const Home: NextPage = () => {
  return (
    <TabContentWrapper>
      <CustomTabPanel style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingTop: 60 }}>
        <DexForm />
      </CustomTabPanel>
      <CustomTabPanel>
        <p>two!</p>
      </CustomTabPanel>
    </TabContentWrapper>
  )
}

export default Home
