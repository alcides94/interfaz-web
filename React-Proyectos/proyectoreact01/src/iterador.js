import './iterador.css';
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
    <br/>
    Iniciar el tireador con: <input value={inicio} type='number' onChange={iniciarnum} />
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
