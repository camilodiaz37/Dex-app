import React, { FC } from 'react'
import { Button, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import theme from 'theme'

type TokenButtonProps = {
  url: string
  token: string
}

const TokenButton: FC<TokenButtonProps> = ({ url, token }) => {
  return (
    <Button
      bg={theme.colors.primary}
      display="grid"
      gridTemplateColumns="1fr 1fr 25px"
      padding="0px"
      justifyItems="center"
      borderRadius="15px"
    >
      <Image src={url} width="25px" height="25px" layout="fixed" />
      <Text>{token}</Text>
      <ChevronDownIcon />
    </Button>
  )
}

export default TokenButton
