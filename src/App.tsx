import React from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <StyleBtn>Hello</StyleBtn>
    </div>
  );
}

export default App;


const StyleBtn = styled.button`
  border: none;
  background-color: blue;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 2rem;
  font-weight: bolt;
`