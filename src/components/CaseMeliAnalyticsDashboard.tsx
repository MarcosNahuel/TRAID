import React, { useState } from 'react';

const CaseMeliAnalyticsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'impacto' | 'postventa'>('impacto');

  return (
    <div className="h-full min-h-[900px] w-full">
      {/* Tabs */}
      <div className="mb-6 flex gap-4 border-b border-purple-500/30">
        <button
          type="button"
          onClick={() => setActiveTab('impacto')}
          className={`px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-300 border-b-2 ${
            activeTab === 'impacto'
              ? 'border-purple-500 text-purple-300 bg-purple-900/20'
              : 'border-transparent text-gray-400 hover:text-purple-400 hover:border-purple-400/50'
          }`}
        >
          📊 Impacto (Antes vs. Después)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('postventa')}
          className={`px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-300 border-b-2 ${
            activeTab === 'postventa'
              ? 'border-emerald-500 text-emerald-300 bg-emerald-900/20'
              : 'border-transparent text-gray-400 hover:text-emerald-400 hover:border-emerald-400/50'
          }`}
        >
          ⚙️ Postventa (Workflows & Métricas)
        </button>
      </div>

      {/* Content */}
      {activeTab === 'impacto' ? (
        <iframe
          src="/dashboards/meli-impacto.html"
          title="Dashboard MELI Analytics - Impacto"
          className="h-full w-full min-h-[900px] rounded-2xl border border-purple-500/40 bg-white shadow-2xl"
          loading="lazy"
        />
      ) : (
        <iframe
          src="/dashboards/meli-postventa.html"
          title="Dashboard MELI Analytics - Postventa"
          className="h-full w-full min-h-[900px] rounded-2xl border border-emerald-500/40 bg-white shadow-2xl"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default CaseMeliAnalyticsDashboard;
