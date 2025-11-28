import { useState } from 'react'
import { useEffect } from 'react'

// Importamos componentes necesarios
import Display from './components/Display.jsx'
import Boton from './components/Boton.jsx'
import Teclado from './components/Teclado.jsx'
import Calculadora from './components/Calculadora.jsx'
import BackgroundLogo from './components/BackgroundLogo.jsx'


function App() {

  useEffect(() => {
    // Establecer el tema oscuro de Bootstrap
    document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  const handleClick = (value) => {
    console.log("Click:", value);
  };


  return (
    <>
    <BackgroundLogo />
    <div style={{ position: "relative", zIndex: 2 }}>
        {/* Aquí va tu Header, Calculadora y Footer */}
        <Calculadora value="0" onButtonClick={handleClick} />
      </div>
    
    </>
    
  );
}

export default App
