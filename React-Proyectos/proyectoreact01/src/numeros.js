//import logo from './img/imagen1.jpg';
import './App.css';
import Iterador from "./iterador.js"
import {useRef, useState} from "react";


function App() {
  

    const cajaIterador=useRef();
    const [inicio,setInicio]=useState();
    const [selector,setSelector]=useState();
  
    const sumar1=(e)=>{
      e.target.innerHTML=Number(e.target.innerHTML)+1;
      
    }
  
    const iniciar=()=>{
        cajaIterador.current.innerHTML=0;
    }
  
    const iniciarnum=(e)=>{
      //console.log(e);
      cajaIterador.current.innerHTML=e.target.value;
      
    }
  
    const eleccion=(e)=>{
      setSelector(e.target.value);
    }
  
    return (
      <>
      <div ref={cajaIterador} className="iterador" onClick={sumar1}>
            1
      </div>
  
      <button onClick={iniciar}> Iniciar </button>
      
      </>
    )
}

export default App;
