import Stripe from 'stripe';
import { stripe } from '../../lib/stripe'
import { GetStaticPaths, GetStaticProps } from "next";
import { ProductContainer, ImageContainer, ProductDetails, LinkButton } from "../../styles/pages/product";
import Image from 'next/image';
import { ChangeEvent, useContext, useState } from 'react';
import Head from 'next/head';
import { CaretLeft } from 'phosphor-react';
import { BagProductsContext } from '../../context/BagProductsContext';

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

  const {} = useContext(BagProductsContext)

  const [productQuantity, setProductQuantity] = useState(1)

  function handleProductQuantity(event: ChangeEvent<HTMLSelectElement>) {
    setProductQuantity(Number(event.target.value))
  }

  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  // async function handleCreatePurchaseProcess() {
  //   try {
  //     setIsCreatingCheckoutSession(true)
  //     const response = await axios.post('/api/checkout', {
  //       checkoutPriceId: product.priceId
  //     })

  //     const { checkoutUrl } = response.data

  //     window.location.href = checkoutUrl

  //   } catch (error) {
  //     console.log('Ocorreu um erro no processo de Checkout')
  //     setIsCreatingCheckoutSession(false)
  //   }
  // }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ProductContainer>
        <div>
          <LinkButton href={"/"}>
            <CaretLeft size={17} weight={'bold'} />
            Voltar ao catálogo
          </LinkButton>
          <ImageContainer>
            <Image src={product.imageUrl} alt="" width={520} height={480} />
          </ImageContainer>
        </div>
        <ProductDetails>
          <div>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <p>{product.description}</p>
            <div className='ProductQuantityContainer'>
              <label htmlFor="ProductQuantity">Quantidade:</label>
              <select
               name="ProductQuantity" 
               id="ProductQuantity" 
               value={productQuantity}
               onChange={handleProductQuantity}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <button>
            Colocar na sacola
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