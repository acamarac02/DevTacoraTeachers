---
title: "Versionado de Apuntes"
sidebar_position: 5
description: "Estrategia para retener el histórico de apuntes de diferentes cursos académicos."
---

Llega el mes de junio, se acaba el curso académico y toca pensar en el siguiente. Muchos profesores borran cosas de Moodle, esconden temas o sobreescriben los apuntes para empezar a preparar el material del año que entra. ¿El problema? Si un alumno repetidor necesita consultar el temario exactamente como se impartió en su curso, ya no puede.

Para solucionar este salto generacional de temarios, proponemos dos grandes estrategias posibles usando Docusaurus: el método puramente artesanal por carpetas, o el método automatizado nativo del sistema.

## Estrategia 1: Versionado Manual por Carpetas

Esta es la táctica más sencilla y natural si manejamos varias asignaturas a la vez y nos gusta dosificar la información a ritmo de clase.

Consiste en usar el nombre de nuestras carpetas principales para mantener cada año académico visualmente separado, ocultando carpetas pasadas apoyándonos en el gestor de ficheros. Por ejemplo, supongamos que impartías PMDM en la carpeta `2526-pmdm/`. Cuando llegue septiembre del próximo curso harás lo siguiente:

1. **Ocultar lo viejo:** Modificas el nombre de tu vieja carpeta `2526-pmdm/` para que Docusaurus la ignore, simplemente añadiéndole una barra baja delante: `_2526-pmdm/`. Así desaparece de la vista pública de los nuevos alumnos (pero ojo, **¡con este método los repetidores pierden su histórico!**).
2. **Crear lo nuevo:** Te creas una carpeta vacía llamada `2627-pmdm/`.
3. **Migración progresiva:** Según vayan pasando las semanas y vayas impartiendo los temas en clase, abres tu carpeta antigua oculta (`_2526-pmdm/`) y vas copiando poco a poco los archivos hacia tu nueva versión visible `2627-pmdm/`, aprovechando para reescribirlos o mejorarlos para la nueva promoción antes de que los vean.

Esta forma de trabajar manual te da un control asombroso y evita de raíz que los alumnos de primero vean de golpe los temas avanzados que vas a modificar más adelante en el trimestre.

*Ejemplo visual de cómo se vería tu estructura interna:*
```text
raíz-del-proyecto/
 └── docs/ 
     ├── _2526-pmdm/          <-- (Carpeta oculta del histórico pasado. Docusaurus la ignora)
     │   └── apuntes viejos... 
     │
     └── 2627-pmdm/           <-- (Nueva carpeta principal 100% visible para los alumnos actuales)
         └── 01-introduccion.md 
```

:::warning[¡Acuérdate del menú superior!]
Si usas esta técnica y te creas una nueva carpeta maestro `2627-pmdm/`, los menús superiores de tu página web seguirán rotos intentando apuntar a la vieja. 

Tienes que abrir tu `docusaurus.config.js` y editar el botón de la asignatura en `themeConfig > navbar > items` para que su enlace o `to` redirija correctamente hacia `/docs/2627-pmdm/...`.
:::

## Estrategia 2: Versionado Automático Global

Docusaurus tiene un sistema nativo integrado de "versionado" (pensado originalmente para ir guardando versiones de programas informáticos como v1.0, v2.0...) que nosotros podemos aprovechar perfectamente para guardar nuestro histórico de "Cursos Académicos" sin romper manuales antiguos.

Al usar este método, Docusaurus **congela** todo tu temario actual de golpe, guardándolo intacto como archivo histórico para los alumnos. Al mismo tiempo, te deja vía libre en tu carpeta base (`docs/`) para que rehagas apuntes para el nuevo curso.

### Cómo congelar tus apuntes actuales

Es algo que normalmente harás solo una vez al año, en junio. Para crear esa copia estática irrompible del curso que acabas, abre la terminal y ejecuta este comando, sustituyendo `24-25` por tu curso escolar:

```bash
npm run docusaurus docs:version 24-25
```

Cuando lo lanzas, el motor de Docusaurus hace todo el trabajo oscuro por ti:
1. Crea una carpeta local de archivo llamada `versioned_docs/version-24-25/`.
2. Clona enterita la carpeta `docs/` que usabas como temario y se la lleva a esa nueva ruta blindada.
3. El material original central se queda vacío a nivel visible, pero a partir de este instante, todo lo modificado en `docs/` lo tratará como el temario para la **nueva promoción del año que viene**.

### Añade el menú temporal

Para que el alumno (especialmente los repetidores o los de convocatoria extraordinaria) puedan revisar sus temarios congelados, tienes que habilitar el seleccionador desplegable. Configúralo en la ruta `themeConfig > navbar > items` de tu config:

```javascript title="docusaurus.config.js"
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
        ],
```

### Evitar el cartel de "Versión no publicada"

Por pura inercia en la mentalidad informática, Docusaurus asume que la versión que has congelado es tu versión final maestra, y que lo que guardas en tu carpeta original `docs/` es un simple borrador. Por eso, mostrará por sistema un feo cartel (*banner*) amarillo avisando al alumno de que el temario de "este año" es falso e invitándole a ir al del año pasado.

Para invertir la mentalidad y asegurar que tu curso en vigor es el correcto, añade este bloque a la zona de plugins `presets` de tu `docusaurus.config.js`:

```javascript title="docusaurus.config.js"
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          
          // --- AÑADE ESTE ÚNICO BLOQUE ---
          lastVersion: 'current', // Exige que la carpeta principal en vigor sea la primera
          versions: {
            current: { banner: 'none' }, // Apaga la advertencia de "No publicado" a tus nuevos alumnos
            '24-25': { banner: 'unmaintained' }, // Enciende el aviso a quienes miren el histórico
          },
          // -------------------------------
```

:::warning[Docentes con múltiples asignaturas]
El comando básico automático le saca una fotografía a la carpeta `docs/` **entera**. Si almacenas apuntes de varias asignaturas distintas (ej: Docusaurus y PMDM) y lanzas el comando, versionarás todas simultáneamente en el mismo bloque para un curso concreto. Si quieres poder versionar primero PMDM y luego otra materia de forma independiente, investiga la técnica orientada al **"Multi-instance"** de la documentación oficial.
:::

## 📝 Actividad: Tu primer cambio de curso

Para terminar de dominar el ciclo de vida de tus apuntes, vamos a simular el paso de un curso escolar a otro usando la **Estrategia 1 (Manual)**, que es la más común cuando gestionamos varias asignaturas.

1.  **Congela el curso actual**: Ve a tu carpeta `docs/` y renombra la carpeta de una de tus asignaturas (ej: `2526-docusaurus/`) añadiéndole el prefijo de ocultación: `_2526-docusaurus/`.
2.  **Prepara el curso nuevo**: Crea una nueva carpeta paralela llamada `2627-docusaurus/`. Dentro de ella, copia algún fichero de la carpeta antigua.
3.  **Actualiza el puente (Menú)**: Ahora mismo, si entras en tu web, el botón del menú superior estará roto. Abre `docusaurus.config.js` y actualiza la ruta del botón para que apunte a la nueva carpeta.
4.  **Verificación Final**: Reinicia tu servidor local (`npm run start`) y comprueba que al pulsar en el botón del menú ahora aterrizas directamente en el material del nuevo curso.

:::tip[¡Misión cumplida!]
Has aprendido a "jubilar" un curso completo y dar la bienvenida al siguiente sin perder tus archivos viejos. Esta es la base de un mantenimiento sostenible de apuntes a largo plazo.
:::

