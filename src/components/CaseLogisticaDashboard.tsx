import React from 'react';

const CaseLogisticaDashboard: React.FC = () => {
  const stats = [
    {
      label: 'Pedidos sincronizados',
      value: '12.5K',
      detail: 'Shopify + MercadoLibre + ERP',
      color: 'text-indigo-300'
    },
    {
      label: 'Tiempo de despacho',
      value: '-42%',
      detail: 'Reduccion promedio por automatizar etiquetas',
      color: 'text-emerald-300'
    },
    {
      label: 'Alertas resueltas',
      value: '96%',
      detail: 'Incidencias cerradas en menos de 2 horas',
      color: 'text-amber-300'
    },
    {
      label: 'Stock actualizado',
      value: '99.2%',
      detail: 'Precision en inventario multicanal',
      color: 'text-sky-300'
    }
  ];

  const highlights = [
    'Orquestacion nativa en n8n conectada a WMS y paqueterias.',
    'Visibilidad en tiempo real de SLAs y backlog logistica.',
    'Alertas automaticas para sobreventa y quiebres de stock.'
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-950/40 to-purple-950/30 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 text-white space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard logistica integrada</h1>
        <p className="text-sm sm:text-base text-gray-300">
          Seguimiento operativo centralizado con indicadores de cumplimiento, capacidad y performance por centro de distribucion.
        </p>
      </header>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-200">Indicadores principales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-black/30 border border-white/5 rounded-xl p-4 shadow-inner shadow-black/40"
            >
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-400 mt-2">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black/25 border border-indigo-500/20 rounded-xl p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-indigo-200 mb-3">Automatizaciones clave</h3>
        <ul className="space-y-2 text-sm sm:text-base text-gray-200">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-xs sm:text-sm text-gray-400">
        Datos consolidados de las ultimas 8 semanas. Panel conectado a BigQuery y actualizado cada 15 minutos.
      </footer>
    </div>
  );
};

export default CaseLogisticaDashboard;
