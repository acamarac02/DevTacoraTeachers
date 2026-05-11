---
title: "Buscador Integrado"
sidebar_position: 4
description: Guía paso a paso para añadir un buscador local a tus apuntes utilizando docusaurus-lunr-search.
---

Cuando nuestro temario empieza a crecer, añadir un buscador integrado se vuelve casi obligatorio. Ayudaremos a los estudiantes a localizar conceptos rápidamente para repasar, igual que hacen los desarrolladores en la documentación técnica profesional.

Aunque Docusaurus recomienda Algolia por defecto, su aprobación requiere un proceso manual que puede demorarse o ser rechazado. Por ello, vamos a utilizar **[docusaurus-lunr-search](https://github.com/praveenn77/docusaurus-lunr-search)**, una potente librería de la comunidad que genera un buscador local, offline y sin depender de servicios de terceros.

## Integración con Lunr Search

Lunr Search escanea automáticamente tus documentos al compilar el proyecto y construye un índice interno. Este índice permite realizar búsquedas y ofrecer sugerencias al instante directamente en el navegador del estudiante.

### Instalación de la librería

En primer lugar, necesitamos descargar e instalar el plugin en nuestro proyecto. Abre una terminal en la carpeta raíz de tu proyecto y ejecuta el siguiente comando:

```bash
npm i docusaurus-lunr-search --save
```

Este comando descargará la librería y la añadirá a tu archivo `package.json`.

### Configurar Docusaurus

Ahora debemos decirle a Docusaurus que active este nuevo plugin.

Abre el archivo `docusaurus.config.js` y busca el apartado `plugins` (si no existe, créalo en la raíz de `config`, a la altura de `presets`). Añade `'docusaurus-lunr-search'` a la lista:

```javascript title="docusaurus.config.js"
const config = {
  // ...
  // highlight-start
  plugins: ['docusaurus-lunr-search'],
  // highlight-end
  
  presets: [
    // ...
```

:::info[¿Ya tenías otros plugins?]
Si ya tienes la sección `plugins` con otros elementos, simplemente añade este nuevo al final separado por una coma. Por ejemplo: 
`plugins: [require('./plugins/tailwind-plugin.cjs'), 'docusaurus-lunr-search'],`
:::

### Prueba el buscador

Para que el buscador de Lunr genere su índice de palabras, necesitamos compilar el proyecto. A diferencia de otros cambios que vemos "en vivo" con el servidor de desarrollo, la primera vez es recomendable generar la versión final.

:::tip[¡Aviso! Reinicia tu servidor]
En la terminal donde estés previsualizando el proyecto, pulsa `Ctrl+C` para detenerlo antes de ejecutar los siguientes comandos.
:::

Compila el proyecto generando el índice de búsqueda:

```bash
npm run build
```

*Durante el proceso verás mensajes indicando `docusaurus-lunr-search:: Building search docs and lunr index file`.*

Arranca el servidor para previsualizar la compilación:

```bash
npm run serve
```

Si todo ha ido bien, verás que ha aparecido un botón de "Buscar" en la parte derecha del menú de navegación de tu web. 

A partir de ahora, tanto tú como los alumnos podréis hacer clic en ella, o usar el atajo universal de teclado `Ctrl + K` (o `Cmd + K` en Mac) para encontrar cualquier concepto de tu temario de forma instantánea.
