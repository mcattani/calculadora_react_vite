// Componente SEO responsable de gestionar las metaetiquetas para SEO

import { Helmet } from "react-helmet";

export default function SEO({ 
    title = "Calculadora React",
    description = "Calculadora básica desarrollada con React y Vite.",
    keywords = "calculadora, react, vite, javascript, frontend",
    author = "The Nerdy Apprentice",
    url = "https://calculadora-react-tna.netlify.app/" 
}) {
    return (
        <Helmet>
            {/* Básicos */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {url && <meta property="og:url" content={url} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
