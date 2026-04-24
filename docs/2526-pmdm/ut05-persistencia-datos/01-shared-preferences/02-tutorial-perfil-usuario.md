---
title: "Tutorial: Perfil de usuario"
sidebar_position: 2
description: "Tutorial práctico conectando SharedPreferences con ViewModel y Repository mediante DataBinding."
---

En este documento se desarrollará un tutorial guiado paso a paso para crear una pantalla de perfil de usuario. 
Guardaremos el nombre y preferencias (ej. notificaciones activadas) del usuario de manera persistente local. 

El tutorial priorizará la correcta estructura arquitectónica enseñando cómo:
- Utilizar **DataBinding** en el layout para enlazar los datos.
- Implementar un **ViewModel** con un estado (StateFlow/LiveData) que gestione la UI.
- Crear un **Repository** que se encargará interaccionar directamente con la API de `SharedPreferences`.
