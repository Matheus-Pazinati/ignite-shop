import { HomeContainer, ProductCard } from '@/styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Image from 'next/image'
import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <ProductCard className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>
            Camiseta Beyond the Limits
          </strong>
          <span>
            R$ 79,90
          </span>
        </footer>
      </ProductCard>
      <ProductCard className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>
            Camiseta Beyond the Limits
          </strong>
          <span>
            R$ 79,90
          </span>
        </footer>
      </ProductCard>
      <ProductCard className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>
            Camiseta Beyond the Limits
          </strong>
          <span>
            R$ 79,90
          </span>
        </footer>
      </ProductCard>
      <ProductCard className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>
            Camiseta Beyond the Limits
          </strong>
          <span>
            R$ 79,90
          </span>
        </footer>
      </ProductCard>
    </HomeContainer>
  )
}
