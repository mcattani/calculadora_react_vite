/*En este componente manejamos la lógica de la calculadora*/

import { Card, Container } from "react-bootstrap"
import Display from "./Display"
import Teclado from "./Teclado"
import { useState } from "react";

export default function Calculadora() {

    // Definimos los estados que utilizaremos
    const [valorActual, setValorActual] = useState("0"); // Lo que se muestra en el display
    const [valorPrevio, setValorPrevio] = useState(null); // El número guardado para la operación
    const [operacionActual, setOperacionActual] = useState(null); // La operación seleccionada

    // Función principal que maneja todos los botones
    function onButtonClick(btn) {
        // Si es un número
        if (!isNaN(btn)) {
            if (valorActual === "0") {
                setValorActual(btn);
            } else {
                setValorActual(valorActual + btn);
            }
            return;
        }

        // Si es AC (limpiar)
        if (btn === "AC") {
            setValorActual("0");
            setValorPrevio(null);
            setOperacionActual(null);
            return;
        }

        // Si es DEL (borrar último dígito o devolver a 0 si hay un solo dígito)
        if (btn === "DEL") {
            if (valorActual.length === 1) {
                setValorActual("0");
            } else {
                setValorActual(valorActual.slice(0, -1));
            }
            return;
        }

        // Si es el cambio de signo (±)
        if (btn === "±") {
            if (valorActual !== "0") {
                if (valorActual.startsWith("-")) {
                    setValorActual(valorActual.slice(1));
                } else {
                    setValorActual("-" + valorActual);
                }
            }
            return;
        }

        // Si es el punto decimal (.)
        if (btn === ".") {
            if (!valorActual.includes(".")) {
                setValorActual(valorActual + ".");
            }
            return;
        }

        // Si es una operación
        if (["+", "-", "×", "÷", "%"].includes(btn)) {
            setValorPrevio(valorActual);
            setOperacionActual(btn);
            setValorActual("0");
            return;
        }

        // Si es igual (=) realizamos la operación
        if (btn === "=") {
            if (valorPrevio === null || !operacionActual) return;

            const num1 = Number(valorPrevio);
            const num2 = Number(valorActual);
            let resultado;

            switch (operacionActual) {
                case "+":
                    resultado = num1 + num2;
                    break;
                case "-":
                    resultado = num1 - num2;
                    break;
                case "×":
                    resultado = num1 * num2;
                    break;
                case "÷":
                    if (num2 === 0) {
                        setValorActual("Error");
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                case "%":
                    // Calcula el porcentaje del primer número respecto al segundo
                    resultado = (num1 * num2) / 100;    
                    break;
            }

            setValorActual(String(resultado));
            setValorPrevio(null);
            setOperacionActual(null);
            return;
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="shadow-lg p-3 bg-body-tertiary" style={{ width: "350px" }}>
                <Display value={valorActual} />
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