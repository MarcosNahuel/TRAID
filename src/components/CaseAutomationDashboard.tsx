import React from 'react';

const CaseAutomationDashboard: React.FC = () => {
  const pipeline = [
    { stage: 'Leads ingresados', value: '2,130', variation: '+64%', detail: 'Formularios + inbound + referidos', color: 'text-purple-300' },
    { stage: 'Contactados por IA', value: '1,820', variation: '85%', detail: 'Secuencias WhatsApp + email warming', color: 'text-emerald-300' },
    { stage: 'Agenda automatica', value: '540', variation: '+38%', detail: 'Slots confirmados sin intervencion humana', color: 'text-sky-300' },
    { stage: 'Ventas cerradas', value: '192', variation: '+27%', detail: 'Cierre asistido por equipo comercial', color: 'text-amber-300' }
  ];

  const playbooks = [
    'Clasificacion instantanea de leads con puntuacion basada en intencion y ticket promedio.',
    'Asignacion dinamica al ejecutivo disponible segun capacidad y expertise.',
    'Recordatorios automáticos y seguimiento post demo con medicion de respuestas.'
  ];

  return (
    <div className="bg-gradient-to-br from-purple-950/40 via-slate-900/30 to-blue-950/40 border border-purple-500/30 rounded-2xl p-6 sm:p-8 text-white space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">Pipeline de ventas automatizado</h1>
        <p className="text-sm sm:text-base text-gray-300">
          Monitoreo de conversion por etapa, tiempo de respuesta y aporte del agente IA sobre el embudo comercial.
        </p>
      </header>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-purple-200 mb-4">Embudo en tiempo real</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {pipeline.map((item) => (
            <div key={item.stage} className="bg-black/30 border border-white/5 rounded-xl p-4 shadow-inner shadow-black/40">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">{item.stage}</p>
              <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
              <p className="text-xs text-emerald-300 mt-1">{item.variation} vs periodo anterior</p>
              <p className="text-xs text-gray-400 mt-2">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-black/25 border border-purple-500/20 rounded-xl p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-purple-200 mb-3">Playbooks destacados</h3>
          <ul className="space-y-2 text-sm sm:text-base text-gray-200">
            {playbooks.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-black/25 border border-blue-500/20 rounded-xl p-5 sm:p-6 space-y-2 text-sm sm:text-base text-gray-200">
          <h3 className="text-lg font-semibold text-blue-200">KPIs de eficiencia</h3>
          <p><span className="text-blue-300 font-semibold">2m 40s</span> tiempo promedio de respuesta inicial</p>
          <p><span className="text-blue-300 font-semibold">+31%</span> tasa de show-up en demos agendadas</p>
          <p><span className="text-blue-300 font-semibold">+18%</span> up-sell en clientes actuales via secuencias IA</p>
        </div>
      </section>

      <footer className="text-xs sm:text-sm text-gray-400">
        Datos consolidados con seguimiento diario. Integraciones activas con HubSpot, WhatsApp API y Google Calendar.
      </footer>
    </div>
  );
};

export default CaseAutomationDashboard;
