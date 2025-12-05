# Calculadora con React y Vite

[![Netlify Status](https://api.netlify.com/api/v1/badges/1fbbe8b1-8e30-4247-b53c-da8027c6e5b3/deploy-status)](https://app.netlify.com/projects/calculadora-react-tna/deploys)

Una calculadora funcional y con un diseño moderno, creada utilizando React y Vite. Este proyecto sirve como una demostración práctica de la construcción de interfaces de usuario interactivas con componentes reutilizables.

## 🚀 Demo

**[https://calculadora-react-tna.netlify.app/](https://calculadora-react-tna.netlify.app/)**

## ✨ Características

*   Operaciones aritméticas básicas (suma, resta, multiplicación, división).
*   Botón para resetear (C) y borrar el último caracter (DEL).
*   Cálculo de porcentajes.
*   Interfaz responsiva y moderna.
*   Notificaciones para operaciones no válidas.

## 🎨 Vista Previa

![Vista previa de la calculadora](https://i.ibb.co/j9nZJ7pw/captura1.png)

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando las siguientes tecnologías y librerías:

*   **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuario.
*   **[Vite](https://vitejs.dev/)**: Herramienta de frontend para un desarrollo más rápido y ágil.
*   **[Styled Components](https://styled-components.com/)**: Para estilizar componentes de React con CSS-in-JS.
*   **[Bootstrap](https://getbootstrap.com/)** y **[React-Bootstrap](https://react-bootstrap.github.io/)**: Para la estructura y componentes pre-diseñados.
*   **[React Icons](https://react-icons.github.io/react-icons/)**: Para incluir iconos SVG fácilmente.
*   **[React Toastify](https://fkhadra.github.io/react-toastify/introduction)**: Para mostrar notificaciones.
*   **[React Helmet](https://github.com/nfl/react-helmet)**: Para gestionar los metadatos del `head` del documento y mejorar el SEO.

## 📂 Estructura del Proyecto

```
/
├───public/
│   └───images/
└───src/
    ├───App.jsx
    ├───main.jsx
    ├───assets/
    ├───components/
    │   ├───BackgroundLogo.jsx
    │   ├───Boton.jsx
    │   ├───Calculadora.jsx
    │   ├───Display.jsx
    │   ├───SEO.jsx
    │   └───Teclado.jsx
    └───layout/
        ├───Footer.jsx
        └───Header.jsx
```

## ⚙️ Instalación y Uso Local

Para clonar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio**
    ```bash
    git clone https://github.com/tu-usuario/calculadora-react.git
    ```

2.  **Navega al directorio del proyecto**
    ```bash
    cd calculadora-react
    ```

3.  **Instala las dependencias**
    ```bash
    npm install
    ```

4.  **Inicia el servidor de desarrollo**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## ✒️ Autor

[The Nerdy Apprentice](https://thenerdyapprentice.blogspot.com/) 

Más información en: [https://thenerdyapprentice.blogspot.com/2025/12/calculadora-react-vite.html](https://thenerdyapprentice.blogspot.com/2025/12/calculadora-react-vite.html)

## 📄 Licencia

Este proyecto está bajo la Licencia **GNU General Public License v3.0**. Puedes ver el archivo [LICENSE](LICENSE) para más detalles.
