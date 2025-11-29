/*Componente para mostrar el valor actual de la calculadora
   Ahora admite un mini-display superior (smallValue) para mostrar
   el valor previo y el operador seleccionado.
*/

import { Card } from "react-bootstrap";

export default function Display({ value, smallValue }) {
    return (
        <Card className="mb-3">
            <Card.Body
                className="
          bg-dark 
          text-light 
          rounded 
          text-end 
          py-3
        "
            >
                {/* Mini display (operación en curso) */}
                {smallValue && (
                    <div
                        className="text-secondary small"
                        style={{ opacity: 0.7 }}
                    >
                        {smallValue}
                    </div>
                )}

                {/* Display principal */}
                <div className="fs-1">
                    {value}
                </div>
            </Card.Body>
        </Card>
    );
}

/*
smallValue -> texto más chico arriba (ej: "7 +")
text-secondary + opacity -> color tenue para distinguirlo del valor principal
fs-1 -> mantiene el tamaño grande del número principal
text-end -> ambas cosas alineadas a la derecha
py-3 -> padding vertical generoso
*/
