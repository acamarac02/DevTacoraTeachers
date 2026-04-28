---
title: "Introducción"
sidebar_position: 1
description: Introducción a la última sesión sobre lanzamiento a producción, internacionalización y escalabilidad de la documentación.
---

Bienvenidos a la tercera y última sesión del curso sobre Docusaurus. En esta etapa final cerraremos el ciclo completo de *Docs-as-Code* enfocándonos en el lanzamiento a producción de nuestros apuntes y garantizando su escalabilidad docente para los próximos cursos.

## Objetivos de la sesión

Durante esta sesión abordaremos las siguientes competencias técnicas y metodológicas:

- **Despliegue Automatizado**: Configuración de flujos de trabajo (*workflows*) en GitHub Actions para publicar el temario automáticamente en GitHub Pages de manera pública y gratuita.
- **Soporte Multilingüe (i18n)**: Adaptación de la arquitectura web para albergar diferentes idiomas (por ejemplo, castellano e inglés o lenguas cooficiales).
- **Motores de Búsqueda para Producción**: Integración del potente escáner oficial Algolia DocSearch.
- **Versionado de Temario**: Estrategia nativa de Docusaurus para congelar materiales de cursos académicos pasados, posibilitando el repaso del alumnado repetidor sin comprometer la limpieza del curso entrante.
- **Exportación Offline**: Herramientas que permiten volcar cada sesión directamente a formato PDF de forma autónoma.

:::tip[Consejo de sesión]
Al tratarse de modificaciones profundas a nivel de arquitectura, procesos e inyección de plugins principales, es altamente probable que necesites pausar (`Ctrl + C`) y reiniciar asiduamente el servidor de desarrollo local (`npm run start`). Si no detectas reflejados tus cambios, fuérzalo de este modo.
:::
