import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import DeploymentDetails from './pages/DeploymentDetails/DeploymentDetails';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/deployment/:id" element={<DeploymentDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
