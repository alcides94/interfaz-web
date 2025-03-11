import './App.css';
import {useRef} from "react";
import Iterador from "./components/iterador/iterador.js";
import Selector from "./components/selector/selector.js";
import Sumar from "./components/sumar/sumar.js";
import Imagen from './components/imagen/imagen.js';
import Imagenes from './components/imagenes/imagenes.js';


function App() {
  

  return (
    <> 
      <Iterador/>
      <Selector/>
      <Sumar/>
      <Imagen/>
      <Imagenes/>
    </>
    
  );
}

export default App;
