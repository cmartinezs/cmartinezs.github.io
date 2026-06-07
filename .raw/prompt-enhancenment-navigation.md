> **El menú ya no es solo navegación; es el mapa conceptual del sitio. La página debe ordenarse para responder a ese mapa.**

Actúa como frontend senior especializado en UX, arquitectura de información, landing pages y estructura de navegación para marca personal técnica.

El menú desplegable de `Secciones` ya quedó visualmente bien. Ahora necesito que la estructura real de la página concuerde con ese menú.

Importante:
No quiero simplemente adaptar el menú a las anclas actuales.
Quiero usar el menú actual como arquitectura objetivo y reorganizar la landing/secciones/anclas para que la página tenga una estructura coherente.

Contexto:
Mi sitio personal es una landing profesional de Carlos Martínez Sánchez. Su objetivo es funcionar como marca personal, CV profesional y canal para generar consultoría técnica, mentoring, docencia, proyectos backend y alianzas estratégicas.

Mi foco principal:
- Backend senior
- Arquitectura de software
- Formación técnica, docencia y mentoring
- Desarrollo de herramientas con y para IA aplicada
- Experiencia real en sistemas de banca, e-commerce, utilities y plataformas SaaS

Menú superior actual:
- Inicio
- Perfil
- Servicios
- Casos
- Método
- Stack
- Alianzas
- Contacto
- Secciones

Dropdown actual de `Secciones`:

Principal
- Inicio
- Perfil
- Servicios
- Método

Especialidades
- Backend core
- Arquitectura
- Mentoría
- Docencia

Capacidades complementarias
- Frontend
- Mobile
- Herramientas con IA

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

Problema:
Actualmente existen varias anclas en la landing que no están distribuidas de forma coherente con esta arquitectura. Algunas secciones existen, otras podrían estar mezcladas dentro de bloques mayores, y otras quizá necesitan convertirse en subsecciones reales.

Objetivo:
Reestructurar la landing para que su arquitectura real coincida con el menú `Secciones`, sin perder diseño, responsive ni navegación.

Regla principal:
El menú `Secciones` debe representar la estructura lógica real del sitio.

No todos los ítems del dropdown tienen que ser secciones gigantes independientes, pero sí deben apuntar a destinos reales y claros:
- sección principal,
- subsección,
- bloque interno,
- card destacada,
- módulo dentro de una sección,
- o ruta real si existe.

Arquitectura objetivo recomendada:

1. `#inicio`
   Sección inicial / Hero principal.
   Debe mantener su rol comercial fuerte:
- propuesta de valor,
- backend mantenible,
- software con criterio,
- CTA principal.

2. `#perfil`
   Sección de perfil profesional.
   Debe profundizar en quién soy:
- trayectoria,
- seniority,
- mirada de arquitectura,
- docencia aplicada,
- experiencia en sistemas reales.

3. `#servicios`
   Sección contenedora de servicios.
   Debe actuar como bloque padre de las especialidades principales.

Dentro de `Servicios`, crear o alinear subsecciones/anclas:
- `#backend`
- `#arquitectura`
- `#mentoria`
- `#docencia`

Estas anclas deben existir realmente.
Pueden ser cards, bloques o subsecciones internas, pero deben poder navegarse correctamente desde el dropdown.

4. `#capacidades`
   Sección o bloque para capacidades complementarias.
   No debe competir con Backend/Arquitectura.

Dentro de esta sección o dentro de `Stack`, crear/alinear:
- `#frontend`
- `#mobile`
- `#herramientas-ia`

Importante:
No usar `AI` como texto suelto.
Usar preferentemente:
- `Herramientas con IA`
  o
- `IA aplicada`

El mensaje debe ser:
Desarrollo herramientas con y para IA aplicadas a productividad, automatización, docencia, análisis y mejora de procesos técnicos.

No quiero parecer “AI engineer” como foco central. La IA debe aparecer como capacidad aplicada y complementaria.

5. `#experiencia`
   Sección de trayectoria profesional.
   Debe contener experiencia laboral, industrias, roles o hitos relevantes.

6. `#stack`
   Sección técnica.
   Debe mostrar tecnologías, herramientas y ecosistema técnico.
   Puede contener Backend, Frontend, Mobile e IA como stack, pero sin duplicar innecesariamente el contenido de Servicios.

7. `#certificaciones`
   Sección o bloque real de certificaciones.
   Si actualmente no existe contenido suficiente, crear una estructura simple o dejar preparado el bloque de forma sobria.
   No inventar certificaciones falsas.

8. `#casos`
   Sección de casos/proyectos.
   Debe actuar como contenedor de casos reales, proyectos o iniciativas destacadas.

Dentro de `Casos` o `Proyectos`, crear/alinear:
- `#keygo`
- `#videojuegos`

Importante:
KeyGo y Videojuegos deben percibirse como proyectos, casos, laboratorio o exploraciones, no como servicios principales.

9. `#metodo`
   Sección de método de trabajo.
   Debe explicar cómo trabajo:
- diagnóstico,
- diseño técnico,
- implementación,
- acompañamiento,
- mejora continua,
- transferencia de conocimiento.

10. `#alianzas`
    Sección orientada a colaboración.
    Debe hablar de alianzas estratégicas, proyectos, colaboración con empresas, instituciones o equipos.

11. `#recursos`
    Sección o bloque de recursos.
    Puede contener publicaciones, material docente, artículos, repositorios, guías o contenido técnico.
    Si todavía no hay contenido suficiente, dejar una estructura mínima bien integrada.

12. `#contacto`
    Sección de cierre y contacto.
    Debe tener CTA claro.

Orden recomendado de la landing:
1. Inicio
2. Perfil
3. Servicios
   - Backend
   - Arquitectura
   - Mentoría
   - Docencia
4. Método
5. Casos / Proyectos
   - KeyGo
   - Videojuegos
6. Stack / Capacidades
   - Frontend
   - Mobile
   - Herramientas con IA
7. Experiencia
8. Certificaciones
9. Alianzas
10. Recursos
11. Contacto

Puedes ajustar el orden si el proyecto actual ya tiene una narrativa mejor, pero debe haber coherencia entre:
- navbar superior,
- dropdown `Secciones`,
- orden visual de la landing,
- ids/anclas,
- scroll spy,
- contenido real.

Requerimientos técnicos:

1. Revisar primero:
- componente Navbar/Header,
- dropdown de Secciones,
- configuración de navegación si existe,
- componentes de secciones,
- ids actuales,
- anclas actuales,
- scroll spy si existe,
- estilos globales relacionados con secciones.

2. Crear o consolidar una fuente única de verdad para navegación.
   Si existe navegación duplicada, refactorizar de forma moderada.

Estructura sugerida:

```ts
type NavItem = {
  label: string;
  href: string;
  id?: string;
  description?: string;
  isCore?: boolean;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};
```
O usar una estructura equivalente compatible con el proyecto.

3. Diferenciar entre:
* navegación principal del navbar,
* navegación extendida del dropdown,
* subsecciones internas.

Ejemplo:
El navbar puede tener solo:

* Inicio
* Perfil
* Servicios
* Casos
* Método
* Stack
* Alianzas
* Contacto
* Secciones

Pero el dropdown debe permitir navegar a subsecciones:

* Backend
* Arquitectura
* Mentoría
* Docencia
* Frontend
* Mobile
* Herramientas con IA
* KeyGo
* Videojuegos
* Recursos
* Certificaciones

4. Si una subsección no existe, crearla o integrarla donde corresponde. No dejar enlaces muertos.
5. Si una ancla actual tiene otro nombre pero representa lo mismo, renombrar/alinear si no rompe nada.
6. Mantener anchors semánticos y consistentes:
* #inicio
* #perfil
* #servicios
* #backend
* #arquitectura
* #mentoria
* #docencia
* #metodo
* #casos
* #keygo
* #videojuegos
* #stack
* #frontend
* #mobile
* #herramientas-ia
* #experiencia
* #certificaciones
* #alianzas
* #recursos
* #contacto
7. Revisar scroll con header sticky/fixed.

Usar scroll-margin-top o solución equivalente para que las secciones no queden tapadas.

8. Mantener el criterio visual de secciones de pantalla completa o casi completa cuando aplique. 

Las secciones principales deben sentirse como bloques sólidos.

No quiero que una sección se vea débil o que la siguiente aparezca accidentalmente asomada por mal uso del alto.

9. Usar una clase reutilizable para secciones principales si corresponde:
* .landing-section
* .section-screen
* .section-block

o equivalente.

10. Las subsecciones internas no necesariamente deben medir toda la pantalla.

Pero sí deben tener suficiente espacio, jerarquía y destino de navegación claro.
11. No agregar dependencias nuevas.
12. No romper responsive.
13. No romper build/lint.
14. No inventar datos profesionales falsos.

Si falta contenido real, crear placeholders sobrios o estructuras listas para completar, sin afirmar cosas no existentes.

Criterios de arquitectura de información:

* Inicio vende la propuesta.
* Perfil construye confianza.
* Servicios explica cómo ayudo.
* Especialidades profundiza en mis servicios principales.
* Capacidades complementarias muestra amplitud sin diluir foco.
* Método explica cómo trabajo.
* Casos/Proyectos demuestra aplicación real.
* Stack valida capacidad técnica.
* Experiencia valida trayectoria.
* Certificaciones complementa credibilidad.
* Alianzas abre colaboración.
* Recursos aporta valor.
* Contacto convierte.

Criterios visuales:

* Mantener fondo oscuro, estética técnica, sobria y moderna.
* Mantener coherencia con el diseño actual.
* No rediseñar todo desde cero si no es necesario.
* Mejorar distribución del contenido si hay secciones apagadas o con exceso de vacío.
* Usar cards, badges, métricas o bloques visuales cuando ayuden a ordenar.
* Mantener buena jerarquía visual entre secciones principales y subsecciones.
* Evitar que todas las secciones se sientan iguales.
* Mantener consistencia, pero con ritmo visual.

Criterios de aceptación:

* El menú Secciones coincide con la estructura real del sitio.
* Todos los ítems del dropdown navegan a anclas o rutas reales.
* Las anclas están distribuidas de forma lógica según la arquitectura del menú.
* El navbar superior sigue funcionando.
* El dropdown sigue visualmente igual o mejor.
* No hay enlaces muertos.
* No hay ids duplicados.
* No hay overflow horizontal.
* El scroll a cada sección funciona bien con el header.
* Inicio conserva su fuerza.
* Perfil complementa a Inicio.
* Servicios contiene correctamente Backend, Arquitectura, Mentoría y Docencia.
* Frontend, Mobile e IA quedan como capacidades complementarias.
* Herramientas con IA queda integrado sin competir con Backend.
* KeyGo y Videojuegos quedan como proyectos/casos/laboratorio.
* Método, Stack, Experiencia, Certificaciones, Alianzas, Recursos y Contacto tienen destino real.
* El sitio se entiende mejor como marca personal y herramienta comercial.
* Build/lint pasan sin errores.

Entrega esperada:

Antes de modificar:

1. Revisa los archivos actuales.
2. Entrega un diagnóstico breve:
   * secciones actuales encontradas,
   * anclas actuales encontradas,
   * anclas faltantes,
   * duplicidades,
   * inconsistencias con el menú actual,
   * propuesta de estructura final.

Luego:
3. Aplica los cambios.

Al finalizar:
4. Entrega:

lista de archivos modificados,
estructura final de la landing,
estructura final del menú,
mapa de anclas final,
cambios visuales realizados,
decisiones de arquitectura de información,
confirmación de build/lint.