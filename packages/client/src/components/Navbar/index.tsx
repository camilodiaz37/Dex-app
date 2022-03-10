import React from 'react'
import styled from '@emotion/styled'
import { Box, TabList, Tab, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import theme from 'theme'
import NetworkSelect from './NetworkSelect'
import ConnectWalletButton from './ConnectWalletButton'

const NavbarContainer = styled(Box)`
  display: grid;
  grid-template-columns: 120px 1fr 370px;
  grid-gap: 10px;
  justify-content: space-between;
  flex-direction: row;
  height: 72px;
  padding: 16px;
  align-items: center;
`
const CustomTabList = styled(TabList)`
  width: fit-content;
  background-color: #191b1f;
  border-radius: 20px;
  border: 3px solid #191b1f;
  justify-self: flex-end;
  .chakra-tabs__tab[aria-selected='true'] {
    color: #e6e6e6;
    background-color: ${theme.colors.tabScheme[100]};

    &:focus {
      box-shadow: none;
    }
  }
`
const OptionTab = styled(Tab)`
  color: ${theme.colors.white}};
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <Image src="/images/eth.png" width="50px" height="50px" layout="fixed" />
      <CustomTabList>
        <OptionTab>Swap</OptionTab>
        <OptionTab>Pool</OptionTab>
        <OptionTab>Vote</OptionTab>
        <OptionTab>Charts</OptionTab>
      </CustomTabList>
      <Flex>
        <NetworkSelect />
        <ConnectWalletButton />
      </Flex>
    </NavbarContainer>
  )
}
export default Navbar
