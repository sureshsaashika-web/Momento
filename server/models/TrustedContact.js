const mongoose = require('mongoose');

const TrustedContactSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  relationship: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: '' },
  isPrimary: { type: Boolean, default: false }
});

module.exports = mongoose.model('TrustedContact', TrustedContactSchema);
