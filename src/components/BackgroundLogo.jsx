import styled from "styled-components";

const LogoBackground = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 45vw;
  height: 100vh;
  background-image: url("/images/imagen-fondo.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  opacity: 0.15; // suave para no molestar la vista 
  pointer-events: none; // para que no tape botones ni clics
  z-index: 1;
`;

export default function BackgroundLogo() {
  return <LogoBackground />;
}