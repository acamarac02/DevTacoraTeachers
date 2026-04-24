---
title: "Tutorial: CRUD y Favoritos con Room"
sidebar_position: 2
description: "Tutorial práctico para implementar operaciones CRUD locales y la funcionalidad de marcar favoritos con Room."
---

En este tutorial paso a paso crearemos una aplicación de listas que requiera persistencia de datos estructurados con Room. 
Integradremos la capa de persistencia (Entity, DAO y Database) junto a un **Repository** de la arquitectura MVVM.

Nos enfocaremos especialmente en:
- Operaciones **CRUD** (Crear, Leer, Actualizar, Borrar) sobre una tabla.
- Funcionalidad específica de **marcar como favorito/desmarcar**, actualizando el listado en la vista en tiempo real al reaccionar a la fuente de la verdad (la base de datos local).
- Generar e instanciar la base de datos sin sobrecargar la UI y gestionar la asincronía limpiamente desde el **ViewModel**.
