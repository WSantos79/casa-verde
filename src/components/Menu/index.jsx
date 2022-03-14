import React from "react";
import Logo from "../../assets/images/logo.svg"
import { Container, Lista, Item, A } from "./styles";

export default () => {
  return (
    <>

     <Container> 
     <img src={Logo} alt="xx"></img>

      <nav>
          <Lista>
              <Item><A href="#">Como fazer</A></Item>
              <Item><strong>/</strong></Item>
              <Item><A href="#">Ofertas</A></Item>
              <Item><strong>/</strong></Item>
              <Item><A href="#">Depoimentos</A></Item>
              <Item><strong>/</strong></Item>
              <Item><A href="#">Vídeos</A></Item>
              <Item><strong>/</strong></Item>
              <Item><A href="#">Meu carrinho</A></Item>          
          </Lista>
        </nav>  
      </Container>
    </>
  );
};
