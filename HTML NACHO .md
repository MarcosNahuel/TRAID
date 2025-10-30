\<\!DOCTYPE html\>  
\<html lang\="es"\>  
\<head\>  
 \<meta charset\="UTF-8"\>  
 \<meta name\="viewport" content\="width=device-width, initial-scale=1.0"\>  
 \<title\>Dashboard MELI Analytics \- Impacto del Sistema de IA\</title\>  
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
     max-width: 1400px;  
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
   }

   .subtitle {  
     color: \#666;  
     font-size: 14px;  
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

   .kpi-change.negative {  
     color: \#ef4444;  
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
   }

   .chart-container {  
     position: relative;  
     height: 300px;  
     margin-bottom: 20px;  
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
     color: \#667eea;  
   }

   tr:hover {  
     background: \#f9fafb;  
   }

   .highlight {  
     background: \#fef3c7;  
     padding: 20px;  
     border-radius: 8px;  
     margin-top: 20px;  
   }

   .highlight strong {  
     color: \#92400e;  
   }

   button {  
     background: \#667eea;  
     color: white;  
     border: none;  
     padding: 12px 24px;  
     border-radius: 8px;  
     font-size: 14px;  
     cursor: pointer;  
     transition: background 0.2s;  
     margin-top: 20px;  
   }

   button:hover {  
     background: \#5568d3;  
   }

   .loading {  
     text-align: center;  
     padding: 100px;  
     color: white;  
     font-size: 18px;  
   }

   .error {  
     background: \#fef2f2;  
     border: 1px solid \#fecaca;  
     color: \#991b1b;  
     padding: 20px;  
     border-radius: 8px;  
     margin: 20px 0;  
   }  
 \</style\>  
\</head\>  
\<body\>  
 \<div class\="container"\>  
   \<div id\="loading" class\="loading"\>  
     Cargando datos...  
   \</div\>

   \<div id\="content" style\="display: none;"\>  
     \<header\>  
       \<h1\>📊 Dashboard MELI Analytics\</h1\>  
       \<p class\="subtitle"\>Análisis de impacto del sistema de IA en ventas y atención al cliente\</p\>  
       \<p class\="subtitle" id\="go-live-date"\>\</p\>  
     \</header\>

     \<\!-- KPIs Principales \--\>  
     \<div class\="kpi-grid"\>  
       \<div class\="kpi-card"\>  
         \<h3\>Ventas Totales (Después)\</h3\>  
         \<div class\="kpi-value" id\="kpi-sales-after"\>\-\</div\>  
         \<div class\="kpi-change" id\="kpi-sales-change"\>\-\</div\>  
       \</div\>

       \<div class\="kpi-card"\>  
         \<h3\>Respuestas Automatizadas\</h3\>  
         \<div class\="kpi-value" id\="kpi-responses"\>\-\</div\>  
         \<div class\="kpi-change"\>Después del go-live\</div\>  
       \</div\>

       \<div class\="kpi-card"\>  
         \<h3\>Tiempo Promedio de Respuesta\</h3\>  
         \<div class\="kpi-value" id\="kpi-avg-time"\>\-\</div\>  
         \<div class\="kpi-change"\>Respuesta automática\</div\>  
       \</div\>

       \<div class\="kpi-card"\>  
         \<h3\>⏰ Horas Ahorradas\</h3\>  
         \<div class\="kpi-value" id\="kpi-hours-saved"\>\-\</div\>  
         \<div class\="kpi-change" id\="kpi-efficiency"\>\-\</div\>  
       \</div\>  
     \</div\>

     \<\!-- Sección Ventas \--\>  
     \<div class\="section"\>  
       \<h2\>💰 Análisis de Ventas: Antes vs. Después\</h2\>  
       \<div class\="chart-container"\>  
         \<canvas id\="salesChart"\>\</canvas\>  
       \</div\>

       \<table\>  
         \<thead\>  
           \<tr\>  
             \<th\>Período\</th\>  
             \<th\>Cantidad de Órdenes\</th\>  
             \<th\>Monto Total\</th\>  
             \<th\>Ticket Promedio\</th\>  
           \</tr\>  
         \</thead\>  
         \<tbody id\="sales-table"\>  
         \</tbody\>  
       \</table\>  
     \</div\>

     \<\!-- Sección Respuestas \--\>  
     \<div class\="section"\>  
       \<h2\>⚡ Análisis de Respuestas Automatizadas\</h2\>  
       \<div class\="chart-container"\>  
         \<canvas id\="responseTimeChart"\>\</canvas\>  
       \</div\>

       \<table\>  
         \<thead\>  
           \<tr\>  
             \<th\>Métrica\</th\>  
             \<th\>Valor\</th\>  
           \</tr\>  
         \</thead\>  
         \<tbody id\="response-table"\>  
         \</tbody\>  
       \</table\>

       \<div class\="highlight"\>  
         \<strong\>💡 Impacto:\</strong\> El sistema respondió \<span id\="total-responses"\>\-\</span\> preguntas  
         en un tiempo promedio de \<span id\="avg-response-time"\>\-\</span\> segundos,  
         ahorrando aproximadamente \<strong\>\<span id\="hours-saved"\>\-\</span\> horas\</strong\> de trabajo manual.  
       \</div\>  
     \</div\>

     \<\!-- Sección Conversaciones \--\>  
     \<div class\="section"\>  
       \<h2\>💬 Análisis de Conversaciones\</h2\>  
       \<table\>  
         \<thead\>  
           \<tr\>  
             \<th\>Métrica\</th\>  
             \<th\>Valor\</th\>  
           \</tr\>  
         \</thead\>  
         \<tbody id\="conversations-table"\>  
         \</tbody\>  
       \</table\>  
     \</div\>

     \<button onclick\="downloadCSV()"\>📥 Descargar Datos en CSV\</button\>  
   \</div\>  
 \</div\>

 \<\!-- Chart.js embebido \--\>  
 \<script src\="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"\>\</script\>

 \<script\>  
   let metricsData \= null;

   // Cargar datos  
   async function loadMetrics() {  
     try {  
       const response \= await fetch('./metrics.json');  
       if (\!response.ok) {  
         throw new Error('No se pudo cargar metrics.json');  
       }  
       metricsData \= await response.json();  
       renderDashboard();  
     } catch (error) {  
       document.getElementById('loading').innerHTML \= \`  
         \<div class="error"\>  
           \<strong\>Error:\</strong\> No se pudieron cargar los datos.  
           Asegurate de haber ejecutado \<code\>node fetch\_data.mjs\</code\> y \<code\>node compute\_metrics.mjs\</code\> primero.  
           \<br\>\<br\>  
           Detalles: ${error.message}  
         \</div\>  
       \`;  
     }  
   }

   function renderDashboard() {  
     document.getElementById('loading').style.display \= 'none';  
     document.getElementById('content').style.display \= 'block';

     const { sales, responses, conversations, time\_saved, metadata } \= metricsData;

     // Fecha de go-live  
     document.getElementById('go-live-date').textContent \=  
       \`Fecha de go-live del sistema de IA: ${new Date(metadata.go\_live\_date).toLocaleString('es-AR')}\`;

     // KPIs  
     document.getElementById('kpi-sales-after').textContent \= sales.after.count;  
     document.getElementById('kpi-sales-change').textContent \=  
       \`${sales.growth.count\_pct \>= 0 ? '+' : ''}${sales.growth.count\_pct.toFixed(1)}% vs. período anterior\`;  
     document.getElementById('kpi-sales-change').className \=  
       sales.growth.count\_pct \>= 0 ? 'kpi-change' : 'kpi-change negative';

     document.getElementById('kpi-responses').textContent \= responses.total\_agent\_replies;

     document.getElementById('kpi-avg-time').textContent \=  
       \`${responses.avg\_seconds.toFixed(1)}s\`;

     document.getElementById('kpi-hours-saved').textContent \=  
       \`${time\_saved.time\_saved\_hours.toFixed(1)}h\`;

     document.getElementById('kpi-efficiency').textContent \=  
       \`${time\_saved.efficiency\_pct.toFixed(0)}% más eficiente\`;

     // Tabla de ventas  
     const salesTable \= document.getElementById('sales-table');  
     salesTable.innerHTML \= \`  
       \<tr\>  
         \<td\>\<strong\>Antes del go-live\</strong\>\</td\>  
         \<td\>${sales.before.count}\</td\>  
         \<td\>$${sales.before.sum.toFixed(2)}\</td\>  
         \<td\>$${sales.before.avg\_ticket.toFixed(2)}\</td\>  
       \</tr\>  
       \<tr\>  
         \<td\>\<strong\>Después del go-live\</strong\>\</td\>  
         \<td\>${sales.after.count}\</td\>  
         \<td\>$${sales.after.sum.toFixed(2)}\</td\>  
         \<td\>$${sales.after.avg\_ticket.toFixed(2)}\</td\>  
       \</tr\>  
     \`;

     // Gráfico de ventas  
     new Chart(document.getElementById('salesChart'), {  
       type: 'bar',  
       data: {  
         labels: \['Antes', 'Después'\],  
         datasets: \[{  
           label: 'Cantidad de Órdenes',  
           data: \[sales.before.count, sales.after.count\],  
           backgroundColor: \['\#fbbf24', '\#667eea'\]  
         }\]  
       },  
       options: {  
         responsive: true,  
         maintainAspectRatio: false,  
         plugins: {  
           legend: { display: true }  
         }  
       }  
     });

     // Tabla de respuestas  
     const responseTable \= document.getElementById('response-table');  
     responseTable.innerHTML \= \`  
       \<tr\>  
         \<td\>Total de respuestas automatizadas\</td\>  
         \<td\>\<strong\>${responses.total\_agent\_replies}\</strong\>\</td\>  
       \</tr\>  
       \<tr\>  
         \<td\>Tiempo promedio de respuesta\</td\>  
         \<td\>${responses.avg\_seconds.toFixed(2)} segundos\</td\>  
       \</tr\>  
       \<tr\>  
         \<td\>Tiempo mediano de respuesta\</td\>  
         \<td\>${responses.median\_seconds.toFixed(2)} segundos\</td\>  
       \</tr\>  
       \<tr\>  
         \<td\>Percentil 90 (P90)\</td\>  
         \<td\>${responses.p90\_seconds.toFixed(2)} segundos\</td\>  
       \</tr\>  
     \`;

     // Gráfico de tiempos de respuesta  
     new Chart(document.getElementById('responseTimeChart'), {  
       type: 'bar',  
       data: {  
         labels: \['Promedio', 'Mediana', 'P90'\],  
         datasets: \[{  
           label: 'Tiempo de Respuesta (segundos)',  
           data: \[  
             responses.avg\_seconds,  
             responses.median\_seconds,  
             responses.p90\_seconds  
           \],  
           backgroundColor: \['\#667eea', '\#764ba2', '\#22c55e'\]  
         }\]  
       },  
       options: {  
         responsive: true,  
         maintainAspectRatio: false,  
         plugins: {  
           legend: { display: false }  
         }  
       }  
     });

     // Highlight  
     document.getElementById('total-responses').textContent \= responses.total\_agent\_replies;  
     document.getElementById('avg-response-time').textContent \= responses.avg\_seconds.toFixed(1);  
     document.getElementById('hours-saved').textContent \= time\_saved.time\_saved\_hours.toFixed(1);

     // Tabla de conversaciones  
     const conversationsTable \= document.getElementById('conversations-table');  
     conversationsTable.innerHTML \= \`  
       \<tr\>  
         \<td\>Total de conversaciones\</td\>  
         \<td\>\<strong\>${conversations.total}\</strong\>\</td\>  
       \</tr\>  
       \<tr\>  
         \<td\>Total de mensajes\</td\>  
         \<td\>${conversations.total\_messages}\</td\>  
       \</tr\>  
       \<tr\>  
         \<td\>Promedio de mensajes por conversación\</td\>  
         \<td\>${conversations.avg\_messages\_per\_conversation.toFixed(1)}\</td\>  
       \</tr\>  
     \`;  
   }

   function downloadCSV() {  
     if (\!metricsData) return;

     const { sales, responses, time\_saved } \= metricsData;

     let csv \= 'Métrica,Valor\\n';  
     csv \+= \`Ventas Antes,${sales.before.count}\\n\`;  
     csv \+= \`Ventas Después,${sales.after.count}\\n\`;  
     csv \+= \`Crecimiento en Ventas (%),${sales.growth.count\_pct.toFixed(2)}\\n\`;  
     csv \+= \`Respuestas Automatizadas,${responses.total\_agent\_replies}\\n\`;  
     csv \+= \`Tiempo Promedio Respuesta (seg),${responses.avg\_seconds.toFixed(2)}\\n\`;  
     csv \+= \`Horas Ahorradas,${time\_saved.time\_saved\_hours.toFixed(2)}\\n\`;

     const blob \= new Blob(\[csv\], { type: 'text/csv' });  
     const url \= URL.createObjectURL(blob);  
     const a \= document.createElement('a');  
     a.href \= url;  
     a.download \= 'meli\_analytics.csv';  
     a.click();  
   }

   // Inicializar  
   loadMetrics();  
 \</script\>  
\</body\>  
\</html\>

