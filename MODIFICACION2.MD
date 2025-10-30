Aquí tienes el **PROMPT conciso** (sin código) para tu agente de codificación:

---

**ROL**: Dev Frontend + QA (MCP/Chrome).
**OBJETIVO**: Actualizar la sección **Casos de éxito** para mostrar **solo 3 casos** (GAMBIMEDIC, ROHANA y NACHO) y validar su funcionamiento con MCP/Chrome. Entregar PR con evidencia.

**FUENTES / RUTAS (Windows)**

* GAMBIMEDIC → `D:\OneDrive\GitHub\TRAID\web-dashboard-package`
* ROHANA → `D:\OneDrive\GitHub\TRAID\web-dashboard-packaged` (usa el embed del dashboard) 
* NACHO (dos dashboards en un mismo caso, deben ir en **dos pestañas**) →

  * **Impacto (Antes/Después)**: `D:\OneDrive\GitHub\TRAID\HTML NACHO .md` 
  * **Postventa (Workflows & métricas)**: `D:\OneDrive\GitHub\TRAID\HTML NACHO  postventa.md` 

**QUÉ CAMBIAR**

1. En la sección **Casos de éxito**, deja **exactamente 3 cards**, en este orden:

   * **Gambimedic — Bot IA omnicanal** (mantener estilo y CTA “Ver dashboard”).
   * **Rohana — Ventas & Conversaciones con IA** (presentado mediante el archivo de *embed* del dashboard).
   * **MELI Analytics — Antes/Después & Postventa IA** (**renombrar**; este caso debe tener **dos pestañas**):

     * **Pestaña 1:** “Impacto (Antes vs. Después)” → usa el HTML de Impacto. 
     * **Pestaña 2:** “Postventa (Workflows & Métricas)” → usa el HTML de Postventa. 
       Cada card: título, subtítulo breve (1 línea), hasta 3 tags, KPI si existe, y CTA **Ver dashboard** (abre en nueva pestaña o activa pestaña interna en el caso NACHO).

2. Mantén diseño actual (paleta, tipografías, espaciados) y accesibilidad (alt/labels). Si algo no existe, documenta **qué buscaste y por qué** decides el fallback.

**VALIDACIÓN (MCP/Chrome)**

* Verifica que se renderizan **3 cards** y que el CTA de cada una funciona.
* En **NACHO**, comprueba que las **2 pestañas** cargan sus HTML y conmutan sin errores.
* Revisa consola (sin errores fatales) y responsivo (desktop + mobile).
* Toma **2 screenshots** (desktop/mobile) de la sección y **1 por pestaña** del caso NACHO.

**ENTREGABLES (PR)**

* Rama: `feat/casos-exito/3-cases-{iniciales}`.
* PR con: resumen 1 línea, rutas de archivos modificados, screenshots, breve JSON de metadatos por caso (title, subtitle, tags, kpi, link/fuente), y resultado de verificación MCP/Chrome.
* Mensaje corto para el equipo (3 líneas, una por caso) con nombre final, KPI principal y enlace.

**CRITERIOS DE ACEPTACIÓN**

* 3 cards visibles y consistentes.
* **NACHO** con **dos pestañas** operativas y nombre actualizado.
* CTAs válidos; sin errores críticos; evidencia en PR.

---
