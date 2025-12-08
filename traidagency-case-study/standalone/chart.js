// ==========================================
//   TRAID Agency - Case Study Charts
//   SERIE SEMANAL CON PENDIENTES
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initOrdersChart();
    initHeatmap();
    updateKPIs();
});

// ==========================================
//   Grafico de Ordenes Semanales
// ==========================================
function initOrdersChart() {
    const ctx = document.getElementById('ordersChart').getContext('2d');
    const data = caseStudyData.weekly;
    const implWeek = data.implementationWeek;
    const metrics = calculateImpactMetrics();

    // Plugin: Linea vertical de implementacion
    const implementationLinePlugin = {
        id: 'implementationLine',
        afterDraw: (chart) => {
            const ctx = chart.ctx;
            const xScale = chart.scales.x;
            const yScale = chart.scales.y;
            const x = xScale.getPixelForValue(implWeek - 0.5);

            ctx.save();

            // Linea vertical
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 2;
            ctx.setLineDash([6, 4]);
            ctx.beginPath();
            ctx.moveTo(x, yScale.top);
            ctx.lineTo(x, yScale.bottom);
            ctx.stroke();

            // Etiqueta
            ctx.setLineDash([]);
            ctx.fillStyle = '#10b981';
            ctx.font = 'bold 10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('IMPLEMENTACION', x, yScale.top + 12);
            ctx.fillText('AGENTE IA', x, yScale.top + 24);

            ctx.restore();
        }
    };

    // Plugin: Area sombreada de mejora
    const improvementAreaPlugin = {
        id: 'improvementArea',
        beforeDatasetsDraw: (chart) => {
            const ctx = chart.ctx;
            const realMeta = chart.getDatasetMeta(0);
            const trendMeta = chart.getDatasetMeta(1);

            if (!realMeta.data.length || !trendMeta.data.length) return;

            ctx.save();
            ctx.globalAlpha = 0.25;
            ctx.fillStyle = '#10b981';
            ctx.beginPath();

            // Desde implementacion hasta el final
            for (let i = implWeek; i < realMeta.data.length; i++) {
                const point = realMeta.data[i];
                if (i === implWeek) {
                    ctx.moveTo(point.x, point.y);
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            }

            // Volver por la linea de tendencia
            for (let i = trendMeta.data.length - 1; i >= implWeek; i--) {
                const point = trendMeta.data[i];
                ctx.lineTo(point.x, point.y);
            }

            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    };

    // Plugin: Lineas de pendiente con etiquetas
    const slopeLinesPlugin = {
        id: 'slopeLines',
        afterDatasetsDraw: (chart) => {
            const ctx = chart.ctx;
            const xScale = chart.scales.x;
            const yScale = chart.scales.y;
            const realMeta = chart.getDatasetMeta(0);

            // Calcular pendiente PRE (regresion de puntos 0 a implWeek-1)
            const preStart = realMeta.data[0];
            const preEnd = realMeta.data[implWeek - 1];

            // Calcular pendiente POST (regresion de puntos implWeek a final)
            const postStart = realMeta.data[implWeek];
            const postEnd = realMeta.data[realMeta.data.length - 1];

            ctx.save();
            ctx.lineWidth = 3;
            ctx.setLineDash([]);

            // Linea de tendencia PRE (naranja)
            ctx.strokeStyle = '#f59e0b';
            ctx.beginPath();
            // Usar regresion lineal para dibujar la linea
            const preTrend = metrics.preTrend;
            const preY1 = yScale.getPixelForValue(metrics.projectedTrend[0]);
            const preY2 = yScale.getPixelForValue(metrics.projectedTrend[implWeek - 1]);
            ctx.moveTo(realMeta.data[0].x, preY1);
            ctx.lineTo(realMeta.data[implWeek - 1].x, preY2);
            ctx.stroke();

            // Etiqueta pendiente PRE
            ctx.fillStyle = '#f59e0b';
            ctx.font = 'bold 11px Inter, sans-serif';
            const preMidX = (realMeta.data[0].x + realMeta.data[implWeek - 1].x) / 2;
            const preMidY = (preY1 + preY2) / 2 - 15;
            ctx.fillText(preTrend.description, preMidX, preMidY);

            // Linea de tendencia POST (verde)
            ctx.strokeStyle = '#10b981';
            ctx.beginPath();
            const postTrend = metrics.postTrend;
            // Calcular puntos de la linea POST usando regresion
            const postRegression = linearRegression(data.realOrders, implWeek, data.realOrders.length - 1);
            const postY1 = yScale.getPixelForValue(postRegression.intercept);
            const postY2 = yScale.getPixelForValue(postRegression.intercept + postRegression.slope * (data.realOrders.length - 1 - implWeek));
            ctx.moveTo(postStart.x, postY1);
            ctx.lineTo(postEnd.x, postY2);
            ctx.stroke();

            // Etiqueta pendiente POST
            ctx.fillStyle = '#10b981';
            const postMidX = (postStart.x + postEnd.x) / 2;
            const postMidY = (postY1 + postY2) / 2 - 15;
            ctx.fillText(postTrend.description, postMidX, postMidY);

            // Badge de incremento de pendiente
            ctx.fillStyle = 'rgba(16, 185, 129, 0.9)';
            const badgeX = postEnd.x - 60;
            const badgeY = postEnd.y - 40;
            roundRect(ctx, badgeX - 35, badgeY - 12, 70, 24, 6);
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('+' + metrics.slopeIncrease + ' veloc.', badgeX, badgeY + 4);

            ctx.restore();
        }
    };

    // Helper para rectangulos redondeados
    function roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }

    // Helper de regresion lineal
    function linearRegression(data, startIdx, endIdx) {
        const n = endIdx - startIdx + 1;
        let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
        for (let i = startIdx; i <= endIdx; i++) {
            const x = i - startIdx;
            const y = data[i];
            sumX += x;
            sumY += y;
            sumXY += x * y;
            sumX2 += x * x;
        }
        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;
        return { slope, intercept };
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Ordenes Reales',
                    data: data.realOrders,
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 2,
                    pointRadius: 3,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1,
                    tension: 0.2,
                    fill: false
                },
                {
                    label: 'Tendencia Pre-Agente',
                    data: metrics.projectedTrend,
                    borderColor: 'rgba(239, 68, 68, 0.6)',
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderDash: [8, 4],
                    pointRadius: 0,
                    tension: 0,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 12,
                        padding: 15,
                        color: '#94a3b8',
                        font: { size: 10 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    titleColor: '#f8fafc',
                    bodyColor: '#94a3b8',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        title: function(items) {
                            const idx = items[0].dataIndex;
                            const weekNum = idx + 1;
                            let month = '';
                            if (weekNum <= 4) month = 'Enero';
                            else if (weekNum <= 8) month = 'Febrero';
                            else if (weekNum <= 13) month = 'Marzo';
                            else if (weekNum <= 17) month = 'Abril';
                            else if (weekNum <= 22) month = 'Mayo';
                            else if (weekNum <= 26) month = 'Junio';
                            else if (weekNum <= 30) month = 'Julio';
                            else if (weekNum <= 35) month = 'Agosto';
                            else if (weekNum <= 39) month = 'Septiembre';
                            else if (weekNum <= 43) month = 'Octubre';
                            else if (weekNum <= 48) month = 'Noviembre';
                            else month = 'Diciembre';
                            return 'Semana ' + weekNum + ' (' + month + ')';
                        },
                        label: function(context) {
                            if (context.datasetIndex === 0) {
                                return 'Real: ' + context.parsed.y + ' ordenes';
                            } else {
                                return 'Tendencia: ' + context.parsed.y.toFixed(1) + ' ordenes';
                            }
                        },
                        afterBody: function(tooltipItems) {
                            const idx = tooltipItems[0].dataIndex;
                            if (idx >= implWeek) {
                                const real = data.realOrders[idx];
                                const proj = metrics.projectedTrend[idx];
                                const diff = real - proj;
                                return ['\n+' + diff.toFixed(1) + ' ordenes extra vs tendencia'];
                            }
                            return [];
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#64748b',
                        font: { size: 9 },
                        maxRotation: 0,
                        callback: function(val, index) {
                            // Mostrar solo algunas etiquetas para no saturar
                            if (index === 0) return 'Ene';
                            if (index === 8) return 'Mar';
                            if (index === 17) return 'May';
                            if (index === 26) return 'Jul';
                            if (index === 35) return 'Sep';
                            if (index === 39) return 'Oct';
                            if (index === 43) return 'Nov';
                            if (index === 48) return 'Dic';
                            return '';
                        }
                    }
                },
                y: {
                    min: 0,
                    max: 65,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#64748b',
                        font: { size: 10 },
                        stepSize: 10
                    }
                }
            }
        },
        plugins: [implementationLinePlugin, improvementAreaPlugin, slopeLinesPlugin]
    });
}

// ==========================================
//   Actualizar KPIs dinamicamente
// ==========================================
function updateKPIs() {
    const metrics = calculateImpactMetrics();

    // Actualizar valores en el DOM
    const badgeEl = document.getElementById('badgeGrowth');
    const extraOrdersEl = document.getElementById('extraOrders');
    const growthRateEl = document.getElementById('growthRate');
    const extraRevenueEl = document.getElementById('extraRevenue');
    const profitEl = document.getElementById('profit');
    const preSlopeEl = document.getElementById('preSlope');
    const postSlopeEl = document.getElementById('postSlope');
    const slopeIncreaseEl = document.getElementById('slopeIncrease');

    if (badgeEl) badgeEl.textContent = '+' + metrics.totals.growthPercent + '%';
    if (extraOrdersEl) extraOrdersEl.textContent = '+' + metrics.totals.extraOrders;
    if (growthRateEl) growthRateEl.textContent = '+' + metrics.totals.growthPercent + '%';
    if (extraRevenueEl) extraRevenueEl.textContent = metrics.revenue.extraRevenueFormatted;
    if (profitEl) profitEl.textContent = metrics.revenue.profitFormatted;
    if (preSlopeEl) preSlopeEl.textContent = metrics.preTrend.description;
    if (postSlopeEl) postSlopeEl.textContent = metrics.postTrend.description;
    if (slopeIncreaseEl) slopeIncreaseEl.textContent = '+' + metrics.slopeIncrease;

    // Log para debug
    console.log('=== ANALISIS DE DATOS ===');
    console.log('Serie semanal pre-implementacion (39 semanas):', caseStudyData.weekly.realOrders.slice(0, 39));
    console.log('Serie semanal post-implementacion (13 semanas):', caseStudyData.weekly.realOrders.slice(39));
    console.log('Pendiente PRE:', metrics.preTrend.slope.toFixed(3), 'ordenes/semana');
    console.log('Pendiente POST:', metrics.postTrend.slope.toFixed(3), 'ordenes/semana');
    console.log('Aumento de pendiente:', metrics.slopeIncrease);
    console.log('Total ordenes extra:', metrics.totals.extraOrders);
    console.log('Crecimiento vs tendencia:', metrics.totals.growthPercent + '%');
}

// ==========================================
//   Mapa de Calor
// ==========================================
function initHeatmap() {
    const heatmap = caseStudyData.heatmapData;
    const grid = document.getElementById('heatmapGrid');

    if (!grid) return;

    let maxVal = 0;
    heatmap.conversations.forEach(day => {
        day.forEach(val => {
            if (val > maxVal) maxVal = val;
        });
    });

    // Header con horas
    const emptyCell = document.createElement('div');
    emptyCell.className = 'heatmap-cell header';
    grid.appendChild(emptyCell);

    heatmap.hours.forEach((hour, idx) => {
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell header';
        cell.textContent = idx % 2 === 0 ? hour : '';
        grid.appendChild(cell);
    });

    // Filas por dia
    heatmap.days.forEach((day, dayIdx) => {
        const dayCell = document.createElement('div');
        dayCell.className = 'heatmap-cell day-label';
        dayCell.textContent = day;
        grid.appendChild(dayCell);

        heatmap.conversations[dayIdx].forEach((val, hourIdx) => {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';

            if (hourIdx < heatmap.workingHours.start || hourIdx >= heatmap.workingHours.end) {
                cell.classList.add('outside-hours');
            }

            const color = getHeatColor(val / maxVal);
            cell.style.backgroundColor = color;

            if (val >= 30) {
                cell.textContent = val;
            }

            cell.title = `${day} ${heatmap.hours[hourIdx]}: ${val} conversaciones`;
            grid.appendChild(cell);
        });
    });

    updateHeatmapStats();
}

function getHeatColor(intensity) {
    const colors = [
        { pos: 0.0, r: 59, g: 130, b: 246 },
        { pos: 0.2, r: 34, g: 211, b: 238 },
        { pos: 0.4, r: 163, g: 230, b: 53 },
        { pos: 0.6, r: 250, g: 204, b: 21 },
        { pos: 0.8, r: 249, g: 115, b: 22 },
        { pos: 1.0, r: 239, g: 68, b: 68 }
    ];

    let lower = colors[0];
    let upper = colors[colors.length - 1];

    for (let i = 0; i < colors.length - 1; i++) {
        if (intensity >= colors[i].pos && intensity <= colors[i + 1].pos) {
            lower = colors[i];
            upper = colors[i + 1];
            break;
        }
    }

    const range = upper.pos - lower.pos;
    const t = range === 0 ? 0 : (intensity - lower.pos) / range;

    const r = Math.round(lower.r + (upper.r - lower.r) * t);
    const g = Math.round(lower.g + (upper.g - lower.g) * t);
    const b = Math.round(lower.b + (upper.b - lower.b) * t);

    return `rgb(${r}, ${g}, ${b})`;
}

function updateHeatmapStats() {
    if (typeof calculateHeatmapMetrics !== 'function') return;

    const metrics = calculateHeatmapMetrics();

    const outsideEl = document.getElementById('outsideHoursPercent');
    const peakEl = document.getElementById('peakDay');

    if (outsideEl) outsideEl.textContent = metrics.outsideHoursPercent + '%';
    if (peakEl) peakEl.textContent = metrics.peakDay + ' ' + metrics.peakTime;
}
