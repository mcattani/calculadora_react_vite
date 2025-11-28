// Componente Calculadora UI

import { Card, Container } from "react-bootstrap"
import Display from "./Display"
import Teclado from "./Teclado"

export default function Calculadora({ value, onButtonClick }) {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="shadow-lg p-3 bg-body-tertiary" style={{ width: "350px" }}>
                <Display value={value} />
                <Teclado onButtonClick={onButtonClick} />
            </Card>
        </Container>
    );
}

/*
className="d-flex justify-content-center align-items-center" -> centra el contenedor tanto vertical como horizontalmente usando Flexbox.
minHeight: "100vh" -> asegura que el contenedor ocupe al menos la altura completa de la ventana gráfica.
Card className="shadow-lg p-3 bg-body-tertiary" -> tarjeta con sombra grande, padding de 3 unidades y fondo terciario.
style={{ width: "350px" }} -> fija el ancho de la calculadora a 350 píxeles.
*/