---
title: "Teoría: Introducción a Supabase y Storage"
sidebar_position: 1
description: "Diferencias con otros BaaS y teoría sobre el almacenamiento de archivos pesados (imágenes, documentos) con Supabase."
---

En este documento introduciremos **Supabase** como una alternativa de código abierto robusta centrada en PostgreSQL (PaaS/BaaS) que además ofrece potentes servicios complementarios.
Especificamente se explicará la necesidad de un sistema de **Storage** y por qué nunca guardar archivos pesados (como imágenes o vídeos) directamente en la base de datos relacional de texto.
Veremos su funcionalidad y los conceptos detrás de URLs, permisos del *bucket* (carpeta en la nube) y transferencia de blobs o archivos binarios.
