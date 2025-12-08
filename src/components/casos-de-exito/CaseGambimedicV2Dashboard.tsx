import React from 'react';

const CaseGambimedicV2Dashboard: React.FC = () => (
  <div className="h-full min-h-[900px] w-full">
    <iframe
      src="/dashboards/caso-gambimedic-v2.html"
      title="Dashboard IA Gambimedic V2"
      className="h-full w-full min-h-[900px] rounded-2xl border border-purple-500/40 bg-white shadow-2xl"
      loading="lazy"
    />
  </div>
);

export default CaseGambimedicV2Dashboard;
