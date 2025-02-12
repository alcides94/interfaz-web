import React from 'react'
import Mensaje from "./Mensaje";
import Puntuacion from "./Puntuacion";

export default function index(mensaje, puntuacion, puntajeAlto) {
  return (
    <div className="score-section">
    <br/>
     <Mensaje mensaje={mensaje}/>
    <br/>
        <Puntuacion etiqeuta="Puntuacion" valor={puntuacion} id="score"/>
        <Puntuacion etiqeuta="Puntaje Alto" valor={puntajeAlto} id="highscore"/>
    
  </div>
  )
}
