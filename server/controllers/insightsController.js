// Weekly Health & Productivity Analytics Controller
exports.getWeeklyInsights = async (req, res) => {
  try {
    const weeklyData = {
      meals: { eaten: 18, skipped: 3, target: 21 },
      sleep: { averageHours: 6.8, targetHours: 8.0, totalDeficit: "3.5 hrs" },
      stressTrend: [
        { day: 'Mon', score: 6 },
        { day: 'Tue', score: 4 },
        { day: 'Wed', score: 7 },
        { day: 'Thu', score: 3 },
        { day: 'Fri', score: 5 },
        { day: 'Sat', score: 2 },
        { day: 'Sun', score: 3 }
      ],
      focusScore: 84,
      studyHoursTotal: 28.5,
      aiWeeklySummary: "You skipped breakfast three times this week, which correlated with higher mid-afternoon stress scores on Wednesday. Consider eating a light meal before your 9:00 AM lectures."
    };
    return res.json({ success: true, data: weeklyData });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
