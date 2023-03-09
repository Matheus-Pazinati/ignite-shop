import Stripe from 'stripe';
import { stripe } from '../../lib/stripe'
import { GetStaticPaths, GetStaticProps } from "next";
import { ProductContainer, ImageContainer, ProductDetails } from "../../styles/pages/product";
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import Head from 'next/head';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: string;
    priceId: string;
  }
}

export default function Product({ product }: ProductProps) {

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleCreatePurchaseProcess() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        checkoutPriceId: product.priceId
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl

    } catch (error) {
      console.log('Ocorreu um erro no processo de Checkout')
      setIsCreatingCheckoutSession(false)
    }

  }
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>
        <ProductDetails>
          <div>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <p>{product.description}</p>
          </div>
          <button 
            onClick={handleCreatePurchaseProcess} 
            disabled={isCreatingCheckoutSession}
          >
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_NQ8g0SQfPx5Nl6' }
      },
      {
        params: { id: 'prod_NQ8fNzDhcaBRqo' }
      }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id
  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const productPrice = response.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: response.id,
        name: response.name,
        imageUrl: response.images[0],
        description: response.description,
        priceId: productPrice!.id,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(productPrice.unit_amount! / 100),
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}