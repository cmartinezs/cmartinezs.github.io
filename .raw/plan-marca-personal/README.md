# Guía de alineación — Backlog detallado vs Spec para Claude Code

## Problema detectado

El backlog detallado (`05_backlog_detallado.md`) y la spec para Claude Code (`07_spec_claude_code.md`) están correctamente orientados al mismo objetivo, pero no conversan de forma explícita.

El backlog trabaja a nivel de tareas individuales:

- `MP-001`, `MP-002`, `MP-003`, etc.
- Cada tarea tiene tamaño, tipo, archivos, acción, resultado esperado y criterios de aceptación.
- Sirve para planificación, estimación, revisión y control de avance.

La spec para Claude Code trabaja a nivel de fases:

- Fase 1: Hero y posicionamiento.
- Fase 2: Servicios.
- Fase 3: Casos.
- etc.
- Sirve como instrucción macro para que Claude entienda dirección, restricciones y arquitectura esperada.

## Riesgo actual

Si se usa solo la spec para Claude Code, Claude puede implementar una fase demasiado grande en un único cambio.

Si se usa solo el backlog, Claude puede ejecutar tareas individuales sin entender la narrativa global.

La solución es agregar una capa intermedia:

> Fase Claude Code → Épica Backlog → Tareas MP → Archivos → Criterios → Orden de ejecución.

## Cómo usar este paquete

Este paquete agrega tres documentos:

1. `08_matriz_backlog_vs_claude.md`
   - Mapea cada fase de Claude con sus tareas `MP`.
   - Permite saber qué backlog ejecuta cada fase.

2. `09_claude_code_batches.md`
   - Agrupa tareas en lotes pequeños para pasárselos a Claude Code.
   - Cada lote tiene objetivo, tareas incluidas, archivos esperados y DoD.

3. `07_spec_claude_code_v2_trazable.md`
   - Reescribe la spec original agregando IDs de backlog.
   - Mantiene la visión macro, pero ahora cada fase tiene trazabilidad explícita.

## Recomendación de trabajo

No le entregues a Claude Code toda la spec completa si quieres control fino.

Usa este flujo:

1. Leer la spec trazable completa para contexto.
2. Ejecutar solo un batch a la vez.
3. Revisar diff.
4. Ejecutar build.
5. Recién después pasar al siguiente batch.

## Regla práctica

- La spec responde: **qué transformación global queremos**.
- El backlog responde: **qué tareas existen**.
- Los batches responden: **qué le pido a Claude Code ahora**.
- La matriz responde: **cómo demuestro trazabilidad**.
