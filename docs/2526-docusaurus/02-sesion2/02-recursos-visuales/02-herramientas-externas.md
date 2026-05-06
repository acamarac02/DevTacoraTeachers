---
title: "Embeber Herramientas"
sidebar_position: 2
description: Aprende a incrustar recursos técnicos de terceros, como diseños de Figma, paneles de Whimsical o vídeos de YouTube directamente en los apuntes.
---

Aunque hemos insistido en que el modelo de mantenibilidad idóneo para apuntes técnicos es usar código puro (como *Mermaid* o *KaTeX*), existen multitud de ecosistemas especializados en el dibujo rápido y colaborativo en clase (como **Whimsical**, **Miro**, **Figma**) e incluso bibliotecas multimedia (como **YouTube**) cuyo valor pedagógico es irremplazable.

Afortunadamente, como Docusaurus compila nuestros `.mdx` utilizando **React**, disponemos de la capacidad de incrustar contenido multimedia rico usando las etiquetas nativas estándar sin configuración extra.

## La directriz IFrame

El elemento HTML nativo `<iframe>` habilita incrustar un panel web completamente autónomo en medio de tu contexto.

Para nosotros como docentes, prácticamente el total de los servicios cloud de diseño cuentan con una opción "Embed" o "Insertar" en su panel de compartición que te generará al momento el código base.

## Alternativas Visuales: Whimsical

**Whimsical** es una herramienta de lienzo infinito impulsada para la creación extremadamente ágil de esquemas lógicos. Es el ecosistema ideal si prefieres construir estructuras informáticas de manera visual (arrastrando los elementos con el ratón o *drag-and-drop*) en lugar de teclear código.

En tu flujo de preparación de clases, podrás usar de forma intercambiable **Mermaid** y **Whimsical**. Ambas herramientas te servirán exactamente para lo mismo: dibujar arquitecturas o ciclos de ejecución sin que los alumnos se pierdan. Queda a tu elección usar Mermaid si prefieres trabajar sin salir del fichero de texto, o Whimsical si te gusta dibujar a mano desde el navegador.

Como muestra, aquí tendrías un IFrame integrando el mismo diagrama de secuencia que vimos en el documento anterior, pero pintado en Whimsical:

````md
```html
<iframe 
  src="https://whimsical.com/embed/IdentificadorDeTuEscenario" 
  width="100%" 
  height="600" 
  style={{ border: "none", borderRadius: "10px" }}
  allowfullscreen>
</iframe>
```
````

**Resultado en el navegador del código anterior:**

<iframe 
  style={{ border: "none", borderRadius: "10px" }} 
  width="100%" 
  height="600" 
  src="https://whimsical.com/embed/Nq3gLqChpEka7owdv3B83o" 
  allowfullscreen>
</iframe>


:::tip[Ahorra tiempo con la IA]
Si usas ChatGPT, aprovecha que tiene un plugin oficial de Whimsical. Solo tienes que mencionarlo en tu petición (por ejemplo, escribiendo "@Whimsical" o pidiéndole directamente que use su herramienta) y pasarle tus apuntes con el código del que quieres que te genere el diagrama. La IA generará el diagrama por ti y te dará el IFrame listo para copiar y pegar en tu documento sin que tengas que mover ni un solo nodo a mano.
:::



:::warning[Sintaxis de Estilos JSX]
Habrás notado un detalle técnico vital en el atributo `style` de todos estos Iframes. Dado que Docusaurus pasa el documento a través del pre-procesador de React, los atributos de estilo tipo String estándar HTML (`style="border:none;"`) te lanzarán un error rojo de compilación enorme. **Debes utilizar la notación de objetos JSON de JSX obligatoriamente**: `style={{ border: "none" }}`.
:::

## Incorporar Videotutoriales de YouTube

En metodologías docentes como el *Flipped Classroom* (Aulas Invertidas), disponer del video explicativo compartiendo página con el enunciado y el código base del ejercicio genera un formato inmejorable.

YouTube ofrece su propio IFrame desde el botón de Compartir.

````md
```html
<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", marginBottom: "20px" }}>
  <iframe 
    src="https://www.youtube.com/embed/IdentificadorDelVideo" 
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "10px" }} 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>
```
````

**Resultado en el navegador del código anterior:**

<div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", marginBottom: "20px" }}>
  <iframe
    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "10px" }}
    src="https://www.youtube.com/embed/DbwKbsCWPSg?si=a2W8XfeOLLjd_3ns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::tip[Wrapper Contenedor 16:9]
El código que hemos propuesto arriba cuenta con un recubrimiento extra en forma de `<div>`. Este pequeño *hack* con `paddingBottom: 56.25%` se encarga matemáticamente de forzar la ratio 16:9 en el Iframe de YouTube para que sea plenamente **responsivo** independientemente de si el alumno lee el apunte desde una tablet, un móvil o un monitor.
:::
