import { createContext, ReactNode } from 'react'

const CartProductsContext = createContext({} as any)

interface CartProductsProviderProps {
  children: ReactNode
}

export function CartProductsProvider({ children }: CartProductsProviderProps) {
  return (
    <CartProductsContext.Provider value={{}} >
      {children}
    </CartProductsContext.Provider>
  )
}