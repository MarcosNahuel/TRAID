import React from 'react';

const CaseMeliPreventaDashboard: React.FC = () => (
  <div className="h-full min-h-[720px] w-full">
    <iframe
      src="/dashboards/caso-meli-preventa.html"
      title="Dashboard preventa MELI"
      className="h-full w-full min-h-[720px] rounded-2xl border border-purple-500/40 bg-white shadow-2xl"
      loading="lazy"
    />
  </div>
);

export default CaseMeliPreventaDashboard;
