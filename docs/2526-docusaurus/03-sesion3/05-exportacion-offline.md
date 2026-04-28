---
title: "Exportación Offline a PDF"
sidebar_position: 6
description: "Generación automatizada de apuntes en formato PDF para los alumnos."
---

Tarde o temprano, ya sea el primer día de clase o en vísperas del examen, un alumno te hará la pregunta del millón: *"Profe, ¿tienes todos estos apuntes en PDF para poder imprimirlos o usarlos sin internet?"*. 

Aunque nuestra filosofía creando este ecosistema web (*Docs-as-Code*) es que el temario sea una experiencia interactiva (con vídeos, buscador y código fácil de copiar), hay situaciones donde generar un archivo físico tradicional es necesario.

Para lograrlo nos apoyaremos en complementos (*plugins*) creados por la comunidad, dado que el código puro de Docusaurus no incluye un botón de fabrica para "Exportar a PDF". 

:::info[El ecosistema de la Comunidad]
Igual que añadiremos el generador de PDF, Docusaurus cuenta con un enorme catálogo de herramientas gratuitas creadas por otros desarrolladores educativos de todo el mundo. Puedes explorar la lista completa de extensiones avaladas en su página oficial de [Soporte y Comunidad](https://docusaurus.io/community/support).
:::

## Instalar el generador de PDFs

El método más robusto suele ser utilizar herramientas que imitan el comportamiento de un navegador: el programa entra en tu web automáticamente, va abriendo cada tema del menú izquierdo de arriba a abajo y va "guardando página como PDF", fusionándolo todo en un solo libro final. 

Vamos a usar uno de los paquetes más funcionales y clásicos del entorno NodeJS. Abre la terminal en la carpeta principal de tu proyecto e instala la librería con este comando:

```bash
npm install docusaurus-plugin-to-pdf
```
*(Nota de actualización: A medida que Docusaurus se actualiza de versión, surgen nuevos forks de este paquete, pero el comportamiento y la instalación en todos ellos es prácticamente idéntica).*

## Inyectar la herramienta

Una vez descargado, como es habitual, debemos obligar a nuestra página a reconocerlo y utilizarlo. Abre tu archivo `docusaurus.config.js` y busca el apartado `plugins`. Si este bloque no existe aún en tu código (a veces viene vacío u oculto), créalo sencillamente como una lista limpia justo por encima de los `presets`:

```javascript title="docusaurus.config.js"
  // ... resto de tu configuración inicial ...
  
  plugins: [
    'docusaurus-plugin-to-pdf'
  ],

  // highlight-start
  presets: [
    [
      'classic',
  // highlight-end
      // ...
```

## Extraer el archivo PDF

El plugin no hace milagros al vuelo; necesita leer los archivos definitivos de la web. Por tanto, para evitar que la generación colapse, asegúrate de que tu servidor de prueba (`npm run start`) está cerrado.

El **flujo de trabajo** siempre será el siguiente:

1. **Compila la web al completo:** 
   Ejecuta en consola `npm run build` para que Docusaurus genere los archivos finales estáticos de tu curso.
2. **Dispara la extracción del PDF:**
   Inmediatamente después del paso anterior, ejecuta el comando que nos proporcionó la herramienta que instalamos arriba, que suele construirse así:
   ```bash
   npm run docusaurus export:pdf
   ```

### ¿Dónde encuentro el archivo?

Cuando la terminal finalice el proceso (advertimos que puede rondar más del minuto dependiendo de la cantidad de temas e imágenes de tu módulo), aparecerá una nueva carpeta en tu panel izquierdo llamada `pdf/` (o bien el archivo PDF directamente dentro de la carpeta central `build/`, según la versión del plugin). 

Ahí dentro aguardará tu temario unificado. Las páginas estarán fusionadas y ordenadas respetando a rajatabla la jerarquía de tu barra lateral, totalmente preparadas para subirse a la plataforma Moodle/Classroom del instituto, o enviarse para encuadernar.

:::info[Tip: La impresión instantánea del navegador]
Hay un detalle que salvará la vida al 90% de vuestros estudiantes: Si lo único que necesitan es imprimir **un solo tema** concreto de esos apuntes para repasar en el autobús, diles que pulsen **`Ctrl + P`** (o Archivo -> Imprimir) directamente desde su navegador web (Chrome, Edge, Firefox...). 

Docusaurus trae una configuración de estilo CSS "invisible" que se activa sola al imprimir: oculta instantáneamente los menús laterales, el buscador superior, el modo oscuro y los márgenes, arrojando como resultado folios A4 impecables sin necesidad de instalarles absolutamente nada.
:::
