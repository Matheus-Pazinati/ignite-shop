import { stripe } from "../../lib/stripe"
import { NextApiRequest, NextApiResponse } from "next";

export default async function stripeCheckout(req: NextApiRequest ,res: NextApiResponse) {

  const checkoutPriceId = 'price_1MfIO4BgzgjUY7rNr1dWaI7X'
  const successUrl = `${process.env.BASE_URL}/success`
  const cancelUrl = `${process.env.BASE_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: checkoutPriceId,
        quantity: 1
      }
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}