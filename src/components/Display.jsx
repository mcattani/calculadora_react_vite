/*Componente para mostrar el valor actual de la calculadora
Su único trabajo es mostrar lo que recibe por props.
*/

import { Card } from "react-bootstrap";

export default function Display({ value }) {
    return (
        <Card className="mb-3">
            <Card.Body
                className="
          bg-dark 
          text-light 
          rounded 
          fs-1 
          text-end 
          py-3
        "
            >
                {value}
            </Card.Body>
        </Card>
    );
}

/*
bg-dark y text-light -> display tipo calculadora.
fs-1 → font-size extra grande.
text-end → alinea el número a la derecha
py-3 → padding vertical generoso.
*/