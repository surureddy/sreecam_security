// src/pages/admin/leads.tsx
import React, { useState, useEffect } from 'react';

interface Lead {
  id: string;
  name: string;
  email: string;
  message: string;
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const response = await fetch('/api/leads');
      const data = await response.json();
      setLeads(data);
    };
    fetchLeads();
  }, []);

  const deleteLead = async (id: string) => {
    await fetch(`/api/leads?id=${id}`, { method: 'DELETE' });
    setLeads(leads.filter(lead => lead.id !== id));
  };

  return (
    <div>
      <h1>Manage Leads</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.message}</td>
              <td>
                <button onClick={() => deleteLead(lead.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
