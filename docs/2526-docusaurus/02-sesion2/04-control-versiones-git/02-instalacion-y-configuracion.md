---
title: "Instalación y Configuración"
sidebar_position: 2
description: Guía paso a paso para instalar Git en tu equipo y configurarlo por primera vez.
---

Antes de poder gobernar el historial de nuestros apuntes, necesitamos instalar el motor local de Git en nuestro equipo e indicarle nuestra identidad para que firme nuestros cambios correctamente.

## Instalación del Software

A diferencia de otros programas con una gran interfaz visual, Git se instala a nivel de sistema operativo y funciona silenciosamente en segundo plano.

### Entorno Windows
Al instalar Git en Windows, se incluye automáticamente **Git Bash**, una terminal especializada que te permitirá usar comandos profesionales sin depender del viejo CMD.

1. Accede a la [página oficial de descarga de Git para Windows](https://git-scm.com/download/win).
2. Descarga el instalador de **64-bit Git for Windows Setup**.
3. Ejecuta el archivo descargado. Avanza aceptando todas las opciones predeterminadas (el asistente tiene muchas pantallas, pero la configuración por defecto es perfecta para nuestro uso).

### Entorno macOS
macOS incluye una versión súper básica de Git por defecto. Sin embargo, para no encontrarnos con errores de compatibilidad absurdos, se recomienda encarecidamente instalar la última versión limpia a través de la terminal usando Homebrew:

```bash
brew install git
```

### Entorno Linux (Ubuntu/Debian)
En distribuciones basadas en Debian como Ubuntu, la instalación de Git es directa a través del gestor de paquetes avanzado (APT). Abre la terminal y ejecuta:

```bash
sudo apt update
sudo apt install git
```

:::info[Verificar Instalación]
Para confirmar que todo ha ido bien, abre la terminal integrada de Antigravity y ejecuta el comando `git --version`. Debería devolverte el número de versión exacta que acabas de instalar.
:::

## Configuración de Identidad (Global)

Antes de empezar a tocar el código de Docusaurus, Git necesita saber quién eres. Esto no tiene nada que ver con iniciar sesión (eso es de GitHub). Aquí simplemente estamos configurando la "firma" que Git estampará en cada versión que guardes. Esto es vital en departamentos de informática donde varios docentes tocan el mismo temario.

Abre la terminal integrada del IDE (en Antigravity puedes hacerlo desde el menú superior o arrastrando la pestaña inferior) y ejecuta **uno a uno** los siguientes comandos, sustituyendo los textos entre comillas por tus datos reales:

```bash
git config --global user.name "Tu Nombre Real o Alias Docente"
```

```bash
git config --global user.email "tu_correo@educacion.es"
```

:::tip[El correo importa a futuro]
Si planeas enlazar este trabajo con tu cuenta en la nube de GitHub posteriormente, asegúrate de utilizar aquí el **mismo correo electrónico** que usaste para crear tu cuenta en la plataforma web.
:::

¡Listo! Ya tienes el motor instalado y bien configurado. En la siguiente sección aterrizaremos esta tecnología dentro del proyecto de apuntes.
