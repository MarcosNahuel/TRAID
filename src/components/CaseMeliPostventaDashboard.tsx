import React from 'react';

const CaseMeliPostventaDashboard: React.FC = () => (
  <div className="h-full min-h-[800px] w-full">
    <iframe
      src="/dashboards/caso-meli-postventa.html"
      title="Dashboard postventa MELI"
      className="h-full w-full min-h-[800px] rounded-2xl border border-purple-500/40 bg-white shadow-2xl"
      loading="lazy"
    />
  </div>
);

export default CaseMeliPostventaDashboard;
