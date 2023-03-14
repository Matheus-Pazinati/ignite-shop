import { createContext, ReactNode, useState } from 'react'

interface CartProductsProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartProductsContextTypes {
  cartProducts: CartProductsProps[]
}

interface CartProductsProviderProps {
  children: ReactNode
}

export const CartProductsContext = createContext({} as CartProductsContextTypes)

export function CartProductsProvider({ children }: CartProductsProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProductsProps[]>([])
  return (
    <CartProductsContext.Provider value={{cartProducts}} >
      {children}
    </CartProductsContext.Provider>
  )
}