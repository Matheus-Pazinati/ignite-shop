import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { ImageContainer, LinkButton, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customer: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Success({ customer, product }: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer>
        <Image src={product.imageUrl} width={120} height={110} alt="" />
      </ImageContainer>
      <p>Uhuul <strong>{customer}</strong>, a <strong>{product.name}</strong> já está a caminho da sua casa. </p>
      <LinkButton href="/">Voltar ao catálogo</LinkButton>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  const sessionId = String(query.session_id)
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customer = session.customer_details?.name
  const productDetails = session.line_items?.data[0].price?.product as Stripe.Product
  
  return {
    props: {
      customer,
      product: {
        name: productDetails.name,
        imageUrl: productDetails.images[0]
      }
    }
  }
}