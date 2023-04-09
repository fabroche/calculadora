import './App.css'
import freeCodeCampLogo from './images/freecodecamp-logo.png';

import Botton from './components/Botton';
import Pantalla from './components/Pantalla';
import BottonClear from './components/BottonClear';

import { useState } from 'react';
import { evaluate, isBigNumber, isNumeric, or, random, randomInt, round } from 'mathjs';

const helloMsgs = [
  "Welcome 😁",
  "Nice to see you 😉",
  "Lets do Maths 😏",
];

const errormsg = "BAD OPERATION 😬";

const operadores = '+-/*';

function App() {
  // Hook para controlar el estado de la Pantalla
  const [input, setInput] = useState(helloMsgs[randomInt(0, helloMsgs.length)]);
  const [cantoperadoresInput, setCantOperadoresInput] = useState(0);
  // funcion para actualizar las entradas
  const agregarInput = val => {
    if (input.includes(errormsg) || input.includes(helloMsgs[0]) || input.includes(helloMsgs[1]) || input.includes(helloMsgs[2])) {
      setInput('')
    }
    else {
      if (operadores.includes(val)) {
        if (cantoperadoresInput < 1) {
          setCantOperadoresInput(cantoperadoresInput + 1)
          setInput(input + val)
        }
        else {
          setCantOperadoresInput(0)
          setInput('')
        }
      }
      else {
        setInput(input + val)
        setCantOperadoresInput(0)
      }
    }
    //input.includes(helloMsgs[0]) || input.includes(helloMsgs[1]) || input.includes(helloMsgs[2]) || input.includes(errormsg) ? setInput('') : setInput(input + val)
  };

  const calcularResultado = () => {
    setInput(isFinite(evaluate(input)) ? round(evaluate(input), 3) : errormsg);
  };



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="logo de free Code Camp" />
      </div>

      <div className='contenedor-calculadora'>

        <Pantalla input={input} />

        <div className='fila'>
          <Botton manejarClic={agregarInput}>1</Botton>
          <Botton manejarClic={agregarInput}>2</Botton>
          <Botton manejarClic={agregarInput}>3</Botton>
          <Botton manejarClic={agregarInput}>+</Botton>
        </div>
        <div className='fila'>
          <Botton manejarClic={agregarInput}>4</Botton>
          <Botton manejarClic={agregarInput}>5</Botton>
          <Botton manejarClic={agregarInput}>6</Botton>
          <Botton manejarClic={agregarInput}>-</Botton>
        </div>
        <div className='fila'>
          <Botton manejarClic={agregarInput}>7</Botton>
          <Botton manejarClic={agregarInput}>8</Botton>
          <Botton manejarClic={agregarInput}>9</Botton>
          <Botton manejarClic={agregarInput}>*</Botton>
        </div>
        <div className='fila'>
          <Botton manejarClic={calcularResultado}>=</Botton>
          <Botton manejarClic={agregarInput}>0</Botton>
          <Botton manejarClic={agregarInput}>.</Botton>
          <Botton manejarClic={agregarInput}>/</Botton>
        </div>
        <div className='fila'>
          <BottonClear manejarClear={() => setInput('')}>
            Clear
          </BottonClear>
        </div>
      </div>

    </div>
  )
}

export default App;
