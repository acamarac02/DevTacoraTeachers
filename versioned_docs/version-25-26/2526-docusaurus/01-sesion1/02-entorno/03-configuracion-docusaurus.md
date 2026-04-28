---
title: "Configuración de Docusaurus"
sidebar_position: 3
description: Guía para personalizar el archivo docusaurus.config.js y la página de inicio del sitio.
---

# Configuración del Sitio

Una vez que el proyecto está creado, el siguiente paso es darle identidad. Esto se hace principalmente en el archivo raíz **`docusaurus.config.js`** y editando la página de inicio o landing page.

## El "Cerebro": docusaurus.config.js

Este archivo controla todo el comportamiento global. Toda la configuración se realiza dentro de un objeto JavaScript config. Aquí tienes la explicación de cada sección de dicho objeto:

### Metadatos Generales
Al principio del archivo encontrarás los metadatos básicos. Es vital configurarlos bien para que los enlaces no fallen al publicar, aunque de esta parte nos preocuparemos más adelante:

```javascript
const config = {
  // Configuración básica
  title: 'Mi Curso de Informática', // Título de la web
  tagline: 'Dinosaurs are cool',    // Subtítulo de la web
  favicon: 'img/favicon.ico',       // Favicon de la web

  // Configuración de despliegue, nos preocuparemos de esto más adelante
  url: 'https://tu-usuario.github.io', // Tu URL de GitHub Pages
  baseUrl: '/nombre-del-repo/',        // ¡OJO! Debe coincidir con el nombre de tu repositorio
  organizationName: 'acamarac02',      // Tu usuario de GitHub
  projectName: 'DevTacoraTeachers',    // Nombre del repositorio

  // Configuración de idiomas, lo analizaremos más adelante
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // ....
};
```

### Los Presets: El Motor de Funcionalidades

Docusaurus funciona mediante plugins, pero para facilitar las cosas, utiliza **Presets**. Un preset es un conjunto de plugins y temas empaquetados. El más común es el `classic`, que incluye: **Docs**, **Blog** y el **Tema original**.

Para que la web funcione, es fundamental configurar este bloque:

```javascript
presets: [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: './sidebars.js',        // Archivo que define el orden de los apuntes
        //editUrl: 'https://github.com/...', // Si lo mantenemos activo, aparecerá un enlace de "Editar" en cada página que permitirá a los usuarios sugerir cambios directamente en GitHub. En nuestro caso, no nos interesa que los alumnos puedan modificar nuestros apuntes.
      },
      blog: {
        // No vamos a utilizar el blog en este curso por lo que no nos preocuparemos de su configuración.
        showReadingTime: true, // Muestra cuánto se tarda en leer un post
        ...
      },
      theme: {
        customCss: './src/css/custom.css', // ¡IMPORTANTE! Aquí es donde tocaremos los estilos globales de la web
      },
    }),
  ],
],
```

*   **docs**: Aquí controlas tus apuntes. Lo más importante es `sidebarPath`, que le dice a Docusaurus dónde mirar para saber cómo organizar el menú lateral.
*   **blog**: Configuración de la sección de noticias. Puedes activar o desactivar opciones como el tiempo de lectura, etc. En nuestro caso, no vamos a utilizar el blog.
*   **theme**: Apunta al archivo CSS global. Si quieres cambiar el color corporativo o la fuente, ese archivo `custom.css` será tu mejor amigo.

### Configuración Estética (themeConfig)

Si el archivo `docusaurus.config.js` es el cerebro, la sección `themeConfig` es la cara de tu web. Aquí es donde configuramos todo lo que el usuario ve y toca directamente.

```javascript
themeConfig: ({
  image: 'img/docusaurus-social-card.jpg', // Imagen que se ve al compartir el link en redes sociales
  colorMode: {
    respectPrefersColorScheme: true, // Se adapta automáticamente al modo claro/oscuro del ordenador del alumno
  },
  navbar: { // ¡IMPORTANTE! Aquí definimos el menú superior de nuestra web
    title: 'Mi Web Docente',
    logo: {
      alt: 'Logo de mi sitio',
      src: 'img/mi-logo.png', 
    },
    items: [
      { type: 'docSidebar', sidebarId: 'apuntesSidebar', position: 'left', label: 'Apuntes' }, // ¡OJO! Debe coincidir con el sidebarId de sidebars.js
      { to: '/blog', label: 'Noticias', position: 'left' },
      { href: 'https://github.com/...', label: 'GitHub', position: 'right' },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      { title: 'Secciones', items: [{ label: 'Apuntes', to: '/docs/intro' }] },
      { title: 'Contacto', items: [{ label: 'GitHub', href: 'https://github.com/...' }] },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Mi Curso. Construido con Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula, // El "look" de los bloques de código (claro/oscuro)
  },
}),
```

:::tip[¿Dónde guardo las imágenes?]
Todas las imágenes que referencies en la configuración (como el logo o la imagen para redes sociales) deben estar guardadas dentro de la carpeta **`static/img/`**. Docusaurus buscará automáticamente en `static` para servirlas.
:::

En este bloque destacan tres pilares:

1.  **Navbar (Barra de Navegación)**:
    *   **Logo**: Cámbialo por tu propia imagen guardada en `/static/img/`.
    *   **Items**: Son los botones superiores. Pueden ser secciones de documentos (`type: 'docSidebar'`), enlaces internos (`to: '/blog'`) o externos (`href: '...'`).
2.  **Footer (Pie de página)**: Organiza los enlaces y el texto de copyright que aparece al final de la web. Es el lugar ideal para poner redes sociales o enlaces de interés.
3.  **Prism**: Controla cómo se ve el código fuente que pongas en tus apuntes. Puedes elegir diferentes temas para que se vea bien tanto en modo claro como oscuro.

## La Puerta de Entrada: Landing Page

A diferencia de los apuntes, la página de inicio de Docusaurus no es un archivo Markdown, sino una página de **React** (JSX). Esto permite total libertad de diseño, pero requiere saber dónde tocar.

### Estructura por defecto
Docusaurus organiza la página principal de forma modular para que el código sea fácil de mantener. Normalmente la verás dividida en dos partes:

1.  **`src/pages/index.js`**: Es el archivo principal. Aquí se define la estructura general (el "esqueleto"): la cabecera (Hero) y el título.
2.  **`src/components/HomepageFeatures`**: Docusaurus delega la parte central de la web a componentes independientes. En la instalación básica, verás una cuadrícula de 3 columnas con imágenes y textos descriptivos.

### ¿Por qué se divide así?
Esta separación (modularización) es una buena práctica de programación. Permite que el archivo `index.js` no sea demasiado largo y que puedas modificar las "características" del curso en un archivo separado sin miedo a romper la estructura global de la página.

:::warning[React vs Markdown]
**Recuerda**: mientras que en los archivos `.md` escribes texto plano, en `index.js` estarás editando código. Ten cuidado con las etiquetas (como `<h1>` o `<div>`) y asegúrate de cerrar siempre todas las que abras.
:::

## Estilismo con Infima y CSS Personalizado

Docusaurus utiliza **Infima** como su framework de CSS subyacente. A diferencia de otros frameworks como Bootstrap o Tailwind, Infima está diseñado específicamente para sitios web centrados en el contenido (documentación, blogs, etc.) y se basa fuertemente en el uso de **variables de CSS** (también llamadas Design Tokens).

### ¿Qué es Infima?
Es un framework que proporciona un diseño moderno y limpio por defecto. Su gran ventaja es que permite cambiar la apariencia de toda la web simplemente modificando unos pocos valores en un archivo central.

### El archivo `src/css/custom.css`
Este es el lugar donde definiremos la identidad visual de nuestro curso. Si abres este archivo, verás algo parecido a esto:

```css
/* Variables globales para el modo claro */
:root {
  --ifm-color-primary: #2e8555;         /* Color principal (botones, enlaces) */
  --ifm-color-primary-dark: #29784c;
  --ifm-color-primary-darker: #277148;
  --ifm-color-primary-darkest: #205d3b;
  --ifm-color-primary-light: #33925d;
  --ifm-color-primary-lighter: #359962;
  --ifm-color-primary-lightest: #3cad6e;
  --ifm-code-font-size: 95%;           /* Tamaño de fuente del código */
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

/* Variables específicas para el modo oscuro */
[data-theme='dark'] {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}
```

#### ¿Cómo funciona?
1.  **`:root`**: Define los colores que se verán cuando la web esté en modo claro.
2.  **`[data-theme='dark']`**: Sobrescribe esas variables cuando el usuario activa el modo oscuro.
3.  **Variables `--ifm-color-primary`**: Infima utiliza estas variables para pintar automáticamente los botones, los menús laterales activos y los enlaces. Si cambias el color en `:root`, cambiará en toda la web de forma coherente.

:::tip[Generador de Colores]
Docusaurus ofrece una [herramienta online](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima) donde puedes elegir un color principal y te genera automáticamente todos los tonos (dark, darker, light, etc.) para que solo tengas que copiar y pegar en tu archivo `custom.css`. 

También puedes utilizar páginas como [Coolors](https://coolors.co/) para encontrar paletas o colores que te gusten.
:::


## Actividad: Personaliza tu página
Ahora que conoces el archivo `docusaurus.config.js`, ¡es hora de practicar!

1. Cambia el **título** y el **tagline** del sitio.
2. Personaliza la **landing page**, puedes modificar los textos y las imágenes que aparecen en ella.
3. Modifica el **footer**.
4. Cambiar los **colores** de tu web.

De momento no te preocupes por la barra de navegación, ya que la configuraremos más adelante.


