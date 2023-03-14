import { BagContainer, BagDetails, BagProducts } from '../styles/components/bag';
import * as Dialog from '@radix-ui/react-dialog';
import { Trash, X } from 'phosphor-react'
import { useContext } from 'react';
import { BagProductsContext } from '@/context/BagProductsContext';
import { EmptyBag } from './EmptyBag';

export function ProductsBag() {
  const { bagProducts } = useContext(BagProductsContext)

  const hasProductsOnBag = bagProducts.length > 0

  return (
    <Dialog.Portal>
      <BagContainer>
        <Dialog.Title className='BagTitle'>
          Sacola de compras
        </Dialog.Title>
        <Dialog.Close className='BagCloseButton'>
          <X size={24} color={"#8D8D99"} />
        </Dialog.Close>
        {hasProductsOnBag ? 
          <div className='BagContent'>
            <BagProducts>
              <div className='ProductContainer'>
                <div className='ProductImage'>
                  <span>Imagem</span>
                </div>
                <div className='ProductDetails'>
                  <div>
                    <div className='ProductTitle'>
                      <p>Camiseta Explorer</p>
                      <button>
                        <Trash size={22} weight={'bold'} />
                      </button>
                    </div>
                    <span>R$ 79,90</span>
                  </div>
                  <div className='ProductQuantityContainer'>
                    <label htmlFor="ProductQuantity">Quantidade:</label>
                    <select name="ProductQuantity" id="ProductQuantity">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </BagProducts>
            <BagDetails>
              <div className='DetailsQuantity'>
                <p>Quantidade</p>
                <span>3 itens</span>
              </div>
              <div className='DetailsPrice'>
                <p>Valor Total</p>
                <span>R$ 270,00</span>
              </div>
              <button>Finalizar compra</button>
            </BagDetails>
          </div> 
          : 
          <EmptyBag />
        }
      </BagContainer>
    </Dialog.Portal>
  )
}