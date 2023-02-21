import { styled } from "@/styles"

const Title = styled('h1', {
  color: '$green300',
  fontWeight: 'bold'
})

export default function Home() {
  return (
    <Title>Ignite Shop</Title>
  )
}
