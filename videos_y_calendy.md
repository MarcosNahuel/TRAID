Perfecto — abajo tienes **un prompt listo** (detallado y preciso) para pegar en **Claude Code** para que revise `https://traid-seven.vercel.app/` y agregue el **embed Wistia** y el **widget Calendly** en el repo. Incluye: qué archivos buscar, snippets React/HTML listos para pegar, cómo cargar el `script` sólo 1 vez, commit/PR y checklist de QA.

Copia y pega todo esto directamente en Claude Code:

---

Revisa la página [https://traid-seven.vercel.app/](https://traid-seven.vercel.app/) ([TRAID Agency][1]) y realiza los cambios en el repositorio web para **agregar el video Wistia** y el **Calendly inline widget** tal como están abajo. Detecta si el proyecto es Next.js (app/ o pages/), React SPA, o sitio estático y aplica la variante correspondiente.

### Objetivo

1. Insertar el **embed del video Wistia** (ID `b4v4r8otx7`) en la página de servicio / detalle principal (home o la página donde tenga sentido mostrar el video).
2. Insertar el **Calendly inline widget** para agendar sesiones: `https://calendly.com/nacholeo/sesion-estrategica-ia-ecommerce-ignacio-clone`.
3. Cargar el `script` de Calendly **una sola vez** por página.
4. Añadir fallback `<noscript>` y asegurar responsividad.

---

### Snippets exactos a agregar

**Wistia iframe (HTML responsivo)**

```html
<!-- Wistia embed begin -->
<div style="position:relative;padding-top:56.25%;">
  <iframe
    src="https://nacholeo005.wistia.com/medias/b4v4r8otx7?embedType=web_component&seo=true&videoWidth=960"
    title="Video Nacho"
    allow="autoplay; fullscreen"
    frameborder="0"
    scrolling="no"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;">
  </iframe>
</div>
<!-- Wistia embed end -->
```

**Calendly inline widget (HTML)**

```html
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget"
     data-url="https://calendly.com/nacholeo/sesion-estrategica-ia-ecommerce-ignacio-clone"
     style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
```

**Fallback para usuarios sin JS**

```html
<noscript>
  Reserva una sesión: <a href="https://calendly.com/nacholeo/sesion-estrategica-ia-ecommerce-ignacio-clone" target="_blank" rel="noopener noreferrer">Agendar en Calendly</a>
</noscript>
```

---

### Variante React / Next.js (recomendado si el proyecto usa React)

Crea un componente `components/VideoCalendlyEmbed.jsx` (o `.tsx`) y usa este código (asegura que el `script` se inserte sólo si no está presente):

```jsx
import { useEffect } from 'react';

export default function VideoCalendlyEmbed() {
  useEffect(() => {
    const src = 'https://assets.calendly.com/assets/external/widget.js';
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src="https://nacholeo005.wistia.com/medias/b4v4r8otx7?embedType=web_component&seo=true&videoWidth=960"
          title="Video Nacho"
          allow="autoplay; fullscreen"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/nacholeo/sesion-estrategica-ia-ecommerce-ignacio-clone"
        style={{ minWidth: '320px', height: '700px' }}
      />

      <noscript>
        Reserva una sesión: <a href="https://calendly.com/nacholeo/sesion-estrategica-ia-ecommerce-ignacio-clone" target="_blank" rel="noopener noreferrer">Agendar en Calendly</a>
      </noscript>
    </div>
  );
}
```

* Importar y usar el componente en la página correcta (por ejemplo `pages/index.js`, `app/page.jsx` o `src/pages/video/[id].jsx`).

---

### Si el sitio es HTML estático

Agregar el HTML de Wistia + Calendly directamente donde corresponda en el archivo `.html`. Confirmar que el CMS/markdown permita `<iframe>` y `<script>`. Si el CMS sanitiza, insertar el embed en la plantilla del servidor (no en el campo de descripción).

---

### Pasos operativos que Claude Code debe ejecutar

1. Clonar / abrir el repo local (o rama principal).
2. Detectar framework (Next.js / React / static). Buscar `package.json` y rutas `pages/`, `app/` o `public/`.
3. Añadir componente `components/VideoCalendlyEmbed` y/o insertar HTML en la plantilla de la página donde se desea mostrar (home / contact / video-detail).
4. Asegurar que el `script` de Calendly se inyecte **una sola vez** (ver `useEffect` o condicional en server template).
5. Añadir `noscript` fallback.
6. Probar localmente: `npm install` && `npm run dev` || `yarn dev`.
7. Test manual básico: mobile responsive, comprobar que Calendly carga y que sólo aparece una etiqueta `<script src="...widget.js">`.
8. Hacer commit en branch `feat/embed-wistia-calendly` y push.
9. Abrir PR con título y descripción (ver abajo).

---

### Commit / PR

* **Branch:** `feat/embed-wistia-calendly`
* **Commit message:** `feat: embed Wistia video (b4v4r8otx7) and Calendly inline widget; load script once; add noscript fallback`
* **PR title:** `Agregar embed Wistia + Calendly widget para agendar sesiones`
* **PR description (sugerida):**

  * Qué se agregó (Wistia iframe + Calendly widget)
  * Archivos modificados
  * Cómo probar (pasos para dev)
  * Notas: script de Calendly cargado condicionalmente; verificar sanitización del CMS si corresponde.

---

### Checklist de QA (antes de merge)

* [ ] El video Wistia se reproduce en desktop y mobile.
* [ ] El Calendly widget permite seleccionar fecha/hora y abrir modal de reserva.
* [ ] Sólo existe una etiqueta `<script src="https://assets.calendly.com/assets/external/widget.js">` por página.
* [ ] Fallback `<noscript>` visible si JS está deshabilitado.
* [ ] No romper estilos globales (verificar CSS).
* [ ] Verificar performance / lighthouse básica (sin errores de XSS).
* [ ] Revisar sanitización del CMS: si la descripción no permite `<iframe>`/`<script>`, mover el embed a la plantilla de la página.

---

### Nota final para Claude Code

* Revisa la home y las plantillas para ubicar el mejor lugar (home hero, sección “Agenda tu sesión” o página de video). La URL pública a revisar es: [https://traid-seven.vercel.app/](https://traid-seven.vercel.app/) ([TRAID Agency][1]).
* Si detectás que el repositorio usa SSR (Next.js) crea el componente y úsalo en la ruta `app/page` o `pages/index`. Si es un CMS que bloquea scripts, crear un fragmento en la plantilla del servidor.
* Al finalizar, ejecuta `npm run build` y adjunta un screenshot del embed funcionando en mobile y desktop en el PR.

---

¿Querés que te lo deje también en una versión **ultra-corta** (1 sola línea) para pegar rápido en Claude Code?

[1]: https://traid-seven.vercel.app/ "Automatización de Ventas con IA para Ecommerce | TRAID Agency - Entrega en 45 días"
