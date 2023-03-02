import { ProductContainer, ImageContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
        <p>Imagem da camiseta</p>
      </ImageContainer>
      <ProductDetails>
        <div>
          <h1>Camiseta X</h1>
          <span>R$ 79,90</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in delectus numquam, vel inventore similique recusandae, laborum ipsam sequi doloribus esse provident repellat soluta. Dolores cum quos adipisci ullam modi.</p>
        </div>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}