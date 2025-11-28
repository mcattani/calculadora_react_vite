import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar 
      style={{ backgroundColor: "#222" }} // Fondo apenas más claro que el resto
      data-bs-theme="dark"
      className="py-3 shadow-sm" // Más alto + sombra ligera
    >
      <Container>
        <Navbar.Brand
          href="https://thenerdyapprentice.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center"
          style={{ 
            fontWeight: "600",
            transition: "opacity 0.2s ease-in-out"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <img
            alt="Logo"
            src="/images/imagen-fondo.webp"
            width="36"
            height="36"
            className="d-inline-block align-top me-2 rounded"
            style={{
              opacity: 0.9
            }}
          />
          The Nerdy Apprentice
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
