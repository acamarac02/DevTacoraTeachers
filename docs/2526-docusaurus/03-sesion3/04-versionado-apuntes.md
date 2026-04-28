---
title: "Versionado de Apuntes"
sidebar_position: 5
description: "Estrategia para retener el histórico de apuntes de diferentes cursos académicos."
---

Llega el mes de junio, se acaba el curso académico y toca pensar en el siguiente. Muchos profesores borran cosas de Moodle, esconden temas o sobreescriben los apuntes para empezar a preparar el material del año que entra. ¿El problema? Si un alumno repetidor necesita consultar el temario exactamente como se impartió en su curso, ya no puede.

Docusaurus tiene un sistema integrado de "versionado" (pensado originalmente para versiones de programas informáticos como v1.0, v2.0...) que nosotros podemos aprovechar perfectamente para guardar versiones por "Curso Académico" (ej: Curso 24/25).

Al versionar, Docusaurus **congela** todo el temario actual, guardándolo intacto y haciéndolo accesible mediante un menú especial. Al mismo tiempo, te deja vía libre en tu carpeta principal (`docs/`) para que empieces a alterar y rehacer apuntes para los alumnos de septiembre sin afectar al histórico.

## Cómo congelar tus apuntes actuales

Es algo que normalmente harás solo una vez al año, al finalizar las clases y cuando el material esté asentado.

Para crear la "fotografía" o copia estática del curso que acaba, abre la terminal en tu proyecto y ejecuta este sencillo comando, sustituyendo `24-25` por el nombre real de tu curso escolar:

```bash
npm run docusaurus docs:version 24-25
```

### ¿Qué hace exactamente este comando?

Cuando lo lanzas, el motor de Docusaurus hace todo el trabajo oscuro por ti:
1. Crea una carpeta nueva en tu ordenador llamada `versioned_docs/version-24-25/`.
2. Clona todo el contenido exacto que tenías hoy en tu carpeta `docs/` y se lo lleva a esa nueva ruta blindada.
3. El material original que tenías en `docs/` se queda donde está, pero a partir de ahora Docusaurus lo tratará como el *"Borrador del futuro"*. 

A partir de hoy, cualquier cambio en `docs/` solo lo verán los alumnos de la próxima promoción.

## Añade el botón temporal al menú

Para que los alumnos de años anteriores puedan saltar a su curso antiguo libremente, tenemos que decirle a nuestra web que dibuje un menú seleccionador de cursos.

Abre tu amado archivo de centro de mandos `docusaurus.config.js` y busca el bloque que venimos usando en estos tutoriales: `themeConfig > navbar > items`. Tienes que inyectar el componente dinámico `docsVersionDropdown`:

```javascript title="docusaurus.config.js"
        items: [
          // ... tus otros botones como el de idiomas ...
          {
            type: 'docsVersionDropdown',
            position: 'left', // Lo colocamos a la izquierda
          },
        ],
```

Con esto, nuestra interfaz web exhibirá una cajita donde los estudiantes podrán elegir en qué año académico matricular su visión de los apuntes.

## El ciclo de vida de tu temario

Para sacarle el máximo partido, mentalízate sobre cómo trabajar con ambas carpetas durante el año lectivo:

- **La carpeta `versioned_docs/`**: Trátala como un archivo muerto. ¡Ahí no se entra a trabajar día a día! Es un cajón histórico congelado que solo sirve de consulta.
- **Tu carpeta original `docs/`**: Sigue siendo tu lugar de diseño central. Aquí es donde reescribes capítulos, amplías resúmenes o borras cosas que al final eran irrelevantes, construyendo pasito a paso el contenido del curso venidero.

:::warning[Docentes con múltiples asignaturas]
El comando básico de versionado le saca una "fotografía" a la carpeta `docs/` **entera**. Si almacenas ahí dentro los apuntes de varias asignaturas distintas (ej: Bases de Datos y Programación) y lanzas el comando, versionarás todas simultáneamente de golpe en un mismo bloque.

Si impartes asignaturas que quieres mantener o versionar de un año a otro de forma **totalmente independiente**, te recomendamos investigar la técnica **"Multi-instance"** (Múltiples instancias) en la documentación oficial de Docusaurus. Esto te permite separar cada asignatura en su propia ruta, logrando que el selector de cursos sea distinto y exclusivo para cada módulo.
:::
