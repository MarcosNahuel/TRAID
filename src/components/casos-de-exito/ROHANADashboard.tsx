import React from 'react';

const ROHANADashboard: React.FC = () => (
  <div className="h-full min-h-[900px] w-full">
    <iframe
      src="/dashboards/caso-rohana.html"
      title="Dashboard ROHANA Analytics"
      className="h-full w-full min-h-[900px] rounded-2xl border border-purple-500/40 bg-white shadow-2xl"
      loading="lazy"
    />
  </div>
);

export default ROHANADashboard;
