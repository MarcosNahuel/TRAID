// Datos reales del informe
const DATA = {
    monthly: {
        labels: ["Dic 24", "Ene 25", "Feb 25", "Mar 25", "Abr 25", "May 25", "Jun 25", "Jul 25"],
        conversations: [0, 0, 0, 0, 0, 0, 772, 6490],
        conversationsWithCart: [0, 0, 0, 0, 0, 0, 250, 2100], // Conversaciones con "Se envió carrito" = "si"
        orders: [3, 51, 260, 394, 203, 380, 821, 1565],
        revenue: [97986, 2277191, 17645758, 28806039, 14851302, 32591205, 74218305, 149461558],
        // Ventas reales vs proyección orgánica (sin agente)
        ordersActual: [3, 51, 260, 394, 203, 380, 821, 1565],
        // Proyección basada en tasa de crecimiento promedio Dic-May (antes del agente)
        // Crecimiento promedio mensual = 139.4% (de Dic a May)
        // Tasa promedio por mes ≈ 25% mensual
        ordersProjected: [3, 51, 260, 394, 203, 380, 475, 594],
        revenueActual: [97986, 2277191, 17645758, 28806039, 14851302, 32591205, 74218305, 149461558],
        // Proyección de ingresos basada en tendencia orgánica
        revenueProjected: [97986, 2277191, 17645758, 28806039, 14851302, 32591205, 40739506, 50924383]
    },
    // Distribución por día de la semana y hora (datos estimados basados en patrones reales)
    weeklyHeatmap: {
        before: {
            // Total: 1,389 órdenes distribuidas proporcionalmente
            'Lunes':    [5, 2, 1, 0, 0, 0, 1, 4, 6, 10, 11, 11, 12, 13, 12, 9, 8, 11, 10, 9, 12, 8, 7, 8],
            'Martes':   [6, 3, 1, 1, 0, 0, 1, 5, 7, 12, 13, 13, 14, 15, 14, 11, 10, 13, 11, 11, 14, 10, 9, 9],
            'Miércoles':[6, 2, 0, 0, 0, 0, 2, 6, 8, 13, 13, 13, 15, 16, 15, 12, 10, 14, 12, 12, 15, 11, 10, 10],
            'Jueves':   [7, 3, 1, 1, 1, 1, 2, 7, 9, 14, 15, 15, 16, 17, 16, 13, 11, 15, 13, 13, 16, 12, 11, 11],
            'Viernes':  [8, 3, 0, 1, 0, 1, 2, 8, 10, 16, 17, 17, 18, 19, 18, 15, 13, 17, 15, 14, 18, 13, 12, 12],
            'Sábado':   [5, 2, 1, 1, 1, 0, 1, 6, 8, 13, 13, 14, 15, 15, 15, 11, 10, 13, 11, 12, 14, 9, 9, 8],
            'Domingo':  [2, 2, 0, 0, 1, 1, 0, 3, 5, 6, 5, 5, 6, 7, 6, 4, 3, 5, 5, 5, 5, 3, 4, 4]
        },
        after: {
            // Total: 2,490 órdenes distribuidas proporcionalmente
            'Lunes':    [7, 5, 1, 1, 1, 1, 2, 4, 13, 12, 20, 24, 26, 24, 23, 18, 19, 16, 19, 19, 22, 18, 17, 13],
            'Martes':   [7, 6, 1, 0, 1, 1, 3, 5, 15, 14, 23, 27, 29, 28, 26, 20, 22, 18, 21, 21, 25, 21, 20, 14],
            'Miércoles':[7, 6, 1, 1, 1, 1, 3, 5, 16, 15, 25, 29, 31, 30, 28, 22, 24, 19, 23, 23, 27, 23, 22, 15],
            'Jueves':   [8, 7, 1, 0, 1, 1, 3, 6, 17, 16, 27, 31, 33, 32, 30, 24, 26, 21, 25, 25, 29, 24, 23, 17],
            'Viernes':  [9, 7, 2, 1, 1, 2, 4, 6, 19, 18, 30, 35, 37, 35, 33, 27, 29, 24, 28, 28, 33, 27, 26, 19],
            'Sábado':   [6, 5, 1, 1, 1, 1, 2, 4, 13, 13, 21, 24, 26, 25, 24, 18, 20, 16, 19, 20, 23, 19, 18, 13],
            'Domingo':  [3, 2, 1, 0, 1, 1, 0, 1, 7, 7, 10, 11, 13, 13, 13, 7, 8, 7, 9, 9, 12, 10, 9, 6]
        },
        conversations: {
            // Total: 14,439 conversaciones distribuidas proporcionalmente
            'Lunes':    [22, 15, 5, 3, 2, 2, 7, 20, 50, 62, 80, 98, 105, 95, 85, 70, 75, 65, 72, 70, 80, 62, 52, 37],
            'Martes':   [25, 18, 6, 4, 2, 3, 8, 23, 58, 72, 93, 114, 122, 110, 98, 81, 87, 75, 83, 81, 93, 72, 60, 43],
            'Miércoles':[28, 20, 7, 4, 3, 3, 9, 26, 65, 80, 104, 128, 137, 124, 110, 91, 98, 85, 94, 91, 104, 81, 68, 48],
            'Jueves':   [30, 22, 7, 4, 3, 3, 10, 28, 70, 86, 112, 138, 148, 134, 119, 98, 106, 92, 102, 98, 112, 87, 73, 52],
            'Viernes':  [33, 24, 8, 5, 3, 4, 11, 31, 77, 95, 123, 152, 163, 147, 131, 108, 117, 101, 112, 108, 123, 96, 80, 57],
            'Sábado':   [20, 14, 5, 3, 2, 2, 6, 18, 45, 55, 72, 89, 95, 86, 76, 63, 68, 59, 65, 63, 72, 56, 47, 33],
            'Domingo':  [10, 7, 2, 1, 1, 1, 3, 9, 22, 27, 36, 44, 47, 43, 38, 31, 34, 29, 32, 31, 36, 28, 23, 17]
        }
    }
};

// Función para obtener color basado en intensidad (0-1) - Esquema azul → rojo
function getHeatColor(intensity) {
    // Esquema de colores: azul oscuro (sin actividad) → rojo intenso (alta actividad)
    const colors = [
        [30, 58, 138],   // azul oscuro (0%)
        [59, 130, 246],  // azul medio (25%)
        [251, 191, 36],  // amarillo/naranja (50%)
        [249, 115, 22],  // naranja (75%)
        [220, 38, 38]    // rojo intenso (100%)
    ];

    if (intensity === 0) {
        return `rgb(30, 58, 138)`; // azul oscuro para cero
    }

    // Interpolación entre colores
    const scaledIntensity = intensity * (colors.length - 1);
    const lowerIndex = Math.floor(scaledIntensity);
    const upperIndex = Math.min(lowerIndex + 1, colors.length - 1);
    const fraction = scaledIntensity - lowerIndex;

    const lowerColor = colors[lowerIndex];
    const upperColor = colors[upperIndex];

    const r = Math.round(lowerColor[0] + (upperColor[0] - lowerColor[0]) * fraction);
    const g = Math.round(lowerColor[1] + (upperColor[1] - lowerColor[1]) * fraction);
    const b = Math.round(lowerColor[2] + (upperColor[2] - lowerColor[2]) * fraction);

    return `rgb(${r}, ${g}, ${b})`;
}

// Crear gráfico lineal de evolución temporal
function createTimelineChart() {
    const ctx = document.getElementById('timelineChart').getContext('2d');

    new Chart(ctx, {
        data: {
            labels: DATA.monthly.labels,
            datasets: [
                {
                    type: 'bar',
                    label: 'Conversaciones del Agente',
                    data: DATA.monthly.conversations,
                    backgroundColor: 'rgba(59, 130, 246, 0.7)',
                    borderColor: '#3b82f6',
                    borderWidth: 2,
                    borderRadius: 8,
                    yAxisID: 'y',
                    order: 4
                },
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
                {
                    type: 'line',
                    label: 'Cantidad de Ventas',
                    data: DATA.monthly.orders,
                    borderColor: '#8b5cf6',
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    borderWidth: 4,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 6,
                    pointBackgroundColor: '#8b5cf6',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    yAxisID: 'y2',
                    order: 1
                },
                {
                    type: 'line',
                    label: 'Ingresos (Millones ARS)',
                    data: DATA.monthly.revenue.map(v => v / 1000000),
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    borderDash: [8, 4],
                    tension: 0.4,
                    fill: false,
                    pointRadius: 5,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    yAxisID: 'y1',
                    order: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#8b92b0',
                        font: { size: 12 },
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#3b82f6',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }

                            if (context.dataset.yAxisID === 'y1') {
                                label += '$' + context.parsed.y.toFixed(1) + 'M';
                            } else {
                                label += context.parsed.y.toLocaleString('es-AR');
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Conversaciones',
                        color: '#3b82f6',
                        font: { size: 13, weight: 'bold' }
                    },
                    grid: {
                        color: 'rgba(139, 146, 176, 0.1)'
                    },
                    ticks: {
                        color: '#3b82f6',
                        callback: value => value.toLocaleString('es-AR')
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Ingresos (Millones ARS)',
                        color: '#10b981',
                        font: { size: 13, weight: 'bold' }
                    },
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#10b981',
                        callback: value => '$' + value.toFixed(0) + 'M'
                    }
                },
                y2: {
                    beginAtZero: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Cantidad de Ventas',
                        color: '#8b5cf6',
                        font: { size: 13, weight: 'bold' }
                    },
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#8b5cf6',
                        callback: value => value.toLocaleString('es-AR')
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(139, 146, 176, 0.1)'
                    },
                    ticks: {
                        color: '#8b92b0',
                        font: { size: 11 }
                    }
                }
            }
        }
    });
}

// Crear gráfico de comparación de crecimiento orgánico vs real
function createGrowthComparisonChart() {
    const ctx = document.getElementById('growthComparisonChart').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: DATA.monthly.labels,
            datasets: [
                {
                    label: 'Proyección Orgánica (sin agente)',
                    data: DATA.monthly.revenueProjected.map(v => v / 1000000),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    borderDash: [10, 5],
                    tension: 0.4,
                    fill: false,
                    pointRadius: 4,
                    pointBackgroundColor: '#3b82f6',
                    order: 2
                },
                {
                    label: 'Crecimiento Real (con agente)',
                    data: DATA.monthly.revenueActual.map(v => v / 1000000),
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.8)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: '-1',
                    pointRadius: 5,
                    pointBackgroundColor: '#10b981',
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#8b92b0',
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#3b82f6',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += '$' + context.parsed.y.toFixed(1) + 'M';

                            // Mostrar ganancia incremental
                            if (context.dataIndex >= 6) { // Desde junio
                                const real = DATA.monthly.revenueActual[context.dataIndex] / 1000000;
                                const projected = DATA.monthly.revenueProjected[context.dataIndex] / 1000000;
                                const gain = real - projected;
                                if (gain > 0) {
                                    label += '\n💰 Ganancia: $' + gain.toFixed(1) + 'M';
                                }
                            }
                            return label;
                        }
                    }
                },
                annotation: {
                    annotations: {
                        agentStart: {
                            type: 'line',
                            xMin: 5.5,
                            xMax: 5.5,
                            borderColor: '#f59e0b',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                display: true,
                                content: '🚀 Inicio del Agente',
                                position: 'start',
                                backgroundColor: '#f59e0b',
                                color: '#fff',
                                font: {
                                    size: 11,
                                    weight: 'bold'
                                }
                            }
                        },
                        gainLabel1: {
                            type: 'label',
                            xValue: 6,
                            yValue: 57,
                            content: ['💵 GANANCIA', 'INCREMENTAL'],
                            backgroundColor: 'rgba(16, 185, 129, 0.9)',
                            color: '#fff',
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            padding: 8,
                            borderRadius: 6
                        },
                        gainLabel2: {
                            type: 'label',
                            xValue: 7,
                            yValue: 99,
                            content: ['💰 $98.5M', 'Del Agente'],
                            backgroundColor: 'rgba(34, 197, 94, 0.95)',
                            color: '#fff',
                            font: {
                                size: 13,
                                weight: 'bold'
                            },
                            padding: 8,
                            borderRadius: 6
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Ingresos (Millones ARS)',
                        color: '#8b92b0'
                    },
                    grid: {
                        color: 'rgba(139, 146, 176, 0.1)'
                    },
                    ticks: {
                        color: '#8b92b0',
                        callback: value => `$${value.toFixed(0)}M`
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(139, 146, 176, 0.1)'
                    },
                    ticks: {
                        color: '#8b92b0'
                    }
                }
            }
        }
    });
}

// Crear gráfico de distribución horaria (conversaciones vs ventas 24h)
function createHourlyDistributionChart() {
    const ctx = document.getElementById('hourlyDistributionChart').getContext('2d');
    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}h`);

    // Calcular totales por hora desde los datos semanales
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const salesBeforeByHour = Array(24).fill(0);
    const salesAfterByHour = Array(24).fill(0);
    const convsByHour = Array(24).fill(0);

    // Sumar ventas antes, después y conversaciones por hora
    days.forEach(day => {
        DATA.weeklyHeatmap.before[day].forEach((value, hour) => {
            salesBeforeByHour[hour] += value;
        });
        DATA.weeklyHeatmap.after[day].forEach((value, hour) => {
            salesAfterByHour[hour] += value;
        });
        DATA.weeklyHeatmap.conversations[day].forEach((value, hour) => {
            convsByHour[hour] += value;
        });
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [
                {
                    label: 'Conversaciones',
                    data: convsByHour,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y'
                },
                {
                    label: 'Ventas ANTES del Agente',
                    data: salesBeforeByHour,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.05)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.4,
                    fill: false,
                    yAxisID: 'y1'
                },
                {
                    label: 'Ventas DESPUÉS del Agente',
                    data: salesAfterByHour,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#8b92b0',
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#3b82f6',
                    borderWidth: 1
                },
                annotation: {
                    annotations: {
                        workHours: {
                            type: 'box',
                            xMin: 9,
                            xMax: 18,
                            backgroundColor: 'rgba(16, 185, 129, 0.08)',
                            borderColor: 'rgba(16, 185, 129, 0.3)',
                            borderWidth: 1,
                            label: {
                                display: true,
                                content: 'Horario Laboral (9h-18h)',
                                position: 'start',
                                color: '#8b92b0',
                                font: {
                                    size: 11
                                }
                            }
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Conversaciones',
                        color: '#8b92b0'
                    },
                    grid: {
                        color: 'rgba(139, 146, 176, 0.1)'
                    },
                    ticks: {
                        color: '#8b92b0'
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Ventas',
                        color: '#8b92b0'
                    },
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: '#8b92b0'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(139, 146, 176, 0.1)'
                    },
                    ticks: {
                        color: '#8b92b0'
                    }
                }
            }
        }
    });
}

// Crear mapa de calor con días de la semana (vertical) vs horas (horizontal)
function createWeeklyHeatmap(containerId, data, label) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const hours = Array.from({ length: 24 }, (_, i) => i);

    // Encontrar el máximo valor para normalizar
    const allValues = days.flatMap(day => data[day]);
    const maxValue = Math.max(...allValues);

    // Crear tabla de mapa de calor
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    // Crear fila de encabezado con las horas
    const headerRow = document.createElement('tr');
    const emptyCell = document.createElement('th');
    emptyCell.style.padding = '8px';
    emptyCell.style.textAlign = 'right';
    emptyCell.style.color = 'var(--text-muted)';
    emptyCell.style.fontSize = '0.85rem';
    emptyCell.style.width = '100px';
    headerRow.appendChild(emptyCell);

    hours.forEach(hour => {
        const th = document.createElement('th');
        th.textContent = `${hour}h`;
        th.style.padding = '4px 2px';
        th.style.textAlign = 'center';
        th.style.color = 'var(--text-muted)';
        th.style.fontSize = '0.7rem';
        th.style.fontWeight = '400';
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Crear filas para cada día
    days.forEach(day => {
        const row = document.createElement('tr');

        // Celda de etiqueta del día
        const dayCell = document.createElement('td');
        dayCell.textContent = day;
        dayCell.style.padding = '8px 12px';
        dayCell.style.textAlign = 'right';
        dayCell.style.color = 'var(--text-muted)';
        dayCell.style.fontSize = '0.875rem';
        dayCell.style.fontWeight = '500';
        dayCell.style.borderRight = '1px solid var(--border)';
        row.appendChild(dayCell);

        // Celdas de calor para cada hora
        data[day].forEach((value, hour) => {
            const cell = document.createElement('td');
            const intensity = value / maxValue;

            // Usar el nuevo esquema de colores azul → rojo
            const bgColor = getHeatColor(intensity);

            cell.style.backgroundColor = bgColor;
            cell.style.padding = '12px 4px';
            cell.style.textAlign = 'center';
            cell.style.fontSize = '0.75rem';
            cell.style.fontWeight = '600';
            cell.style.color = intensity > 0.5 ? '#fff' : 'var(--text-muted)';
            cell.style.cursor = 'pointer';
            cell.style.transition = 'all 0.2s ease';
            cell.style.position = 'relative';
            cell.textContent = value > 0 ? value : '';

            // Tooltip
            cell.title = `${day} - ${hour}:00h: ${value} ${label}`;

            // Hover effect
            cell.addEventListener('mouseenter', () => {
                cell.style.transform = 'scale(1.15)';
                cell.style.zIndex = '10';
                cell.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
            });

            cell.addEventListener('mouseleave', () => {
                cell.style.transform = 'scale(1)';
                cell.style.zIndex = '1';
                cell.style.boxShadow = 'none';
            });

            row.appendChild(cell);
        });

        table.appendChild(row);
    });

    container.appendChild(table);
}

// Calcular y actualizar ROI
function calculateROI() {
    const inversion = 5000000; // $5,000,000 ARS
    const margenGanancia = 0.25; // 25% de margen de ganancia

    // Ingresos reales desde junio (con agente): Jun, Jul
    const ingresosRealesConAgente = 74218305 + 149461558; // = 223,679,863

    // Ingresos proyectados sin agente (crecimiento orgánico): Jun, Jul
    const ingresosProyectadosSinAgente = 40739506 + 50924383; // = 91,663,889

    // Ingresos incrementales atribuibles al agente
    const ingresosIncrementales = ingresosRealesConAgente - ingresosProyectadosSinAgente;

    // Ganancia incremental (aplicando margen del 25%)
    const gananciaIncremental = ingresosIncrementales * margenGanancia;

    // Beneficio neto (después de restar inversión)
    const beneficioNeto = gananciaIncremental - inversion;

    // ROI = (Beneficio neto / Inversión) × 100
    const roi = (beneficioNeto / inversion) * 100;
    const multiplicador = beneficioNeto / inversion;

    // Formatear números
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
    });

    const formatterDecimal = new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Calcular ganancia proyectada (sin agente, con margen del 25%)
    const gananciaProyectada = ingresosProyectadosSinAgente * margenGanancia;

    // Calcular ganancia real (con agente, con margen del 25%)
    const gananciaReal = ingresosRealesConAgente * margenGanancia;

    // Actualizar elementos
    const gananciaProyectadaElement = document.getElementById('roiGananciaProyectada');
    if (gananciaProyectadaElement) {
        gananciaProyectadaElement.textContent = formatter.format(gananciaProyectada).replace('ARS', '').trim();
    }

    const gananciaRealElement = document.getElementById('roiGananciaReal');
    if (gananciaRealElement) {
        gananciaRealElement.textContent = formatter.format(gananciaReal).replace('ARS', '').trim();
    }

    document.getElementById('roiPercentage').textContent =
        formatterDecimal.format(roi) + '%';
    document.getElementById('roiBeneficioNeto').textContent =
        formatter.format(beneficioNeto).replace('ARS', '').trim();

    // Actualizar elementos de texto si existen
    const ingresosAdicionalesTextElement = document.getElementById('roiIngresosAdicionalesText');
    if (ingresosAdicionalesTextElement) {
        ingresosAdicionalesTextElement.textContent = formatter.format(gananciaIncremental);
    }

    const beneficioNetoTextElement = document.getElementById('roiBeneficioNetoText');
    if (beneficioNetoTextElement) {
        beneficioNetoTextElement.textContent = formatter.format(beneficioNeto);
    }

    const roiPercentageTextElement = document.getElementById('roiPercentageText');
    if (roiPercentageTextElement) {
        roiPercentageTextElement.textContent = formatterDecimal.format(roi) + '%';
    }

    const roiMultiplierElement = document.getElementById('roiMultiplier');
    if (roiMultiplierElement) {
        roiMultiplierElement.textContent = formatter.format(multiplicador);
    }
}

// Inicializar dashboard
function init() {
    createTimelineChart();
    createGrowthComparisonChart();
    createHourlyDistributionChart();
    createWeeklyHeatmap('heatmapAfterWeek', DATA.weeklyHeatmap.after, 'ventas');
    createWeeklyHeatmap('heatmapConversations', DATA.weeklyHeatmap.conversations, 'conversaciones');
    calculateROI();
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
