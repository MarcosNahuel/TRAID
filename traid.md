# TRAID Agency - Documentación Técnica Completa

> Landing page de agencia de automatización con IA para ecommerce.
> **URL**: https://traid-seven.vercel.app/

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 18.3.1 | UI Framework |
| Vite | 5.4.2 | Build tool + Dev server |
| TypeScript | 5.5.3 | Tipado estático |
| Tailwind CSS | 3.4.1 | Estilos utilitarios |
| Three.js | 0.134.0 | Efectos 3D |
| Vanta.js | 0.5.24 | Fondo animado |
| Lucide React | 0.344.0 | Iconos SVG |
| Recharts | 3.6.0 | Gráficos |
| Chart.js | 4.5.1 | Dashboards |

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── sections/           # 12 secciones de landing
│   │   ├── HeroSection.tsx
│   │   ├── CasosDeExitoSection.tsx
│   │   ├── PanelEntregableSection.tsx
│   │   ├── AgendaSection.tsx
│   │   ├── QueHacemosSection.tsx
│   │   ├── PilaresSection.tsx
│   │   ├── OfertaSection.tsx
│   │   ├── ServiciosSection.tsx
│   │   ├── MetodologiaSection.tsx
│   │   ├── EquipoSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FooterSection.tsx
│   ├── casos-de-exito/     # 8 dashboards interactivos
│   ├── VantaBackground.tsx # Fondo 3D animado
│   ├── Navbar.tsx          # Nav con hide-on-scroll
│   ├── LoadingScreen.tsx   # Pantalla de carga
│   ├── CursorGlow.tsx      # Efecto cursor
│   ├── ScrollProgress.tsx  # Barra de progreso
│   ├── AnimatedSection.tsx # Wrapper animaciones
│   ├── AnimatedCounter.tsx # Contadores animados
│   ├── CaseModal.tsx       # Modal dashboards
│   └── WhatsAppButton.tsx  # Botón flotante
├── data/
│   └── caseStudies.tsx     # Datos casos de éxito
├── types/
│   └── index.ts            # TypeScript types
├── App.tsx                 # Componente principal
├── main.tsx               # Entry point
└── index.css              # 500+ líneas de estilos
```

---

## Secciones de la Landing

### 1. Hero Section
- **Título**: "Automatiza y escala tu ecommerce"
- **Subtítulo**: "Eliminamos los cuellos de botella con IA"
- **CTAs**:
  - "Solicitar propuesta" → WhatsApp directo
  - "Ver casos de éxito" → Scroll a sección
- **Stats**: 20+ casos | 2+ años | 100% garantía
- **Efectos**: Parallax, fade on scroll, gradient text animado

### 2. Casos de Éxito
- **Formato**: Carrusel horizontal scrollable
- **7 casos** con dashboards interactivos:

| Caso | Industria | Plataforma | Métrica Principal |
|------|-----------|------------|-------------------|
| ROHANA | Retail moda | WhatsApp + Shopify | +28% recuperación |
| MELI Analytics | E-commerce | MercadoLibre | +61% ventas |
| Gambimedic | Salud | MercadoLibre | 58x velocidad |
| Mundial Shop | Mayorista | WhatsApp IA | +35% crecimiento |
| Huancom | Energía Solar | MercadoLibre | +47.9% reversión |
| Mikaela | Moda | WooCommerce | +46% ventas |
| Natural VyA | Logística | N/A | -20% costos |

### 3. Panel Entregable
- Demo interactivo del CRM Postventa
- Iframe embebido con preview
- Tags: Control Preventa, Postventa, Dashboard Analytics

### 4. Agenda
- Video demo "Agente Shopify - Venta 100% Automática"
- Pendiente: Calendly embed

### 5. Qué Hacemos
- Integración de canales (WhatsApp, Instagram, MercadoLibre)
- Automatización total con n8n
- Plataformas: Shopify, TiendaNube, WooCommerce

### 6. Pilares de Negocio
1. **Canales de venta** - WhatsApp automático, recuperación carritos
2. **Automatizaciones** - Stock, remitos, conciliaciones, RPA
3. **Consultoría** - Playbooks, SOPs, capacitación

### 7. Oferta
- Garantía: "Entrega en 45 días o devolvemos el 100%"
- Timeline: 7 días pilot + ≤45 días producción

### 8. Servicios Incluidos
1. Auditoría y mapa de cuellos de botella
2. MVP de automatizaciones (WhatsApp, carritos, CRM)
3. Automatización de ventas total
4. Dashboard con KPIs
5. Documentación y SOPs

### 9. Metodología Ágil
| Fase | Duración | Actividades |
|------|----------|-------------|
| Discovery | Semana 1 | Auditoría, relevamiento, métricas |
| Pruebas | Semana 2 | MVP, testing, ajustes |
| Producción | Semanas 3-4 | Go-live, monitoreo, capacitación |
| Mantenimiento | Opcional | MRR mensual |

### 10. Equipo
- **Nacho Leo** - Founder & CEO
  - Experto automatizaciones IA, docente UDIA
  - Skills: Arquitectura, QA, n8n, Estrategia

- **Nahuel Albornoz** - Co-founder & PM
  - Data Scientist, especialista IA generativa
  - Skills: Data Science, IA Generativa, Producto

### 11. FAQ (Accordion interactivo)
| Pregunta | Respuesta |
|----------|-----------|
| ¿Qué plataformas? | Shopify, MercadoLibre, TiendaNube, WooCommerce |
| ¿Cuánto tarda? | 30-45 días para MVP |
| ¿Garantía? | 100% devolución si no se entrega en 45 días |
| ¿Soporte? | Sí, planes MRR con KPIs |

### 12. Footer
- Links de navegación
- Plataformas soportadas
- Contacto: WhatsApp, Email, LinkedIn

---

## Funcionalidades UX Implementadas

### Animaciones de Entrada
```css
fade-up, fade-down, fade-left, fade-right
zoom-in, blur-in, scale-up
```
- Trigger: Intersection Observer
- Duration: 600-700ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

### Efectos Continuos
- `pulse-slow`: Logo y orbes de fondo
- `float`: CTAs del hero
- `gradient-shift`: Texto gradiente animado
- `shimmer`: Botones hover

### Interacciones
| Componente | Efecto |
|------------|--------|
| Navbar | Hide-on-scroll (oculta bajando, aparece subiendo) |
| Cards | Mouse tracking con radial gradient |
| Botones | Shimmer + ripple + lift on hover |
| FAQ | Accordion con chevron rotativo |
| Cursor | Glow púrpura que sigue el mouse |
| Scroll | Barra de progreso gradiente |

### Glassmorphism
```css
.glass-card {
  background: rgba(139, 92, 246, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.15);
}
```

### Performance
- Vanta deshabilitado en móviles
- Cursor glow deshabilitado en touch
- Loading screen solo primera visita (sessionStorage)
- Lazy loading de iframes
- `prefers-reduced-motion` respetado

### Accesibilidad
- Skip-to-content link
- `<main>` landmark
- Focus states visibles
- ARIA labels en botones
- Semantic HTML

---

## Integraciones

### WhatsApp Business
- **Número**: +5491136579967
- **Uso**:
  - Botón flotante en toda la página
  - CTA principal del hero
  - Navbar button
- **Mensaje**: "Hola! Me interesa conocer más sobre sus servicios de automatización con IA"

### Dashboards Externos
- 8 HTML estáticos en `/public/dashboards/`
- Cargados via iframe
- Chart.js para gráficos

### Pendientes
- Calendly (script cargado, URL pendiente)
- Wistia video (comentado)
- n8n webhook para formulario

---

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Background | #000000 | Fondo principal |
| Purple 600 | #7c3aed | Primario |
| Pink 600 | #db2777 | Secundario/Acentos |
| Purple 300 | #c4b5fd | Texto destacado |
| Gray 400 | #9ca3af | Texto secundario |
| White | #ffffff | Texto principal |

### Gradientes
```css
/* Texto gradiente */
linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #8b5cf6 100%)

/* Botones */
linear-gradient(to right, #7c3aed, #db2777)

/* Scrollbar */
linear-gradient(180deg, #7c3aed, #db2777)
```

---

## Métricas de Negocio

### Propuesta de Valor
- **Garantía**: Entrega en 45 días o 100% devolución
- **Timeline**: 30-45 días para MVP
- **Modelo**: Proyecto inicial + MRR opcional

### Resultados Promedio
- +28% a +61% incremento en ventas
- 58x velocidad vs proceso manual
- -20% reducción de costos operativos

### Clientes Target
- E-commerce en Shopify, MercadoLibre, TiendaNube, WooCommerce
- Retailers con necesidad de automatizar WhatsApp
- Empresas con alto volumen de consultas/ventas

---

## SEO y Meta Tags

```html
<title>Automatización de Ventas con IA para Ecommerce | TRAID Agency</title>
<meta name="description" content="Automatizamos tu ecommerce con IA.
Recuperación de carritos, WhatsApp Business, MercadoLibre y más.
Garantía de entrega en 45 días. ROI promedio: 2640%">
```

### Open Graph
- og:title, og:description, og:image configurados
- Twitter card: summary_large_image
- Schema.org JSON-LD para Organization

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local (puerto 5173)
npm run dev

# Build producción
npm run build

# Preview build
npm run preview

# Linting
npm run lint
```

---

## Archivos Clave para Modificaciones

| Archivo | Contenido |
|---------|-----------|
| `src/data/caseStudies.tsx` | Datos de casos de éxito |
| `src/index.css` | Animaciones y estilos custom |
| `src/components/sections/` | Todas las secciones |
| `tailwind.config.js` | Colores y animaciones |
| `public/dashboards/` | HTMLs de dashboards |

---

## Notas para Chat Models

### Para agregar un nuevo caso de éxito:
1. Crear dashboard HTML en `/public/dashboards/caso-nombre.html`
2. Crear componente en `src/components/casos-de-exito/CaseNombreDashboard.tsx`
3. Agregar entrada en `src/data/caseStudies.tsx`
4. Exportar desde `src/components/casos-de-exito/index.ts`

### Para modificar animaciones:
- Keyframes en `src/index.css`
- Clases utilitarias en `tailwind.config.js`
- Componente `AnimatedSection.tsx` para nuevos tipos

### Para cambiar contenido:
- Textos hardcodeados en cada sección
- Datos estructurados en `src/data/`
- Equipo y FAQs directamente en sus componentes

### Para agregar integraciones:
- WhatsApp: Modificar número en `App.tsx` y `Navbar.tsx`
- Formulario: Endpoint en `vite.config.ts`
- Calendly/Wistia: Descomentar en `VideoCalendlyEmbed.tsx`
