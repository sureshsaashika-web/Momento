const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { recommendationId, didHelp, notes } = req.body;
  res.json({ success: true, message: 'Feedback recorded to refine future recommendations', didHelp });
});

module.exports = router;
