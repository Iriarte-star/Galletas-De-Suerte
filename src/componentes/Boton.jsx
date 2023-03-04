import React from "react";
import '../hojas-de-estilo/Boton.css';


const Boton = ({funcionParaCambiarElindice}) => {
  return (
    <button
    //className= {}
    onClick={funcionParaCambiarElindice}>
     Abrir
    </button>
  )
  
};

export default Boton;