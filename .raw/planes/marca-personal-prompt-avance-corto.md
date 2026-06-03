Avanza con el siguiente batch pendiente del plan.

Reglas:
1. Usa `.raw/plan-marca-personal/00_estado_avance.md` para identificar el primer batch con estado `pendiente`.
2. Consulta en `.raw/plan-marca-personal/09_claude_code_batches.md` solo la sección correspondiente a ese batch.
3. Si necesitas detalle adicional, consulta solo las tareas MP asociadas en `.raw/plan-marca-personal/05_backlog_detallado.md`.
4. No releas todo el plan completo.
5. No ejecutes más de un batch.
6. Antes de modificar código, marca el batch como `en_progreso` en `00_estado_avance.md`.
7. Implementa únicamente el alcance de ese batch.
8. No mezcles cambios de otros batches.
9. Ejecuta `npm run build`.
10. Si el build pasa y el alcance queda completo, marca el batch como `realizado`.
11. Si queda incompleto o falla el build, deja el batch como `en_progreso` y registra el motivo.
12. Actualiza el historial de ejecución en `00_estado_avance.md` con:
    - batch ejecutado,
    - tareas MP cubiertas,
    - archivos modificados/creados,
    - resultado de build,
    - pendientes si existen.

No hagas commit automáticamente.

Al finalizar responde solo con:
- batch ejecutado,
- estado final,
- archivos tocados,
- resultado de build,
- siguiente batch pendiente.