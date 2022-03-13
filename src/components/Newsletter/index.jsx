import React from "react";
import Planta from "../../assets/images/plantaUm.svg";
import fundo from "../../assets/images/fundoCima.svg";
import { Container, Newsletter, Titulo, TituloP, Paragrafo, Assinar, Input, Botao, ImgPlanta, Fundo } from "./styles";

export default () => {
  return (
    <>
      <Container>
        <Newsletter>
          <Titulo>Sua casa com as </Titulo>

          <TituloP>
            melhores
            <br />
            plantas
          </TituloP>

          <Paragrafo>
            Encontre aqui uma vasta seleção de plantas para decorar a<br /> sua
            casa e torná-lo uma pessoa mais feliz no seu dia a dia.
            <br /> Entre com seu e-mail e assine nossa newsletter para saber
            <br /> das novidades da marca.
          </Paragrafo>
          <Assinar>
            <Input type="email" placeholder="Insira seu e-mail"></Input>
            <Botao>Assinar newsletter</Botao>
          </Assinar>
        </Newsletter>
        <ImgPlanta src={Planta}></ImgPlanta>
      </Container>
      <Fundo src={fundo}></Fundo>
    </>
  );
};
