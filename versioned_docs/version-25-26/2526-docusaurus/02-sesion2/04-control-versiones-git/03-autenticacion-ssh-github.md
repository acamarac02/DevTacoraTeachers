---
title: "Configuración de GitHub"
sidebar_position: 3
description: Aprende a crear claves criptográficas para que GitHub confíe ciegamente en tu ordenador sin pedirte contraseñas.
---

A mediados de 2021, GitHub eliminó la posibilidad de iniciar sesión desde la terminal utilizando nuestra contraseña tradicional por estrictos motivos de seguridad. 

Aunque los IDE modernos como Antigravity o VSCode tienen botones integrados que permiten autorizar el acceso abriendo el navegador web, el estándar profesional de la industria sigue siendo la generación de un par de **Claves SSH** (llaves criptográficas). 

## ¿Por qué generar Claves SSH?

Configurarlas es un proceso que solo harás **una vez en la vida** por ordenador. A cambio, obtienes beneficios enormes:
- GitHub reconocerá tu portátil instantáneamente.
- Jamás volverás a tener que introducir un token o una contraseña al sincronizar tu trabajo.
- Es el método más rápido y con menos fricción a largo plazo.

## 1. Generar tu Llave Criptográfica

Abre la terminal integrada de tu IDE y ejecuta el siguiente comando, asegurándote de sustituir el correo por el tuyo real (el mismo que usaste para crear tu cuenta de GitHub):

```bash
ssh-keygen -t ed25519 -C "tu_correo@educacion.es"
```

El sistema te hará tres preguntas cortas:
1. **Enter file in which to save the key**: Pulsa simplemente la tecla `Enter` para dejar la ruta predeterminada.
2. **Enter passphrase**: Puedes dejarla en blanco (pulsando `Enter`) para mayor comodidad, o añadir una contraseña extra si quieres máxima seguridad.
3. **Enter same passphrase again**: Pulsa `Enter` de nuevo. 

Tus llaves se acaban de crear mágicamente de forma oculta en tu ordenador.

## 2. Copiar tu Llave Pública

Se han creado dos ficheros (como dos mitades de un billete). Una es privada y **nunca debes enseñársela a nadie**, y la otra es tu clave *Pública*, que es la que debes meter dentro de GitHub.

Vamos a leer el contenido de tu clave pública y copiarlo al portapapeles.

**En macOS o Linux:**
```bash
cat ~/.ssh/id_ed25519.pub
```

**En Windows:**
```bash
cat ~/.ssh/id_ed25519.pub
```
*(Selecciona y copia todo el galimatías de letras raras que te aparecerá en la consola, asegurándote de empezar por `ssh-ed25519...`).*

## 3. Pegar la llave en GitHub

Ahora tenemos que decirle a GitHub "esta es la llave de la cerradura de mi casa".

1. Entra en tu cuenta de [GitHub.com](https://github.com/).
2. Arriba a la derecha, haz clic sobre tu foto de perfil y selecciona **Settings** (Configuración).
3. En la barra lateral izquierda, busca y pulsa sobre **SSH and GPG keys**.
4. Haz clic en el botón verde **New SSH key**.
5. Rellena los datos:
   - **Title**: Pon un nombre descriptivo para acordarte de qué ordenador es (ej: `Portatil Instituto` o `MacBook Casa`).
   - **Key type**: Déjalo en *Authentication Key*.
   - **Key**: **Pega aquí** todo el texto raro que copiaste de la terminal en el paso anterior.
6. Pulsa en **Add SSH key**.

¡Y ya estaría! Tu ordenador acaba de hacer un "pacto de sangre" con GitHub. A partir de ahora estarás autorizado a enviar apuntes a la nube mediante conexión remota segura.
