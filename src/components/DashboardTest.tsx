import React from 'react';

const DashboardTest: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-2xl border border-purple-500/30">
      <h1 className="text-4xl font-bold text-white mb-4">¡Dashboard Funcionando!</h1>
      <p className="text-xl text-gray-300 mb-8">Si ves este mensaje, el modal está funcionando correctamente.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-purple-800/30 p-6 rounded-xl border border-purple-500/20">
          <div className="text-sm text-purple-300 mb-2">Total Conversaciones</div>
          <div className="text-3xl font-bold text-white">14,439</div>
          <div className="text-xs text-gray-400 mt-2">Jun - Oct 2025</div>
        </div>

        <div className="bg-green-800/30 p-6 rounded-xl border border-green-500/20">
          <div className="text-sm text-green-300 mb-2">Total Ventas</div>
          <div className="text-3xl font-bold text-white">3,879</div>
          <div className="text-xs text-gray-400 mt-2">Dic 2024 - Ago 2025</div>
        </div>

        <div className="bg-blue-800/30 p-6 rounded-xl border border-blue-500/20">
          <div className="text-sm text-blue-300 mb-2">Ingresos Totales</div>
          <div className="text-3xl font-bold text-white">$340.1M</div>
          <div className="text-xs text-gray-400 mt-2">ARS acumulado</div>
        </div>

        <div className="bg-yellow-800/30 p-6 rounded-xl border border-yellow-500/20">
          <div className="text-sm text-yellow-300 mb-2">ROI</div>
          <div className="text-3xl font-bold text-white">2,640%</div>
          <div className="text-xs text-gray-400 mt-2">Retorno de inversión</div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-green-900/30 border border-green-500/30 rounded-xl">
        <h3 className="text-2xl font-bold text-green-400 mb-3">✅ Resultados Comprobados</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>Inversión de $5,000,000 ARS generó $132M ARS adicionales</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>Incremento del 79% en ventas después de implementar el agente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">•</span>
            <span>14,439 conversaciones automatizadas en 5 meses</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm italic">
          🔄 Cargando gráficos completos del dashboard...
        </p>
      </div>
    </div>
  );
};

export default DashboardTest;
