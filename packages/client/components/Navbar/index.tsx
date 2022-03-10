import React from 'react'
import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const NavbarContainer = styled(Box)`
  display: flex;
  height: 100px;
  align-items: center;
  padding: 0 20px;
`

const Navbar = () => {
  return (
    <NavbarContainer bg="black">
      <Image src="/images/eth.png" width="50px" height="50px" layout="fixed" />
    </NavbarContainer>
  )
}
export default Navbar
