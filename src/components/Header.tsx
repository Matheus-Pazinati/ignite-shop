import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog';

import { ProductsCart } from '../components/ProductsCart';

import { Header } from '../styles/components/header'
import logoImg from '../assets/logo.svg'
import { Handbag } from 'phosphor-react'

export function DefaultHeader() {
  return (
    <Header>
      <Image src={logoImg} alt="" />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <Handbag />
          </button>
        </Dialog.Trigger>
        <ProductsCart />
      </Dialog.Root>
    </Header>
  )
}