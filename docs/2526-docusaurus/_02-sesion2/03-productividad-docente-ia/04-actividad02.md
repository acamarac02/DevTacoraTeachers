---
title: "📝 Actividad 2"
sidebar_position: 4
description: Pon a prueba el flujo de trabajo agéntico creando tu propia Skill y generando el temario de una unidad didáctica completa.
---

En esta actividad, aplicarás el flujo real de un "Docente Agéntico" para automatizar la creación de una unidad de trabajo de uno de tus propios módulos.

## Objetivo del Laboratorio

Configurar tu propio asistente experto (Skill) y guiarlo a través de las tres fases del **Esqueletizado** para generar la estructura y el contenido de una **Unidad de Trabajo** real que debas impartir en uno de tus módulos.

## Instrucciones Paso a Paso

### 1. Creación de tu Guía de Estilo (Skill)
Antes de pedirle nada a la IA, debes definir las reglas del juego.
*   Crea una carpeta llamada `.agents` en la raíz de tu proyecto (si no existe ya).
*   Crea dentro un fichero llamado `skill-mi-nombre-de-modulo.md`.
*   Redacta en su interior tu visión docente usando el marco **RTCF** (Rol, Tarea, Contexto y Formato). Especifica qué tecnologías usas, qué arquitectura prefieres y qué tono pedagógico quieres que tenga.
*   *Idea*: puedes tomar como ejemplo la que te proporciono de PMDM.

### 2. Fase 1: Estructuración (Brainstorming)
Abre el chat de Antigravity y pídele que planifique una de tus unidades mencionando tu nueva skill.
*   *Prompt sugerido*: "Vamos a preparar la UT 1 de [Nombre de tu Módulo]. Comienza la Fase de Estructura siguiendo las directrices de **@skill-mi-nombre-de-modulo**. Aquí tienes los contenidos en bruto: [Lista de tus contenidos]. Dame una propuesta de carpetas y ficheros."
*   **Itera**: Si la propuesta no te gusta al 100%, pídele cambios hasta que sea perfecta.

### 3. Fase 2: Plantillas y Resumen (Andamiaje)
Una vez aprobada la estructura, pídele que pase a la acción.
*   *Prompt sugerido*: "Acepto la estructura. Pasamos a la fase de resumen. Genera las carpetas y los ficheros con un resumen de objetivos en el interior de cada uno."
*   Comprueba en tu explorador de archivos que las carpetas se han creado físicamente.

### 4. Fase 3: Redacción de Contenido (Desarrollo)
Elige el fichero que consideres más importante de la unidad y pídele al agente que lo redacte.
*   *Prompt sugerido*: "Comenzamos la fase de desarrollo. Redacta el contenido del fichero [ruta/al/fichero.md] basándote en su resumen y siguiendo las directrices de **@skill-mi-nombre-de-modulo**."

:::tip[El Docente tiene la última palabra]
Recuerda que la IA es tu "becario aventajado". Si el contenido que genera no te convence o es demasiado denso, utiliza el chat para pedirle: *"Hazlo más sencillo"*, *"Añade una actividad para los alumnos aquí"* o *"Cambia este ejemplo por otro más cotidiano"*.
:::
