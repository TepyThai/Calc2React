import React from 'react';
import { render } from 'react-dom';
import Calculator from './Calculator';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Calculator name="CodeSandbox" />
    
  </div>
);

render(<App />, document.getElementById('root'));
