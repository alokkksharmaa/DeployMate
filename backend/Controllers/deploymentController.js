import * as deploymentService from '../services/deploymentService.js';

export const triggerDeployment = async (req, res) => {
  try {
    const config = req.body;
    const result = await deploymentService.triggerDeployment(config);
    res.status(202).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deploymentService.getDeploymentStatus(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
