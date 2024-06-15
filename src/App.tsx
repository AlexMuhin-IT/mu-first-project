import React from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Box>
        <StyleBtn as="a">Link</StyleBtn>
        <StyleBtn>Hello</StyleBtn>
        <SuperButton>Super Button</SuperButton>
      </Box>
    </div>
  );
}

export default App;


const StyleBtn = styled.button`
  border: none;
  background-color: blue;
  padding: 10px 20px;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`
const SuperButton = styled(StyleBtn)`
  border-radius: 5px;
  background-color: red;
`

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
