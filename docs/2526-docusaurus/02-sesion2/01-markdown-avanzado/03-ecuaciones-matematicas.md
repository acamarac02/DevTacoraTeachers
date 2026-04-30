---
title: "Ecuaciones con KaTeX"
sidebar_position: 3
description: Instrucciones para configurar e implementar fórmulas matemáticas complejas en Docusaurus utilizando el estándar KaTeX.
---

Si durante tu asignatura necesitas documentar modelos matemáticos, análisis de complejidad algorítmica (famosa notación Big-O) o cualquier tipo de demostración abstracta, Docusaurus no trae esta capacidad lista, pero soporta el renderizado nativo de alta calidad gracias a los motores **remark-math** y **rehype-katex**.

## Configuración del Proyecto

A diferencia de los bloques de código con Prism que vimos en las sesiones anteriores, KaTeX requiere que instalemos de forma explícita los plugins en el núcleo de un proyecto Docusaurus para que el compilador MDX los interprete.

Abriendo la terminal y asegurándote de estar en la raíz de tu proyecto local, instala las dos dependencias:

```bash
npm install remark-math rehype-katex
```

Una vez concluida la instalación, debes registrar los plugins en tu fichero de configuración y enlazar la hoja de estilos global de KaTeX. Dentro de tu archivo `docusaurus.config.ts`, asegúrate de añadir las propiedades `remarkPlugins` y `rehypePlugins` en tu preset, acompañados de los `stylesheets`.

```javascript title="docusaurus.config.ts"
// highlight-start
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// highlight-end

export default {
  // ... resto de tu configuración global
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // highlight-start
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // highlight-end
          // ... resto de tu consifuración
        },
      }
    ],
  ],
  // highlight-start
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC',
      crossorigin: 'anonymous',
    },
  ],
  // highlight-end
};
```

:::tip[Importante]
Como siempre que tocamos la configuración base, no olvides reiniciar tu servidor (`npm run start`).
:::

## Redacción de Ecuaciones

Una vez configurado y reiniciado el servidor, podrás empezar a insertar fórmulas combinando los símbolos tradicionales de *Latex* en tus apuntes como texto plano. Tienes dos formas de proyectarlas: integradas en el flujo del párrafo, o de forma independiente.

### Ecuación en línea (Inline)

Te resultará útil para definiciones breves o nomenclatura integrada dentro de un mismo texto o conclusión. Se declaran encerrando la ecuación entre símbolos de dólar simples `$`.

````md
El coste temporal de iterar una matriz bidimensional convencional es del orden $O(n^2)$.
````

**Resultado en el navegador del código anterior:**

El coste temporal de iterar una matriz bidimensional convencional es del orden $O(n^2)$.

### Ecuación en Bloque

Reservado para el desarrollo de grandes fórmulas, integrales, o flujos lógicos extensos en asignaturas como Bases de Datos que requieren focalizar el peso semántico. Se escriben utilizando dobles símbolos de dólar `$$` tanto para abrir como para cerrar el bloque, del mismo modo que plataformas como GitHub y Jupyter.

````md
$$
I = \int_{0}^{2\pi} \sin(x) dx
$$
````

**Resultado en el navegador del código anterior:**

$$
I = \int_{0}^{2\pi} \sin(x) dx
$$
