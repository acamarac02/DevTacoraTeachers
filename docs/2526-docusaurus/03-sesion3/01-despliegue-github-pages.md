---
title: "Despliegue con GitHub Pages"
sidebar_position: 2
description: "Publicación del curso en producción de forma manual usando el compilador de Docusaurus hacia GitHub Pages."
---

En este apartado documentaremos el proceso para publicar nuestros apuntes en internet a voluntad. Aunque la automatización total es potente, en el ecosistema educativo suele ser preferible conservar el control manual sobre **cuándo** se publican los cambios a producción. De ese modo, podemos guardar nuestro trabajo de resúmenes o borradores en GitHub sin peligro de que los alumnos lo lean prematuramente.

Por ello, utilizaremos el comando nativo de despliegue de Docusaurus: compilará y publicará la web en **GitHub Pages** únicamente en el momento que nosotros lo ordenemos explícitamente.

## Configuración de Docusaurus

Antes de poder realizar el despliegue, debemos ajustar ciertos parámetros en el núcleo de Docusaurus para que entienda en qué dominio y ruta vivirá el sitio al estar público. Abre tu `docusaurus.config.js` y edita las siguientes variables en la raíz de tu configuración:

```javascript title="docusaurus.config.js"
const config = {
  // Dominios y rutas de producción
  url: 'https://TU-USUARIO.github.io', // Cambia TU-USUARIO por tu nombre en GitHub
  baseUrl: '/NOMBRE-DEL-REPO/', // Nombre exacto de tu repositorio. Observa las barras "/"

  // Metadatos requeridos por el script de despliegue
  organizationName: 'TU-USUARIO', // Usualmente tu nombre de usuario de GitHub
  projectName: 'NOMBRE-DEL-REPO', // Nombre del repositorio
  deploymentBranch: 'gh-pages', // Rama oculta que creará Docusaurus para alojar la web
  trailingSlash: false, 
  
  // ...resto de opciones de Docusaurus...
```

:::info[Sobre el mapeo baseUrl]
Al alojar este proyecto en tu propia cuenta formativa de GitHub, la URL resultante no es un dominio absoluto sino que cuelga sobre tu nombre (`.io/repo/`). Por ello es mandatorio preservar la propiedad `baseUrl` rodeada de barras invertidas (`/`).
:::

## Entorno de Repositorio (Paso Único)

Debemos configurar nuestro repositorio en GitHub para indicarle que el origen visual de la página web será la rama donde Docusaurus volcará el resultado. Esta acción de mantenimiento solo recae en nosotros la primera vez:

1. Ingresa a la página principal de tu repositorio específico en [GitHub.com](https://github.com) (por ejemplo: `github.com/tu-usuario/tu-repo`).
2. Dirígete a la pestaña **Settings** (Ajustes) que aparece en el menú horizontal del propio repositorio (junto a *Code*, *Issues*, *Pull requests*, etc.). **Importante:** No debes pulsar en los *Settings* globales de tu perfil de usuario situados arriba a la derecha.

![Repo settings](0-img/repo-settings.png)

3. Tras entrar, en el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment**, busca el menú desplegable asignado al parámetro **Source** y asegúrate de elegir la opción clásica **Deploy from a branch**.
5. Justo debajo, en el bloque **Branch**, selecciona la rama que hemos bautizado como `gh-pages` y pulsa **Save**. 

*(Nota: Si GitHub no te permite seleccionar la rama `gh-pages` porque afirma que "no existe", significa simplemente que debes esperar a lanzar el comando de despliegue de la siguiente sección por primera vez para que Docusaurus la genere automática).*

## Operación de Despliegue (Publish)

Cuando certifiques que tus apuntes están listos para ser consumidos por el aula y quieras publicarlos, el proceso consiste exclusivamente en ejecutar la orden de publicación local.

:::warning[Primer despliegue]
Si es la **primera vez** que vas a publicar el sitio, deberás crear la rama `gh-pages` en GitHub. Para ello, escribe este comando por única vez en la consola de tu editor:

```bash
git push origin HEAD:gh-pages
```
Una vez empujado el esqueleto básico en GitHub, el flujo normal ya consiste en ejecutar el comando de despliegue.
:::

Abre la terminal integrada en tu editor y lanza el proceso estandarizado de compilación. Por defecto, Docusaurus detectará inteligentemente las credenciales de GitHub que ya usamos a diario en nuestro flujo de trabajo:

```bash
npm run deploy
```

*(Nota de seguridad: Si en un futuro cambias de ordenador o la consola informa de problemas de permisos por tener varias cuentas de Github cruzadas, puedes forzar empíricamente el usuario prefijando la variable de esta forma: `GIT_USER=TU-USUARIO npm run deploy`).*

### Analizando el comando de despliegue
En cuestión de un minuto, esta instrucción unificada realizará el siguiente listado de tareas invisibles en tu máquina local:
1. Construirá y empaquetará una versión ultraligera y cacheable de todos tus archivos Markdown y componentes React (exactamente igual que usar `npm run build`).
2. Traspasará ese resultado minificado en la rama aislada `gh-pages`.
3. Hará el empuje (*push*) automático de esa pequeña rama sobre el repositorio remoto público de GitHub, desencadenando la exposición inmediata del temario web. 
4. Garantizará que la rama esencial de trabajo (`main`) se mantenga inmaculada como simple código fuente, a salvo de basura de compilación.

## Flujo Normal de Trabajo (Con Despliegue)

Para tu día a día como docente, el ciclo de trabajo de los apuntes queda resumido y estandarizado en el siguiente proceso lógico cada vez que prepares una nueva clase:

1. Modificas o creas los archivos `.md`.
2. Haces seguimiento de los cambios en Git: `git add .`
3. Confirmas el hito de tu nuevo trabajo: `git commit -m "Terminada la unidad 4"`
4. Subes tu código fuente original al repositorio como salvaguarda: `git push`
5. Si además evalúas que este material ya debe ser visible en internet por tus alumnos, ejecutas el empaquetado: `npm run deploy`.

Visualmente de forma arquitectónica, el flujo de interacciones se diagrama de este modo:

```mermaid
sequenceDiagram
    participant P as Profesor
    participant D as Carpeta Docusaurus
    participant M as Repositorio (Rama main)
    participant GP as GitHub Pages (Rama gh-pages)

    P->>D: Escribe formato Markdown / MDX
    P->>M: git add .
    P->>M: git commit -m "Añade apuntes"
    P->>M: git push
    Note over P,M: Código fuente a salvo en la nube
    
    opt Publicar material a la clase
        P->>D: npm run deploy
        D->>GP: Compilación de la web automatizada 
        D->>GP: Push automático a la rama gh-pages
    end
```

## 📝 Actividad: Tu primer despliegue real

Llegó el momento de "romper el huevo" y poner tus apuntes por primera vez en internet. Sigue estos pasos para sincronizar tu trabajo local con tu servidor público en GitHub Pages:

1.  **Genera contenido nuevo**: Abre cualquiera de tus ficheros `.md` y añade un par de líneas o una imagen. Crea también un fichero nuevo dentro de la carpeta `03-sesion3` llamado `prueba-despliegue.md` con un pequeño saludo.
2.  **Asegura el código fuente**: Registra tus cambios en Git y súbelos a tu repositorio central (`main`) para no perder el trabajo:
    ```bash
    git add .
    git commit -m "Añadiendo contenido de prueba para despliegue"
    git push
    ```
3.  **Lanza el despliegue**: Ejecuta la orden mágica para que Docusaurus convierta tu código en una web real:
    ```bash
    npm run deploy
    ```
4.  **Verificación Final**: Abre tu navegador y entra en la URL de tu proyecto (ej: `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`). Comprueba que el nuevo fichero que creaste aparece en el menú lateral y que los cambios son visibles para cualquiera.

:::tip[¡Felicidades!]
Si has llegado hasta aquí y ves tus cambios en la web, ya eres un "Docente Docs-as-Code" oficial. Tu material ya no vive solo en tu ordenador, sino que está disponible para todo el mundo (y para tus alumnos) desde cualquier rastro de internet.
:::

