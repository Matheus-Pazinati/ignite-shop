import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react'

export function ProductsCart() {
  return (
    <Dialog.Portal>
      <Dialog.Content>
        <Dialog.Title>
          Sacola de compras
        </Dialog.Title>
        <Dialog.Close>
          <X />
        </Dialog.Close>
        <section>
          <div>
            <div>
              <span>Imagem</span>
            </div>
            <div>
              <p>Camiseta Explorer</p>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </div>
        </section>
      </Dialog.Content>
    </Dialog.Portal>
  )
}