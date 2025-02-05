//import logo from './img/imagen1.jpg';
import './App.css';
import Iterador from "./iterador.js"
import Sumar from "./suma.js"
import {useRef, useState} from "react";


function App() {
  

  const [selector,setSelector]=useState();

  const eleccion=(e)=>{
    setSelector(e.target.value);
  }

  return (
    <>

<Iterador/>
    <Iterador/>
    <Iterador/>
    <Sumar/>
    
    <p>---------OTRA COSA-----------</p>
    
    <br/>
    <select value={selector} onChange={eleccion}>
      <option value="cero">0</option>
      <option value="uno">1</option>
      <option value="dos">2</option>
      <option value="tres">3</option>
    </select>
    <p>La opcion seleccionada es {selector}</p>
    </>
  );
}

export default App;
