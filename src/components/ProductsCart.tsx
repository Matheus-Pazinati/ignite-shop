import { CartContainer, CartProducts } from '../styles/components/cart';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react'

export function ProductsCart() {
  return (
    <Dialog.Portal>
      <CartContainer>
        <Dialog.Title className='CartTitle'>
          Sacola de compras
        </Dialog.Title>
        <Dialog.Close className='CartCloseButton'>
          <X size={24} color={"#8D8D99"} />
        </Dialog.Close>
        <CartProducts>
          <div className='ProductContainer'>
            <div className='ProductImage'>
              <span>Imagem</span>
            </div>
            <div className='ProductDetails'>
              <div>
                <p>Camiseta Explorer</p>
                <span>R$ 79,90</span>
              </div>
              <button>Remover</button>
            </div>
          </div>
          <div className='ProductContainer'>
            <div className='ProductImage'>
              <span>Imagem</span>
            </div>
            <div className='ProductDetails'>
              <div>
                <p>Camiseta Explorer</p>
                <span>R$ 79,90</span>
              </div>
              <button>Remover</button>
            </div>
          </div>
        </CartProducts>
        <section>
          <div>
            <p>Quantidade</p>
            <span>3 itens</span>
          </div>
          <div>
            <p>Valor Total</p>
            <span>R$ 270,00</span>
          </div>
          <button>Finalizar compra</button>
        </section>
      </CartContainer>
    </Dialog.Portal>
  )
}