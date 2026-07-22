const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    user: {
      name: "Alex Rivera",
      email: "alex.rivera@stanford.edu",
      college: "Stanford University",
      department: "Computer Science",
      year: "Junior (3rd Year)",
      sleepGoalHours: 8,
      foodPreferences: ["Vegetarian", "High Protein"],
      trustedContact: {
        name: "Sarah Rivera (Mom)",
        relationship: "Parent",
        phone: "+1 (555) 234-5678"
      }
    }
  });
});

router.put('/', (req, res) => {
  res.json({ success: true, message: 'Profile updated successfully', updated: req.body });
});

module.exports = router;
