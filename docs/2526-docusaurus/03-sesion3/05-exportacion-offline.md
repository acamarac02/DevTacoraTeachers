---
title: "Exportación Offline a PDF"
sidebar_position: 6
description: "Generación automatizada de apuntes en formato PDF para los alumnos."
---

Tarde o temprano, ya sea el primer día de clase o en vísperas del examen, un alumno te hará la pregunta del millón: *"Profe, ¿tienes todos estos apuntes en PDF para poder imprimirlos o usarlos sin internet?"*. 

Aunque nuestra filosofía creando este ecosistema web (*Docs-as-Code*) es que el temario sea una experiencia interactiva (con vídeos, buscador y código fácil de copiar), hay situaciones donde generar un archivo físico tradicional es necesario.

Para lograrlo nos apoyaremos en complementos (*plugins*) y simuladores de navegador creados por la comunidad, dado que el código puro de Docusaurus no incluye un botón de fábrica para "Exportar a PDF". 

:::info[El ecosistema de la Comunidad]
Igual que añadiremos el generador de PDF, Docusaurus cuenta con un enorme catálogo de herramientas gratuitas creadas por otros desarrolladores de todo el mundo. Puedes explorar la lista completa de extensiones avaladas en su página oficial de [Soporte y Comunidad](https://docusaurus.io/community/support).
:::

## Ejecutar el generador automático

El método más robusto para convertir tu curso en un libro es utilizar un "rastreador web". Básicamente, un mini programa oculto entra en tu página local, clica automáticamente en "Siguiente Tema" y va guardando capturas en PDF de cada apartado hasta fusionarlas en un documento maestro.

Vamos a aprovechar el paquete: **[`docs-to-pdf` de Jean Humann](https://github.com/jean-humann/docs-to-pdf)**. Su gran ventaja es que no necesita instalarse internamente como plugin en nuestro archivo `docusaurus.config.js`, sino que se ejecuta temporalmente en la terminal evitando romper configuraciones.

Sigue estos **dos pasos principales**:

1. **Asegúrate de que la web esté encendida:** 
   El rastreador robot necesita poder "leer" tu web en vivo. Mantén tu servidor arrancado con normalidad (`npm run start`) para que la web cargue correctamente (por ejemplo, en `http://localhost:3000`).

2. **Abre otra consola y dispara el PDF:**
   Una vez que sepas que la web está encendida, abre una **nueva pestaña** en tu terminal y escribe el siguiente comando `npx`. (Solo tienes que sustituir la URL larga por el link del apartado que quieras descargar, por ejemplo, la sesión 3 entera):

   ```bash
   npx docs-to-pdf docusaurus --initialDocURLs="http://localhost:3000/DevTacoraTeachers/docs/category/sesi%C3%B3n-3-despliegue-b%C3%BAsqueda-y-escalabilidad"
   ```

Puedes descargar el ejemplo generado en esta sesión desde el siguiente enlace: **[Descargar PDF de la Sesión 3](/descargas/sesion3.pdf)**.

### ¿Dónde encuentro el archivo?

Cuando el proceso finalice (pudiendo tardar algo de tiempo si el módulo de apuntes es pesado), el sistema creará un archivo físico en PDF en la propia raíz de tu base de directorios (cerca de tu `package.json`).

Estará compuesto por todas y cada una de tus secciones sin saltos visuales ni rupturas en los menús, ideal para ser distribuido a tus alumnos en Moodle.

:::tip[Tip extra: La impresión instantánea]
Hay un detalle que salvará la vida al 90% de vuestros estudiantes: Si lo único que necesitan es imprimir **un solo tema** concreto de esos apuntes para repasar en el autobús, infórmales de que pueden pulsar **`Ctrl + P`** (o Archivo -> Imprimir) directamente desde cualquier navegador web moderno (Chrome, Edge, Firefox...). 

Docusaurus porta de fábrica un código de diseño oculto "solo para impresión" que hace que al imprimir desaparezcan mágicamente los menús laterales o el buscador superior, generando un folio blanco puramente de notas y texto para el alumno.
:::
