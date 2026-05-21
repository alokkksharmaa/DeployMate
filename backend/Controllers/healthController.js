import * as healthService from '../services/healthService.js';

export const getHealth = async (req, res) => {
  try {
    const healthStatus = await healthService.checkSystemHealth();
    res.status(200).json(healthStatus);
  } catch (error) {
    res.status(500).json({ status: 'unhealthy', error: error.message });
  }
};
