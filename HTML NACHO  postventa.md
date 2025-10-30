\<\!DOCTYPE html\>  
\<html lang\="es"\>  
\<head\>  
 \<meta charset\="UTF-8"\>  
 \<meta name\="viewport" content\="width=device-width, initial-scale=1.0"\>  
 \<title\>Dashboard MELI Analytics \- Sistema Completo de IA\</title\>  
 \<script src\="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"\>\</script\>  
 \<style\>  
   \* {  
     margin: 0;  
     padding: 0;  
     box-sizing: border-box;  
   }

   body {  
     font-family: \-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;  
     background: linear-gradient(135deg, \#667eea 0%, \#764ba2 100%);  
     color: \#333;  
     padding: 20px;  
     min-height: 100vh;  
   }

   .container {  
     max-width: 1600px;  
     margin: 0 auto;  
   }

   header {  
     background: white;  
     border-radius: 12px;  
     padding: 30px;  
     margin-bottom: 30px;  
     box-shadow: 0 4px 6px rgba(0,0,0,0.1);  
   }

   h1 {  
     color: \#667eea;  
     margin-bottom: 10px;  
     font-size: 32px;  
   }

   .subtitle {  
     color: \#666;  
     font-size: 14px;  
     margin-bottom: 15px;  
   }

   .period-info {  
     display: inline-block;  
     background: \#f3f4f6;  
     padding: 8px 16px;  
     border-radius: 6px;  
     font-size: 13px;  
     color: \#555;  
   }

   .kpi-grid {  
     display: grid;  
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));  
     gap: 20px;  
     margin-bottom: 30px;  
   }

   .kpi-card {  
     background: white;  
     border-radius: 12px;  
     padding: 25px;  
     box-shadow: 0 4px 6px rgba(0,0,0,0.1);  
     transition: transform 0.2s;  
   }

   .kpi-card:hover {  
     transform: translateY(\-5px);  
   }

   .kpi-card.highlight {  
     background: linear-gradient(135deg, \#667eea 0%, \#764ba2 100%);  
     color: white;  
   }

   .kpi-card.highlight h3,  
   .kpi-card.highlight .kpi-value,  
   .kpi-card.highlight .kpi-change {  
     color: white;  
   }

   .kpi-card h3 {  
     font-size: 14px;  
     color: \#666;  
     margin-bottom: 10px;  
     text-transform: uppercase;  
     letter-spacing: 0.5px;  
   }

   .kpi-value {  
     font-size: 36px;  
     font-weight: bold;  
     color: \#667eea;  
     margin-bottom: 5px;  
   }

   .kpi-change {  
     font-size: 14px;  
     color: \#22c55e;  
   }

   .section {  
     background: white;  
     border-radius: 12px;  
     padding: 30px;  
     margin-bottom: 30px;  
     box-shadow: 0 4px 6px rgba(0,0,0,0.1);  
   }

   .section h2 {  
     color: \#333;  
     margin-bottom: 20px;  
     padding-bottom: 10px;  
     border-bottom: 2px solid \#667eea;  
     font-size: 24px;  
   }

   .workflow-grid {  
     display: grid;  
     grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));  
     gap: 20px;  
     margin-bottom: 30px;  
   }

   .workflow-card {  
     background: \#f9fafb;  
     border-radius: 8px;  
     padding: 20px;  
     border-left: 4px solid \#667eea;  
   }

   .workflow-card.postventa {  
     border-left-color: \#22c55e;  
   }

   .workflow-card.mensaje {  
     border-left-color: \#f59e0b;  
   }

   .workflow-card h3 {  
     color: \#333;  
     margin-bottom: 15px;  
     font-size: 18px;  
   }

   .workflow-stat {  
     display: flex;  
     justify-content: space-between;  
     margin-bottom: 10px;  
     font-size: 14px;  
   }

   .workflow-stat span:first-child {  
     color: \#666;  
   }

   .workflow-stat span:last-child {  
     font-weight: bold;  
     color: \#333;  
   }

   .chart-container {  
     position: relative;  
     height: 300px;  
     margin-top: 20px;  
   }

   .chart-grid {  
     display: grid;  
     grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));  
     gap: 30px;  
   }

   table {  
     width: 100%;  
     border-collapse: collapse;  
     margin-top: 20px;  
   }

   th, td {  
     padding: 12px;  
     text-align: left;  
     border-bottom: 1px solid \#e5e7eb;  
   }

   th {  
     background: \#f9fafb;  
     font-weight: 600;  
     color: \#666;  
     font-size: 14px;  
     text-transform: uppercase;  
     letter-spacing: 0.5px;  
   }

   td {  
     color: \#333;  
   }

   tr:hover {  
     background: \#f9fafb;  
   }

   .badge {  
     display: inline-block;  
     padding: 4px 12px;  
     border-radius: 12px;  
     font-size: 12px;  
     font-weight: 600;  
   }

   .badge.success {  
     background: \#d1fae5;  
     color: \#065f46;  
   }

   .badge.info {  
     background: \#dbeafe;  
     color: \#1e40af;  
   }

   .badge.warning {  
     background: \#fef3c7;  
     color: \#92400e;  
   }

   footer {  
     text-align: center;  
     color: white;  
     margin-top: 40px;  
     padding: 20px;  
     font-size: 14px;  
   }

   .btn {  
     display: inline-block;  
     padding: 10px 20px;  
     background: \#667eea;  
     color: white;  
     border: none;  
     border-radius: 6px;  
     cursor: pointer;  
     font-size: 14px;  
     text-decoration: none;  
     transition: background 0.2s;  
   }

   .btn:hover {  
     background: \#5568d3;  
   }

   .error {  
     background: \#fee2e2;  
     border: 1px solid \#fecaca;  
     color: \#991b1b;  
     padding: 15px;  
     border-radius: 6px;  
     margin: 20px 0;  
   }  
 \</style\>  
\</head\>  
\<body\>  
 \<div class\="container"\>  
   \<header\>  
     \<h1\>Dashboard MELI Analytics \- Sistema Completo de IA\</h1\>  
     \<div class\="subtitle"\>Análisis de rendimiento de los 3 workflows de automatización\</div\>  
     \<div class\="period-info" id\="period"\>Cargando período...\</div\>  
   \</header\>

   \<\!-- KPIs Principales \--\>  
   \<div class\="kpi-grid" id\="main-kpis"\>  
     \<div class\="kpi-card highlight"\>  
       \<h3\>Total Interacciones\</h3\>  
       \<div class\="kpi-value" id\="total-interactions"\>\-\</div\>  
       \<div class\="kpi-change"\>Automatizadas exitosamente\</div\>  
     \</div\>  
     \<div class\="kpi-card highlight"\>  
       \<h3\>Tiempo Ahorrado\</h3\>  
       \<div class\="kpi-value" id\="total-hours"\>\-\</div\>  
       \<div class\="kpi-change" id\="total-days"\>\-\</div\>  
     \</div\>  
     \<div class\="kpi-card"\>  
       \<h3\>Revenue Total\</h3\>  
       \<div class\="kpi-value" id\="total-revenue"\>\-\</div\>  
       \<div class\="kpi-change"\>Todas las órdenes MELI\</div\>  
     \</div\>  
     \<div class\="kpi-card"\>  
       \<h3\>Entregas Automatizadas\</h3\>  
       \<div class\="kpi-value" id\="delivery-revenue"\>\-\</div\>  
       \<div class\="kpi-change" id\="delivery-count"\>\-\</div\>  
     \</div\>  
   \</div\>

   \<\!-- Desglose por Workflow \--\>  
   \<div class\="section"\>  
     \<h2\>Desglose por Workflow\</h2\>  
     \<div class\="workflow-grid"\>  
       \<div class\="workflow-card"\>  
         \<h3\>Pre-venta (Respuestas Automáticas)\</h3\>  
         \<div class\="workflow-stat"\>  
           \<span\>Total respuestas:\</span\>  
           \<span id\="preventa-count"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Tiempo ahorrado:\</span\>  
           \<span id\="preventa-hours"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Eficiencia:\</span\>  
           \<span id\="preventa-efficiency"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Tiempo respuesta promedio:\</span\>  
           \<span id\="preventa-avg"\>\-\</span\>  
         \</div\>  
       \</div\>

       \<div class\="workflow-card postventa"\>  
         \<h3\>Post-venta (Entrega de Códigos)\</h3\>  
         \<div class\="workflow-stat"\>  
           \<span\>Total entregas:\</span\>  
           \<span id\="postventa-count"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Tiempo ahorrado:\</span\>  
           \<span id\="postventa-hours"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Eficiencia:\</span\>  
           \<span id\="postventa-efficiency"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Tiempo entrega promedio:\</span\>  
           \<span id\="postventa-avg"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Revenue entregado:\</span\>  
           \<span id\="postventa-revenue"\>\-\</span\>  
         \</div\>  
       \</div\>

       \<div class\="workflow-card mensaje"\>  
         \<h3\>Mensaje Inicial (Bienvenida)\</h3\>  
         \<div class\="workflow-stat"\>  
           \<span\>Total mensajes:\</span\>  
           \<span id\="mensaje-count"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Tiempo ahorrado:\</span\>  
           \<span id\="mensaje-hours"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Eficiencia:\</span\>  
           \<span id\="mensaje-efficiency"\>\-\</span\>  
         \</div\>  
         \<div class\="workflow-stat"\>  
           \<span\>Tiempo promedio:\</span\>  
           \<span id\="mensaje-avg"\>\-\</span\>  
         \</div\>  
       \</div\>  
     \</div\>  
   \</div\>

   \<\!-- Gráficos \--\>  
   \<div class\="section"\>  
     \<h2\>Visualizaciones\</h2\>  
     \<div class\="chart-grid"\>  
       \<div\>  
         \<h3 style\="margin-bottom: 15px;"\>Distribución de Interacciones\</h3\>  
         \<div class\="chart-container"\>  
           \<canvas id\="workflowChart"\>\</canvas\>  
         \</div\>  
       \</div\>  
       \<div\>  
         \<h3 style\="margin-bottom: 15px;"\>Tiempo Ahorrado por Workflow\</h3\>  
         \<div class\="chart-container"\>  
           \<canvas id\="timeChart"\>\</canvas\>  
         \</div\>  
       \</div\>  
     \</div\>  
   \</div\>

   \<\!-- Análisis de Productos \--\>  
   \<div class\="section"\>  
     \<h2\>Análisis de Productos\</h2\>  
     \<div class\="chart-grid"\>  
       \<div\>  
         \<h3 style\="margin-bottom: 15px;"\>Distribución por Producto\</h3\>  
         \<div class\="chart-container"\>  
           \<canvas id\="productChart"\>\</canvas\>  
         \</div\>  
       \</div\>  
       \<div\>  
         \<h3 style\="margin-bottom: 15px;"\>Revenue por Producto\</h3\>  
         \<div class\="chart-container"\>  
           \<canvas id\="revenueChart"\>\</canvas\>  
         \</div\>  
       \</div\>  
     \</div\>

     \<h3 style\="margin-top: 30px; margin-bottom: 15px;"\>Top Productos\</h3\>  
     \<table id\="products-table"\>  
       \<thead\>  
         \<tr\>  
           \<th\>Producto\</th\>  
           \<th\>Cantidad\</th\>  
           \<th\>Valor Unitario\</th\>  
           \<th\>Revenue Total\</th\>  
           \<th\>% del Total\</th\>  
         \</tr\>  
       \</thead\>  
       \<tbody id\="products-tbody"\>  
       \</tbody\>  
     \</table\>  
   \</div\>

   \<\!-- Acciones \--\>  
   \<div class\="section"\>  
     \<h2\>Exportar Datos\</h2\>  
     \<button class\="btn" onclick\="downloadCSV()"\>Descargar Reporte CSV\</button\>  
     \<button class\="btn" onclick\="window.location.reload()"\>Actualizar Dashboard\</button\>  
   \</div\>  
 \</div\>

 \<footer\>  
   Dashboard generado automáticamente | Última actualización: \<span id\="last-update"\>\</span\>  
 \</footer\>

 \<script\>  
   let metricsData \= null;

   // Cargar datos  
   async function loadData() {  
     try {  
       const response \= await fetch('metrics\_complete.json');  
       if (\!response.ok) throw new Error('No se pudo cargar metrics\_complete.json');

       metricsData \= await response.json();  
       renderDashboard();  
     } catch (error) {  
       console.error('Error:', error);  
       document.querySelector('.container').innerHTML \= \`  
         \<div class="error"\>  
           \<strong\>Error:\</strong\> No se pudieron cargar los datos.  
           Por favor ejecuta: \<code\>node compute\_complete\_metrics.mjs\</code\>  
         \</div\>  
       \`;  
     }  
   }

   function formatNumber(num) {  
     return new Intl.NumberFormat('es-AR').format(Math.round(num));  
   }

   function formatCurrency(num) {  
     return '$' \+ formatNumber(num) \+ ' USD';  
   }

   function renderDashboard() {  
     const m \= metricsData;

     // Período  
     const earliestDate \= new Date(m.preventa.earliest\_date).toLocaleDateString('es-AR');  
     const latestDate \= new Date(m.preventa.latest\_date).toLocaleDateString('es-AR');  
     document.getElementById('period').textContent \= \`Período analizado: ${earliestDate} \- ${latestDate}\`;

     // KPIs principales  
     document.getElementById('total-interactions').textContent \= formatNumber(m.totals.total\_interactions);  
     document.getElementById('total-hours').textContent \= formatNumber(m.time\_savings.total.saved\_hours) \+ 'h';  
     document.getElementById('total-days').textContent \= formatNumber(m.time\_savings.total.saved\_days) \+ ' días laborales';  
     document.getElementById('total-revenue').textContent \= formatCurrency(m.totals.total\_revenue\_usd);  
     document.getElementById('delivery-revenue').textContent \= formatCurrency(m.totals.delivery\_revenue\_usd);  
     document.getElementById('delivery-count').textContent \= formatNumber(m.postventa.matched\_orders) \+ ' órdenes entregadas';

     // Pre-venta  
     document.getElementById('preventa-count').textContent \= formatNumber(m.preventa.total\_executions);  
     document.getElementById('preventa-hours').textContent \= formatNumber(m.time\_savings.preventa.saved\_hours) \+ 'h';  
     document.getElementById('preventa-efficiency').textContent \= m.time\_savings.preventa.efficiency\_percent \+ '%';  
     document.getElementById('preventa-avg').textContent \= (m.preventa.avg\_duration\_ms / 1000).toFixed(2) \+ 's';

     // Post-venta  
     document.getElementById('postventa-count').textContent \= formatNumber(m.postventa.execution\_stats.total\_executions);  
     document.getElementById('postventa-hours').textContent \= formatNumber(m.time\_savings.postventa.saved\_hours) \+ 'h';  
     document.getElementById('postventa-efficiency').textContent \= m.time\_savings.postventa.efficiency\_percent \+ '%';  
     document.getElementById('postventa-avg').textContent \= (m.postventa.execution\_stats.avg\_duration\_ms / 1000).toFixed(2) \+ 's';  
     document.getElementById('postventa-revenue').textContent \= formatCurrency(m.postventa.delivery\_revenue\_usd);

     // Mensaje inicial  
     document.getElementById('mensaje-count').textContent \= formatNumber(m.mensajeInicial.total\_executions);  
     document.getElementById('mensaje-hours').textContent \= formatNumber(m.time\_savings.mensajeInicial.saved\_hours) \+ 'h';  
     document.getElementById('mensaje-efficiency').textContent \= m.time\_savings.mensajeInicial.efficiency\_percent \+ '%';  
     document.getElementById('mensaje-avg').textContent \= (m.mensajeInicial.avg\_duration\_ms / 1000).toFixed(2) \+ 's';

     // Tabla de productos  
     const totalRevenue \= m.products.totalRevenue;  
     const tbody \= document.getElementById('products-tbody');  
     tbody.innerHTML \= '';

     m.products.products.slice(0, 10).forEach(product \=\> {  
       const percent \= ((product.total\_revenue\_usd / totalRevenue) \* 100).toFixed(1);  
       const row \= tbody.insertRow();  
       row.innerHTML \= \`  
         \<td\>\<span class="badge info"\>${product.product\_type}\</span\>\</td\>  
         \<td\>${formatNumber(product.count)}\</td\>  
         \<td\>${formatCurrency(product.unit\_value\_usd)}\</td\>  
         \<td\>\<strong\>${formatCurrency(product.total\_revenue\_usd)}\</strong\>\</td\>  
         \<td\>${percent}%\</td\>  
       \`;  
     });

     // Última actualización  
     document.getElementById('last-update').textContent \= new Date(m.analysis\_date).toLocaleString('es-AR');

     // Renderizar gráficos  
     renderCharts();  
   }

   function renderCharts() {  
     const m \= metricsData;

     // Gráfico de workflows  
     new Chart(document.getElementById('workflowChart'), {  
       type: 'doughnut',  
       data: {  
         labels: \['Pre-venta', 'Post-venta', 'Mensaje Inicial'\],  
         datasets: \[{  
           data: \[  
             m.preventa.total\_executions,  
             m.postventa.execution\_stats.total\_executions,  
             m.mensajeInicial.total\_executions  
           \],  
           backgroundColor: \['\#667eea', '\#22c55e', '\#f59e0b'\]  
         }\]  
       },  
       options: {  
         responsive: true,  
         maintainAspectRatio: false,  
         plugins: {  
           legend: {  
             position: 'bottom'  
           }  
         }  
       }  
     });

     // Gráfico de tiempo ahorrado  
     new Chart(document.getElementById('timeChart'), {  
       type: 'bar',  
       data: {  
         labels: \['Pre-venta', 'Post-venta', 'Mensaje Inicial'\],  
         datasets: \[{  
           label: 'Horas Ahorradas',  
           data: \[  
             m.time\_savings.preventa.saved\_hours,  
             m.time\_savings.postventa.saved\_hours,  
             m.time\_savings.mensajeInicial.saved\_hours  
           \],  
           backgroundColor: \['\#667eea', '\#22c55e', '\#f59e0b'\]  
         }\]  
       },  
       options: {  
         responsive: true,  
         maintainAspectRatio: false,  
         scales: {  
           y: {  
             beginAtZero: true  
           }  
         },  
         plugins: {  
           legend: {  
             display: false  
           }  
         }  
       }  
     });

     // Gráfico de productos (cantidad)  
     const productLabels \= m.products.products.slice(0, 7).map(p \=\> p.product\_type);  
     const productCounts \= m.products.products.slice(0, 7).map(p \=\> p.count);

     new Chart(document.getElementById('productChart'), {  
       type: 'bar',  
       data: {  
         labels: productLabels,  
         datasets: \[{  
           label: 'Unidades Vendidas',  
           data: productCounts,  
           backgroundColor: '\#667eea'  
         }\]  
       },  
       options: {  
         responsive: true,  
         maintainAspectRatio: false,  
         scales: {  
           y: {  
             beginAtZero: true  
           }  
         }  
       }  
     });

     // Gráfico de revenue por producto  
     const revenueData \= m.products.products.slice(0, 7).map(p \=\> p.total\_revenue\_usd);

     new Chart(document.getElementById('revenueChart'), {  
       type: 'bar',  
       data: {  
         labels: productLabels,  
         datasets: \[{  
           label: 'Revenue (USD)',  
           data: revenueData,  
           backgroundColor: '\#22c55e'  
         }\]  
       },  
       options: {  
         responsive: true,  
         maintainAspectRatio: false,  
         scales: {  
           y: {  
             beginAtZero: true,  
             ticks: {  
               callback: function(value) {  
                 return '$' \+ value.toLocaleString();  
               }  
             }  
           }  
         }  
       }  
     });  
   }

   function downloadCSV() {  
     if (\!metricsData) return;

     const m \= metricsData;  
     let csv \= 'Métrica,Valor\\n';  
     csv \+= \`Total Interacciones,${m.totals.total\_interactions}\\n\`;  
     csv \+= \`Tiempo Ahorrado (horas),${m.time\_savings.total.saved\_hours}\\n\`;  
     csv \+= \`Tiempo Ahorrado (días),${m.time\_savings.total.saved\_days}\\n\`;  
     csv \+= \`Revenue Total,${m.totals.total\_revenue\_usd}\\n\`;  
     csv \+= \`Revenue Entregas,${m.totals.delivery\_revenue\_usd}\\n\`;  
     csv \+= '\\nWorkflow,Ejecuciones,Horas Ahorradas,Eficiencia\\n';  
     csv \+= \`Pre-venta,${m.preventa.total\_executions},${m.time\_savings.preventa.saved\_hours},${m.time\_savings.preventa.efficiency\_percent}%\\n\`;  
     csv \+= \`Post-venta,${m.postventa.execution\_stats.total\_executions},${m.time\_savings.postventa.saved\_hours},${m.time\_savings.postventa.efficiency\_percent}%\\n\`;  
     csv \+= \`Mensaje Inicial,${m.mensajeInicial.total\_executions},${m.time\_savings.mensajeInicial.saved\_hours},${m.time\_savings.mensajeInicial.efficiency\_percent}%\\n\`;  
     csv \+= '\\nProducto,Cantidad,Valor Unitario,Revenue Total\\n';  
     m.products.products.forEach(p \=\> {  
       csv \+= \`${p.product\_type},${p.count},${p.unit\_value\_usd},${p.total\_revenue\_usd}\\n\`;  
     });

     const blob \= new Blob(\[csv\], { type: 'text/csv' });  
     const url \= window.URL.createObjectURL(blob);  
     const a \= document.createElement('a');  
     a.href \= url;  
     a.download \= 'meli\_analytics\_complete.csv';  
     a.click();  
   }

   // Cargar al inicio  
   loadData();  
 \</script\>  
\</body\>  
\</html\>

