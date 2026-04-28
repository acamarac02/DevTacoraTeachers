---
title: "Teoría: SharedPreferences"
sidebar_position: 1
description: "Conceptos básicos de SharedPreferences, cuándo usarlo y cuándo no para persistencia sencilla."
---

En el mundo del desarrollo Android, a menudo necesitamos guardar datos que sobrevivan al cierre de la aplicación. Para datos estructurados y complejos, utilizamos bases de datos como **Room** (que veremos en la siguiente sección), pero ¿qué pasa si solo queremos guardar configuraciones sencillas, como si el usuario tiene el "modo oscuro" activado o recordado su email?

Aquí es donde entra **SharedPreferences**.

## ¿Qué es SharedPreferences?

`SharedPreferences` es una interfaz de Android que nos permite guardar y recuperar pequeñas cantidades de datos primitivos en forma de pares de **clave-valor** (key-value). Estos datos se guardan en un archivo XML privado dentro del almacenamiento interno de la aplicación, por lo que otras aplicaciones no tienen acceso a ellos.

### Tipos de datos soportados

Los tipos de datos que puedes almacenar directamente son:
- `boolean` (verdadero o falso)
- `float` (números decimales)
- `int` (números enteros)
- `long` (enteros grandes)
- `String` (cadenas de texto)
- `Set<String>` (conjuntos de cadenas)

:::info[Datos complejos u objetos]
Si necesitas guardar un objeto Java completo (como una clase `Usuario`), `SharedPreferences` no es la herramienta adecuada por sí sola. Tendrías que serializarlo a JSON usando librerías como *Gson* o *Moshi* y guardarlo como un simple `String`. Para datos más robustos, daremos el salto a bases de datos.
:::

## Cómo funciona internamente

Para acceder a las preferencias, necesitas el `Context` de la aplicación. Puedes imaginar los SharedPreferences como un diccionario intermedio: pides el contenido por su nombre (clave) y te devuelve su valor.

Para **escribir** datos, utilizamos la interfaz `SharedPreferences.Editor`. Para **leer**, pedimos directamente la clave al objeto `SharedPreferences`.

### Lectura de datos

Para recuperar un dato, indicamos su clave. Es obligatorio proporcionar un **valor por defecto** (default value). Este valor se devolverá en caso de que la clave que buscamos no exista aún en el XML (por ejemplo, la primera vez que el usuario instala y abre la app).

```java title="Ejemplo ilustrativo de lectura (no funcional completo)"
// Aseguramos el Context y el nombre de nuestro archivo de preferencias
SharedPreferences sharedPref = context.getSharedPreferences("PreferenciasApp", Context.MODE_PRIVATE);

// Buscamos "modo_oscuro". Si no existe, devolverá false
boolean isModoOscuro = sharedPref.getBoolean("modo_oscuro", false);
```

### Escritura de datos

Para escribir, primero solicitamos un `Editor`, añadimos todas las combinaciones que queramos guardar en la sesión actual de edición y finalmente aplicamos los cambios.

```java title="Ejemplo ilustrativo de escritura"
SharedPreferences sharedPref = context.getSharedPreferences("PreferenciasApp", Context.MODE_PRIVATE);
SharedPreferences.Editor editor = sharedPref.edit();

// Preparamos los datos
editor.putBoolean("modo_oscuro", true);
editor.putString("nombre_usuario", "AliciaCamara");

// Ejecutamos el guardado
editor.apply(); 
```

:::tip[`apply()` vs `commit()`]
Casi siempre debes utilizar `apply()`. Este método guarda los cambios en memoria inmediatamente pero escribe en el disco duro **de forma asíncrona**, por lo que no bloquea la interfaz de usuario. En cambio, `commit()` guarda de forma **síncrona**, lo que puede causar "congelamientos" si se ejecuta en el hilo principal y tarda unos milisegundos de más.
:::

## Cuándo usar SharedPreferences (y cuándo NO)

### Casos de uso ideales ✅
- Guardar **ajustes** de la aplicación (configuraciones, tema claro/oscuro, idioma).
- Guardar el estado de banderas iniciales (ej: `es_primera_vez_abierta = false`).
- Almacenar tokens de sesión o IDs de usuario temporalmente tras iniciar sesión.

### Cuándo NO usarlo ❌
- **Listas o datos relacionales**: Si intentas guardar listas de productos, facturas, mensajes de un chat, etc., debes usar **Room**.
- **Archivos pesados**: Nunca guardes imágenes o contenido multimedia transformados en base64 aquí, saturarías la lectura del archivo XML.
- **Búsquedas complejas**: No puedes buscar un valor filtrando u ordenando. Solo puedes acceder si sabes la clave exacta.

---

Una vez asentados estos conceptos, en el próximo apartado nos ensuciaremos las manos con un caso real. Implementaremos un `Repository` que acceda a estos `SharedPreferences` para mostrar datos y controlar nuestra App utilizando un **ViewModel** y **DataBinding** para reflejar los cambios en un Perfil de Usuario.
