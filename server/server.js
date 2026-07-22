const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/recommendations', require('./routes/recommendationRoutes'));
app.use('/api/schedule', require('./routes/scheduleRoutes'));
app.use('/api/insights', require('./routes/insightsRoutes'));
app.use('/api/feedback', require('./routes/feedbackRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'online', appName: 'Momento API', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`Momento Backend API Server running on port ${PORT}`);
});
