import { stripe } from '../../lib/stripe'
import { GetStaticPaths, GetStaticProps } from "next";
import { ProductContainer, ImageContainer, ProductDetails } from "../../styles/pages/product";
import Stripe from 'stripe';
import Image from 'next/image';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    price: string;
  }
}

export default function Product({ product }: ProductProps) {
  return (
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
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {id: 'prod_NQ8g0SQfPx5Nl6'}
      },
      {
        params: {id: 'prod_NQ8fNzDhcaBRqo'}
      }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id
  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })
  const productPrice = response.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: response.id,
        name: response.name,
        imageUrl: response.images[0],
        description: response.description,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(productPrice.unit_amount! / 100)
      }
    }
  }
}