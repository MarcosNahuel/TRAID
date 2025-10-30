import React from 'react';

const CaseGambimedicDashboard: React.FC = () => (
  <div className="h-full min-h-[900px] w-full">
    <iframe
      src="/dashboards/caso-gambimedic.html"
      title="Dashboard IA Gambimedic"
      className="h-full w-full min-h-[900px] rounded-2xl border border-purple-500/40 bg-white shadow-2xl"
      loading="lazy"
    />
  </div>
);

export default CaseGambimedicDashboard;
