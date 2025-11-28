/*
Teclado
El teclado está formado por filas (Row) y columnas (Col) y cada una contiene un <Boton />
Organiza los botones en grilla
Pasar onButtonClick hacia cada Botón
*/

import { Row, Col } from "react-bootstrap"
import Boton from "./Boton.jsx"

export default function Teclado({ onButtonClick }) {
    return (
        <>
            {/* Fila 1 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="AC" variant="danger" onClick={onButtonClick} /></Col>
                <Col><Boton label="/" onClick={onButtonClick} /></Col>
                <Col><Boton label="*" onClick={onButtonClick} /></Col>
                <Col><Boton label="-" onClick={onButtonClick} /></Col>
            </Row>

            {/* Fila 2 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="7" onClick={onButtonClick} /></Col>
                <Col><Boton label="8" onClick={onButtonClick} /></Col>
                <Col><Boton label="9" onClick={onButtonClick} /></Col>
                <Col><Boton label="+" onClick={onButtonClick} /></Col>
            </Row>

            {/* Fila 3 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="4" onClick={onButtonClick} /></Col>
                <Col><Boton label="5" onClick={onButtonClick} /></Col>
                <Col><Boton label="6" onClick={onButtonClick} /></Col>
                <Col><Boton label="=" variant="warning" onClick={onButtonClick} /></Col>
            </Row>

            {/* Fila 4 */}
            <Row className="g-2 mb-2">
                <Col><Boton label="1" onClick={onButtonClick} /></Col>
                <Col><Boton label="2" onClick={onButtonClick} /></Col>
                <Col><Boton label="3" onClick={onButtonClick} /></Col>
                <Col><Boton label="=" variant="warning" onClick={onButtonClick} /></Col>
            </Row>

            {/* Fila 5 */}
            <Row className="g-2">
                <Col xs={6}><Boton label="0" onClick={onButtonClick} /></Col>
                <Col xs={3}><Boton label="." onClick={onButtonClick} /></Col>
                <Col xs={3}><Boton label="=" variant="warning" onClick={onButtonClick} /></Col>
            </Row>
        </>
    );
}

/*
Row className="g-2" -> crea una fila con un gutter (espacio entre columnas) de 2 unidades.
Cada fila tiene 4 columnas (<Col>), excepto la última donde hacemos:
xs={6} -> la columna del botón "0" ocupa la mitad del ancho (6 de 12 columnas).
xs={3} -> las columnas de "." y "=" ocupan un cuarto del ancho (3 de 12 columnas cada una).
*/