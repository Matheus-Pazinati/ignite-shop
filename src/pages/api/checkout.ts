import { stripe } from "../../lib/stripe"
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { checkoutPriceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({
      error: 'Method not allowed'
    })
  }

  if (!checkoutPriceId) {
    return res.status(400).json({
      error: 'Invalid product-price ID'
    })
  }

  const successUrl = `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.BASE_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: checkoutPriceId,
        quantity: 1,
      },
      {
        price: checkoutPriceId,
        quantity: 1,
      },
      {
        price: checkoutPriceId,
        quantity: 1,
      }
    ],
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}