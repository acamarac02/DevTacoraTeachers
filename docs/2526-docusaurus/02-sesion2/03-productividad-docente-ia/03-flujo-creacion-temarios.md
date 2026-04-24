---
title: "Creación de Temas Iterativo"
sidebar_position: 3
description: Cómo desarrollar una semana completa de clase basándonos en un flujo iterativo seguro y guiado con IA en Docusaurus.
---

Integrar la Inteligencia Artificial en la creación de materiales no significa delegar la estrategia pedagógica. Como docente, tu labor sigue siendo fundamental para estructurar el temario con lógica y sentido. 

Para maximizar la calidad del contenido, evitar que el Agente cometa errores técnicos en Docusaurus y agilizar drásticamente tus tiempos de preparación, te presento el flujo de trabajo que sigo: el **Desarrollo Iterativo en Cascada** (o *Esqueletizado*).

## Fase 1: Estructuración de una UT

En esta etapa inicial solicitaremos a Antigravity que analice un listado en bruto de contenidos y proponga una división lógica. 

**Ejemplo de Prompt:**

> Vamos a preparar la unidad de trabajo 5 de **PMDM**. Comenzamos la fase de estructura. Sigue las directrices de **@skill-pmdm**. 
> 
> Esta unidad tiene el nombre **"Persistencia de datos"**. Los contenidos que quiero impartir son:
> - **Almacenamiento local con Room** (Operaciones CRUD y marcar como favorito un elemento de una lista).
> - **Almacenamiento local con SharedPreferences**.
> - **Servicios útiles de Firebase**:
>     - Explicar qué es Firebase y sus servicios principales.
>     - **Firebase Authentication** (Registro, login, cerrar sesión con Google y con email y contraseña).
>     - **Firebase Firestore** (Definición de base de datos NoSQL, estructura de colecciones y subcolecciones, operaciones CRUD, lectura en tiempo real).
> - **Supabase Storage**:
>     - Explicar qué es Supabase y sus servicios principales.
>     - **Supabase Storage** (Integración con Retrofit para subir y descargar imágenes).
>     - Almacenar la URL de las imágenes en Firestore.
> 
> Dame una propuesta de estructura de carpetas y ficheros para esta unidad de trabajo. No generes aún el contenido de los ficheros, solo la estructura."


**Respuesta del Agente:**

> ¡Hola! Entendido. He revisado las directrices de la guía de estilo (`skill-pmdm.md`) y me coloco en mi rol de Desarrollador Android Senior y docente de FP.
> 
> Vamos a comenzar con la Fase 1: Fase de Estructura (Brainstorming).
> 
> Para abordar "UT5. Persistencia de datos" siguiendo un orden pedagógico incremental (de lo más sencillo local a lo más complejo en la nube) y separando siempre la teoría del tutorial de implementación práctica (con arquitectura MVVM + Repository y DataBinding obligatorios), esta es mi propuesta para la carpeta de la unidad en `docs/2526-pmdm/ut05-persistencia-datos`:
> 
> ```text
> docs/2526-pmdm/
> └── ut05-persistencia-datos/
>     ├── 01-shared-preferences/
>     │   ├── 01-teoria-sharedpreferences.md 
>     │   │   # Conceptos básicos, cuándo usarlo y cuándo no.
>     │   └── 02-tutorial-perfil-usuario.md 
>     │       # Tutorial práctico conectando SharedPreferences con ViewModel y Repository.
>     │
>     ├── 02-room-database/
>     │   ├── 01-teoria-room.md 
>     │   │   # Explicación de SQLite abstracto: Entities, DAOs y estructura de la BD.
>     │   └── 02-tutorial-crud-favoritos.md 
>     │       # Tutorial con operaciones CRUD completas y funcionalidad de "marcar como favorito".
>     │
>     ├── 03-firebase-auth-firestore/
>     │   ├── 01-teoria-ecosistema-firebase.md 
>     │   │   # Visión general de Firebase, Auth y modelado NoSQL en Firestore (Colecciones/Documentos).
>     │   ├── 02-tutorial-autenticacion.md 
>     │   │   # Tutorial de registro, login y logout (Google + Email/Password).
>     │   └── 03-tutorial-firestore-realtime.md 
>     │       # Tutorial de CRUD y escuchas en tiempo real ligado al usuario autenticado.
>     │
>     └── 04-supabase-storage/
>         ├── 01-teoria-supabase-storage.md 
>         │   # ¿Qué es Supabase? Diferencias con Firebase y teoría del sistema de Storage.
>         └── 02-tutorial-subida-imagenes.md
>             # Tutorial utilizando Retrofit para subir la imagen a Supabase, y posterior guardado de la URL de descarga en Firestore.
> ```
> 
> Justificación de las decisiones:
> - **Separación de responsabilidades**: En todas las subsecciones hay primero un archivo teoría para asentar las bases sin ensuciar el código, y posteriormente los tutoriales listos para programar, requeridos explícitamente en las directrices.
> - **Progresión pedagógica**: Empezamos por las preferencias (ligero local). Pasamos a Room (pesado/estructurado local). Escalamos a la nube con Firebase (datos + auth). Culminamos cruzando servicios: almacenamiento de ficheros (Supabase) + guardar su URL resultante en BD (Firebase).
> - **División en Firebase**: He dividido Firebase en dos tutoriales distintos (Gestión de Auth y Gestión de BD). Hacer todo el sistema de Autenticación y además el CRUD de colecciones en un mismo tutorial sería demasiado denso para una sola sesión y generaría frustración en los alumnos.
> 
> ¿Te parece bien esta estructura? Si me das el visto bueno, pasaremos a la Fase de Resumen y crearé físicamente las carpetas y los archivos con los frontmatters y la sinopsis de lo que iría dentro de cada uno.

Una vez que el Agente ha completado esta **Fase 1**, es el momento crucial para que el docente revise la estructura propuesta. No te conformes con la primera iteración; pídele que modifique, mueva o fusione aquello que no te convenga pedagógicamente. 

Por ejemplo, analizando la propuesta anterior, yo le respondería: *"Me gusta, pero separa el tutorial de Firebase Authentication de Google del tutorial de Auth con email y contraseña para que los alumnos no mezclen conceptos. Imparte primero el método que sea más sencillo de los dos"*.

:::info[Evitar Redundancias]
Es fundamental proporcionar contexto al Agente sobre los conocimientos previos de los alumnos (por ejemplo, qué tecnologías se han impartido en unidades anteriores). Esto evita la repetición innecesaria de conceptos y asegura una progresión pedagógica coherente. La mejor forma de automatizar esto es incluir dicho historial en tu archivo de **Skill**.
:::

## Fase 2: Plantillas y Resumen de Ficheros

Con el índice aprobado, el siguiente paso es "materializar" la estructura de carpetas y archivos Markdown en blanco (junto con sus `_category_.json`), sin llegar a redactar teoría aún. Se deben incluir resúmenes de objetivos para cada fichero.

**Ejemplo de Prompt:**

> *Acepto la estructura propuesta. Pasamos a la fase de resumen, siguiendo las directrices de @skill-pmdm.md. Genera las carpetas que me has propuesto y sus ficheros con un resumen de lo que tratará cada uno.*

**Resultado de directorios creados:**

<img src={require("../0-img/directorios-creados.png").default} alt="Directorios creados" className="img-center" style={{ maxWidth: '400px' }} />

**Dentro de los ficheros, se ha creado un resumen de lo que tratará cada uno, por ejemplo:**

<img src={require("../0-img/ficheros-creados.png").default} alt="Ficheros creados" className="img-center" style={{ maxWidth: '400px' }} />

:::tip[El Valor del Andamiaje]
Crear el esqueleto completo antes de redactar proporciona una vista "de pájaro" del proyecto, y le traza un mapa nítido a la IA sobre dónde encajará el contenido posterior.
:::

## Fase 3: Redacción de Contenido

Por último, abordamos el temario entrando al detalle interactivo fichero por fichero.

**Ejemplo de Prompt:**

> *Empezamos con la fase de desarrollo, siguiendo las directrices de @skill-pmdm.md. Comienza desarrollando del fichero @01-teoria-sharedpreferences.md basandote en el contenido marcado en su interior.*

A partir de aquí, comienza un proceso iterativo de desarrollo de contenido. Deberás revisar el contenido propuesto por la IA y solicitarle modificaciones hasta que se ajuste a tus necesidades. Por ejemplo, puedes pedirle que añada más información, que cambie el orden de los apartados, que incluya más ejemplos, etc.



