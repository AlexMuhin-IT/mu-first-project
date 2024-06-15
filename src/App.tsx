import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Box, Link, StyleBtn, SuperButton } from './components/Button.styled';

function App() {
  return (
    <div className="App">
      <Box>
        <StyleBtn as={Link}>Link</StyleBtn>
        <StyleBtn as="a">Link</StyleBtn>
        <StyleBtn>Hello</StyleBtn>
        <SuperButton>Super Button</SuperButton>
      </Box>
    </div>
  );
}

export default App;




