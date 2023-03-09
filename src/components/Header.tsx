import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog';

import { ProductsCart } from '../components/ProductsCart';

import { CartQuantityView, CartTrigger, Header } from '../styles/components/header'
import logoImg from '../assets/logo.svg'
import { Handbag } from 'phosphor-react'

export function DefaultHeader() {
  const teste = true
  return (
    <Header>
      <Image src={logoImg} alt="" />
      <Dialog.Root>
        <CartTrigger asChild>
          <button>
            <Handbag size={24} color={'#8D8D99'} weight={'bold'} />
          </button>
        </CartTrigger>
        <CartQuantityView view={'false'} >
          1
        </CartQuantityView>
        <ProductsCart />
      </Dialog.Root>
    </Header>
  )
}