/*
Representa una tecla individual
No calcula, solo envía label al hacer clic
*/

import { Button } from "react-bootstrap";

export default function Boton({ label, onClick, variant = "secondary" }) {
    return (
        <Button
            variant={variant}
            className="w-100 py-3 fs-4"
            onClick={() => onClick(label)}
        >
            {label}
        </Button>
    );
}

/*
w-100 -> el botón ocupa toda la columna.
py-3 -> padding vertical grande (botón tipo “tecla”).
fs-4 -> tamaño de fuente grande.
*/