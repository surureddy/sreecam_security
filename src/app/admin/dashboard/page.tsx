// src/pages/admin/dashboard.tsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard. From here, you can manage products and leads.</p>
      <div>
        <button>Manage Products</button>
        <button>Manage Leads</button>
      </div>
    </div>
  );
};

export default Dashboard;
