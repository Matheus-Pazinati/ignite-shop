import { stripe } from '../lib/stripe'
import { HomeContainer, ProductCard } from '@/styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps } from 'next'

import Image from 'next/image'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <ProductCard key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
          <footer>
            <strong>
              {product.name}
            </strong>
            <span>
              {product.price}
            </span>
          </footer>
        </ProductCard>
      ))}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = await response.data.map((product) => {
    const productPrice = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: productPrice.unit_amount! / 100
    }
  })
  return {
    props: {
      products
    }
  }
}
