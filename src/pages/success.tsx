import { ImageContainer, LinkButton, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer>
        <p>Imagem Camiseta</p>
      </ImageContainer>
      <p>Uhuul <strong>Matheus</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa. </p>
      <LinkButton href="/">Voltar ao catálogo</LinkButton>
    </SuccessContainer>
  )
}