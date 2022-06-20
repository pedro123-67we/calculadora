import { useState } from 'react';
import './App.css';


function App() {
  const [result, setResult] = useState("");

  const NumClick = (e) =>{
    setResult(result.concat(e.target.name));
  }

  const Resultado = ()=>{
    try{
      setResult(eval(result).toString());
    } catch (err){
      setResult("Error");
    }
  }

  const borrar =() => {
    setResult("");
  }

  return (
< div className="App">
  <p class="titulo">Calculadora con React</p>

    <div className="container">
      <form>
        <input class="pantalla" type="text" value={result} />
      </form>

      <div className="teclado">
        <button class="operador" name='/' onClick={NumClick}>/</button>
        <button name='9' onClick={NumClick}>9</button>
        <button name='8' onClick={NumClick}>8</button>
        <button name='7' onClick={NumClick}>7</button>
        <button class="operador"  name='*' onClick={NumClick}>X</button>
        <button name='6' onClick={NumClick}>6</button>
        <button name='5' onClick={NumClick}>5</button>
        <button name='4' onClick={NumClick}>4</button>
        <button class="operador"  name='-' onClick={NumClick}>-</button>
        <button name='3' onClick={NumClick}>3</button>
        <button name='2' onClick={NumClick}>2</button>
        <button name='1' onClick={NumClick}>1</button>
        <button class="operador"  name='+' onClick={NumClick}>+</button>
        <button name='0' onClick={NumClick}>0</button>
        <button name='.' onClick={NumClick}>.</button>
        <button class="operador"  onClick={Resultado} id="igual">=</button>
        <button class="operador"  onClick={borrar} id="borrar" >Borrar</button>
      </div>
    </div>
    </div>
);
  
}

export default App;
