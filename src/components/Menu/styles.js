import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: 10px;

 
`

export const Lista = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top: 30px;
  

`
export const Item = styled.li`
  margin-right: 13px;
  z-index: 3; 
   
`

export const A = styled.a`  
  font-size: 16px;
  font-style: normal;  
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;  

  text-decoration: none;
  color: #202020;

  animation-timing-function: ease-in-out;
  animation-duration: 300ms;
 
  
  &:hover {
    font-size: 17px;
    text-decoration: underline;
  }

  

`