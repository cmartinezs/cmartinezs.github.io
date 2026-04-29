# cmartinezs.github.io

Sitio personal de Carlos Martínez publicado con GitHub Pages.

El objetivo del sitio es presentar una landing profesional orientada a desarrollo de software, backend, frontend, mobile, arquitectura, docencia, IA aplicada, experiencia profesional, certificaciones y recursos técnicos.

## Sitio

URL esperada:

```text
https://cmartinezs.github.io
```

## Contenido principal

- `index.html`: landing principal.
- `frontend.html`: experiencia y servicios frontend.
- `mobile.html`: desarrollo mobile con Ionic, Angular, Kotlin y Compose.
- `backend.html`: backend, APIs, integración y calidad.
- `arquitectura.html`: arquitectura, refactorización y calidad técnica.
- `experiencia.html`: resumen narrativo de experiencia profesional.
- `docencia.html`: docencia, formación técnica y metodología.
- `mentoria.html`: mentoría técnica.
- `ai.html`: IA aplicada al desarrollo y productividad.
- `certificaciones.html`: certificaciones y formación continua.
- `recursos.html`: roadmap de artículos y recursos en desarrollo.
- `keygo.html`: landing del proyecto KeyGo.
- `contacto.html`: formulario de contacto mediante cliente de correo.

## Tecnologías

- HTML5.
- CSS3.
- JavaScript vanilla.
- Bootstrap 5.
- Bootstrap Icons.
- Devicon.
- Simple Icons vía CDN.

## Estructura

```text
.
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── index.html
├── frontend.html
├── mobile.html
├── backend.html
├── arquitectura.html
├── experiencia.html
├── docencia.html
├── mentoria.html
├── ai.html
├── certificaciones.html
├── recursos.html
├── keygo.html
├── contacto.html
├── .gitattributes
├── .gitignore
└── README.md
```

## Desarrollo local

Este es un sitio estático. Puede abrirse directamente desde `index.html`, aunque se recomienda usar un servidor local simple para probar rutas y recursos.

Ejemplo con Python:

```bash
python3 -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

## Contacto y privacidad

El email no se expone directamente como `mailto:` en el HTML. Se reconstruye con JavaScript al hacer clic o al enviar el formulario de contacto.

Los enlaces hacia `contacto.html` pueden incluir un parámetro `topic` para preseleccionar el tema del formulario, por ejemplo:

```text
contacto.html?topic=backend
```

## Normalización de líneas

El repositorio usa `.gitattributes` para normalizar archivos de texto con finales de línea LF.
