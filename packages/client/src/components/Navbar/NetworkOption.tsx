import { Flex, Icon, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'
import styled from '@emotion/styled'

type IconProps = {
  color: string
}

const CircleIcon: FC<IconProps> = ({ color }) => (
  <Icon viewBox="0 0 200 200" color={color}>
    <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
  </Icon>
)

const OptionWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  cursor: pointer;
`

type NetworkOptionsProps = {
  name: string
  url: string
  isActive: boolean
}

const NetworkOption: FC<NetworkOptionsProps> = ({ url, name, isActive }) => {
  return (
    <OptionWrapper>
      <Flex align="center">
        <Image src={url} width="20px" height="20px" layout="fixed" />
        <Text marginInline="10px">{name}</Text>
      </Flex>
      {isActive && <CircleIcon color="#27AE60" />}
    </OptionWrapper>
  )
}

export default NetworkOption
