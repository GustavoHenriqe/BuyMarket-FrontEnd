import CardProduto from "./CardProduto"
import styled from "styled-components"



export default function ListaProduto({ produtos, adicionarAoCarrinho }) {

  return (
    <PageStore>
      <Logo>BuyMarket
      </Logo>
      <ContainerListaProdutos>
        {produtos.map((prod) => (
          <CardProduto
            key={prod.id}
            produto={prod}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </ContainerListaProdutos>
    </PageStore>

  )
}


const Logo = styled.div`
background: linear-gradient(to right, #0d5c92, #4682b4); /* alterando as cores para uma tonalidade mais azulada */
  color: white;
  padding: 20px;
  text-align: center;
  text-shadow: 2px 2px #333;
  font-size: 3rem;
  font-family: "Arial Black", sans-serif;
  width: 100vw;

  img {
    width:50px;
  }
`;


const PageStore = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100vh;
  background-color: white;


`;
const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


