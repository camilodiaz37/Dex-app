import React, { createContext, useState, useEffect, FC } from 'react'
import { ethers } from 'ethers'
import { contractAddress, contractABI } from '../lib/constants'

type TransactionContextprops = {
  currentAccount: string | undefined
  walletConnect: () => void
  sendTransaction: () => void
  handleChange: (e: any, name: string) => void
  formData: { addressTo: string; amount: string }
  isLoading: boolean
}

export const TransactionContext = createContext<TransactionContextprops>({
  currentAccount: undefined,
  walletConnect: () => {},
  sendTransaction: () => {},
  handleChange: () => {},
  formData: { addressTo: '', amount: '' },
  isLoading: false,
})

let eth: any

if (typeof window !== 'undefined') {
  eth = (window as any).ethereum
}

const getEthereumContract = (): ethers.Contract => {
  const provider = new ethers.providers.Web3Provider(eth)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

  return transactionContract
}

export const TransactionContextProvider: FC = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
  })

  const walletConnect = async (metamask = eth) => {
    try {
      if (!metamask) return alert('PLease install Metamask')
      const accounts = await metamask.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum provider found')
    }
  }

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask')
      const accounts = await metamask.request({ method: 'eth_requestAccounts' })
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0])
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum provider found')
    }
  }

  const sendTransaction = async (metamask = eth, connectedAccount = currentAccount) => {
    try {
      if (!metamask) return alert('Please install Metamask')

      const { addressTo, amount } = formData
      const transactionContract = getEthereumContract()
      const parsedAmount = ethers.utils.parseEther(amount)

      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: '0x7EF40', //520000 Gwei
            value: parsedAmount._hex,
          },
        ],
      })
      const transactionHash = await transactionContract.publishTransaction(
        addressTo,
        parsedAmount,
        `Transfering ETH ${parsedAmount} to ${addressTo}`,
        'TRANSFER',
      )
      setIsLoading(true)
      await transactionHash.wait()
      /*  await saveTransaction(transactionHash.hash, amount, connectedAccount, addressTo) */
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const value = {
    currentAccount,
    walletConnect,
    sendTransaction,
    handleChange,
    formData,
    isLoading,
  }

  return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>
}
