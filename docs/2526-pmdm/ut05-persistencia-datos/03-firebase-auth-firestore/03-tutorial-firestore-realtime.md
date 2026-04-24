---
title: "Tutorial: Firestore y Realtime"
sidebar_position: 3
description: "Tutorial práctico para crear un CRUD remoto sobre Firestore y escuchar cambios en la base de datos en tiempo real."
---

Con un usuario ya autenticado, el siguiente bloque práctico trata de guardar sus datos remotamente en la base de datos NoSQL de Google: **Firestore**.

Este tutorial cubrirá progresivamente las bases para:
- Conectar nuestra app con Firestore.
- Implementar métodos habituales de un **CRUD**: insertar un registro, consultar listas, modificar y eliminar documentos.
- Comprender e incorporar mecanismos de lectura en *Tiempo Real* (Snapshot Listeners), haciendo que cualquier cambio en la base de datos se notifique pasivamente y se observe desde el LiveData o StateFlow de nuestro **ViewModel**.
