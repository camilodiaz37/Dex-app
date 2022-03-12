import React, { FC, useContext } from 'react'
import { ArrowDownIcon, SettingsIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, Input, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import theme from 'theme'
import TokenButton from 'components/common/TokenButton'
import { TransactionContext } from 'context/TransactionContext'

const InputWrapper = styled(Grid)`
  background-color: ${theme.colors.tabScheme[100]};
  height: 76px;
  padding: 20px;
  border-radius: 30px;
  grid-template-columns: 1fr 95px;
`

const CustomInput = styled(Input)`
  border: none;
  padding: 0;
  font-size: 32px;
  &:focus {
    border: none;
    box-shadow: none;
  }
`
const ReverseButton = styled.div`
  position: absolute;
  right: calc(50% - 16px);
  top: calc(50% - 16px);
  width: 32px;
  height: 32px;
  border-radius: 12px;
  border: 4px solid ${theme.colors.primary};
  background-color: ${theme.colors.tabScheme[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const DexForm: FC = () => {
  const { formData, sendTransaction, handleChange } = useContext(TransactionContext)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { amount, addressTo } = formData
    e.preventDefault()

    if (!addressTo || !amount) return alert('Please fill in all fields')

    sendTransaction()
  }

  return (
    <Flex>
      <Box w="480px" h="280px" bg={theme.colors.primary} borderRadius="30px" paddingInline="20px" position="relative">
        <Grid w="100%" templateColumns="1fr 40px" padding="15px 0px">
          <Text fontSize="20px">Swap</Text>
          <SettingsIcon fontSize="30px" />
        </Grid>
        <InputWrapper>
          <CustomInput type="number" placeholder="0.0" onChange={e => handleChange(e, 'amount')} />
          <TokenButton url="/images/eth.png" token="ETH" />
          <div style={{ paddingBottom: 16 }} />
        </InputWrapper>
        <ReverseButton>
          <ArrowDownIcon />
        </ReverseButton>
        <InputWrapper marginTop="5px">
          <CustomInput placeholder="0x..." onChange={e => handleChange(e, 'addressTo')} />
          {/*  <TokenButton url="/images/Tether-USDT-icon.png" token="USDT" /> */}
        </InputWrapper>
        <Button
          w="100%"
          h="53px"
          bg={theme.colors.tabScheme[100]}
          borderRadius="30px"
          mt="5px"
          onClick={e => handleSubmit(e)}
        >
          Confirm
        </Button>
      </Box>
    </Flex>
  )
}

export default DexForm
