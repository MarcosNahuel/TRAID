import React from 'react';

const CaseConjuntoEconomicoDashboard: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="/dashboards/dashboard_conjunto_economico.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '8px',
        }}
        title="Dashboard Conjunto Economico"
      />
    </div>
  );
};

export default CaseConjuntoEconomicoDashboard;
