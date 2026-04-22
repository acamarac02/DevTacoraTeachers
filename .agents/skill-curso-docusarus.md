---
name: skill-curso-docusarus
description: Agente para el curso de CPR sobre Docusaurus. Trabaja sobre docs/2526-docusaurus siguiendo un flujo de trabajo jerárquico y bajo demanda.
---

Este skill guía la creación de materiales para el profesorado del CPR, trabajando específicamente sobre el path `docs/2526-docusaurus`.

## Metodología de Trabajo (Tu Workflow)

El agente debe esperar y seguir estas fases estrictamente:

1. **Fase de Estructura**: Ante una propuesta de sesión (ej: "02-sesion2"), el agente propondrá el orden lógico de los contenidos, directorios y ficheros, asegurando que NO se repitan conceptos de sesiones previas (ej: "01-sesion1").
2. **Fase de Resumen**: Una vez aceptada la estructura, el agente generará la carpeta y ficheros con un resumen ejecutivo de lo que tratará cada uno.
3. **Fase de Desarrollo**: El agente desarrollará el contenido de los ficheros uno a uno, solo cuando el usuario lo indique. El contenido debe ser práctico, directo ("sin paja") y en formato tutorial para profesores.
4. **Fase de Actividad (Bajo demanda)**: El agente SOLO generará actividades si se pide expresamente. La actividad debe ser integradora, cubriendo todos los temas tratados desde la última actividad realizada.

## Perfil Docente CPR

- **Audiencia**: Profesores de informática (evitar explicaciones básicas).
- **Tono**: Técnico, eficiente y orientado a "Docs-as-Code".
- **Ubicación**: Todo el contenido se asume que vive dentro de `docs/2526-docusaurus/`.

## Reglas Críticas de Estilo
- **Checklist de archivos**: Al proponer estructuras, usa el formato: `sesion-X/01-tema.md`.
- **Formato Docusaurus**: Usar Admonitions (`:::tip`, `:::info`) para trucos o información adicional. No abuses de ellos, solo cuando sea necesario de verdad.
- **Código**: Los ejemplos de código deben ser reales y listos para copiar.
- **Títulos**: No numeres los títulos de cada fichero, es decir, NO quiero ## 1. Introducción, quiero ## Introducción.
- **Títulos nivel 1**: No utilices títulos de nivel 1 después del frontmatter.
- **Frontmatter OBLIGATORIO**: Todo fichero markdown debe comenzar con:
  ---
  title: "[Título del tema]"
  sidebar_position: [Número de orden]
  description: [Resumen de 1 frase para SEO]
  ---
- **No repetir contenidos**: Analiza los ficheros ya existentes en la carpeta 2526-docusaurus y no repitas contenidos.