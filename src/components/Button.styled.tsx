import styled from 'styled-components';

export const StyleBtn = styled.button`
  border: none;
  background-color: blue;
  padding: 10px 20px;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  
  &:hover{
    color: red;
    cursor: pointer;
  }
  &:last-child {
    color: #3208eb
  }

`
export const SuperButton = styled(StyleBtn)`
  border-radius: 5px;
  background-color: red;
`
export const Link = styled.a`
color: #4983c3;
font-size: 2rem;
font-weight: bold;
background-color: #0ecf28;
padding: 0;
`
export const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
  color: black;
  }
  ${Link}{
    cursor: zoom-in;
  }
`

