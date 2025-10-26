import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import './ROHANADashboard.css';

// Register Chart.js components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
  annotationPlugin
);

// Dashboard data (from the original dashboard_script.js)
const DATA = {
  monthly: {
    labels: ["Dic 24", "Ene 25", "Feb 25", "Mar 25", "Abr 25", "May 25", "Jun 25", "Jul 25"],
    conversations: [0, 0, 0, 0, 0, 0, 772, 6490],
    conversationsWithCart: [0, 0, 0, 0, 0, 0, 250, 2100],
    orders: [3, 51, 260, 394, 203, 380, 821, 1565],
    revenue: [97986, 2277191, 17645758, 28806039, 14851302, 32591205, 74218305, 149461558],
    ordersActual: [3, 51, 260, 394, 203, 380, 821, 1565],
    ordersProjected: [3, 51, 260, 394, 203, 380, 475, 594],
    revenueActual: [97986, 2277191, 17645758, 28806039, 14851302, 32591205, 74218305, 149461558],
    revenueProjected: [97986, 2277191, 17645758, 28806039, 14851302, 32591205, 40739506, 50924383]
  },
  weeklyHeatmap: {
    before: {
      'Lunes':    [5, 2, 1, 0, 0, 0, 1, 4, 6, 10, 11, 11, 12, 13, 12, 9, 8, 11, 10, 9, 12, 8, 7, 8],
      'Martes':   [6, 3, 1, 1, 0, 0, 1, 5, 7, 12, 13, 13, 14, 15, 14, 11, 10, 13, 11, 11, 14, 10, 9, 9],
      'Miércoles':[6, 2, 0, 0, 0, 0, 2, 6, 8, 13, 13, 13, 15, 16, 15, 12, 10, 14, 12, 12, 15, 11, 10, 10],
      'Jueves':   [7, 3, 1, 1, 1, 1, 2, 7, 9, 14, 15, 15, 16, 17, 16, 13, 11, 15, 13, 13, 16, 12, 11, 11],
      'Viernes':  [8, 3, 0, 1, 0, 1, 2, 8, 10, 16, 17, 17, 18, 19, 18, 15, 13, 17, 15, 14, 18, 13, 12, 12],
      'Sábado':   [5, 2, 1, 1, 1, 0, 1, 6, 8, 13, 13, 14, 15, 15, 15, 11, 10, 13, 11, 12, 14, 9, 9, 8],
      'Domingo':  [2, 2, 0, 0, 1, 1, 0, 3, 5, 6, 5, 5, 6, 7, 6, 4, 3, 5, 5, 5, 5, 3, 4, 4]
    },
    after: {
      'Lunes':    [7, 5, 1, 1, 1, 1, 2, 4, 13, 12, 20, 24, 26, 24, 23, 18, 19, 16, 19, 19, 22, 18, 17, 13],
      'Martes':   [7, 6, 1, 0, 1, 1, 3, 5, 15, 14, 23, 27, 29, 28, 26, 20, 22, 18, 21, 21, 25, 21, 20, 14],
      'Miércoles':[7, 6, 1, 1, 1, 1, 3, 5, 16, 15, 25, 29, 31, 30, 28, 22, 24, 19, 23, 23, 27, 23, 22, 15],
      'Jueves':   [8, 7, 1, 0, 1, 1, 3, 6, 17, 16, 27, 31, 33, 32, 30, 24, 26, 21, 25, 25, 29, 24, 23, 17],
      'Viernes':  [9, 7, 2, 1, 1, 2, 4, 6, 19, 18, 30, 35, 37, 35, 33, 27, 29, 24, 28, 28, 33, 27, 26, 19],
      'Sábado':   [6, 5, 1, 1, 1, 1, 2, 4, 13, 13, 21, 24, 26, 25, 24, 18, 20, 16, 19, 20, 23, 19, 18, 13],
      'Domingo':  [3, 2, 1, 0, 1, 1, 0, 1, 7, 7, 10, 11, 13, 13, 13, 7, 8, 7, 9, 9, 12, 10, 9, 6]
    },
    conversations: {
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

// Color utility function
function getHeatColor(intensity) {
  const colors = [
    [30, 58, 138],   // azul oscuro (0%)
    [59, 130, 246],  // azul medio (25%)
    [251, 191, 36],  // amarillo/naranja (50%)
    [249, 115, 22],  // naranja (75%)
    [220, 38, 38]    // rojo intenso (100%)
  ];

  if (intensity === 0) {
    return `rgb(30, 58, 138)`;
  }

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

const ROHANADashboard: React.FC = () => {
  const timelineChartRef = useRef<HTMLCanvasElement>(null);
  const growthChartRef = useRef<HTMLCanvasElement>(null);
  const hourlyChartRef = useRef<HTMLCanvasElement>(null);
  const heatmapAfterRef = useRef<HTMLDivElement>(null);
  const heatmapConversationsRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    console.log('ROHANADashboard montado');
    // Esperar a que el DOM esté completamente montado
    const timer = setTimeout(() => {
      try {
        console.log('Iniciando creación de gráficos...');
        createTimelineChart();
        createGrowthComparisonChart();
        createHourlyDistributionChart();
        createWeeklyHeatmap('heatmapAfterWeek', DATA.weeklyHeatmap.after, 'ventas');
        createWeeklyHeatmap('heatmapConversations', DATA.weeklyHeatmap.conversations, 'conversaciones');
        calculateROI();
        console.log('Gráficos creados exitosamente');
        setIsLoading(false);
      } catch (error) {
        console.error('Error al crear los gráficos:', error);
        setError(error instanceof Error ? error.message : 'Error desconocido');
        setIsLoading(false);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const createTimelineChart = () => {
    if (!timelineChartRef.current) return;

    const ctx = timelineChartRef.current.getContext('2d');
    if (!ctx) return;

    new ChartJS(ctx, {
      data: {
        labels: DATA.monthly.labels,
        datasets: [
          {
            type: 'bar' as const,
            label: 'Conversaciones del Agente',
            data: DATA.monthly.conversations,
            backgroundColor: 'rgba(59, 130, 246, 0.7)',
            borderColor: '#3b82f6',
            borderWidth: 2,
            borderRadius: 8,
            yAxisID: 'y',
            order: 3
          },
          {
            type: 'line' as const,
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
            type: 'line' as const,
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
            yAxisID: 'y',
            order: 1
          },
          {
            type: 'line' as const,
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
            order: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index' as const,
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
            position: 'left' as const,
            title: {
              display: true,
              text: 'Conversaciones / Ventas',
              color: '#8b92b0',
              font: { size: 13, weight: 'bold' as const }
            },
            grid: {
              color: 'rgba(139, 146, 176, 0.1)'
            },
            ticks: {
              color: '#8b92b0',
              callback: (value) => Number(value).toLocaleString('es-AR')
            }
          },
          y1: {
            beginAtZero: true,
            position: 'right' as const,
            title: {
              display: true,
              text: 'Ingresos (Millones ARS)',
              color: '#10b981',
              font: { size: 13, weight: 'bold' as const }
            },
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              color: '#10b981',
              callback: (value) => '$' + Number(value).toFixed(0) + 'M'
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
  };

  const createGrowthComparisonChart = () => {
    if (!growthChartRef.current) return;

    const ctx = growthChartRef.current.getContext('2d');
    if (!ctx) return;

    new ChartJS(ctx, {
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
          mode: 'index' as const,
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

                if (context.dataIndex >= 6) {
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
                type: 'line' as const,
                xMin: 5.5,
                xMax: 5.5,
                borderColor: '#f59e0b',
                borderWidth: 2,
                borderDash: [5, 5],
                label: {
                  display: true,
                  content: '🚀 Inicio del Agente',
                  position: 'start' as const,
                  backgroundColor: '#f59e0b',
                  color: '#fff',
                  font: {
                    size: 11,
                    weight: 'bold' as const
                  }
                }
              },
              gainLabel1: {
                type: 'label' as const,
                xValue: 6,
                yValue: 57,
                content: ['💵 GANANCIA', 'INCREMENTAL'],
                backgroundColor: 'rgba(16, 185, 129, 0.9)',
                color: '#fff',
                font: {
                  size: 14,
                  weight: 'bold' as const
                },
                padding: 8,
                borderRadius: 6
              },
              gainLabel2: {
                type: 'label' as const,
                xValue: 7,
                yValue: 99,
                content: ['💰 $98.5M', 'Del Agente'],
                backgroundColor: 'rgba(34, 197, 94, 0.95)',
                color: '#fff',
                font: {
                  size: 13,
                  weight: 'bold' as const
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
              callback: (value) => `$${Number(value).toFixed(0)}M`
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
  };

  const createHourlyDistributionChart = () => {
    if (!hourlyChartRef.current) return;

    const ctx = hourlyChartRef.current.getContext('2d');
    if (!ctx) return;

    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}h`);

    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const salesBeforeByHour = Array(24).fill(0);
    const salesAfterByHour = Array(24).fill(0);
    const convsByHour = Array(24).fill(0);

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

    new ChartJS(ctx, {
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
          mode: 'index' as const,
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
                type: 'box' as const,
                xMin: 9,
                xMax: 18,
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                borderColor: 'rgba(16, 185, 129, 0.3)',
                borderWidth: 1,
                label: {
                  display: true,
                  content: 'Horario Laboral (9h-18h)',
                  position: 'start' as const,
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
            position: 'left' as const,
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
            position: 'right' as const,
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
  };

  const createWeeklyHeatmap = (containerId: string, data: any, label: string) => {
    const container = containerId === 'heatmapAfterWeek' ? heatmapAfterRef.current : heatmapConversationsRef.current;
    if (!container) return;

    container.innerHTML = '';

    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const allValues = days.flatMap(day => data[day]);
    const maxValue = Math.max(...allValues);

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    const headerRow = document.createElement('tr');
    const emptyCell = document.createElement('th');
    emptyCell.style.padding = '8px';
    emptyCell.style.textAlign = 'right' as const;
    emptyCell.style.color = 'var(--text-muted)';
    emptyCell.style.fontSize = '0.85rem';
    emptyCell.style.width = '100px';
    headerRow.appendChild(emptyCell);

    hours.forEach(hour => {
      const th = document.createElement('th');
      th.textContent = `${hour}h`;
      th.style.padding = '4px 2px';
      th.style.textAlign = 'center' as const;
      th.style.color = 'var(--text-muted)';
      th.style.fontSize = '0.7rem';
      th.style.fontWeight = '400';
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    days.forEach(day => {
      const row = document.createElement('tr');

      const dayCell = document.createElement('td');
      dayCell.textContent = day;
      dayCell.style.padding = '8px 12px';
      dayCell.style.textAlign = 'right' as const;
      dayCell.style.color = 'var(--text-muted)';
      dayCell.style.fontSize = '0.875rem';
      dayCell.style.fontWeight = '500';
      dayCell.style.borderRight = '1px solid var(--border)';
      row.appendChild(dayCell);

      data[day].forEach((value: number, hour: number) => {
        const cell = document.createElement('td');
        const intensity = value / maxValue;
        const bgColor = getHeatColor(intensity);

        cell.style.backgroundColor = bgColor;
        cell.style.padding = '12px 4px';
        cell.style.textAlign = 'center' as const;
        cell.style.fontSize = '0.75rem';
        cell.style.fontWeight = '600';
        cell.style.color = intensity > 0.5 ? '#fff' : 'var(--text-muted)';
        cell.style.cursor = 'pointer';
        cell.style.transition = 'all 0.2s ease';
        cell.style.position = 'relative' as const;
        cell.textContent = value > 0 ? value.toString() : '';

        cell.title = `${day} - ${hour}:00h: ${value} ${label}`;

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
  };

  const calculateROI = () => {
    const inversion = 5000000;
    const ingresosRealesConAgente = 74218305 + 149461558;
    const ingresosProyectadosSinAgente = 40739506 + 50924383;
    const ingresosIncrementales = ingresosRealesConAgente - ingresosProyectadosSinAgente;
    const beneficioNeto = ingresosIncrementales - inversion;
    const roi = (ingresosIncrementales / inversion) * 100;
    const multiplicador = ingresosIncrementales / inversion;

    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    });

    const formatterDecimal = new Intl.NumberFormat('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    // Update DOM elements if they exist
    const roiIngresosAdicionales = document.getElementById('roiIngresosAdicionales');
    const roiPercentage = document.getElementById('roiPercentage');
    const roiBeneficioNeto = document.getElementById('roiBeneficioNeto');
    const roiIngresosAdicionalesText = document.getElementById('roiIngresosAdicionalesText');
    const roiPercentageText = document.getElementById('roiPercentageText');
    const roiMultiplier = document.getElementById('roiMultiplier');

    if (roiIngresosAdicionales) {
      roiIngresosAdicionales.textContent = formatter.format(ingresosIncrementales).replace('ARS', '').trim();
    }
    if (roiPercentage) {
      roiPercentage.textContent = formatterDecimal.format(roi) + '%';
    }
    if (roiBeneficioNeto) {
      roiBeneficioNeto.textContent = formatter.format(beneficioNeto).replace('ARS', '').trim();
    }
    if (roiIngresosAdicionalesText) {
      roiIngresosAdicionalesText.textContent = formatter.format(ingresosIncrementales);
    }
    if (roiPercentageText) {
      roiPercentageText.textContent = formatterDecimal.format(roi) + '%';
    }
    if (roiMultiplier) {
      roiMultiplier.textContent = formatter.format(multiplicador);
    }
  };

  if (error) {
    return (
      <div className="rohana-dashboard">
        <div className="container">
          <div className="p-8 bg-red-900/30 border border-red-500/50 rounded-xl">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Error al cargar el dashboard</h2>
            <p className="text-gray-300">{error}</p>
            <p className="text-sm text-gray-400 mt-4">Por favor, revisa la consola para más detalles.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rohana-dashboard">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-purple-900 p-8 rounded-xl border border-purple-500">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-center">Cargando dashboard...</p>
          </div>
        </div>
      )}
      <div className="container">
        <section className="metrics-grid">
          <div className="metric-card">
            <div className="metric-label">Total Conversaciones</div>
            <div className="metric-value">14,439</div>
            <div className="metric-detail">Jun - Oct 2025</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Total Ventas</div>
            <div className="metric-value">3,879</div>
            <div className="metric-detail">Dic 2024 - Ago 2025</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Ingresos Totales</div>
            <div className="metric-value">$340.1M</div>
            <div className="metric-detail">ARS acumulado</div>
          </div>
          <div className="metric-card">
            <div className="metric-label">Mejora Post-Agente</div>
            <div className="metric-value">+79%</div>
            <div className="metric-detail">Incremento en ventas</div>
          </div>
        </section>

        <section className="chart-section">
          <div className="chart-header">
            <h2 className="chart-title">Correlación: Conversaciones del Agente vs Ventas e Ingresos</h2>
            <p className="chart-description">
              Histórico mensual mostrando cómo las conversaciones del agente (barras azules) se correlacionan directamente
              con el aumento de ventas (línea púrpura) e ingresos (línea verde). A mayor actividad del agente, mayores resultados comerciales.
            </p>
          </div>
          <div className="chart-container">
            <canvas ref={timelineChartRef}></canvas>
          </div>
        </section>

        <section className="chart-section">
          <div className="chart-header">
            <h2 className="chart-title">Análisis de ROI (Retorno de Inversión)</h2>
            <p className="chart-description">
              Impacto financiero del agente conversacional ROHANA considerando una inversión de $5,000,000 ARS.
            </p>
          </div>
          <div className="roi-metrics-grid">
            <div className="metric-card" style={{background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem'}}>
              <div className="metric-label" style={{color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>Inversión Total</div>
              <div className="metric-value" style={{fontSize: '2rem', fontWeight: 700, color: 'var(--text)'}}>$5,000,000</div>
              <div className="metric-detail" style={{color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem'}}>Implementación + Operación</div>
            </div>
            <div className="metric-card" style={{background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem'}}>
              <div className="metric-label" style={{color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>💵 Ingresos Incrementales</div>
              <div className="metric-value" style={{fontSize: '2rem', fontWeight: 700, color: '#10b981'}} id="roiIngresosAdicionales">$132.0M</div>
              <div className="metric-detail" style={{color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem'}}>Jun-Jul 2025 vs proyección</div>
            </div>
            <div className="metric-card" style={{background: 'linear-gradient(135deg, #10b981, #059669)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '1.5rem'}}>
              <div className="metric-label" style={{color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>💰 ROI</div>
              <div className="metric-value" style={{fontSize: '2rem', fontWeight: 700, color: 'white'}} id="roiPercentage">2,640%</div>
              <div className="metric-detail" style={{color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', marginTop: '0.5rem'}}>Retorno sobre inversión</div>
            </div>
            <div className="metric-card" style={{background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem'}}>
              <div className="metric-label" style={{color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem'}}>💸 Beneficio Neto</div>
              <div className="metric-value" style={{fontSize: '2rem', fontWeight: 700, color: 'var(--text)'}} id="roiBeneficioNeto">$127.0M</div>
              <div className="metric-detail" style={{color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem'}}>Ganancia después de inversión</div>
            </div>
          </div>
          <div className="roi-conclusion">
            <h3>💰 Conclusión del ROI</h3>
            <p>
              Con una inversión de <strong>$5,000,000</strong>, el agente conversacional generó ingresos incrementales de
              <strong id="roiIngresosAdicionalesText">$132,015,974</strong> <em>por encima del crecimiento orgánico proyectado</em> en Jun-Jul 2025,
              resultando en un ROI de <strong id="roiPercentageText">2,640%</strong>.
              Esto significa que por cada peso invertido, se obtuvieron <strong id="roiMultiplier">$26.40</strong> en retorno incremental.
            </p>
          </div>
        </section>

        <section className="chart-section">
          <div className="chart-header">
            <h2 className="chart-title">Impacto del Agente: Crecimiento Orgánico vs Real</h2>
            <p className="chart-description">
              Comparación entre la proyección de crecimiento orgánico del negocio (línea punteada azul) y el crecimiento real con el agente (línea sólida verde).
              El área sombreada en verde representa el retorno incremental atribuible directamente al agente.
            </p>
          </div>
          <div className="chart-container">
            <canvas ref={growthChartRef}></canvas>
          </div>
        </section>

        <section className="chart-section">
          <div className="chart-header">
            <h2 className="chart-title">Distribución Horaria: Conversaciones vs Ventas (24 horas)</h2>
            <p className="chart-description">
              Comparación del volumen de conversaciones y ventas ANTES (línea roja punteada) y DESPUÉS (línea verde sólida) del agente durante las 24 horas del día.
              La zona sombreada (9h-18h) representa el horario laboral tradicional. Note el incremento significativo en horarios no laborables.
            </p>
          </div>
          <div className="chart-container">
            <canvas ref={hourlyChartRef}></canvas>
          </div>
        </section>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
          <section className="chart-section" style={{marginBottom: 0}}>
            <div className="chart-header">
              <h2 className="chart-title">Mapa de Calor: Ventas DESPUÉS del Agente</h2>
              <p className="chart-description">
                Distribución de ventas por día y hora después del agente (desde 6 jun 2025).
                Azul = sin ventas, Rojo intenso = alto volumen.
              </p>
            </div>
            <div className="heatmap-container">
              <div id="heatmapAfterWeek" ref={heatmapAfterRef}></div>
              <div className="legend">
                <div className="legend-item">
                  <span style={{color: 'var(--text-muted)'}}>Intensidad:</span>
                  <div>
                    <div className="legend-gradient" style={{background: 'linear-gradient(to right, #1e3a8a, #3b82f6, #fbbf24, #f97316, #dc2626)'}}></div>
                    <div className="legend-labels">
                      <span>Sin ventas</span>
                      <span>Alto volumen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="chart-section" style={{marginBottom: 0}}>
            <div className="chart-header">
              <h2 className="chart-title">Mapa de Calor: Conversaciones del Agente</h2>
              <p className="chart-description">
                Distribución de conversaciones por día y hora desde la implementación.
                Azul = baja actividad, Rojo intenso = alta actividad.
              </p>
            </div>
            <div className="heatmap-container">
              <div id="heatmapConversations" ref={heatmapConversationsRef}></div>
              <div className="legend">
                <div className="legend-item">
                  <span style={{color: 'var(--text-muted)'}}>Actividad:</span>
                  <div>
                    <div className="legend-gradient" style={{background: 'linear-gradient(to right, #1e3a8a, #3b82f6, #fbbf24, #f97316, #dc2626)'}}></div>
                    <div className="legend-labels">
                      <span>Baja</span>
                      <span>Alta</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ROHANADashboard;
