import { CartContainer, CartDetails, CartProducts } from '../styles/components/cart';
import * as Dialog from '@radix-ui/react-dialog';
import { Trash, X } from 'phosphor-react'

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
        <div className='CartContent'>
          <CartProducts>
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
          </CartProducts>
          <CartDetails>
            <div className='DetailsQuantity'>
              <p>Quantidade</p>
              <span>3 itens</span>
            </div>
            <div className='DetailsPrice'>
              <p>Valor Total</p>
              <span>R$ 270,00</span>
            </div>
            <button>Finalizar compra</button>
          </CartDetails>
        </div>
      </CartContainer>
    </Dialog.Portal>
  )
}