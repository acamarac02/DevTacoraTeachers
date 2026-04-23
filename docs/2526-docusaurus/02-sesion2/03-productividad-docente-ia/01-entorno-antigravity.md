---
title: "El Entorno Antigravity"
sidebar_position: 1
description: Introducción guiada para que los docentes conozcan la interfaz del Agente Antigravity integrado en su editor.
---

En este primer capítulo de la introducción a la Inteligencia Artificial para docentes técnicos, exploraremos cómo acceder y manejarnos por la interfaz de nuestro asistente de programación integrado: **Antigravity**.

A diferencia de las consultas clásicas que hacemos en herramientas web, aquí el agente interactúa nativamente en el entorno de desarrollo (IDE) junto a nuestros ficheros reales de Docusaurus.

## ¿Qué es un Agente Autónomo Local?

Seguramente hasta ahora has utilizado plataformas conversacionales genéricas desde una pestaña de tu navegador. El gran problema para nosotros en docencia puramente informática es que esos asistentes "ciegos" no ven el contexto de tu disco duro, ni conocen la estructura de carpetas local de tu curso.

**Antigravity** soluciona esto operando bajo el paradigma de un sistema **Agéntico Autonómo**. Funciona como un copiloto inmersivo dentro de tu editor de texto que:
- Es capaz de leer el contenido de todos tus ficheros Markdown antes de contestar.
- Puede crear, reemplazar y renombrar archivos instantáneamente por orden tuya.
- Posee interfaz y permisos para ejecutar comandos en tu terminal para verificar que el código compila bien.

:::info[Privacidad de Entorno]
Al operar ligado a tu explorador de archivos, la IA únicamente asimila el proyecto que tengas cargado en pantalla, mitigando distracciones inútiles y mejorando su concentración algorítmica al trabajar sobre asignaturas complejas.
:::

## Estructura de la Interfaz

El panel de comunicación principal se acopla directamente a tu área de trabajo —generalmente apilada en el margen lateral derecho— para no estorbar u ocultar el visionado panorámico de tus apuntes Markdown reales.

### Selección del Motor Base (LLM)

En la cabecera superior del chat observarás un menú desplegable destinado a seleccionar el "cerebro" (modelo fundacional matemático) que tomará las decisiones de tus directrices:

1. **Modelos Pro (Alta cognición):** Úsalos en la fase de **Brainstorming y Estructuración**. Son ideales para planificar el orden de los temas, proponer esquemas complejos o estructurar un módulo entero desde cero. Suelen ser más lentos pero su capacidad deductiva es imprescindible para no cometer errores arquitectónicos.
2. **Modelos Flash (Velocidad y eficiencia):** Úsalos en la fase de **Redacción**. Una vez que ya tienes claro el esqueleto y qué va en cada fichero, estos modelos son perfectos para escribir el contenido Markdown rápidamente o realizar correcciones directas sobre el texto ya existente.

<img src={require("../0-img/seleccion-modelo-llm.png").default} className="img-center" />


### Modos de Ejecución

Junto al selector de modelos, encontrarás una opción binaria para dictaminar cómo debe comportarse el agente ante tus peticiones:

- **Modo Planning (Recomendado):** El agente no escribe código de inmediato. Primero analiza tu petición, lee los ficheros implicados y te propone un "Plan de Ejecución" detallado. Esto te permite validar su lógica antes de que toque una sola coma de tus apuntes. Es el modo ideal para reestructuraciones o creación de temas nuevos.
- **Modo Fast (Directo):** El agente ejecuta la acción directamente sin pedir confirmación previa del plan. Úsalo solo para cambios triviales y rápidos donde tengas total certeza del resultado (ej. "Cambia este color de rojo a azul").

<img src={require("../0-img/modos-ejecucion.png").default} className="img-center" />


## Gestión Correcta de Tokens

Un error pedagógico usual es exprimir la memoria del asistente en una sola conversación infinita. Cuando culmines un bloque estructural cerrado (ej. "La Unidad 1 de PMDM"), es **imperativo iniciar un nuevo Chat**. 

Evitar reciclar el historial impide saturar el hilo cognitivo del robot y evita resultados repetitivos u obsoletos que pueden aparecer cuando el historial acumulado es demasiado extenso.


