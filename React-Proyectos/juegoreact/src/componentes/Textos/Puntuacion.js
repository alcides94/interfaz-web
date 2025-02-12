import React from 'react'

export default function Puntuacion(etiqueta,valor,id) {
  return (
    <p>{etiqueta}Puntuación: <span id={id}>{valor}</span></p>
  )
}
