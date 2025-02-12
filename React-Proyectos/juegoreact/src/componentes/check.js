import React, { useState } from 'react'

export default function check(comprobarAqui) {

    const [num, setNum]=useState();

    const modificar=(e)=>{
        setNum(e.target.value);
    }

    const comparar=()=>{
        comparar(num);
    }

  return (
    <div className="guess-section">
        
        <input type="number" onChange={modificar} value={num} id="guess" placeholder="Número" min="1" max="20"/>
        <button onclick={comprobarAqui}>Check!</button>
    </div>
  )

}
