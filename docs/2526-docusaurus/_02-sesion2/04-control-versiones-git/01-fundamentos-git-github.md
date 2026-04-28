---
title: "Fundamentos de Git y GitHub"
sidebar_position: 1
description: Descubre qué es un sistema de control de versiones y por qué es imprescindible en Docusaurus.
---

En el paradigma **Docs-as-Code**, nuestros apuntes ya no son documentos de texto estáticos guardados mecánicamente en un pendrive, sino proyectos de programación puros. Esto implica que debemos tratarlos con el mismo rigor y seguridad con el que gestionaríamos el código fuente de una aplicación empresarial: utilizando **Control de Versiones**.

## ¿Por qué usar Control de Versiones en Docencia?

Implementar este sistema al crear temarios en Docusaurus te aporta tres superpoderes instantáneos:
1. **Historial infinito y seguro**: Podrás ver qué borraste, modificaste o añadiste hace dos meses (o dos años), garantizando que nunca pierdes un examen o un apunte valioso por error.
2. **Experimentación sin miedo**: Si quieres reestructurar todo el temario para probar una nueva métodología, puedes hacerlo en una rama (*branch*) aislada. Si te arrepientes, vuelves a la versión original de forma instantánea.
3. **Colaboración docente**: Permite que varios profesores del mismo departamento trabajen concurrentemente en los apuntes sin pisarse el trabajo ni enviarse versiones por correo.

## La Gran Confusión: Git vs GitHub

Uno de los errores más comunes al iniciarse es pensar que Git y GitHub son lo mismo. Es imperativo desvincularlos mentalmente:

- **Git:** Es el **motor local** que instalas en tu ordenador personal. Es la tecnología que funciona por "debajo" rastreando cada coma que cambias en tus apuntes. Funciona 100% sin internet.
- **GitHub:** Es una plataforma web externa (propiedad de Microsoft) que funciona como un servicio gratuito de **alojamiento en la nube** para repositorios de Git. Podríamos decir que Git es el vídeo que grabas con la cámara, y GitHub es *YouTube* donde lo subes para que el resto del departamento lo vea o tú tengas una copia de seguridad.

:::info[Alternativas a GitHub]
Aunque usamos GitHub por ser el estándar absoluto de la industria, tu motor local Git podría engancharse a otras plataformas de la competencia si quisieras, como *GitLab* o *Bitbucket*.
:::

## Cuenta en GitHub

Si bien Git se opera de forma local, todo curso construido en Docusaurus termina requiriendo un despliegue web público para que tus alumnos lo consuman. GitHub nos ofrece la infraestructura de **GitHub Pages** de forma completamente gratuita.

Si aún no posees una cuenta, debes registrarte ahora:
1. Accede a [GitHub.com](https://github.com/).
2. Haz clic en el botón superior derecho **Sign up**.
3. Sigue las instrucciones iterativas del asistente interactivo usando tu correo electrónico.

Con estos conceptos asimilados, el siguiente paso es instalar el motor local (Git) y configurarlo en nuestro ordenador para poder empezar el historial histórico de nuestros apuntes.
