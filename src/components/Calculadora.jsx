/*En este componente manejamos la lógica de la calculadora*/

import { Card, Container } from "react-bootstrap"
import Display from "./Display"
import Teclado from "./Teclado"
import { useState } from "react";
import { toast, Bounce } from 'react-toastify';

import { useEffect } from "react"; // Para capturar teclas presionadas

export default function Calculadora() {

    // Definimos los estados que utilizaremos
    const [valorActual, setValorActual] = useState("0"); // Lo que se muestra en el display
    const [valorPrevio, setValorPrevio] = useState(null); // El número guardado para la operación
    const [operacionActual, setOperacionActual] = useState(null); // La operación seleccionada
    const [error, setError] = useState(false); // Estado para manejar errores (dividir por cero)
    // Estados para manejar el doble = 
    const [ultimaOperacion, setUltimaOperacion] = useState(null);
    const [ultimoOperando, setUltimoOperando] = useState(null);

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

    // Función para resetear la calculadora: toma como parámetros el estado de error y el valor actual
    function resetCalc(error, value) {
        setValorActual(value);
        setValorPrevio(null);
        setOperacionActual(null);
        setError(error);
    }

    // Función principal que maneja todos los botones
    function onButtonClick(btn) {

        // Si hay un error o el valor actual es infinito, solo permitimos el botón AC y DEL
        if (error || valorActual === "∞") {
            if (btn === "AC") return resetCalc(false, "0");
            if (btn === "DEL") {
                resetCalc(false, "0");
                return;
            }

            toast.error('!Error! Presione AC o DEL para continuar', {
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
            resetCalc(false, "0");
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

        // Si es el porcentaje (%)
        if (btn === "%") {
            const numActual = Number(valorActual);
            // Si hay un valor previo y una operación seleccionada, transformamos el segundo operando en función de la operación
            if (valorPrevio !== null && operacionActual) {
                const numPrevio = Number(valorPrevio);

                // Para suma/resta: convertimos numActual a porcentaje de numPrevio
                if (operacionActual === "+" || operacionActual === "-") {
                    const porcentajeRelativo = numPrevio * (numActual / 100);
                    setValorActual(String(limpiarNumero(porcentajeRelativo)));
                    // No cambiamos operacionActual -> "=" termina la operación
                    return;
                }

                // Para multiplicación/división: convertimos numActual a su valor decimal
                if (operacionActual === "×" || operacionActual === "÷") {
                    const decimal = numActual / 100;
                    setValorActual(String(limpiarNumero(decimal)));
                    return;
                }
            }

            // Si no hay valorPrevio — el % actúa como dividir por 100
            const dividido = numActual / 100;
            setValorActual(String(limpiarNumero(dividido)));
            return;
        }

        // Si es una operación
        if (["+", "-", "×", "÷"].includes(btn)) {

            // Si ya hay una operación pendiente y valor actual está en 0 (ej. 2 + +)
            if (valorPrevio !== null && valorActual === "0" && operacionActual) {
                setOperacionActual(btn); // Cambiamos el operador
                turn;
            }

            setValorPrevio(valorActual);
            setOperacionActual(btn);
            setValorActual("0");
            return;
        }

        // Si es igual (=) realizamos la operación
        if (btn === "=") {

            // Si no hay valor previo pero sí última operación, repetimos la última operación con el último operando
            if (valorPrevio === null && !operacionActual && ultimaOperacion !== null) {
                
                const num1 = Number(valorActual);
                const num2 = Number(ultimoOperando);
                let resultado;

                switch (ultimaOperacion) {
                    case "+": resultado = num1 + num2; break;
                    case "-": resultado = num1 - num2; break;
                    case "×": resultado = num1 * num2; break;
                    case "÷":
                        if (num2 === 0) {
                            resetCalc(true, "∞");
                            return;
                        }
                        resultado = num1 / num2;
                        break;
                }

                // Mostramos el resultado
                setValorActual(String(limpiarNumero(resultado)));
                return;
            }

            // Si no hay operación actual o valor previo

            if (valorPrevio === null || !operacionActual) return;

            const num1 = Number(valorPrevio);
            const num2 = Number(valorActual);
            let resultado;

            switch (operacionActual) {
                case "+": resultado = num1 + num2; break;
                case "-": resultado = num1 - num2; break;
                case "×": resultado = num1 * num2; break;
                case "÷":
                    if (num2 === 0) {
                        resetCalc(true, "∞");
                        return;
                    }
                    resultado = num1 / num2;
                    break;
            }

            // Guardamos la última operación y operando para permitir el doble =
            setUltimaOperacion(operacionActual);
            setUltimoOperando(num2);

            // Mostramos el resultado y reseteamos los valores previos
            setValorActual(String(limpiarNumero(resultado)));
            setValorPrevio(null);
            setOperacionActual(null);
            return;
        }
    }

    // Capturamos las teclas presionadas
    useEffect(() => {
        function handleKeyDown(e) {
            let key = e.key;

            // Mapeo de teclas a botones de la calculadora
            const keyMap = {
                "Enter": "=",
                "Backspace": "DEL",
                "Delete": "AC",
                "*": "×",
                "/": "÷",
                "+": "+",
                "-": "-",
                ".": ".",
            };

            // Solo procesamos si es un número o una tecla mapeada
            if (!isNaN(key)) {
                onButtonClick(key);
                return;
            }

            // Si la tecla está en el mapeo, llamamos a onButtonClick con el valor correspondiente
            if (keyMap[key]) {
                onButtonClick(keyMap[key]);
                return;
            }
        }
        // Listener global para capturar teclas
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            // Lo quitamos al desmontar el componente (evita errores)
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [valorActual, valorPrevio, operacionActual, error]); // Dependencias para actualizar el efecto cuando cambian los estados

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