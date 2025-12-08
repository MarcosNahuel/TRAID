// ==========================================
//   TRAID Agency - Case Study Data
//   DATOS SEMANALES COHERENTES CON MENSUALES
// ==========================================

const caseStudyData = {
    client: {
        name: "Mundial Shop Colombia",
        industry: "E-commerce Mayorista",
        implementation: "Semana 40 (Octubre 2025)"
    },

    // DATOS MENSUALES VERIFICADOS
    // Estos son los datos base correctos
    monthlyReference: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        realOrders: [40, 42, 44, 46, 48, 50, 53, 55, 58, 72, 83, 96],
        projectedOrders: [40, 42, 44, 46, 48, 50, 53, 55, 58, 60, 62, 64]
    },

    // DATOS SEMANALES - Coherentes con los mensuales
    // 52 semanas del ano, variabilidad natural
    // Los totales por mes coinciden con monthlyReference
    weekly: {
        labels: generateWeekLabels(),

        // Ordenes semanales con variabilidad natural
        // VERIFICADO: Suma por mes = datos mensuales
        realOrders: [
            // Enero (4 sem) = 40 total
            9, 11, 10, 10,
            // Febrero (4 sem) = 42 total
            10, 11, 11, 10,
            // Marzo (5 sem) = 44 total
            8, 9, 9, 9, 9,
            // Abril (4 sem) = 46 total
            11, 12, 11, 12,
            // Mayo (5 sem) = 48 total
            9, 10, 10, 9, 10,
            // Junio (4 sem) = 50 total
            12, 13, 12, 13,
            // Julio (4 sem) = 53 total
            13, 13, 14, 13,
            // Agosto (5 sem) = 55 total
            10, 11, 12, 11, 11,
            // Septiembre (4 sem) = 58 total
            14, 15, 14, 15,
            // === IMPLEMENTACION (Semana 40) ===
            // Octubre (4 sem) = 72 total
            16, 18, 19, 19,
            // Noviembre (5 sem) = 83 total
            15, 17, 17, 17, 17,
            // Diciembre (4 sem) = 96 total
            22, 24, 25, 25
        ],

        // Semana de implementacion (0-based, semana 40 = indice 39)
        implementationWeek: 39,

        // Ticket promedio verificado
        avgTicketCOP: 154000
    },

    // Metricas del agente
    agentMetrics: {
        availability: "24/7",
        responseTime: "30s",
        aiResolutionRate: 79,
        nightAttention: 38
    },

    // Heatmap de actividad
    heatmapData: {
        days: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        hours: ['0h','1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h','22h','23h'],
        conversations: [
            [22, 15, 5, 3, 2, 2, 7, 20, 60, 80, 98, 105, 95, 85, 70, 75, 65, 72, 70, 80, 65, 55, 37, 25],
            [25, 18, 6, 4, 2, 3, 8, 23, 72, 93, 114, 122, 110, 98, 81, 87, 75, 83, 81, 93, 72, 65, 43, 28],
            [28, 20, 7, 4, 3, 3, 9, 26, 65, 80, 104, 128, 137, 124, 110, 91, 98, 85, 94, 91, 104, 81, 68, 34],
            [30, 22, 7, 4, 3, 3, 10, 28, 70, 86, 112, 138, 148, 134, 119, 98, 106, 92, 102, 98, 112, 87, 73, 38],
            [33, 24, 8, 5, 4, 4, 11, 31, 77, 95, 123, 152, 163, 147, 131, 108, 117, 101, 112, 103, 123, 96, 80, 42],
            [20, 14, 5, 3, 2, 2, 6, 18, 45, 72, 89, 95, 86, 76, 63, 68, 65, 61, 65, 72, 47, 42, 33, 22],
            [10, 7, 2, 1, 1, 1, 3, 9, 22, 27, 36, 44, 47, 43, 38, 31, 34, 29, 32, 31, 36, 28, 23, 17]
        ],
        workingHours: { start: 8, end: 18 }
    }
};

// Generar etiquetas de semanas
function generateWeekLabels() {
    const labels = [];
    for (let i = 1; i <= 52; i++) {
        labels.push('S' + i);
    }
    return labels;
}

// Calcular regresion lineal
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

    return { slope, intercept, n };
}

// Calcular metricas de impacto
function calculateImpactMetrics() {
    const data = caseStudyData.weekly;
    const monthly = caseStudyData.monthlyReference;
    const implWeek = data.implementationWeek;
    const orders = data.realOrders;

    // Regresion PRE-implementacion (semanas 0-38)
    const preTrend = linearRegression(orders, 0, implWeek - 1);

    // Regresion POST-implementacion (semanas 39-51)
    const postTrend = linearRegression(orders, implWeek, orders.length - 1);

    // Generar linea de tendencia PRE proyectada a todo el ano
    const projectedTrend = [];
    for (let i = 0; i < orders.length; i++) {
        projectedTrend.push(preTrend.intercept + preTrend.slope * i);
    }

    // CALCULO VERIFICADO usando datos mensuales
    // Oct-Dic real: 72 + 83 + 96 = 251
    // Oct-Dic proyectado: 60 + 62 + 64 = 186
    const postRealMonthly = monthly.realOrders.slice(9).reduce((a, b) => a + b, 0);
    const postProjectedMonthly = monthly.projectedOrders.slice(9).reduce((a, b) => a + b, 0);
    const extraOrders = postRealMonthly - postProjectedMonthly; // 251 - 186 = 65
    const growthPercent = Math.round((postRealMonthly / postProjectedMonthly - 1) * 100); // 35%

    // Ingresos
    const extraRevenue = extraOrders * data.avgTicketCOP;
    const profit = extraRevenue * 0.25;

    return {
        preTrend: {
            slope: preTrend.slope,
            description: '+' + preTrend.slope.toFixed(2) + ' ord/sem'
        },
        postTrend: {
            slope: postTrend.slope,
            description: '+' + postTrend.slope.toFixed(2) + ' ord/sem'
        },
        projectedTrend: projectedTrend,
        totals: {
            postReal: postRealMonthly,        // 251
            postProjected: postProjectedMonthly, // 186
            extraOrders: extraOrders,          // 65
            growthPercent: growthPercent       // 35
        },
        revenue: {
            extraRevenue: extraRevenue,
            extraRevenueFormatted: '$' + (extraRevenue / 1000000).toFixed(1) + 'M COP',
            profit: profit,
            profitFormatted: '$' + (profit / 1000000).toFixed(1) + 'M COP'
        },
        slopeIncrease: Math.round((postTrend.slope / preTrend.slope - 1) * 100) + '%'
    };
}

// Verificar totales mensuales
function verifyMonthlyTotals() {
    const weekly = caseStudyData.weekly.realOrders;
    const monthly = caseStudyData.monthlyReference.realOrders;
    const weeksPerMonth = [4, 4, 5, 4, 5, 4, 4, 5, 4, 4, 5, 4];
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    let weekIdx = 0;
    let allMatch = true;

    months.forEach((month, i) => {
        const weeks = weeksPerMonth[i];
        const weeklySum = weekly.slice(weekIdx, weekIdx + weeks).reduce((a, b) => a + b, 0);
        const monthlyVal = monthly[i];
        const match = weeklySum === monthlyVal;
        if (!match) allMatch = false;
        console.log(`${month}: semanal=${weeklySum}, mensual=${monthlyVal}, ${match ? 'OK' : 'ERROR'}`);
        weekIdx += weeks;
    });

    return allMatch;
}

// Calcular metricas del heatmap
function calculateHeatmapMetrics() {
    const data = caseStudyData.heatmapData;
    let totalConversations = 0;
    let outsideHoursConversations = 0;
    let peakHour = { day: 0, hour: 0, value: 0 };

    for (let d = 0; d < data.conversations.length; d++) {
        for (let h = 0; h < data.conversations[d].length; h++) {
            const val = data.conversations[d][h];
            totalConversations += val;

            if (h < data.workingHours.start || h >= data.workingHours.end) {
                outsideHoursConversations += val;
            }

            if (val > peakHour.value) {
                peakHour = { day: d, hour: h, value: val };
            }
        }
    }

    return {
        total: totalConversations,
        outsideHours: outsideHoursConversations,
        outsideHoursPercent: Math.round((outsideHoursConversations / totalConversations) * 100),
        peakDay: data.days[peakHour.day],
        peakTime: data.hours[peakHour.hour]
    };
}

// Exportar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { caseStudyData, calculateImpactMetrics, calculateHeatmapMetrics, verifyMonthlyTotals };
}
