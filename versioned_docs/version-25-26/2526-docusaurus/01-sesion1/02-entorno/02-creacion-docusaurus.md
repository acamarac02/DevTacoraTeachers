---
title: "Creación proyecto Docusaurus"
sidebar_position: 2
description: Conceptos básicos sobre la estructura de archivos, comandos de ejecución y configuración inicial del sitio.
---

# El Proyecto Docusaurus

Docusaurus es un generador de sitios estáticos (SSG) basado en React. Esto significa que toma tus archivos Markdown y los convierte en una aplicación web ultrarrápida, optimizada para buscadores y con un diseño profesional.

## Requisitos Técnicos

Antes de empezar, asegúrate de tener instalado:
*   **[Node.js](https://nodejs.org/en/download/)**: Versión 18 o superior (recomendado v20+). Puedes comprobarlo en una terminal con `node -v`.
    *   Nota: *Al instalar Node.js, se recomienda marcar todas las casillas relacionadas con la instalación de dependencias y herramientas adicionales.*
*   **Gestor de paquetes**: `npm` (viene con Node).

## Inicialización del proyecto (Scaffolding)

Para crear un nuevo proyecto desde cero, utilizamos la herramienta de "andamio" (scaffold):

```bash
npx create-docusaurus@latest mi-web classic
```

Donde:

*   `mi-web`: El nombre de la carpeta de tu proyecto.
*   `classic`: El tema base (incluye docs, blog y estilos modernos).

Al ejecutar el comando, la terminal te hará unas preguntas rápidas.  Las opciones recomendadas son:

1.  **Template:** Selecciona `classic`.
2.  **Javascript or TypeScript:** Selecciona `JavaScript` (es más sencillo para empezar, aunque Docusaurus soporta ambos).
3.  **Install dependencies:** Escribe `Yes` (esto descargará todo lo necesario automáticamente).

## Estructura del proyecto

Docusaurus genera una estructura predefinida que se ve así:

```text
mi-website/
├── blog/
│   ├── 2024-05-28-hola.md
│   └── ...
├── docs/
│   ├── bienvenida.md
│   └── ...
├── src/
│   ├── css/
│   │   └── custom.css
│   └── pages/
│       └── index.js
├── static/
│   └── img/
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── README.md
```

Entender qué hace cada carpeta es fundamental para no perderse.

### Carpetas Principales
*   **`/docs`**: Tu zona de trabajo principal. Contiene los archivos Markdown para la documentación. Los temas se pueden organizar en subcarpetas.
*   **`/blog`**: Contiene los archivos Markdown para el blog. Si no vas a usar blog, esta carpeta se puede borrar. Podría ser útil para noticias del curso, por ejemplo.
*   **`/src`**: Archivos que no son documentación, como páginas personalizadas o componentes React.
    *   **`/src/pages`**: Cualquier archivo aquí se convierte en una página (ej: la página principal `index.js`).
    *   **`/src/css`**: Contiene `custom.css` para los estilos globales.
*   **`/static`**: Directorio para archivos estáticos. Todo lo que pongas aquí (imágenes, PDFs, fuentes) se copiará tal cual a la raíz de la web final. Es ideal para recursos globales (logos, PDFs descargables) que quieras que tengan una URL fija y sencilla.
*   **`/build`**: (Solo aparece tras ejecutar el comando de construcción). Contiene la web ya generada lista para subir al servidor.
    *   *¿Por qué lo necesitamos?*: Tu navegador no puede leer archivos Markdown directamente. El proceso de "build" toma todos tus archivos de configuración, estilos y textos, y los transforma (compila) en archivos HTML, CSS y JavaScript estándar que cualquier servidor web puede entender. Esta carpeta es la que finalmente "vuela" a internet.

### Archivos de Configuración
*   **`docusaurus.config.js`**: El archivo más importante. Contiene la configuración global: título, logo, URL, barra de navegación y pie de página.
*   **`sidebars.js`**: Aquí especificas el orden y la jerarquía de los documentos en el menú lateral.
*   **`package.json`**: Lista las dependencias (librerías) y los comandos que puedes ejecutar (scripts).
*   **`.gitignore`**: Indica a Git qué archivos debe ignorar (como `node_modules` o la carpeta `build`).
*   **`README.md`**: Instrucciones básicas del proyecto.

## Ejecutar el servidor en local

Para ver tus apuntes mientras los escribes, usamos el comando:

```bash
npm run start
```

Este comando levanta un servidor en tu ordenador (normalmente en `http://localhost:3000`). Su gran ventaja es el **Hot Reloading**: en cuanto guardas un archivo `.md`, la web se actualiza sola sin que tengas que refrescar el navegador.

:::tip[Detener el servidor]
Para dejar de ejecutar el servidor y volver a escribir comandos en la terminal, pulsa la combinación de teclas **Ctrl + C** (o **Command + C** en Mac).
:::

## Compilar el proyecto

Cuando tus apuntes están listos para ser publicados, usamos:

```bash
npm run build
```

**¿En qué se diferencia de `npm start`?** Aunque parezca que hacen lo mismo, hay una diferencia clave:
*   `npm start`: Ejecuta la web "en memoria" para que sea rápido editar. No genera archivos permanentes.
*   `npm build`: Lee todo el proyecto y genera de verdad la carpeta `/build` con archivos HTML/CSS finales. Es el comando necesario antes de subir la web a internet.

