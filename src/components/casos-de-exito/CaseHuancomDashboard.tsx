import React from 'react';

const CaseHuancomDashboard: React.FC = () => (
  <div className="h-full min-h-[900px] w-full">
    <iframe
      src="/dashboards/caso-huancom.html"
      title="Dashboard Huancom Group - MercadoLibre"
      className="h-full w-full min-h-[900px] rounded-2xl border border-purple-500/40 bg-[#0a0e1a] shadow-2xl"
      loading="lazy"
    />
  </div>
);

export default CaseHuancomDashboard;
