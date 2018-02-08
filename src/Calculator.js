import React, { Component } from 'react';
import './Calc.css';
import styled from 'styled-components';

const StyledBtn = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  height: 50px;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 10px;
  padding: 10px;
  margin: 20px;
  outline: 1px solid black;
  max-width: 400px;
  min-width: 250px;
`
const ResultBox = styled.textarea`
  grid-column: span 4;
  outline: 1px solid teal;
  background: hsla(100, 100%, 50%, 0.2);
  
`

class Calculator extends Component{
  state = {
    result: 1
  }

  render(){
    const { result } = this.state;
    return (
      <Wrapper>
        <ResultBox value={result}></ResultBox>
        <StyledBtn className="C">C</StyledBtn>
        <StyledBtn onClick={(v) => {
          this.setState({
            result: 12
          })
        }}>%</StyledBtn>
        <StyledBtn>X</StyledBtn>
        <StyledBtn>1</StyledBtn>
        <StyledBtn>2</StyledBtn>
        <StyledBtn>3</StyledBtn>
        <StyledBtn>+</StyledBtn>
        <StyledBtn>4</StyledBtn>
        <StyledBtn>5</StyledBtn>
        <StyledBtn>6</StyledBtn>
        <StyledBtn>-</StyledBtn>
        <StyledBtn>7</StyledBtn>
        <StyledBtn>8</StyledBtn>
        <StyledBtn>9</StyledBtn>
        <StyledBtn>=</StyledBtn>
      </Wrapper>
    )
  }
}


export default Calculator;
