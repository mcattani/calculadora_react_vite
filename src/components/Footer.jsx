import { Container } from "react-bootstrap";
import { FaBlogger } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className="bg-dark text-white text-center py-3 mt-5">
            <Container>
                <hr />
                <p className="mb-0">
                    2025 🄯 - {" "}
                    <a
                        href="https://thenerdyapprentice.blogspot.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                        style={{ textDecoration: "none" }}
                    >                       
                        The Nerdy Apprentice
                    </a>{" "}<FaBlogger
                            size={18}
                            style={{
                                marginRight: "6px",
                                verticalAlign: "middle",
                            }}
                        />
                    - Todos los errores reservados.
                </p>
            </Container>
        </footer>
    );
}