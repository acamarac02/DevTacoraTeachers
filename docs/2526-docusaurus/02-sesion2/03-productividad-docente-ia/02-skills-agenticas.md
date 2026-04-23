---
title: "Skills Agénticas"
sidebar_position: 2
description: Definir pautas de comportamiento y estilo para el asistente IA, garantizando un formato constante en los apuntes del curso.
---

Al momento de nutrir nuestros proyectos de Docusaurus con un Agente IA, el peligro habitual en docencia es que dicho agente adopte tonos robóticos o ignore por completo tus estándares arquitectónicos (ej. que borre código existente o añada saltos de línea molestos). Aquí entran en juego las inquebrantables **Skills**.

## ¿Qué es una Skill?

Una **Skill** es, esencialmente, una "directiva maestra" o un manual de instrucciones persistente. Es el lugar donde el modelo lingüístico de Antigravity irá siempre a leer tus reglas inmutables antes de ejecutar cualquier edición que le pidas.

:::info[¿Es lo mismo Skill que Agente?]
No exactamente, aunque están íntimamente relacionados:
- **El Agente:** Es la entidad inteligente (Antigravity) que tiene capacidad de actuar (leer archivos, escribir código, usar la terminal).
- **La Skill:** Es el "traje" o el conjunto de reglas que el Agente se pone para trabajar. Al activar una Skill, el Agente cambia su forma de razonar y escribir para adaptarse a lo que tú has definido.
:::

## El Marco RTCF

Para que una Skill sea efectiva, debe estar bien estructurada. En el mundo de la IA solemos usar el marco **RTCF**, que sirve tanto para escribir un Prompt puntual excelente como para diseñar una Skill permanente:

1. **R (Rol):** Indica quién es la IA. *¿Es un desarrollador senior de Android? ¿Un profesor de FP experto en pedagogía?*
2. **T (Tarea):** Define qué hace habitualmente. *¿Redactar Markdown? ¿Corregir errores de código?*
3. **C (Contexto/Restricciones):** Las reglas del juego. *No usar H1, usar siempre Admonitions, seguir arquitectura MVVM.*
4. **F (Formato):** Cómo debe entregar el trabajo. *Uso de tablas, bloques de código con título, JSON estructurado.*

## Creación y Estructura

Las Skills deben residir obligatoriamente en la **raíz de tu proyecto** de Docusaurus para que el Agente pueda localizarlas al ser mencionado. Para ello, utilizaremos una carpeta específica denominada `.agents`.

Así es como debería verse la estructura de directorios de tu curso para que las Skills funcionen correctamente:

```text
📁 mi-curso-docusaurus/        <-- RAIZ DEL PROYECTO
 ├── 📁 .agents/               <-- Carpeta de Skills
 │    └── 📄 skill-pmdm.md     <-- Tu Skill de Android
 ├── 📁 docs/                  <-- Tus apuntes
 ├── 📁 static/
 ├── 📄 docusaurus.config.ts
 └── 📄 package.json
```

:::important[El Punto Inicial]
Fíjate que la carpeta se llama `.agents` (con un punto al principio). Esto indica al sistema operativo que es una carpeta de configuración. Si la creas sin el punto, el Agente no sabrá dónde buscar tus reglas y la mención con `@` fallará.
:::


### Ejemplo: Skill para el módulo de PMDM

Si estuviésemos preparando el módulo de **Programación Multimedia y Dispositivos Móviles**, nuestra Skill podría lucir así (haz clic en el enlace para descargar el archivo completo y ver todas las reglas):

📥 <a href="/DevTacoraTeachers/descargas/skill-pmdm.md" download="skill-pmdm.md">**Descargar skill-pmdm.md**</a>

A continuación, un extracto de las reglas más importantes que contiene este fichero:

- **Rol:** Desarrollador Android Senior y Docente de FP Superior.
- **Arquitectura:** MVVM + Repository con gestión de estados (Loading/Success/Error).
- **Reglas Técnicas:** Uso de Java y DataBinding (prohibido utilizar `findViewById`).
- **Nivel Pedagógico:** Tutoriales con diagramas Mermaid, código 100% funcional y comentarios explicativos del "porqué" de cada paso.


## Vinculación y Activación

Para que esta Skill "cobre vida", solo tienes que mencionarla en tu petición usando la etiqueta `@`.

:::tip[Invocación en el Chat]
Cuando escribas tu petición a Antigravity, simplemente añade:
> *"@skill-pmdm prepara el tema sobre el ciclo de vida de una Activity"*
:::

Al detectar la mención, el Agente cargará ese fichero en su memoria activa, garantizando que las respuestas sean pulcras, obedezcan tus guías de estilo y programen exactamente como tú quieres que aprendan tus alumnos.
