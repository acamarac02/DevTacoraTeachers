---
title: "📝 Actividad 2"
sidebar_position: 4
description: Ejercicio integrador final de la Sesión 1 para estructurar y redactar tus primeros contenidos reales.
---

Hemos llegado al final de la primera sesión. Tu objetivo ahora es crear el esqueleto de tu Docusaurus adaptado a tus clases reales siguiendo un flujo profesional.

## Actividad Final: El esqueleto de tu curso

### 1. Estructura las Carpetas
Crea las carpetas principales y al menos las dos primeras unidades de trabajo de un módulo real que impartas. Tu directorio `docs/` debería tener una apariencia similar a esta:

```text
📁 docs/
 └── 📁 2526-informatica/
      ├── 📄 index.md
      ├── 📄 _category_.json
      ├── 📁 01-unidad-uno/
      │    ├── 📄 _category_.json
      │    └── 📄 01-tema-inicio.md
      └── 📁 02-unidad-dos/
```

### 2. Configura el Navbar
Entra en `docusaurus.config.js` y añade un enlace en el menú superior (`navbar`) para acceder rápidamente a tu nuevo módulo.

### 3. Prepara los Menús Laterales
Asegúrate de que `sidebars.js` esté configurado para que tu módulo tenga su propio índice independiente.

### 4. Práctica de Redacción Markdown
Entra en el `index.md` de tu módulo y redacta la presentación de la asignatura. Debes incluir obligatoriamente:

*   Un bloque de **Frontmatter** completo.
*   Varios niveles de **títulos** (`#`, `##`).
*   Una **lista** (ej: criterios de evaluación o software necesario).
*   Texto con **formato** (negrita y cursiva).
*   Una **admonición** (`:::info` o `:::tip`) destacada.
*   Un bloque de **código** con resaltado de sintaxis.
*   Un **enlace** externo y una **imagen** (puedes usar una de prueba de `static/img/`).

:::success[¡Enhorabuena!]
Con esta actividad has sentado las bases de tu curso. En la próxima sesión aprenderemos a vitaminar estos apuntes con componentes más avanzados.
:::
