import './App.css';
import Boton from './componentes/Boton';
//import Contador from './componentes/Contador';
import { useState } from 'react';
import phrases from './Data/phrases.json'
import Mensaje from './componentes/Mensaje'

function App() {
  const fondos = ['url(/fondo1.png)','url(/fondo2.png)','url(/fondo3.png)','url(/fondo4.png)']

  const [cambiaIndice, setCambiaIndice] = useState(0)
  const [cambiaImagen, setCambiaImagen] = useState(0)
  

  const aleatorio = ()=>{
    setCambiaIndice(Math.floor(Math.random()*phrases.length))
    setCambiaImagen(Math.floor(Math.random()*fondos.length))
  }
  
  return (
    <div className="App" style={{backgroundImage: fondos[cambiaImagen]}} >
      <div className='contenedor-principal'>
        <Mensaje dataFrase={phrases[cambiaIndice].phrase} />
        <Boton funcionParaCambiarElindice = {aleatorio} />
      </div> 
    </div>
  );
}

export default App;
