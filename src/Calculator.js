import React, { Component } from 'react';

import styled from 'styled-components';


class Calculator extends Component {
  state = {
    currentValue: 0,
    nextValue: 0,
    operator: "",
    finalResult: "",
    displayResult: "",
    getResult: false,
    isMultiOrDivide: false,
  }

  buttonHandler = (e) => {
    const target = e.target;

    this.setState(prevState => {
      let current = 0;
      let display = "";
      let nextV = 0;
      let operator = "";
      let final = 0;
      let show = false;
      let isMultiOrDivide = false

      switch (target.value) {
        case "*":
          nextV = prevState.finalResult !== "" ? prevState.finalResult : prevState.currentValue;
          operator = "*";
          current = 1;
          show = true;
          isMultiOrDivide = true
          final = prevState.finalResult;
          break;
        case "/":
          show = true;
          operator = "/";
          nextV = prevState.finalResult !== "" ? prevState.finalResult : prevState.currentValue;
          current = 1;
          isMultiOrDivide = true;
          final = prevState.finalResult;
          break;
        case "-":
          show = true;
          operator = "-";
          nextV = prevState.finalResult !== "" ? prevState.finalResult : prevState.currentValue;
          current = 0;
          break;
        case "+":
          show = true;
          operator = "+";
          nextV = prevState.finalResult !== "" ? prevState.finalResult : prevState.currentValue;
          current = 0;
          break;
        case "=":
          show = true;
          operator = "=";
          nextV = prevState.finalResult;
          current = 0;
          break;
        default:
          let value = prevState.currentValue;

          if (prevState.isMultiOrDivide) {
            value = 0;
          }
          isMultiOrDivide = false;
          current = parseFloat(value + target.value + "");
          nextV = prevState.nextValue;
          //display = current + "";
          operator = prevState.operator;
          final = prevState.finalResult;
      }

      if (operator != null) {
        switch (operator) {
          case "*":
            final = nextV * current;
            break;
          case "/":
            final = nextV / current;
            break;
          case "-":
            final = nextV - current;
            break;
          case "+":
            final = nextV + current;
            break;
          default:
            break;
        }
      }

      return ({
        currentValue: current,
        nextValue: nextV,
        operator: operator,
        displayResult: display,
        finalResult: final,
        getResult: show,
        isMultiOrDivide: isMultiOrDivide,
      })
    })
  }

  equalButton = () => {
    this.setState({
      getResult: true
    })
  }

  clearButton = () => {
    this.setState({
      currentValue: 0,
      nextValue: 0,
      operator: "",
      finalResult: "",
      displayResult: "",
      getResult: false,
      isMultiOrDivide: false,
    })
  }

  render() {

    const { currentValue, nextValue, finalResult, displayResult, operator, getResult } = this.state;
    console.log(currentValue, nextValue, finalResult, operator, displayResult);
    return (
      <Wrapper>
        <ResultValueBox>
          {!getResult ? currentValue : `${nextValue} ${operator} ${currentValue} = ${finalResult}`}
        </ResultValueBox>
        <Span2 onClick={this.clearButton} >C</Span2>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value="/">%</StyledBtn>

        <StyledBtn onClick={(e) => this.buttonHandler(e)} value="*">X</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={1}>1</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={2}>2</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={3}>3</StyledBtn>

        <StyledBtn onClick={(e) => this.buttonHandler(e)} value="-">-</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={4}>4</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={5}>5</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={6}>6</StyledBtn>

        <StyledBtn onClick={(e) => this.buttonHandler(e)} value="+">+</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={7}>7</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={8}>8</StyledBtn>
        <StyledBtn onClick={(e) => this.buttonHandler(e)} value={9}>9</StyledBtn>

        <EqualButton onClick={this.equalButton} >=</EqualButton>
        <ZeroButton onClick={(e) => this.buttonHandler(e)} value={0}>0</ZeroButton>
        
      </Wrapper>
    )
  }
}

//CSS classes
const StyledBtn = styled.button`
  height: 50px;
  background: white;
  color: palevioletred;
  border: 2px solid #009688;
  :hover{
    cursor: pointer;
  };
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 5;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  align-self: center;
  justify-self: center;
  padding: 10px;
  margin: 10px;
  border: 2px solid #009688;
  max-width: 400px;
  min-width: 250px;
  background: #009688;
  border-radius: 10px 3px 3px 3px;
  -webkit-box-shadow: 5px 5px 0px 0px rgba(1,57,59,1);
  -moz-box-shadow: 5px 5px 0px 0px rgba(1,57,59,1);
  box-shadow: 5px 5px 0px 0px rgba(1,57,59,1);
`
const ResultValueBox = styled.div`
  grid-column: span 4;
  border-radius: 5px;
  height: 50px;
  color: palevioletred; 
  border: 2px solid #009688;
  background: white;
  text-align: center;
  vertical-align: middle;
  line-height: 50px; 
  font-size: 25px;
`
const Span2 = StyledBtn.extend`
  grid-column: span 2;
`
const EqualButton = StyledBtn.extend`
  height: auto;
  grid-row: span 2;
`
const ZeroButton = StyledBtn.extend`
  grid-column: span 3;
`

export default Calculator;
