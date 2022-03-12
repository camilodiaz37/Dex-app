import React, { useContext, useEffect, useState } from 'react'
import { Button, Flex, Tag } from '@chakra-ui/react'
import theme from 'theme'
import styled from '@emotion/styled'
import { TransactionContext } from 'context/TransactionContext'

const ConnectButton = styled(Button)`
  background-color: ${theme.colors.connectBg};
  color: ${theme.colors.connectColor};
  border-radius: 20px;
  height: 46px;
  border: 3px solid ${theme.colors.connectColor};
`

const ConnectWalletButton = () => {
  const { walletConnect, currentAccount } = useContext(TransactionContext)
  const [address, setAddress] = useState('')
  useEffect(() => {
    if (currentAccount) {
      setAddress(currentAccount)
    }
  }, [currentAccount])

  console.log({ address })
  return (
    <Flex>
      {!address ? (
        <ConnectButton onClick={() => walletConnect()}>Connect Wallet</ConnectButton>
      ) : (
        <Tag h="46px" bg={theme.colors.primary} color="white" px="10px" borderRadius="15px">{`${address.slice(
          0,
          5,
        )}...${address.slice(-4)}`}</Tag>
      )}
    </Flex>
  )
}

export default ConnectWalletButton
