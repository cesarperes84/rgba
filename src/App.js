import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rgba2Hex from './utils/rgba2Hex';

import Range from './components/commons/Range';
import StyledApp from './StyledApp';

const initState = {
  a: '100',
  b: '171',
  g: '166',
  r: '28',
  hexaDecimal: '#1ca6ab',
};

const App = () => {
  const [state, setState] = useState(initState);

  const handleChange = (event) => {
    event.persist();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    const hexaDecimal = rgba2Hex({ r: state.r, g: state.g, b: state.b, a: state.a });
    setState((prevState) => ({
      ...prevState,
      hexaDecimal,
    }));
  }

  return (
    <StyledApp bgColor={`${state.hexaDecimal}`}>
      <div className="wrapper-app">
        <h1 className="row title text-center">{`${state.hexaDecimal}`}</h1>
        <div className="row">
          <Range className="col" onChange={handleChange} label={`R: ${state.r}`} name="r" value={state.r} min="0" max="255" />
          <Range className="col" onChange={handleChange} label={`G: ${state.g}`} name="g" value={state.g} min="0" max="255" />
          <Range className="col" onChange={handleChange} label={`B: ${state.b}`} name="b" value={state.b} min="0" max="255" />
          <Range className="col" onChange={handleChange} label={`A: ${state.a}`} name="a" value={state.a} min="0" max="100" />
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
