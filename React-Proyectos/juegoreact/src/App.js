
import './App.css';
import BtnReiniciar from './componentes/btnReiniciar.js';
import Adivina from './componentes/adivina.js';
import Check from './componentes/check.js';
import Contenido from './componentes/Textos';

import { useState } from 'react';

function App() {

  function generarNumeroSecreto () {
    return Math.trunc(Math.random()*20)+1;
  }


  const [numSecreto,setNumSecreto]=useState(generarNumeroSecreto);
  const [mensaje,setMensaje]=useState("Empieza a adivinar ....");
  const [puntuacion,setPuntuacion]=useState(20);
  const [puntajeAlto,setPuntajeAlto]=useState(0);

  const reiniciar =()=>{
    setNumSecreto(generarNumeroSecreto);
    setMensaje("Empieza a adivinar ....");
    setPuntuacion=useState(20);
    setPuntajeAlto=useState(0);
  }

  const comparar=(num)=>{
    if(!num){
      setMensaje("escribe un numero");
    }else {
      if (Number(num)==numSecreto) {
        /* Ganado */
        setMensaje("Has Ganado");
        document.body.style.backgroundColor="green";
      }else {
        if (puntuacion>1) {
          if (Number(num)>numSecreto) {
            /* Ganado */
            setMensaje("Tu numero es alto");
          }else {
            setMensaje("Tu numero es bajo");
          }
          setPuntuacion(puntuacion-1);
        }else {
          setMensaje("Has perdido")
          document.body.style.backgroundColor="red";
        }
      }
    }

  }


  return (
    <div className="container">
      <BtnReiniciar reiniciar={reiniciar}/>
    <h1>¡Adivina mi número! entre 1 y 20</h1>{numSecreto}
      <Adivina/>
    <br/>
    
    <Check comparar={comparar}/>
    <Contenido mensaje={mensaje} puntuacion={puntuacion} puntajeAlto={puntajeAlto}/>
  </div>
  );
}

export default App;
