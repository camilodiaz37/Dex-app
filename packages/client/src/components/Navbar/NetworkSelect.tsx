import React, { useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { ChevronDownIcon } from '@chakra-ui/icons'
import theme from 'theme'
import NetworkOption from './NetworkOption'

const NetworkButton = styled(Button)`
  height: 46px;
  border-radius: 20px;
  background-color: ${theme.colors.primary};

  &:focus {
    box-shadow: none;
  }
  &:active,
  :hover {
    background-color: ${theme.colors.primary};
  }
`
const NetworkWrapperOptions = styled(PopoverContent)`
  background-color: ${theme.colors.primary};
  border-color: ${theme.colors.primary} !important;
  border-radius: 20px;
  &:focus {
    border: ${theme.colors.primary};
    box-shadow: none;
  }
`
const options = [
  {
    url: '/images/eth.png',
    name: 'Ethereum',
  },
  {
    url: '/images/polygon-matic.png',
    name: 'Polygon',
  },
]

const NetworkSelect = () => {
  const [networkSelected, setNetworkSelected] = useState('Ethereum')

  return (
    <div>
      <Popover placement="top-start">
        <PopoverTrigger>
          <NetworkButton>
            <Image src="/images/eth.png" width="20px" height="20px" layout="fixed" />
            <Text marginInline="10px">Ethereum</Text>
            <ChevronDownIcon />
          </NetworkButton>
        </PopoverTrigger>
        <NetworkWrapperOptions _active={{ border: 'transparent', boxShadow: 'none' }}>
          <PopoverCloseButton />
          <PopoverHeader borderBottom="none" padding="10px 25px">
            Seleccione una red
          </PopoverHeader>
          <PopoverBody>
            {options.map(({ url, name }, index) => (
              <NetworkOption key={index} url={url} name={name} isActive={networkSelected === name} />
            ))}
          </PopoverBody>
        </NetworkWrapperOptions>
      </Popover>
    </div>
  )
}

export default NetworkSelect
