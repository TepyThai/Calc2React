import React from 'react';
import { render } from 'react-dom';
import Calculator from './Calculator';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template: 2 / 1;
  grid-gap: 10px;
`

const Title = styled.h2`
  color: #009588;
  fontFamily: 'sans-serif';
  text-align: center;
`

const App = () => (
  <Wrapper>
    <Title>Calc2React by: @tepythai</Title>
    <Calculator/>
  </Wrapper>
);

render(<App />, document.getElementById('root'));
