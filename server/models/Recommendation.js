const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  capacityMode: { type: String, enum: ['MANAGE', 'STRUGGLING', 'CANT_DEAL'], required: true },
  actionText: { type: String, required: true },
  reason: { type: String, required: true },
  estimatedMinutes: { type: Number, default: 15 },
  priority: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'], default: 'HIGH' },
  whyThisRecommendation: { type: String, required: true },
  status: { type: String, enum: ['PENDING', 'ACCEPTED', 'SKIPPED', 'COMPLETED'], default: 'PENDING' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);
