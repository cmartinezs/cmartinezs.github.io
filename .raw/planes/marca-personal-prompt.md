Necesito que prepares el plan para ejecución incremental.

> **Todo hazlo en una nueva rama `plan-marca-personal` sin tocar la rama principal**

Contexto:
El plan está en `.raw/plan-marca-personal/`.

Archivos principales:
- `05_backlog_detallado.md`
- `07_spec_claude_code.md`
- `08_matriz_backlog_vs_claude.md`
- `09_claude_code_batches.md`
- `10_copy_base.md`
- `11_checklist_qa_seo_conversion.md`

Objetivo:
Dejar el proyecto listo para avanzar por fases/batches usando instrucciones cortas como:
- “avanza con la siguiente tarea”
- “continúa con la siguiente fase”
- “sigue con el plan”

Tarea de este paso:
1. Revisa los documentos del plan.
2. No implementes cambios funcionales en el sitio todavía.
3. Crea el archivo `.raw/plan-marca-personal/00_estado_avance.md`.
4. En ese archivo registra los batches de `09_claude_code_batches.md` con este formato:

```md
# Estado de avance — Marca personal

## Reglas de avance

- Ejecutar siempre el primer batch con estado `pendiente`.
- Cambiar a `en_progreso` antes de modificar código.
- Cambiar a `realizado` solo si el batch queda implementado y validado.
- No saltar batches salvo instrucción explícita.
- No reabrir batches realizados salvo instrucción explícita.
- No ejecutar más de un batch por instrucción del usuario.
- Al finalizar cada batch, registrar resumen breve, archivos tocados y resultado de build.

## Batches

| Batch | Nombre | Estado | Tareas MP | Última actualización |
|---|---|---|---|---|
| 0 | Preparación y lectura del repo | pendiente | N/A | - |
| 1 | Hero data-driven y posicionamiento | pendiente | MP-001, MP-002, MP-003, MP-004 | - |
| 2 | Modelo de servicios y data | pendiente | MP-005, MP-006, MP-007 | - |
| 3 | UI de servicios | pendiente | MP-008 | - |
| 4 | Casos: modelo y data | pendiente | MP-009, MP-010 | - |
| 5 | Casos: componentes e integración | pendiente | MP-011, MP-012, MP-013 | - |
| 6 | Experiencia enriquecida | pendiente | MP-014, MP-015, MP-016 | - |
| 7 | Resumen ejecutivo de CV | pendiente | MP-017 | - |
| 8 | Forma de trabajo | pendiente | MP-018, MP-019, MP-020 | - |
| 9 | Laboratorio de producto | pendiente | MP-021, MP-022, MP-023, MP-024 | - |
| 10 | Stack con criterio | pendiente | MP-025, MP-026, MP-027 | - |
| 11 | Alianzas y conversión | pendiente | MP-028, MP-029, MP-030, MP-031, MP-032 | - |
| 12 | Navegación, metadata y páginas internas | pendiente | MP-033, MP-034, MP-035, MP-036 | - |
| 13 | QA final | pendiente | MP-037, MP-038, MP-039, MP-040 | - |

## Historial de ejecución

Aún no hay batches ejecutados.
```

5. No modifiques archivos fuera de `.raw/plan-marca-personal/00_estado_avance.md`.
6. No ejecutes implementación todavía.
7. Al terminar, dime solamente:
   * archivo creado,
   * cantidad de batches registrados,
   * siguiente batch pendiente.