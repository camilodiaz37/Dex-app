import React, { createContext, useState, useEffect, FC } from 'react'

type TransactionContextprops = {
  currentAccount: string | undefined
  walletConnect: () => void
}

export const TransactionContext = createContext<TransactionContextprops>({
  currentAccount: undefined,
  walletConnect: () => {},
})

let eth: any

if (typeof window !== 'undefined') {
  eth = (window as any).ethereum
}

export const TransactionContextProvider: FC = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState<string | undefined>(undefined)

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
        setCurrentAccount(undefined)
      }
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum provider found')
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const value = {
    currentAccount,
    walletConnect,
  }

  return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>
}
