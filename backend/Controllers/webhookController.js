import * as webhookService from '../services/webhookService.js';

export const handleWebhook = async (req, res) => {
  try {
    const payload = req.body;
    const result = await webhookService.processWebhook(payload);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
