---
title: "Internacionalización (i18n)"
sidebar_position: 3
description: "Configuración de Docusaurus para soportar múltiples idiomas en los apuntes."
---

En muchos centros de Formación Profesional existen ciclos bilingües, o bien necesitamos tener los temarios disponibles en una segunda lengua oficial. Docusaurus trae un sistema integrado de idiomas (i18n) que nos facilita muchísimo este trabajo, sin tener que duplicar nuestro proyecto web entero.

En este tutorial vamos a ver cómo preparar un segundo idioma (usaremos el **inglés**, bajo el código `en`) partiendo de nuestra web principal actual (el **castellano**, con el código `es`).

## Configuración de Idiomas

Lo primero es decirle a nuestra página web qué idiomas vamos a manejar. Para ello, debemos editar el documento principal `docusaurus.config.js`. Busca el bloque `i18n` que suele estar arriba del todo:

```javascript title="docusaurus.config.js"
export default {
  // ...
  i18n: {
    defaultLocale: 'es',       // El lenguaje principal de tu página (tu carpeta docs/ original)
    locales: ['es', 'en'],     // Lista con todos los lenguajes soportados en la web
    localeConfigs: {
      es: {
        label: 'Castellano',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
  // ...
};
```

Luego necesitamos indicarle al menú superior que muestre el botón o la pestaña de cambiar de idioma. Baja en ese mismo documento hasta la sección `themeConfig > navbar > items` y añade el botón `localeDropdown`:

```javascript title="docusaurus.config.js"
        items: [
          // ... tus otros menús ...
          {
            type: 'localeDropdown',
            position: 'right', // Posiciona el selector en la esquina derecha
          },
        ],
```

Con esto, los alumnos verán un desplegable visual cómodo en el menú de la web para alternar entre apuntes con un solo clic.

## Organizar las Carpetas de Traducción

Docusaurus no traduce el contenido automáticamente. Su filosofía se basa en que creemos una replica exacta de las carpetas donde guardamos nuestros archivos `.md` y ahí vayamos traduciéndolos manualmente para conservar el control total. 

Para que reconozca los nuevos idiomas, hay que seguir esta ruta de trabajo en tu código:

1. Crea una carpeta padre llamada `i18n/` en la raíz de tu proyecto (junto a tus antiguas carpetas `docs/` y `src/`).
2. Dentro de la nueva carpeta, crea la estructura obligatoria de Docusaurus para el idioma inglés terminando con los documentos: `i18n/en/docusaurus-plugin-content-docs/current/`.
3. Copia ahí los archivos `.md` de temas que quieras traducir, exactamente con la misma jerarquía de subcarpetas que tenían originalmente.
4. **La regla de oro:** Traduce **solo y exclusivamente** los textos de dentro del archivo `.md`. Nunca cambies el nombre del propio archivo físico ni de su carpeta, ya que si los nombres son distintos, los enlaces se romperán en el cambio de idioma.

*Ejemplo visual con unos apuntes del módulo de PMDM:*
```text
raíz-del-proyecto/
 ├── docs/ 
 │   └── 01-pmdm/
 │       └── 01-introduccion-android.md   <-- (Apunte original escrito en Castellano)
 │
 ├── i18n/ 
 │   └── en/
 │       └── docusaurus-plugin-content-docs/
 │           └── current/
 │               └── 01-pmdm/
 │                   └── 01-introduccion-android.md   <-- (Archivo clonado donde escribiremos en Inglés)
 └── docusaurus.config.js
```

:::info[¿Dónde deben ir tus originales en Castellano?]
Puesto que hemos decidido que nuestro idioma base (por defecto) sea `es`, todos los apuntes iniciales en español no debes moverlos, tienen que seguir viviendo en la carpeta `docs/`. Dentro de la carpeta `i18n/` **solo** meterás las versiones en inglés u otros idiomas añadidos.
:::

:::tip[Traducir Botones de la Pantalla]
Si quieres traducir detalles propios del programa (como los mensajes de "Pasar a página siguiente", "Siguiente Tema" etc), puedes ejecutar el comando `npm run write-translations -- --locale en` en la terminal. Éste creará archivos con textos sueltos en tu carpeta de inglés listos para que los modifiques a mano.
:::

## Ver el Resultado en Local

Si estás trabajando en tu ordenador y ejecutas tu comando habitual `npm run start`, comprobarás un detalle llamativo: **el desplegable de idiomas dará un error de "Página no encontrada" (404) si intentas pulsarlo**. 

Tranquilidad, esto es el comportamiento normal y no has roto nada. Por motivos de rendimiento, el servidor local de pruebas solo es capaz de renderizar y mostrar **un idioma a la vez**. Solo cuando publiques tus apuntes definitivamente usando el comando de despliegue (`npm run deploy`) el botón funcionará perfectamente al trenzar ambas vistas.

Por lo tanto, si quieres auditar a nivel local cómo ha quedado tu temario escrito en inglés, tienes que detener la consola (`Ctrl+C`) y forzar su arranque explícitamente en modo bilingüe lanzando esta orden en tu terminal:

```bash
npm run start -- --locale en
```

Con este comando, NodeJS asume que debe obviar de momento tus archivos originales de `/docs` y pasa a pintar la pantalla leyendo exclusivamente los apuntes de tu carpeta `/i18n/en`.
