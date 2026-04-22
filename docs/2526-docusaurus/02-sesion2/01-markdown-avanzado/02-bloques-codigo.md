---
title: "Bloques de Código Avanzado"
sidebar_position: 2
description: Técnicas avanzadas en Docusaurus para mejorar la presentación pedagógica del código fuente; como títulos, resaltado de líneas y configuración del motor Prism.
---

Una parte fundamental para cualquier docente de informática es presentar fragmentos de código de manera clara y guiada. Docusaurus utiliza el motor de resaltado **Prism React Renderer** por debajo, lo que nos permite añadir contexto y enfocar la atención del alumno en líneas específicas de manera nativa.

## Añadir Títulos a los Bloques

Cuando expones el contenido de un archivo (por ejemplo, en desarrollo web o móvil), agregar el nombre original del fichero ayuda al alumno a mantener un mapa mental del proyecto. Para ello, añade el atributo `title` justo después del lenguaje especificado.

````md
```html title="src/index.html"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Documento Básico</title>
</head>
<body>
  <h1>Hola Mundo</h1>
</body>
</html>
```
````

**Resultado en el navegador del código anterior:**

```html title="src/index.html"
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Documento Básico</title>
</head>
<body>
  <h1>Hola Mundo</h1>
</body>
</html>
```

## Resaltado de Líneas

Si presentas una modificación de un algoritmo, corriges un error en un código dado, o quieres explicar algo muy puntual, resulta indispensable saber aislar las líneas críticas. Docusaurus permite hacerlo mediante comentarios especiales dentro del propio código, lo que evita tener que contar líneas manualmente.

### Resaltar la siguiente línea
Usa `// highlight-next-line` para marcar la línea inmediatamente inferior.

````md
```javascript title="src/utils.js"
function calcularTotal(precio, impuesto) {
  // highlight-next-line
  const total = precio + impuesto;
  return total;
}
```
````

**Resultado en el navegador del código anterior:**

```javascript title="src/utils.js"
function calcularTotal(precio, impuesto) {
  // highlight-next-line
  const total = precio + impuesto;
  return total;
}
```

### Resaltar un bloque de líneas
Usa `// highlight-start` y `// highlight-end` para delimitar un rango de varias líneas.

````md
```javascript title="src/utils.js"
function calcularTotal(precio, impuesto) {
  const total = precio + impuesto;
  // highlight-start
  if (total < 0) {
    return 0;
  }
  // highlight-end
  return total;
}
```
````

**Resultado en el navegador del código anterior:**

```javascript title="src/utils.js"
function calcularTotal(precio, impuesto) {
  const total = precio + impuesto;
  // highlight-start
  if (total < 0) {
    return 0;
  }
  // highlight-end
  return total;
}
```


## Ampliar Lenguajes en Prism

De forma predeterminada, Docusaurus incluye un conjunto de lenguajes comunes (JavaScript, HTML, CSS, TS, Bash), pero en los ciclos formativos impartiremos habitualmente otras tecnologías, como **Java**, **PHP**, **Kotlin** o **C***. Si detectas que tus bloques de código no se colorean adecuadamente, debes añadir el lenguaje adicional en la configuración del sitio.

Edita el fichero base `docusaurus.config.ts` o `docusaurus.config.js` y busca el objeto `prism`. Localiza el array `additionalLanguages` (o créalo si no existiera) e incluye internamente tus prioridades:

````md
```javascript title="docusaurus.config.ts" {6}
themeConfig: {
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    // Añadimos soporte para los lenguajes impartidos en el CPR
    additionalLanguages: ['java', 'php', 'csharp', 'kotlin'],
  },
}
```
````

**Resultado en el navegador del código anterior:**

```javascript title="docusaurus.config.ts" {6}
themeConfig: {
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    // Añadimos soporte para los lenguajes impartidos en el CPR
    additionalLanguages: ['java', 'php', 'csharp', 'kotlin'],
  },
}
```

:::tip[Importante]
Al modificar el archivo principal de configuración (`docusaurus.config.ts`), debes cerrar forzosamente tu servidor de pruebas en la terminal y volver a ejecutar `npm run start` para que Docusaurus regenere la caché con los nuevos lenguajes de programación incluidos.
:::
