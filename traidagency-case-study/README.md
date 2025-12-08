# TRAID Agency - Case Study Dashboard

Dashboard interactivo que muestra el caso de exito del agente WhatsApp IA para Mundial Shop Colombia.

## Estructura del Proyecto

```
traidagency-case-study/
├── standalone/           # Version completa con archivos separados
│   ├── index.html       # Pagina principal
│   ├── styles.css       # Estilos CSS
│   ├── data.js          # Datos y calculos
│   └── chart.js         # Graficos y visualizaciones
├── embed/               # Version embebible todo-en-uno
│   └── case-study-widget.html  # Archivo unico con todo incluido
└── README.md            # Este archivo
```

## Metricas Verificadas

Los datos han sido verificados matematicamente:

| Metrica | Valor |
|---------|-------|
| Ordenes Extra (Oct-Dic) | +65 |
| Crecimiento vs Tendencia | +35% |
| Ventas Incrementales | $10M COP |
| Utilidad (25% margen) | $2.5M COP |
| Pendiente PRE-agente | +0.11 ord/sem |
| Pendiente POST-agente | +0.67 ord/sem |
| Aceleracion | +508% |

## Opciones de Integracion

### Opcion 1: Pagina Independiente (Standalone)

Ideal para una pagina dedicada al caso de estudio.

1. Sube todos los archivos de la carpeta `standalone/` a tu servidor
2. Accede a `index.html`

**Estructura de archivos requerida:**
```
tu-sitio.com/
└── caso-de-estudio/
    ├── index.html
    ├── styles.css
    ├── data.js
    └── chart.js
```

### Opcion 2: Widget Embebido (Iframe)

Ideal para insertar en una pagina existente.

```html
<iframe
    src="https://tu-sitio.com/embed/case-study-widget.html"
    width="100%"
    height="900"
    frameborder="0"
    style="border-radius: 20px; overflow: hidden;">
</iframe>
```

### Opcion 3: Incluir Directamente en HTML

Si prefieres no usar iframe, puedes copiar el contenido del archivo
`embed/case-study-widget.html` directamente en tu pagina.

## Dependencias Externas

- **Chart.js** (CDN): `https://cdn.jsdelivr.net/npm/chart.js`
- **Google Fonts - Inter**: `https://fonts.googleapis.com/css2?family=Inter`

## Personalizacion

### Cambiar Colores

Edita las variables CSS en `:root`:

```css
:root {
    --primary: #6366f1;      /* Color principal (indigo) */
    --accent: #10b981;       /* Color de acento (verde) */
    --bg-dark: #0f172a;      /* Fondo oscuro */
    --bg-card: #1e293b;      /* Fondo de tarjetas */
}
```

### Cambiar Datos

Edita el objeto `caseStudyData` en `data.js`:

```javascript
const caseStudyData = {
    client: {
        name: "Tu Cliente",
        industry: "Tu Industria",
        implementation: "Fecha de implementacion"
    },
    monthlyReference: {
        realOrders: [...],      // Ordenes reales por mes
        projectedOrders: [...]  // Ordenes proyectadas sin agente
    },
    // ... mas datos
};
```

### Cambiar URL del CTA

Edita el enlace en el footer:

```html
<a href="https://tu-sitio.com" class="cta-button">Contactanos</a>
```

## Verificacion de Datos

Para verificar que los datos semanales coinciden con los mensuales,
abre la consola del navegador y ejecuta:

```javascript
verifyMonthlyTotals()
```

Deberia mostrar:
```
Ene: semanal=40, mensual=40, OK
Feb: semanal=42, mensual=42, OK
...
```

## Soporte de Navegadores

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Licencia

Propiedad de TRAID Agency. Todos los derechos reservados.
