const mongoose = require('mongoose');

const HealthLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true }, // Format YYYY-MM-DD
  sleepHours: { type: Number, default: 7 },
  skippedMealsCount: { type: Number, default: 0 },
  waterGlasses: { type: Number, default: 5 },
  stressLevel: { type: Number, min: 1, max: 10, default: 4 },
  focusScore: { type: Number, min: 0, max: 100, default: 82 },
  studyHours: { type: Number, default: 4.5 }
}, { timestamps: true });

module.exports = mongoose.model('HealthLog', HealthLogSchema);
