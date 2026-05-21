import React, { useState } from 'react';
import './Dashboard.css';
import DeploymentCard from '../../components/DeploymentCard/DeploymentCard';

// Mock data for initial UI dev
const mockDeployments = [
  { id: 1, repo: 'alokkksharmaa/DeployMate', branch: 'main', commitHash: 'a1b2c3d4', version: 'v1.2.0', status: 'BUILDING', timeAgo: '2 mins ago' },
  { id: 2, repo: 'alokkksharmaa/AuthService', branch: 'production', commitHash: 'f8e9d0c1', version: 'v2.0.1', status: 'SUCCESS', timeAgo: '1 hr ago' },
  { id: 3, repo: 'alokkksharmaa/PaymentGateway', branch: 'hotfix-401', commitHash: 'b5a4c3d2', version: 'v1.1.5', status: 'FAILED', timeAgo: '3 hrs ago' },
  { id: 4, repo: 'alokkksharmaa/FrontendApp', branch: 'main', commitHash: 'e5f6g7h8', version: 'v3.0.0', status: 'PENDING', timeAgo: 'just now' },
];

const Dashboard = () => {
  const [deployments] = useState(mockDeployments);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Overview</h1>
          <p className="dashboard-subtitle">Monitor and manage your active deployments.</p>
        </div>
        <button className="primary-btn">New Deployment</button>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Active Deployments</span>
          <h2 className="stat-value">2</h2>
        </div>
        <div className="stat-card">
          <span className="stat-label">Success Rate</span>
          <h2 className="stat-value success">94.2%</h2>
        </div>
        <div className="stat-card">
          <span className="stat-label">Failed (Last 24h)</span>
          <h2 className="stat-value failed">1</h2>
        </div>
      </section>

      <section className="deployments-section">
        <h2 className="section-title">Recent Activity</h2>
        <div className="deployments-grid">
          {deployments.map(dep => (
            <DeploymentCard key={dep.id} deployment={dep} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
