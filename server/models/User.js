const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  profilePhoto: { type: String, default: '' },
  college: { type: String, default: '' },
  department: { type: String, default: '' },
  year: { type: String, default: '' },
  studyGoals: [{ type: String }],
  foodPreferences: [{ type: String }],
  sleepGoalHours: { type: Number, default: 8 },
  permissions: {
    notifications: { type: Boolean, default: true },
    location: { type: Boolean, default: true }
  },
  currentCapacity: { 
    type: String, 
    enum: ['MANAGE', 'STRUGGLING', 'CANT_DEAL'], 
    default: 'MANAGE' 
  },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
