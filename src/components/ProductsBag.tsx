import { BagContainer, BagDetails, BagProducts } from '../styles/components/bag';
import * as Dialog from '@radix-ui/react-dialog';
import { Trash, X } from 'phosphor-react'
import { useContext } from 'react';
import { BagProductsContext } from '@/context/BagProductsContext';
import { EmptyBag } from './EmptyBag';
import Image from 'next/image';
import { transformNumberToCurrency } from '@/utils/transformNumberToCurrency';

export function ProductsBag() {
  const { bagProducts } = useContext(BagProductsContext)

  const hasProductsOnBag = bagProducts.length > 0

  console.log(bagProducts)

  return (
    <Dialog.Portal>
      <BagContainer>
        <Dialog.Title className='BagTitle'>
          Sacola de compras
        </Dialog.Title>
        <Dialog.Close className='BagCloseButton'>
          <X size={24} color={"#8D8D99"} />
        </Dialog.Close>
        <div className='BagContent'>
          <BagProducts>
            {hasProductsOnBag ?
              bagProducts.map((product) => {
                return (
                  <div className='ProductContainer' key={product.id}>
                    <div className='ProductImage'>
                      <Image src={product.imageUrl} alt="" width={100} height={90} />
                    </div>
                    <div className='ProductDetails'>
                      <div>
                        <div className='ProductTitle'>
                          <p>{product.name}</p>
                          <button>
                            <Trash size={22} weight={'bold'} />
                          </button>
                        </div>
                        <span>{transformNumberToCurrency(product.price * product.quantity)}</span>
                      </div>
                      <div className='ProductQuantityContainer'>
                        <p className='QuantityLabel'>Quantidade: </p>
                        <span>{product.quantity}</span>
                      </div>
                    </div>
                  </div>
                )
              })
              :
              <EmptyBag />
            }
          </BagProducts>
          {hasProductsOnBag ?
            <BagDetails>
              <div className='DetailsQuantity'>
                <p>Quantidade</p>
                <span>{bagProducts.length > 1 ? `${bagProducts.length} itens` : '1 item'}</span>
              </div>
              <div className='DetailsPrice'>
                <p>Valor Total</p>
                <span>R$ 270,00</span>
              </div>
              <button>Finalizar compra</button>
            </BagDetails>
            :
            ""
          }
        </div>
      </BagContainer>
    </Dialog.Portal>
  )
}