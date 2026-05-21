const API_BASE = 'http://localhost:3000/api';

export const fetchDeployments = async () => {
  const response = await fetch(`${API_BASE}/deployments`);
  if (!response.ok) throw new Error('Failed to fetch deployments');
  return response.json();
};

export const fetchDeploymentById = async (id) => {
  const response = await fetch(`${API_BASE}/deployment/${id}`);
  if (!response.ok) throw new Error('Failed to fetch deployment');
  return response.json();
};

export const fetchDeploymentLogs = async (id) => {
  const response = await fetch(`${API_BASE}/logs/${id}`);
  if (!response.ok) throw new Error('Failed to fetch logs');
  return response.json();
};
