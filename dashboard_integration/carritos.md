# Modificaciones para Agregar Línea de Carritos Enviados

## Resumen
Se agregó una nueva línea en el gráfico de ventas y conversaciones que muestra las conversaciones donde "Se envió carrito" = "si".

---

## Cambios Realizados

### 1. Agregar datos en el objeto DATA

**Ubicación:** `dashboard_script.js` - línea 6

**Código agregado:**
```javascript
const DATA = {
    monthly: {
        labels: ["Dic 24", "Ene 25", "Feb 25", "Mar 25", "Abr 25", "May 25", "Jun 25", "Jul 25"],
        conversations: [0, 0, 0, 0, 0, 0, 772, 6490],
        conversationsWithCart: [0, 0, 0, 0, 0, 0, 250, 2100], // NUEVA LÍNEA
        orders: [3, 51, 260, 394, 203, 380, 821, 1565],
        revenue: [97986, 2277191, 17645758, 28806039, 14851302, 32591205, 74218305, 149461558],
        // ... resto del código
    }
};
```

**Explicación:**
- Agregué el array `conversationsWithCart` con valores mensuales
- Los valores actuales son de ejemplo y deben ser reemplazados con datos reales
- Este array debe tener la misma longitud que los demás (8 meses)

---

### 2. Agregar dataset en el gráfico

**Ubicación:** `dashboard_script.js` - función `createTimelineChart()` - líneas 104-119

**Código agregado:**
```javascript
{
    type: 'line',
    label: 'Carritos Enviados',
    data: DATA.monthly.conversationsWithCart,
    borderColor: '#f59e0b',
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderWidth: 3,
    tension: 0.4,
    fill: true,
    pointRadius: 5,
    pointBackgroundColor: '#f59e0b',
    pointBorderColor: '#fff',
    pointBorderWidth: 2,
    yAxisID: 'y',
    order: 2
},
```

**Explicación de las propiedades:**
- `type: 'line'` - Tipo de gráfico: línea
- `label: 'Carritos Enviados'` - Nombre que aparece en la leyenda
- `data: DATA.monthly.conversationsWithCart` - Datos a mostrar
- `borderColor: '#f59e0b'` - Color naranja para la línea
- `backgroundColor: 'rgba(245, 158, 11, 0.15)'` - Relleno semitransparente naranja
- `borderWidth: 3` - Grosor de la línea
- `tension: 0.4` - Curvatura de la línea (0 = línea recta, 1 = muy curvada)
- `fill: true` - Rellena el área bajo la línea
- `pointRadius: 5` - Tamaño de los puntos
- `pointBackgroundColor: '#f59e0b'` - Color de relleno de los puntos
- `pointBorderColor: '#fff'` - Color del borde de los puntos
- `pointBorderWidth: 2` - Grosor del borde de los puntos
- `yAxisID: 'y'` - Usa el eje Y izquierdo (Conversaciones / Ventas)
- `order: 2` - Orden de renderizado (menor = encima)

---

## Pasos para Replicar en tu Página Web

### Si usas el mismo archivo JavaScript:

1. Abre el archivo JavaScript donde tienes los datos del gráfico
2. Busca el objeto `DATA.monthly`
3. Agrega la línea `conversationsWithCart` con tus datos reales
4. Busca la función que crea el gráfico (probablemente `createTimelineChart()`)
5. Agrega el nuevo dataset dentro del array `datasets`
6. Actualiza la página para ver los cambios

### Si tienes el código inline en HTML:

1. Busca la sección `<script>` donde se define el gráfico
2. Encuentra el objeto con los datos (puede tener un nombre diferente)
3. Agrega el nuevo array de datos
4. Encuentra donde se configura Chart.js (dentro de `new Chart()`)
5. Agrega el nuevo dataset en la sección `datasets: [...]`

---

## Personalización

### Cambiar el color de la línea:
```javascript
borderColor: '#TU_COLOR_AQUI',  // Color de la línea
backgroundColor: 'rgba(R, G, B, 0.15)',  // Color de relleno con transparencia
```

### Cambiar el nombre en la leyenda:
```javascript
label: 'Tu Nombre Aquí',
```

### Quitar el relleno bajo la línea:
```javascript
fill: false,
```

### Usar el eje Y derecho (ingresos):
```javascript
yAxisID: 'y1',
```

---

## Datos Reales

Los valores actuales son de ejemplo:
```javascript
conversationsWithCart: [0, 0, 0, 0, 0, 0, 250, 2100]
```

**Para actualizar con datos reales:**
1. Consulta tu base de datos o archivo de datos
2. Filtra las conversaciones donde "Se envió carrito" = "si"
3. Agrupa por mes (Dic 24 a Jul 25)
4. Cuenta las conversaciones por mes
5. Reemplaza los valores en el array

**Ejemplo de consulta SQL (si usas base de datos):**
```sql
SELECT
    DATE_FORMAT(fecha, '%b %y') as mes,
    COUNT(*) as total
FROM conversaciones
WHERE se_envio_carrito = 'si'
GROUP BY DATE_FORMAT(fecha, '%Y-%m')
ORDER BY fecha;
```

---

## Verificación

Para verificar que todo funciona:
1. Abre la página en el navegador
2. Abre la consola de desarrollador (F12)
3. Verifica que no haya errores en JavaScript
4. Verifica que la nueva línea aparezca en el gráfico
5. Verifica que la leyenda muestre "Carritos Enviados"
6. Pasa el mouse sobre los puntos para ver los tooltips

---

## Notas Adicionales

- La línea usa el mismo eje Y que "Conversaciones del Agente" y "Cantidad de Ventas"
- El color naranja (#f59e0b) fue elegido para contrastar con azul (conversaciones) y morado (ventas)
- El orden de renderizado está configurado para que la línea aparezca entre las barras y la línea de ventas
- Si necesitas más personalización, consulta la documentación de Chart.js: https://www.chartjs.org/docs/latest/
