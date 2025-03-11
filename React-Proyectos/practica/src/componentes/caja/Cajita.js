import '../../App.css';
import React from 'react'

export default function Cajita({nombre, cita}) {


  return (
    <>
      <div className='cajita'>
        
        
        <h1>{nombre}</h1>
        <button onClick={cita} >Seleccionar</button>

      </div>
    
    
    </>
  )
}
