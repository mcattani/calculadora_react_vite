/*
En este componente definimos el teclado de la calculadora utilizando una cuadrícula de botones.
Row className="g-2" -> crea una fila con un gutter (espacio entre columnas) de 2 unidades.
Cada fila tiene 4 columnas (<Col>), cada una contiene un botón (<Boton />).
Los botones tienen diferentes etiquetas (label) y variantes de estilo (variant) según su función.
El prop onClick de cada botón se asigna a la función onButtonClick pasada desde el componente padre.
*/

import { Row, Col } from "react-bootstrap"
import Boton from "./Boton.jsx"

export default function Teclado({ onButtonClick }) {
    return (
        <>
            {/* Fila 1 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="AC" variant="danger" onClick={onButtonClick} /></Col>
                <Col><Boton label="DEL" variant="danger" onClick={onButtonClick} /></Col>
                <Col><Boton label="%" variant="info" onClick={onButtonClick} /></Col>
                <Col><Boton label="÷" variant="info" onClick={onButtonClick} /></Col>
            </Row>

            {/* Fila 2 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="7" onClick={onButtonClick} /></Col>
                <Col><Boton label="8" onClick={onButtonClick} /></Col>
                <Col><Boton label="9" onClick={onButtonClick} /></Col>
                <Col><Boton label="×" variant="info" onClick={onButtonClick} /></Col>
            </Row>

            {/* Fila 3 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="6" onClick={onButtonClick} /></Col>
                <Col><Boton label="5" onClick={onButtonClick} /></Col>
                <Col><Boton label="4" onClick={onButtonClick} /></Col>
                <Col><Boton label="-" variant="info" onClick={onButtonClick} /></Col>
            </Row>

            {/* Fila 4 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="1" onClick={onButtonClick} /></Col>
                <Col><Boton label="2" onClick={onButtonClick} /></Col>
                <Col><Boton label="3" onClick={onButtonClick} /></Col>
                <Col><Boton label="+" variant="info" onClick={onButtonClick} /></Col>
            </Row>

            {/* Fila 5 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="±" variant="info" onClick={onButtonClick} /></Col>
                <Col><Boton label="0" onClick={onButtonClick} /></Col>
                <Col><Boton label="." variant="info" onClick={onButtonClick} /></Col>
                <Col><Boton label="=" variant="warning" onClick={onButtonClick} /></Col>
            </Row>
        </>
    );
}


