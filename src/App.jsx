import { useEffect } from 'react'

// Importamos componentes necesarios
import Header from './layout/Header.jsx'
import Footer from './components/Footer.jsx'
import Calculadora from './components/Calculadora.jsx'
import BackgroundLogo from './components/BackgroundLogo.jsx'
import SEO from './components/SEO.jsx'

// Importamos librerías necesarias
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  useEffect(() => {
    // Establecer el tema oscuro de Bootstrap
    document.body.setAttribute('data-bs-theme', 'dark');
  }, []);

  const handleClick = (value) => {
    //console.log("Click:", value);
  };

  return (
    <>
      <SEO/>
      <BackgroundLogo />

      {/* Contenedor vertical de toda la app */}
      <div
        className="d-flex flex-column min-vh-100 position-relative"
        style={{ zIndex: 2 }}
      >
        <Header />

        {/* Contenido principal (centra la calculadora) */}
        <main className="flex-grow-1 d-flex justify-content-center align-items-center">
          <Calculadora/>
        </main>

        <Footer />
      </div>

      <ToastContainer />
    </>
  );
}

export default App
