/*En este componente manejamos la lógica de la calculadora*/

import { Card, Container } from "react-bootstrap"
import Display from "./Display"
import Teclado from "./Teclado"
import { useState } from "react";
import { toast, Bounce } from 'react-toastify';

export default function Calculadora() {

    // Definimos los estados que utilizaremos
    const [valorActual, setValorActual] = useState("0"); // Lo que se muestra en el display
    const [valorPrevio, setValorPrevio] = useState(null); // El número guardado para la operación
    const [operacionActual, setOperacionActual] = useState(null); // La operación seleccionada
    const [error, setError] = useState(false); // Estado para manejar errores (dividir por cero)

    // Función para generar el smallValue del display
    function smallDisplay() {
        if (valorPrevio && operacionActual) {
            return `${valorPrevio} ${operacionActual}`;
        }
        return "";
    }

    // Función para limpiar decimales innecesarios
    function limpiarNumero(num) {
        // Si el número es entero, lo convertimos a string sin decimales
        if (Number.isInteger(num)) return String(num);
        // Si no, limitamos a 8 decimales
        return String(Number(num.toFixed(8)));
    }


    // Función principal que maneja todos los botones
    function onButtonClick(btn) {

        // Si hay un error o el valor actual es infinito, solo permitimos el botón AC
        if ((error || valorActual === "∞") && btn !== "AC") {
            toast.error('Error en operación! Presione AC para continuar', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce, 
            });
            return;
        }

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
            setError(false);
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
        if (btn === ".") return manejarDecimal();

        // Función para manejar el punto decimal
        function manejarDecimal() {
            // Si el valor actual es 0, iniciamos con "0."
            if (valorActual === "0") {
                setValorActual("0.");
                return;
            }
            // Si ya contiene un punto decimal, no hacemos nada
            if (valorActual.includes(".")) return;
            // Si no, añadimos el punto decimal
            setValorActual(valorActual + ".");
            return;
        }

        // Si es una operación
        if (["+", "-", "×", "÷", "%"].includes(btn)) {
            setValorPrevio(valorActual);
            setOperacionActual(btn);
            setValorActual("0");
            return;
        }

        // Si el valor es ∞, no permitimos más operaciones hasta limpiar

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
                        setValorActual("∞");
                        setValorPrevio(null);
                        setOperacionActual(null);
                        setError(true);
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                case "%":
                    // Calcula el porcentaje del primer número respecto al segundo
                    resultado = (num1 * num2) / 100;
                    break;
            }

            setValorActual(String(limpiarNumero(resultado)));
            setValorPrevio(null);
            setOperacionActual(null);
            return;
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="shadow-lg p-3 bg-body-tertiary" style={{ width: "350px" }}>
                <Display value={valorActual} smallValue={smallDisplay()} />
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