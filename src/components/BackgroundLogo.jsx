import styled, { keyframes } from "styled-components";

// Definimos una animación:
// - Empieza invisible (opacity: 0)
// - Desplazada un poco hacia la derecha (translateX)
// - Termina con la opacidad real y en su lugar final

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 0.15;   /* Opacidad final y suave */
    transform: translateX(0);
  }
`;

// Componente de fondo con styled-components
const LogoBackground = styled.div`
  position: fixed;      /* Se queda fijo (sin scroll) */
  right: 0;             /* Pegado al lado derecho */
  top: 0;
  width: 40vw;          /* Ocupa 40% del ancho de la pantalla */
  height: 100vh;        /* Toda la altura visible */
  
  /* Imagen del fondo */
  background-image: url("/images/imagen-fondo.webp");
  background-repeat: no-repeat;
  background-size: contain;       
  background-position: right center;

  opacity: 0.15;        /* Transparencia suave */
  pointer-events: none; /* No bloquea clics de la UI */
  z-index: 1;           /* Queda atrás de tu contenido */

  /* Aplicamos la animación definida arriba */
  animation: ${fadeIn} 1.3s ease-out forwards;

  /* Media query:
     En pantallas más chicas de 1024px, ocultamos el logo.
  */
  @media (max-width: 1024px) {
    display: none;
  }
`;

export default function BackgroundLogo() {
  return <LogoBackground />;
}
