
import Titulo from './componentes/Titulo';
import Caja from './componentes/caja/Index';

import { useState } from 'react';
import './App.css';

const famosos = [
  { nombre: "Pablo", apellido: "Alboran", color: "red", precio:100 },
  { nombre: "Aitana", apellido: "", color: "purple", precio:120 },
  { nombre: "Abraham", apellido: "Mateo", color: "blue", precio:140 },
  { nombre: "Ana", apellido: "Mena", color: "violet", precio:150 },
  { nombre: "Manuel", apellido: "Carrasco", color: "green", precio:125 },
  { nombre: "Rosalia", apellido: "", color: "orange", precio:180 }
  
];
console.log(famosos[0].value);

function App() {


   const [famoso1, setNombre1] = useState(famosos[0]);
   const [famoso2, setNombre2] = useState(famosos[1]);
   const [famoso3, setNombre3] = useState(famosos[2]);
   const [famoso4, setNombre4] = useState(famosos[3]);
   const [famoso5, setNombre5] = useState(famosos[4]);
   const [famoso6, setNombre6] = useState(famosos[5]);

   const [title, setTitle] = useState("nadie");

  //console.log(famoso1);
  
  const cita = () =>{
   
    setTitle("NOMBRE");
    
    
  }


  return (
    <> 
    <Titulo title={title}/>
    
    <Caja famoso1={famoso1} famoso2={famoso2} famoso3={famoso3} famoso4={famoso4} famoso5={famoso5}  famoso6={famoso6} cita={cita}/>

    
  </>
  );
}

export default App;
