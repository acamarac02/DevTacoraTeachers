---
title: "Elaboración de Apuntes"
sidebar_position: 3
description: Guía rápida de metadatos (Frontmatter) y sintaxis Markdown para la creación de contenidos.
---

# Elaboración de Apuntes

¡Por fin hemos llegado al corazón de Docusaurus! Una vez que nuestra estructura de archivos y navegación está lista, es el momento de empezar a redactar el contenido. 

Docusaurus utiliza **Markdown** (específicamente MDX, que nos permite incrustar código interactivo), un lenguaje extremadamente sencillo ideado para escribir rápido sin levantar las manos del teclado. 

Cada vez que crees un archivo `.md`, seguirás dos pasos fundamentales: configurar el *Frontmatter* y redactar usando Markdown.

---

## 1. El "Carnet de Identidad": Frontmatter

Al crear tus propios archivos `.md`, verás que la parte superior siempre contiene unas líneas delimitadas por tres guiones (`---`). Este bloque se denomina **Frontmatter**.

El Frontmatter contiene los **metadatos** del archivo; es la información técnica que Docusaurus necesita para saber cómo tratar esa página.

```markdown title="Ejemplo de Frontmatter"
---
title: "Elaboración de Apuntes"
sidebar_position: 3
description: Guía rápida de metadatos (Frontmatter)...
---

Aquí comienzan tus apuntes y lo que verán los alumnos...
```

Los campos más útiles que usaréis son:
*   **`title`**: Si no pones un `# Título` grande en el archivo, Docusaurus usará este campo como título principal de la página. Además, es el nombre que aparecerá en la pestaña del navegador.
*   **`sidebar_position`**: Vital para ordenar. Por defecto, Docusaurus ordena los apuntes alfabéticamente. Si quieres forzar el orden, asigna `1`, `2`, `3`... y tendrás el control absoluto.
*   **`description`**: Muy útil para SEO (buscadores) y para dar contexto sobre el tema. También es el resumen que aparece en el directorio que contiene el enlace a la página.

---

## 2. Sintaxis Markdown

El gran poder de Markdown es que es texto plano que se convierte mágicamente en un diseño web bonito. Aquí tienes una "chuleta" rápida con lo que más utilizaréis en el día a día.

### Textos y Títulos
Los títulos se definen con la almohadilla (`#`). Cuantas más almohadillas, más pequeño será el título y mayor será su nivel de indentación en el menú de la derecha. Para poner en negrita, usa `**` y para cursiva `*`.

```markdown
# Título Principal (h1)
## Subtítulo (h2)
### Apartado (h3)

Esto es un texto normal donde quiero destacar **algo muy importante en negrita** y algo en *cursiva*.
```

### Listas
Las listas son facilísimas de crear:

```markdown
Lista desordenada:
* Primer punto
* Segundo punto
  * Sub-punto (tabulando)

Lista ordenada:
1. Paso uno
2. Paso dos
```

El código anterior se verá en la web como:

Lista desordenada:
* Primer punto
* Segundo punto
  * Sub-punto (tabulando)

Lista ordenada:
1. Paso uno
2. Paso dos

### Enlaces e Imágenes
Siguen una estructura muy parecida. El texto entre corchetes `[ ]` y la ruta entre paréntesis `( )`. Las imágenes simplemente llevan una exclamación `!` delante.

```markdown
[Entrar en la web de Docusaurus](https://docusaurus.io/)

![Logo del curso](/img/logo.png)
```

:::tip[Organización de imágenes]
Para mantener el proyecto ordenado, es recomendable crear una carpeta llamada `0-img` dentro de cada unidad de trabajo. De esta forma, las imágenes de cada sección estarán localizadas y no se mezclarán con las de otras unidades, facilitando mucho el mantenimiento del curso.
Por ejemplo:

```text title="Ejemplo Final de Estructura de PIA"
📁 docs/
 └── 📁 2526-pia/
      ├── 📄 index.md             
      ├── 📄 _category_.json      
      ├── 📁 0-img/               (Imágenes del apartado principal)
      │   └── 🖼️ logo-pia.png
      │
      ├── 📁 01-introduccion/     (Tema 1)
      │   ├── 📁 0-img/           (Imágenes del tema 1)
      │   ├── 📄 _category_.json
      │   ├── 📄 01-conceptos.md
      │   └── 📄 02-historia.md
```

:::


### Código
Como docentes de informática, este es el apartado estrella. Para añadir código en línea solo hay que usar tildes invertidas (\`). Para bloques de código, se usan tres tildes (\`\`\`) y el nombre del lenguaje para habilitar el resaltado de sintaxis.

````markdown
Fíjate en esta variable `const miVariable = 5;`.

Y aquí un bloque completo:
```javascript
function saludarGente() {
  console.log("¡Hola alumnos!");
}
```
````

### Admoniciones (Alertas)
Ya hemos visto los famosos recuadros de colores. Docusaurus tiene varios nativos: `note`, `tip`, `info`, `warning`, y `danger`.

```markdown
:::tip[Consejo del Profesor]
Dedica siempre la primera clase a explicar las normas del módulo.
:::

:::danger[¡Peligro!]
Si borras la carpeta `node_modules` tendrás que volver a lanzar `npm install`.
:::
```

---

## 3. Ocultar Borradores al Alumnado

Durante el desarrollo del curso, es muy común estar redactando un tema de forma pausada o tener archivos incompletos, por ejemplo, lecciones futuras, que aún no quieres que los alumnos descubran.

Para evitar que Docusaurus genere y haga público ese archivo en el menú web, basta con añadir un **guion bajo** (`_`) al principio del nombre del archivo o carpeta.

```text title="Ejemplo de ocultación"
📁 03-bases-datos/
 ├── 📄 _category_.json     (Archivo especial, este Docusaurus sí lo procesa)
 ├── 📄 01-introduccion.md  (Público y visible)
 └── 📄 _02-consultas.md    <-- Fichero oculto. Los alumnos no podrán verlo.
```

Cualquier documento `.md` o directorio que comience por el guion bajo será ignorado por el menú de navegación de Docusaurus de forma transparente. Podrás seguir trabajando tus apuntes a tu ritmo desde el editor y, cuando decidas publicarlos para la clase, simplemente renómbralos borrando ese guion bajo inicial.

:::tip[Repositorios Públicos e Información Sensible]
Ocultar un fichero con el prefijo `_` **solo evita que aparezca en el menú de la web final de Docusaurus**. Si el código base del proyecto está almacenado en un repositorio público (GitHub o GitLab), cualquier alumno que entre al historial del repositorio podrá buscar, abrir y leer el archivo original en Markdown. Por tanto, nunca debes guardar en este sistema futuros exámenes, pruebas de evaluación ni información sensible.
:::