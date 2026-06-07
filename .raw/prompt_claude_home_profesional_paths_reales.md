# Prompt para Claude Code — separar Home `/` y landing `/profesional`

Actúa como frontend senior especializado en Next.js/React, arquitectura de información y landing pages.

Necesito ajustar la estructura real del sitio productivo. El sitio ya cambió su navegación, por lo que debes revisar el estado actual antes de tocar código.

Sitio productivo a revisar:

```txt
https://cmartinezs.github.io
```

## Objetivo

Separar el Hero actual de la landing profesional completa.

La idea final es:

```txt
midominio.com/             -> solo Home/Hero actual
midominio.com/profesional  -> landing temática profesional
```

El menú actual llamado `Inicio` debe cambiar de nombre porque ya no representará la raíz del sitio. Debe pasar a llamarse algo como:

```txt
Profesional
```

Preferencia: usar `Profesional`.

## Estado conceptual esperado

### 1. `/` — Home real

La ruta raíz debe mostrar solamente lo que hoy corresponde al Hero actual de `#inicio`:

- Badge: `Backend · Arquitectura · Formación técnica`
- H1: `Backend mantenible para equipos que crecen.`
- Tagline: `Software con criterio, no solo código.`
- CTAs actuales del Hero
- Card/terminal/stats actuales del Hero

No debe mostrar debajo:

- Perfil
- Servicios
- Método
- Explorar
- Contacto
- Otras secciones largas

La raíz `/` debe sentirse como una portada/entrada principal, no como la landing profesional completa.

### 2. `/profesional` — landing temática profesional

La ruta `/profesional` debe contener lo que actualmente está agrupado bajo el menú `Inicio`, pero renombrado:

```txt
Profesional
- Perfil
- Servicios
- Método
- Explorar
```

Esta landing debe ser una página real, no solo un conjunto de anchors dentro de `/`.

Debe incluir, como mínimo:

```txt
/profesional#perfil
/profesional#servicios
/profesional#metodo
/profesional#explorar
```

Opcionalmente puede tener un mini hero interno sobrio, pero no debe competir con el Hero de `/`.

## Navegación principal

Revisar el menú productivo actual antes de modificar.

La navegación actual tiene grupos del tipo:

```txt
Inicio
Trayectoria
Especialidades
Proyectos
Capacidades
Recursos y contacto
```

El cambio requerido es solo este:

```txt
Inicio -> Profesional
```

El resto debe mantenerse sin cambios de concepto, nombre y agrupación.

Resultado esperado:

```txt
Profesional
Trayectoria
Especialidades
Proyectos
Capacidades
Recursos y contacto
```

## Dropdown `Profesional`

El dropdown que hoy corresponde a `Inicio` debe quedar así:

```txt
Profesional
- Perfil      -> /profesional#perfil
- Servicios   -> /profesional#servicios
- Método      -> /profesional#metodo
- Explorar    -> /profesional#explorar
```

No debe apuntar a:

```txt
/#perfil
/#servicios
/#metodo
/#explorar
```

Debe apuntar a la ruta real `/profesional`.

## Regla sobre paths reales

Cada path del menú principal representa una landing temática real.

No trates los paths como agrupaciones lógicas dentro de una sola página.

Ejemplo correcto:

```txt
/profesional
/trayectoria
/especialidades
/proyectos
/capacidades
/recursos-contacto
```

Usa los nombres reales que ya existan en el proyecto. No renombres los demás paths si ya funcionan.

## Menú sticky por landing temática

Cada landing temática debe mantener su propio menú sticky/local si ya existe ese patrón.

Para `/profesional`, debe existir un menú sticky/local con:

```txt
Perfil
Servicios
Método
Explorar
```

Cada opción debe navegar dentro de `/profesional`.

El logo o marca principal del menú sticky debe volver al path principal de la experiencia profesional:

```txt
/profesional
```

No debe volver a `/#inicio`.

## Qué mover

Mover desde `/` hacia `/profesional` estas secciones actuales:

```txt
#perfil
#servicios
#metodo
#explorar
```

La ruta `/` debe conservar solo el Hero actual.

No duplicar innecesariamente estas secciones en `/` y `/profesional`.

## Qué NO modificar

No modificar conceptualmente:

- Trayectoria
- Especialidades
- Proyectos
- Capacidades
- Recursos y contacto

No cambiar sus nombres.
No reordenarlos.
No rediseñarlos.
No cambiar su estructura interna, salvo ajustes mínimos necesarios para que la navegación siga funcionando.

## Reglas de anchors

En `/profesional`, los anchors obligatorios son:

```txt
#perfil
#servicios
#metodo
#explorar
```

Cada anchor debe existir una sola vez.

Cada link del dropdown `Profesional` debe apuntar al anchor correcto usando ruta completa:

```txt
/profesional#perfil
/profesional#servicios
/profesional#metodo
/profesional#explorar
```

Si el proyecto usa trailing slash o base path por GitHub Pages, respeta la convención actual del proyecto.

## Scroll y header sticky

Verificar que el scroll por anchor funcione bien con el header sticky.

Si hace falta, usar o ajustar:

```css
scroll-margin-top
```

No debe quedar el título tapado por el header.

## Fuente de verdad de navegación

Si hay configuración centralizada de navegación, actualizarla ahí.

Ejemplo conceptual:

```ts
{
  label: 'Profesional',
  href: '/profesional',
  items: [
    { label: 'Perfil', href: '/profesional#perfil' },
    { label: 'Servicios', href: '/profesional#servicios' },
    { label: 'Método', href: '/profesional#metodo' },
    { label: 'Explorar', href: '/profesional#explorar' },
  ],
}
```

No dejar arrays duplicados con `Inicio` y `Profesional` apuntando a lugares distintos.

## Requerimientos técnicos

1. Revisar primero la estructura actual del proyecto.
2. Identificar si el proyecto usa App Router, Pages Router o export estático.
3. Crear la ruta real `/profesional` según la arquitectura actual.
4. Mantener compatible con GitHub Pages.
5. No agregar dependencias.
6. No romper responsive.
7. No romper build/lint.
8. No dejar links muertos.
9. No dejar anchors duplicados.
10. No cambiar el diseño visual general.
11. Reutilizar componentes actuales cuando sea posible.
12. Evitar duplicación de contenido.

## Criterios de aceptación

El cambio está correcto solo si se cumple todo esto:

- `midominio.com/` muestra solo el Hero actual.
- `midominio.com/` ya no muestra Perfil, Servicios, Método ni Explorar.
- El menú principal ya no dice `Inicio` para ese grupo.
- El menú principal dice `Profesional`.
- `Profesional` apunta a `/profesional`.
- El dropdown `Profesional` contiene Perfil, Servicios, Método y Explorar.
- Cada item del dropdown apunta a `/profesional#anchor`.
- `/profesional` existe como landing real.
- `/profesional` contiene Perfil, Servicios, Método y Explorar.
- El resto de grupos del menú queda sin modificaciones conceptuales.
- El logo del menú sticky/local vuelve a `/profesional`.
- No hay anchors duplicados.
- No hay links muertos.
- El scroll por anchors funciona bien.
- Build y lint pasan.

## Entrega esperada

Antes de modificar código, entrega un diagnóstico breve:

```txt
- Rutas actuales encontradas
- Menú actual encontrado
- Secciones que hoy viven en `/`
- Secciones que moverás a `/profesional`
- Archivos que tocarás
```

Después de modificar, entrega:

```txt
- Archivos modificados
- Nueva estructura de rutas
- Nueva estructura del menú
- Anchors finales de `/profesional`
- Confirmación de build/lint
```
