Actúa como frontend senior especializado en UX, arquitectura de información, navegación web y landing pages de marca personal técnica.

Necesito mejorar el menú desplegable actual de `Explorar` en mi sitio personal.

Contexto:
Mi sitio es una landing profesional de Carlos Martínez Sánchez. El objetivo de la página es funcionar como marca personal, CV profesional y canal para generar consultoría técnica, mentoring, docencia, proyectos backend y alianzas estratégicas.

Mi posicionamiento principal es:
- Backend senior
- Arquitectura de software
- Formación técnica / docencia / mentoring
- Experiencia real en sistemas de banca, e-commerce, utilities y plataformas SaaS

Actualmente el menú superior tiene navegación principal:

- Inicio
- Perfil
- Servicios
- Casos
- Método
- Stack
- Alianzas
- Contacto
- Explorar

El problema está en el dropdown de `Explorar`.

Estado actual del dropdown:
El menú muestra una lista plana como esta:

- Inicio
- Backend
- Arquitectura
- Mentoría
- Docencia
- Frontend
- Mobile
- AI
- Experiencia
- Casos
- Certificaciones
- Videojuegos
- KeyGo
- Recursos
- Contacto

Problemas detectados:
1. El menú se siente como un sitemap técnico, no como una navegación estratégica.
2. Hay demasiados ítems en una sola columna.
3. Todos los ítems tienen el mismo peso visual.
4. No existe jerarquía ni agrupación por intención.
5. Se mezclan servicios, especialidades, proyectos, experiencia y contacto.
6. `Frontend`, `Mobile` y `AI` aparecen al mismo nivel que `Backend`, lo que puede diluir mi posicionamiento principal.
7. Hay duplicación con el navbar superior, pero sin una justificación clara.
8. El menú no ayuda suficientemente a vender mi propuesta profesional.
9. Visualmente está bien integrado, pero la arquitectura de información es débil.

Objetivo:
Convertir `Explorar` en un índice estratégico de navegación interna, ordenado por intención y alineado con mi marca personal.

La idea principal:
El menú también debe comunicar posicionamiento. No debe ser solo una lista de secciones.

Recomendación conceptual:
Cambiar el enfoque de `Explorar` desde una lista plana hacia un menú agrupado por categorías.

Puedes mantener el texto `Explorar` si visualmente funciona, pero evalúa cambiarlo por una opción más clara como:
- Secciones
- Índice

Preferencia recomendada:
Usar `Secciones` si queda bien en el navbar, porque comunica mejor que es navegación interna de la landing.

Nueva arquitectura sugerida del dropdown:

Principal
- Inicio
- Perfil
- Servicios
- Método

Especialidades
- Backend
- Arquitectura
- Mentoría
- Docencia

Trayectoria
- Experiencia
- Stack
- Certificaciones

Proyectos
- Casos
- KeyGo
- Videojuegos

Recursos y contacto
- Alianzas
- Recursos
- Contacto

Tratamiento especial:
`Backend` debe seguir siendo percibido como mi foco principal, pero sin que el menú dependa solo del color activo.

Si es viable, agregar un pequeño indicador visual discreto para Backend, por ejemplo:
- Backend Core
- Backend Principal
- Backend Foco

No debe verse exagerado ni como un badge invasivo. Debe ser sutil, técnico y profesional.

Sobre Frontend, Mobile y AI:
No deberían quedar al mismo nivel narrativo que Backend, Arquitectura, Mentoría y Docencia.

Opciones válidas:
1. Moverlos dentro de `Stack`.
2. Agruparlos como parte de una categoría secundaria tipo `Stack complementario`.
3. Dejarlos fuera del dropdown principal si ya existen dentro de la sección `Stack`.

No quiero transmitir que soy “de todo un poco”. Quiero transmitir que mi foco es backend/arquitectura, con experiencia complementaria en otras áreas.

Requerimientos de UI:
1. Mantener la estética actual: fondo oscuro, sobrio, técnico, moderno.
2. Mantener coherencia visual con el navbar existente.
3. No agregar dependencias nuevas.
4. No romper navegación por anchors.
5. No romper responsive.
6. Evitar una lista excesivamente larga en una sola columna.
7. Usar una estructura más clara, idealmente con secciones internas, headings pequeños o separadores.
8. En desktop, evaluar un dropdown más ancho con 2 columnas.
9. En pantallas pequeñas, el menú debe seguir siendo legible y cómodo.
10. El menú no debe generar overflow horizontal.
11. Los ítems deben tener buen espaciado vertical.
12. Los títulos de grupo deben diferenciarse de los enlaces.
13. El estado activo debe ser claro, pero no confundirlo con hover.
14. El hover debe ser sutil y consistente con el diseño actual.
15. El dropdown debe sentirse como parte profesional del sistema visual, no como un menú improvisado.

Diseño visual sugerido en desktop:
Usar dropdown de 2 columnas o grid compacto.

Ejemplo conceptual:

Principal
- Inicio
- Perfil
- Servicios
- Método

Especialidades
- Backend  Core
- Arquitectura
- Mentoría
- Docencia

Trayectoria
- Experiencia
- Stack
- Certificaciones

Proyectos
- Casos
- KeyGo
- Videojuegos

Recursos y contacto
- Alianzas
- Recursos
- Contacto

Puedes ajustar nombres si ya existen anchors o constantes definidas, pero mantén la intención.

Requerimientos técnicos:
1. Revisar primero la implementación actual del navbar y dropdown.
2. Identificar archivos relacionados antes de modificar.
3. Si existe un archivo de datos/configuración de navegación, mover ahí la nueva estructura.
4. Si la navegación está hardcodeada, refactorizar solo lo necesario para que quede clara y mantenible.
5. Mantener tipado si el proyecto usa TypeScript.
6. No modificar secciones no relacionadas.
7. No cambiar rutas, ids o anchors salvo que sea estrictamente necesario.
8. Si cambias nombres visibles, mantener los `href`/anchors correctos.
9. Verificar que `Inicio`, `Perfil`, `Servicios`, `Casos`, `Método`, `Stack`, `Alianzas`, `Contacto` sigan funcionando.
10. Verificar que el estado activo de sección siga funcionando si existe scroll spy o lógica similar.
11. No introducir lógica compleja innecesaria.
12. No agregar librerías de UI.
13. Mantener accesibilidad básica:
- navegación por teclado si ya existe,
- aria-expanded si corresponde,
- roles adecuados si ya se usan,
- foco visible,
- cierre del menú al hacer click en un enlace.

Comportamiento esperado:
- Al abrir el menú, el usuario entiende rápidamente cómo está organizada la página.
- El menú no abruma.
- El foco profesional queda claro.
- Backend/Arquitectura/Formación técnica se perciben como el eje principal.
- Casos, KeyGo y Videojuegos aparecen como proyectos/trayectoria, no como servicios principales.
- Contacto y alianzas quedan disponibles, pero no mezclados con especialidades técnicas.
- El menú refuerza la narrativa de marca personal.

Criterios de aceptación:
- El dropdown deja de ser una lista plana.
- Los ítems están agrupados por intención.
- El menú se ve bien en desktop y mobile.
- No hay overflow horizontal.
- No se rompe el navbar.
- No se rompen anchors ni navegación.
- El foco backend/arquitectura/docencia queda más claro.
- Frontend/Mobile/AI dejan de competir visualmente con el foco principal.
- El menú se siente más profesional y estratégico.
- El build/lint pasa sin errores.
- El código queda limpio, mantenible y sin duplicación innecesaria.

Entrega esperada:
1. Primero revisa los archivos actuales relacionados con navegación/dropdown.
2. Dime brevemente qué archivos vas a tocar.
3. Aplica los cambios.
4. Al final entrega:
    - Lista de archivos modificados.
    - Resumen breve de cambios.
    - Decisiones de arquitectura de información.
    - Decisiones visuales.
    - Consideraciones responsive.
    - Confirmación de build/lint.