# Dashboard Analytics ROHANA - Guía de Integración

Este paquete contiene todo lo necesario para integrar el dashboard de analytics de ROHANA en tu sitio web.

## Contenido del Paquete

```
dashboard_integration/
├── README.md                    # Este archivo
├── dashboard_standalone.html    # Versión completa e independiente
├── dashboard_embed.html         # Versión para embeber en páginas existentes
├── dashboard_styles.css         # Estilos del dashboard
└── dashboard_script.js          # Lógica y datos del dashboard
```

## Características del Dashboard

- **Métricas principales**: Conversaciones, ventas, ingresos y mejora post-agente
- **Gráfico de correlación**: Muestra cómo las conversaciones del agente impactan ventas e ingresos
- **Análisis de ROI**: Cálculo detallado del retorno de inversión considerando crecimiento orgánico
- **Gráfico de crecimiento**: Comparación entre proyección orgánica vs crecimiento real con agente
- **Distribución horaria**: Análisis 24/7 de conversaciones y ventas antes/después del agente
- **Mapas de calor**: Visualización día×hora de ventas y conversaciones del agente
- **Tema oscuro**: Diseño profesional con gradientes y animaciones
- **Responsive**: Se adapta a diferentes tamaños de pantalla

## Opción 1: Uso Standalone (Página Independiente)

La forma más simple de usar el dashboard es como una página independiente.

### Instalación

1. Copia el archivo `dashboard_standalone.html` a tu servidor web
2. Abre el archivo en tu navegador

```bash
# Ejemplo con servidor local Python
python -m http.server 8000
# Luego visita: http://localhost:8000/dashboard_standalone.html
```

### Personalización

Para modificar los datos del dashboard standalone:
1. Abre `dashboard_standalone.html` en un editor de texto
2. Busca la sección `<script>` que contiene la constante `DATA`
3. Modifica los valores según tus necesidades

## Opción 2: Integración en Página Existente (Recomendado)

Para integrar el dashboard en una página web existente, usa los archivos modulares.

### Instalación

1. **Copia los archivos** a tu proyecto web:
   ```
   tu-proyecto/
   ├── css/
   │   └── dashboard_styles.css
   ├── js/
   │   └── dashboard_script.js
   └── index.html
   ```

2. **Agrega las referencias** en el `<head>` de tu HTML:

   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Mi Página con Dashboard ROHANA</title>

       <!-- DEPENDENCIA REQUERIDA: Chart.js -->
       <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

       <!-- Estilos del Dashboard -->
       <link rel="stylesheet" href="css/dashboard_styles.css">

       <!-- Tus otros estilos -->
       <link rel="stylesheet" href="css/tu-estilo.css">
   </head>
   <body>
       <!-- Tu contenido existente -->
       <header>
           <h1>Mi Sitio Web</h1>
       </header>

       <!-- Contenedor del Dashboard -->
       <main>
           <!-- Aquí pega el contenido de dashboard_embed.html -->
           <div id="rohana-dashboard">
               <!-- ... contenido del dashboard ... -->
           </div>
       </main>

       <!-- Scripts al final del body -->
       <script src="js/dashboard_script.js"></script>
   </body>
   </html>
   ```

3. **Copia el contenido HTML** de `dashboard_embed.html` en tu página donde quieras mostrar el dashboard

### Ejemplo Completo de Integración

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analytics - ROHANA</title>

    <!-- Chart.js (requerido) -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

    <!-- Estilos del Dashboard -->
    <link rel="stylesheet" href="dashboard_styles.css">
</head>
<body>
    <!-- Navegación de tu sitio -->
    <nav>
        <a href="/">Inicio</a>
        <a href="/analytics">Analytics</a>
    </nav>

    <!-- Dashboard completo -->
    <div id="rohana-dashboard">
        <div class="container">
            <section class="metrics-grid">
                <!-- Métricas principales -->
                <div class="metric-card">
                    <div class="metric-label">Total Conversaciones</div>
                    <div class="metric-value">14,439</div>
                    <div class="metric-detail">Jun - Oct 2025</div>
                </div>
                <!-- ... más métricas ... -->
            </section>

            <!-- Gráficos y visualizaciones -->
            <section class="chart-section">
                <!-- ... contenido de dashboard_embed.html ... -->
            </section>
        </div>
    </div>

    <!-- Script del Dashboard (al final) -->
    <script src="dashboard_script.js"></script>
</body>
</html>
```

## Personalización de Datos

### Modificar los Datos del Dashboard

Los datos del dashboard están definidos en `dashboard_script.js` en la constante `DATA`:

```javascript
const DATA = {
    monthly: {
        labels: ["Dic 24", "Ene 25", "Feb 25", ...],
        conversations: [0, 0, 0, 0, 0, 0, 772, 6490],
        orders: [3, 51, 260, 394, 203, 380, 821, 1565],
        revenue: [97986, 2277191, 17645758, ...],
        // ...
    },
    weeklyHeatmap: {
        before: { /* datos */ },
        after: { /* datos */ },
        conversations: { /* datos */ }
    }
};
```

### Modificar el ROI

La inversión y el cálculo de ROI se encuentra en la función `calculateROI()`:

```javascript
function calculateROI() {
    const inversion = 5000000; // Modifica este valor según tu inversión
    // ...
}
```

### Modificar Colores del Tema

Los colores están definidos como variables CSS en `dashboard_styles.css`:

```css
:root {
    --bg: #0a0e1a;
    --bg-card: #141829;
    --text: #e8eaf0;
    --accent-blue: #3b82f6;
    --accent-purple: #8b5cf6;
    --accent-green: #10b981;
    /* ... modifica según tu marca ... */
}
```

## Requisitos Técnicos

### Dependencias

- **Chart.js 4.4.0** (incluido vía CDN)
  - Se carga desde: `https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js`
  - Alternativa: Descarga local desde [chartjs.org](https://www.chartjs.org/)

### Compatibilidad de Navegadores

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

### Requisitos del Servidor

- Cualquier servidor web estático (Apache, Nginx, IIS, etc.)
- No requiere backend o base de datos
- Los datos son estáticos en JavaScript

## Integración con Frameworks Modernos

### React

```jsx
import { useEffect } from 'react';
import '../css/dashboard_styles.css';

function Dashboard() {
  useEffect(() => {
    // Cargar Chart.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
    script.onload = () => {
      // Cargar dashboard_script.js
      const dashScript = document.createElement('script');
      dashScript.src = '/js/dashboard_script.js';
      document.body.appendChild(dashScript);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="rohana-dashboard">
      {/* Contenido del dashboard */}
    </div>
  );
}
```

### Vue.js

```vue
<template>
  <div id="rohana-dashboard">
    <!-- Contenido del dashboard -->
  </div>
</template>

<script>
import '../css/dashboard_styles.css';

export default {
  name: 'Dashboard',
  mounted() {
    // Cargar Chart.js y luego el script del dashboard
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js';
    script.onload = () => {
      const dashScript = document.createElement('script');
      dashScript.src = '/js/dashboard_script.js';
      document.body.appendChild(dashScript);
    };
    document.body.appendChild(script);
  }
}
</script>
```

### Next.js

```jsx
// pages/analytics.js
import { useEffect } from 'react';
import Head from 'next/head';

export default function Analytics() {
  useEffect(() => {
    // Cargar scripts
    const loadScripts = async () => {
      await import('chart.js');
      const module = await import('../public/js/dashboard_script.js');
    };
    loadScripts();
  }, []);

  return (
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js" />
        <link rel="stylesheet" href="/css/dashboard_styles.css" />
      </Head>
      <div id="rohana-dashboard">
        {/* Contenido del dashboard */}
      </div>
    </>
  );
}
```

## Personalización Avanzada

### Cambiar el Esquema de Colores de los Mapas de Calor

En `dashboard_script.js`, modifica la función `getHeatColor()`:

```javascript
function getHeatColor(intensity) {
    const colors = [
        [30, 58, 138],   // Color para 0% (sin actividad)
        [59, 130, 246],  // Color para 25%
        [251, 191, 36],  // Color para 50%
        [249, 115, 22],  // Color para 75%
        [220, 38, 38]    // Color para 100% (alta actividad)
    ];
    // ...
}
```

### Agregar Nuevas Métricas

1. Agrega el HTML de la métrica en la sección `metrics-grid`
2. Si necesita cálculos dinámicos, agrégalos en `dashboard_script.js`

Ejemplo:

```html
<div class="metric-card">
    <div class="metric-label">Nueva Métrica</div>
    <div class="metric-value" id="nuevaMetrica">0</div>
    <div class="metric-detail">Descripción</div>
</div>
```

```javascript
// En dashboard_script.js, en la función init()
document.getElementById('nuevaMetrica').textContent = calcularNuevaMetrica();
```

### Conectar con Datos Dinámicos (API)

Para cargar datos desde una API en lugar de datos estáticos:

```javascript
// Reemplaza la constante DATA con una función async
async function loadData() {
    try {
        const response = await fetch('/api/dashboard-data');
        const DATA = await response.json();

        // Inicializar dashboard con datos de la API
        createTimelineChart();
        createGrowthComparisonChart();
        // ... resto de funciones
    } catch (error) {
        console.error('Error cargando datos:', error);
    }
}

// Llamar en lugar de init()
loadData();
```

## Estructura de Datos Esperada

Si conectas el dashboard a una API, la estructura JSON esperada es:

```json
{
  "monthly": {
    "labels": ["Dic 24", "Ene 25", ...],
    "conversations": [0, 0, 0, ...],
    "orders": [3, 51, 260, ...],
    "revenue": [97986, 2277191, ...],
    "ordersProjected": [3, 51, 260, ...],
    "revenueProjected": [97986, 2277191, ...]
  },
  "weeklyHeatmap": {
    "before": {
      "Lunes": [5, 2, 1, ...],
      "Martes": [6, 3, 1, ...],
      ...
    },
    "after": { ... },
    "conversations": { ... }
  }
}
```

## Troubleshooting

### Los gráficos no se muestran

1. Verifica que Chart.js se haya cargado correctamente
2. Abre la consola del navegador (F12) y busca errores
3. Asegúrate de que `dashboard_script.js` se carga después de Chart.js

### Los estilos no se aplican correctamente

1. Verifica la ruta de `dashboard_styles.css`
2. Asegúrate de que no haya conflictos con otros CSS
3. Usa prefijos específicos si es necesario (ej: `.rohana-dashboard .metric-card`)

### Los mapas de calor están vacíos

1. Verifica que los contenedores existan: `#heatmapAfterWeek` y `#heatmapConversations`
2. Asegúrate de que `dashboard_script.js` se ejecute después de que el DOM esté listo

## Soporte y Contacto

Para preguntas o problemas:
- Revisa este README completo
- Inspecciona la consola del navegador para errores
- Verifica que todas las rutas de archivos sean correctas

## Licencia

Este dashboard fue creado para ROHANA. Todos los derechos reservados.

---

**Última actualización**: Octubre 2025
**Versión**: 1.0.0
