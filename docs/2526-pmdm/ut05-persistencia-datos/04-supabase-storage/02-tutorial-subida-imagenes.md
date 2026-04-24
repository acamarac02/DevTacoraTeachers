---
title: "Tutorial: Subir imágenes con Retrofit y Supabase"
sidebar_position: 2
description: "Integración práctica de subida de archivos (Storage), descarga de imágenes, y ligado de su URL en Firestore."
---

El volumen final de persistencia de la unidad es el guardado y recuperación de archivos pesados de usuario (por ejemplo, subir un avatar o una foto personal). 

Este tutorial guiará al alumno para:
- Utilizar **Retrofit** para crear las llamadas y envíos multipart de la imagen hacia la REST API de **Supabase Storage**.
- Obtener y generar la ruta o URL de descarga pública/privada de dicho archivo subido.
- Realizar el flujo cruzado: Una vez se obtenga esa URL por Supabase, vincularla al perfil de nuestro usuario guardándola como string puro en **Firestore** (vinculando conocimientos del bloque de Firebase).
