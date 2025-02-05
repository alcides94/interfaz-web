//import logo from './img/imagen1.jpg';
import './App.css';
import Iterador from "./iterador.js"
import {useRef, useState} from "react";


function App() {
  

  const [num1,setNum1]=useState();
  const [num2,setNum2]=useState();
  const [res,setRes]=useState();

  const modificar1=(e)=>{
    setNum1(e.target.value);
  }
  const modificar2=(e)=>{
    setNum2(e.target.value);
  }
  const sumar=(e)=>{
    setRes(Number(num1)+Number(num2));
  }

  return (
    <>

    <br/>
    <input type="number" value={num1} onChange={modificar1}/>
    +
    <input type="number" value={num2} onChange={modificar2}/>
    =
    <input type="number" value={res} />
    <br/>
    
    <button onClick={sumar}>Sumar</button>
    
    </>
  );
}

export default App;
