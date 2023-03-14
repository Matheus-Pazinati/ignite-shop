import { createContext, ReactNode, useState } from 'react'

interface BagProductsProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface BagProductsContextTypes {
  bagProducts: BagProductsProps[]
  handleAddProductOnBag: (product: BagProductsProps) => void
}

interface BagProductsProviderProps {
  children: ReactNode
}

export const BagProductsContext = createContext({} as BagProductsContextTypes)

export function BagProductsProvider({ children }: BagProductsProviderProps) {
  const [bagProducts, setBagProducts] = useState<BagProductsProps[]>([])

  function handleAddProductOnBag(product: BagProductsProps) {
    setBagProducts(state => [...state, product])
  }

  return (
    <BagProductsContext.Provider value={{bagProducts, handleAddProductOnBag}} >
      {children}
    </BagProductsContext.Provider>
  )
}