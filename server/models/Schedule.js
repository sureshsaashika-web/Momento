const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['CLASS', 'ASSIGNMENT', 'EXAM', 'FREE_TIME'], 
    required: true 
  },
  location: { type: String, default: '' },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  building: { type: String, default: '' },
  courseCode: { type: String, default: '' },
  isCompleted: { type: Boolean, default: false },
  priority: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH'], default: 'MEDIUM' }
}, { timestamps: true });

module.exports = mongoose.model('Schedule', ScheduleSchema);
