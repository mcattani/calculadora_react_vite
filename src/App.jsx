import { useState } from 'react'
import { useEffect } from 'react'

// Importamos componentes necesarios
import Display from './components/Display.jsx'
import Boton from './components/Boton.jsx'
import Teclado from './components/Teclado.jsx'
import Calculadora from './components/Calculadora.jsx'

function App() {

  useEffect(() => {
    // Establecer el tema oscuro de Bootstrap
    document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  const handleClick = (value) => {
    console.log("Click:", value);
  };


  return (
    <Calculadora value="0" onButtonClick={handleClick} />
  );
}

export default App
