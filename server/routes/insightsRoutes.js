const express = require('express');
const router = express.Router();
const { getWeeklyInsights } = require('../controllers/insightsController');

router.get('/weekly', getWeeklyInsights);

module.exports = router;
