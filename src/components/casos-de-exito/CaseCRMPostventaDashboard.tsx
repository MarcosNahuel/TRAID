import React from 'react';

const CaseCRMPostventaDashboard: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src="https://crm-postventa-demo.vercel.app/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '8px',
        }}
        title="CRM Postventa Demo - MarIA S.A."
        allow="clipboard-write"
      />
    </div>
  );
};

export default CaseCRMPostventaDashboard;
