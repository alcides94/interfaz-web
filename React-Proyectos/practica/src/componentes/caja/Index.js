import  Cajita  from "./Cajita";
import React from 'react'

export default function Index({famoso1, famoso2, famoso3, famoso4, famoso5, famoso6, cita}) {
  return (
    <>

    <Cajita nombre={famoso1.nombre} cita={cita}/>
    <Cajita nombre={famoso2.nombre} cita={cita}/>
    <Cajita nombre={famoso3.nombre} cita={cita}/>
    <Cajita nombre={famoso4.nombre} cita={cita}/>
    <Cajita nombre={famoso5.nombre} cita={cita}/>
    <Cajita nombre={famoso6.nombre} cita={cita}/>
    
    </>
  )
}
