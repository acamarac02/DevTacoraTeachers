---
title: "Buscador Integrado"
sidebar_position: 3
description: Guía paso a paso para añadir un motor de rastreo y sugerencias a tus apuntes utilizando Algolia DocSearch.
---

Una herramienta metodológica indispensable —cuando nuestro curso de Formación Profesional empieza a tener decenas de archivos, glosarios y temas estructurados— es dotar a los alumnos de un buscador ultrarrápido y universal. Resulta fundamental acostumbrarles al paradigma de cómo exploran la doc oficial en empresas IT en su día a día laboral.

En este manual expondremos **Algolia DocSearch**, el sistema estándar recomendado e integrado por defecto por los propios desarrolladores de Docusaurus.

:::info[¿Búsqueda Offline en Aulas sin Red?]
Dependiendo de si tus apuntes se van a consultar localmente en aulas capadas sin salida a internet o estarán publicados públicamente (GitHub Pages, Vercel...), deberás instalar un plugin local como `@easyops-cn/docusaurus-search-local` vía terminal. Para el entorno habitual del curso, aprovecharemos el escáner gratuito automatizado de **Algolia**.
:::

## Integración Paso a Paso con Algolia

Algolia y todos sus spiders de servidor rastrean gratuitamente y de forma inteligente la web de tus apuntes semanales, leyendo todo el texto y elaborando un índice instantáneo para autocompletarle sugerencias al alumnado sin que afecte al rendimiento del sitio local.

### 1. Solicitar el rastreador

Al ser un motor computacional gratuito en la nube reservado para documentación técnica de proyectos, debéis registrar brevemente el alojamiento público de vuestros apuntes para recibir la validación:

1. Accede a la plataforma oficial de [Algolia DocSearch](https://docsearch.algolia.com/).
2. Escribe la URL de despliegue donde acabará publicado tu módulo en un entorno de producción (por ejemplo, `https://ies-ejemplo.github.io/programacion/`).
3. En menos de 48 horas el motor de rastreo aceptará la solicitud y te remitirá por correo las credenciales unívocas de tu instituto o plataforma: `appId`, `apiKey` e `indexName`.

### 2. Inyección en Docusaurus

Abre el panel de control maestro (`docusaurus.config.ts` o `.js` clásico) y sitúate cerca del final de archivo, buscando la zona dedicada a `themeConfig`. 

Únicamente hay que incrustar el campo `algolia` dentro. La lupa interactiva se auto-pintará en ella:

```javascript title="docusaurus.config.ts"
export default {
  // ...resto de configuraciones del curso...
  themeConfig: {
    // highlight-start
    algolia: {
      // 1. Reemplaza estas tres variables de entorno con el email de DocSearch
      appId: 'IDENTIFICADOR_1X',
      apiKey: 'APIKEY_PUBLICA_BUSQUEDA',
      indexName: 'NOMBRE_CLAVE_MODULO',
      
      // 2. Opcional - Vital si en un Docusaurus guardas los apuntes de múltiples cursos
      contextualSearch: true,
      
      // 3. Recomendado - Filtros de rastreo
      searchParameters: {},
    },
    // highlight-end
    navbar: {
      title: 'Desarrollo de Interfaces',
      // ...
```

### 3. Prueba y Renderizado de Lupa

:::tip[Reinicio Absoluto de Instancia]
Ten en consideración que las variables pesadas (como mapas de sitio, cabeceras principales, colores de CSS nativo u opciones de red Algolia) precisan inyectarse antes del procesamiento base del servidor. **Obligatoriamente debes detener tu consola activa (Ctrl+C en NodeJS)** y revigorizar tu entorno lanzando un nuevo `npm run start`.
:::

Al completarse el renderizado en consola sin excepciones de red, percibirás visualmente una flamante barra de "Buscar" adosada permanentemente al extremo derecho del `<Navbar>` superior. 

Su respuesta está completamente mapeada. Tus alumnos, desde hoy, podrán localizar instantáneamente aquel tema concreto del examen usando el clásico patrón universal `Ctrl + K` (o pulsar directamente la lupa virtual).
