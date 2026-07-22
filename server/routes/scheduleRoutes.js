const express = require('express');
const router = express.Router();

// Mock schedule data endpoints
router.get('/', (req, res) => {
  res.json({
    success: true,
    classes: [
      { id: '1', courseCode: 'CS101', title: 'Data Structures & Algorithms', time: '10:00 AM - 11:30 AM', location: 'Gates Hall 102', building: 'Engineering Quad' },
      { id: '2', courseCode: 'MATH202', title: 'Linear Algebra & Calculus', time: '02:00 PM - 03:15 PM', location: 'Science Hall 304', building: 'North Campus' }
    ],
    assignments: [
      { id: 'a1', title: 'Algorithm Problem Set 4', dueDate: 'Tomorrow, 11:59 PM', course: 'CS101', priority: 'HIGH' },
      { id: 'a2', title: 'Linear Algebra Quiz Prep', dueDate: 'Thursday, 5:00 PM', course: 'MATH202', priority: 'MEDIUM' }
    ],
    freeTimeBlocks: [
      { start: '11:30 AM', end: '02:00 PM', durationMinutes: 150, suggestedAction: 'Lunch & Chill' },
      { start: '03:15 PM', end: '05:00 PM', durationMinutes: 105, suggestedAction: 'Focus Study' }
    ]
  });
});

module.exports = router;
