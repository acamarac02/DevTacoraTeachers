---
title: "Tutorial: Firebase Authentication"
sidebar_position: 2
description: "Paso a paso sobre cómo registrar un usuario, iniciar sesión y cerrar sesión con Email/Password o Google Firebase."
---

Este tutorial constará de la implementación progresiva de un sistema de Control de Sesión utilizando **Firebase Authentication**. Se guiará al alumno a través de los diversos métodos:
- Registro de nuevos usuarios mediante correo electrónico y contraseña.
- Integración de login directo a través de cuentas de **Google** (el estándar de facto habitualmente).
- Gestión del estado de la sesión, comprobando si el usuario ya está *logeado* y permitiendo cerrar la sesión.
- Implementación de DataBinding e inyección (opcional) a un AuthRepository que centralice estas llamadas de autenticación.
