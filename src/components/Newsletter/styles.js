import styled from "styled-components";
import Email from '../../assets/images/mail.svg'
export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Newsletter = styled.div`
  z-index: 3;
  margin-top: 95px;
`;

export const Titulo = styled.p`
  font-size: 22px;
  opacity: 0.5;
`;

export const TituloP = styled.p`
  font-family: "Elsie Swash Caps";
  font-size: 82px;
`;

export const Paragrafo = styled.p`
  margin-top: 15px;
  font-size: 20px;
  opacity: 0.5;
`;

export const Assinar = styled.div`
    margin-top: 30px;
`

export const Input = styled.input`
  height: 60px;
  width: 391px;

  border: none;

  background: 1px url(${Email});
  background-repeat: no-repeat;
  text-indent: 30px;
`;

export const Botao = styled.button`
  background: #ffcb47;
  box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);

  font-size: 16px;
  line-height: 20px;
  font-weight: 400;  
  letter-spacing: 1.5px;

  border: none;

  height: 60px;
  width: 194px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
export const ImgPlanta = styled.img`
  width: 587px;

  position: absolute;
  left: 700px;
  top: 13px;
  
  z-index: 2;
`;

export const Fundo = styled.img`
  position: absolute;
  width: 735px;
  height: 1000px;

  right: -20px;
  top: -260px;

  z-index: 1;
`;