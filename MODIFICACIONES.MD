¡Listo! Acá tenés un **prompt completo** para pegar en tu asistente de codificación (v0, Cursor, Claude Code, Replit Agent, etc.) y que modifique la web. Está pensado para un proyecto Next.js + Tailwind en Vercel, pero incluye fallback si la estructura difiere.

---

# PROMPT — Rediseño TRAID (Next.js + Tailwind)

**Objetivo:** Reestructurar y actualizar la web de TRAID con la nueva propuesta de valor, pilares, casos, metodología, equipo y contacto. Mantener un look profesional, ligera y con foco en conversión (solicitar propuesta).

## Contexto del sitio actual

* URL base a tomar como referencia visual/estructura: `https://traid-seven.vercel.app/`
* Stack esperado: Next.js + Tailwind (preferente).
* Si la estructura difiere (por ejemplo CRA o Vite), **aplicar el mismo contenido** y crear componentes equivalentes.

## Instrucciones de implementación (prioridad)

1. **Crear/Actualizar Home** con secciones: Hero → Qué hacemos → Pilares → Oferta → Lo que incluye → Metodología → Casos → Equipo → FAQ → Contacto.
2. **Mantener Tailwind** y un estilo limpio, moderno y rápido.
3. **Navegación (header)**: Servicios, Metodología, Casos, Equipo, Contacto. CTA “Solicitar propuesta”.
4. **CTA**: eliminar “demo” o requisitos de facturación mínima.
5. **Form**: integrar a un endpoint genérico (placeholder) `POST /api/contact` y **dejar comentada** una opción con webhook n8n (`https://<tu-n8n>/webhook/traid-leads`).
6. **SEO**: setear `<title>`, `<meta name=\"description\">`, OG tags, favicon, `sitemap.xml` y `robots.txt`.
7. **Accesibilidad**: contrastes AA, labels en inputs, aria-labels en íconos importantes.
8. **Performance**: usar `next/image` para assets; lazy-load donde aplique.
9. **Tracking (opcional)**: dejar hook para GA/umami (comentado).
10. **Schema.org**: agregar `WebSite` + `Organization` básicos en JSON-LD.

## Copys OFICIALES (usar tal cual)

### 1) HERO

* **Headline:** Automatizaciones con IA para ecommerce — resultados reales en 45 días.
* **Subhead:** Implementamos **automatización de ventas total (previa al cierre)**, flujos n8n e integraciones con WhatsApp, MercadoLibre, Shopify y más; todo entregado y funcionando.
* **Descripción breve:** Eliminamos cuellos de botella operativos y optimizamos hasta un 90% los procesos en ventas, soporte, logística y backoffice. Instalación rápida, métricas claras y **garantía de entrega en 90 días**.
* **Botones:**

  * Primario: **Solicitar propuesta**
  * Secundario: **Hablar con el equipo**

### 2) QUÉ HACEMOS (intro)

Diseñamos e implementamos soluciones de automatización e inteligencia artificial especializadas en ecommerce: integración de canales (WhatsApp, Instagram, MercadoLibre, Shopify, TiendaNube, WooCommerce), **automatización de ventas total (previa al cierre)**, recuperación de carritos, orquestación de procesos con n8n y optimización de logística y fulfillment. También trabajamos procesos internos: conciliaciones, control de stock y sincronización multicanal.

### 3) PILARES

**Pilar 1 — Canales de venta y notificaciones**
Automatizamos la comunicación comercial: secuencias de WhatsApp, recuperación de carritos, lead scoring y sincronización con CRMs y marketplaces. Resultado: más conversión y menos trabajo manual.

**Pilar 2 — Automatizaciones internas**
Flujos que reducen errores y tiempo operativo: sincronización de stock, remitos, picking, conciliaciones y tareas repetitivas mediante n8n, APIs y RPA ligero.

**Pilar 3 — Consultoría y capacitación**
Transferencia de conocimiento: capacitaciones, playbooks, SOPs y prompt-tuning para que tu equipo sea autónomo y mantenga los sistemas sin depender de terceros.

### 4) OFERTA (resumen para primera vista)

Implementamos sistemas clave, optimizamos procesos y trabajamos con **objetivos medibles de crecimiento en menos de 45 días**. Entregamos todo instalado y operativo; **si no completamos la instalación en 90 días, devolvemos el 100% del dinero**.

### 5) LO QUE INCLUYE (45 días — ejemplo)

1. Auditoría y mapa de cuellos de botella.
2. Diseño y entrega del **MVP de automatizaciones** (WhatsApp, carritos, CRM).
3. **Automatización de ventas total (previa al cierre):** captura, calificación, nurturing y handoff al vendedor.
4. Dashboard con KPIs clave y capacitación al equipo.
5. Documentación, SOPs y plan de mantenimiento.

### 6) METODOLOGÍA (ágil)

* **Discovery (sem.1):** 30’ call, checklist, métricas y accesos.
* **Propuesta y diseño (sem.2):** alcance, entregables y cronograma.
* **Implementación (sem.3–6):** flujos n8n, integraciones, pruebas y prompt tuning.
* **Go-Live & Hypercare (2 sem.):** monitoreo, ajustes y transferencia.
* **Mantenimiento:** reporte mensual, mejoras y soporte (MRR opcional).

### 7) CASOS (resumen)

* **Recupero de carritos — Cliente A:** +28% en recuperación en 30 días con secuencia de WhatsApp integrada.
* **Automatización logística — Cliente B:** sincronización multicanal y reducción de errores de picking en 75%.
* **Automatización de ventas total — Cliente C:** liberó 3 horas/día del equipo comercial antes del cierre.
  *(Cuando dispongamos de logos y métricas exactas, agregarlas.)*

### 8) EQUIPO (en este orden)

**Nacho Leo — Líder técnico**
Experto en automatizaciones con IA, docente en UDIA. Responsable de arquitectura, QA y plantillas n8n.

**Nahuel Albornoz — ingeniero en inteligencia artificial generativa (IA GEN ENGENIEREE) & Data/Dev**
Científico de datos y desarrollador (Python). Especialista en integración de datos, RAGs y puesta en producción de modelos.

**Ignacio Ana — Growth & Ecommerce**
Especialista en ecommerce y marketing. Responsable de estrategia comercial, generación de leads y contenidos.

### 9) FAQ

* **¿Qué plataformas trabajan?** Shopify, MercadoLibre, TiendaNube, WooCommerce y marketplaces en general.
* **¿Cuánto tarda la implementación?** Usualmente 30–45 días para el MVP de automatizaciones críticas.
* **¿Qué garantía ofrecen?** Si los sistemas no están instalados en 90 días, devolvemos el 100% del dinero (condiciones en contrato).
* **¿Ofrecen soporte post-lanzamiento?** Sí. Planes de mantenimiento mensual (MRR) con seguimiento de KPIs y mejoras continuas.

### 10) CONTACTO (form)

* **Título:** Solicitar propuesta — evaluación inicial
* **Subtexto:** Completá el formulario y te contactamos en 24 h hábiles.
* **Campos:** Nombre / Email / Sitio web / Principal problema operativo
* **Botón:** Enviar solicitud

### 11) SEO / META

* **Meta title:** Automatizaciones e IA para ecommerce — TRAID Agency
* **Meta description:** Implementamos automatización de ventas total (previa al cierre), flujos n8n e integraciones con MercadoLibre, Shopify y WhatsApp para optimizar operaciones y aumentar ventas. Entrega en 45 días. Garantía 90 días.
* OG: `og:title`, `og:description`, `og:image`, `og:url`, `twitter:card`.

### 12) SCHEMA.ORG (JSON-LD — ejemplo mínimo)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TRAID Agency",
  "url": "https://traid-seven.vercel.app",
  "logo": "https://traid-seven.vercel.app/og.png",
  "sameAs": [],
  "description": "Automatizaciones e IA para ecommerce. Automatización de ventas total, n8n, integraciones con WhatsApp, MercadoLibre y Shopify."
}
```

## Estructura de archivos (sugerida App Router)

* `app/layout.tsx`: meta, fuentes, `<html lang=\"es\">`, header/footer.
* `app/page.tsx`: Home con todas las secciones.
* `app/api/contact/route.ts`: `POST` — recibe `{name,email,site,problem}` y hace `fetch` al webhook (si está configurado).
* `components/Section.tsx`, `components/Card.tsx`, `components/CTA.tsx` (opcional).
* `public/og.png` (placeholder).
* `sitemap.ts` y `robots.ts` (simple).

## Estilos y UI

* Tailwind: spacing generoso, `rounded-2xl`, sombras suaves, grid responsivo, tipografía legible.
* Iconos: usar Lucide o equivalents (o simples emojis si no hay dependencias).
* No usar colores excesivos; base `indigo`/`slate`.
* Botones con foco visible.

## Lógica del FORM

* Endpoint por defecto: `POST /api/contact`
* Campos: `name`, `email`, `site`, `problem`
* Validaciones mínimas (required + email).
* Respuesta de éxito: “Gracias, te contactaremos dentro de 24 h hábiles”.
* Dejar **comentado** un `fetch('https://<tu-n8n>/webhook/traid-leads', {...})` para uso posterior.

## Criterios de aceptación (QA)

* [ ] La Home muestra TODAS las secciones con los textos **idénticos** a los provistos.
* [ ] No se menciona facturación mínima ni “demo”.
* [ ] CTA principal = “Solicitar propuesta”.
* [ ] El formulario funciona en `/api/contact` y muestra mensajes de éxito/error.
* [ ] Metadatos SEO + OG visibles en el HTML final.
* [ ] JSON-LD válido (test en Rich Results si aplica).
* [ ] Lighthouse ≥ 90 en Performance/SEO/Best Practices/Accessibility (desktop).
* [ ] Diseño responsive (mobile-first), sin scroll horizontal.
* [ ] Código sin errores TypeScript/ESLint (si están configurados).

## Si la estructura NO es Next.js

* Crear un `index.html` con las secciones y clases Tailwind equivalentes.
* Incluir `tailwind.css` compilado o CDN (solo si no hay build).
* Reemplazar `next/image` por `<img loading=\"lazy\">`.
* Simular `/api/contact` con un `fetch` a un `action` de Formspree o dejar comentario para n8n.

**Entregar ahora los archivos modificados/creados con el contenido aplicado. No pedir confirmación.**
Si hay ambigüedad de stack, **detectar** e implementar la variante correspondiente (Next.js App Router / Pages Router / HTML estático).
Al finalizar, listar archivos cambiados y proveer snippets clave (Hero, Form, Meta).
