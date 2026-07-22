const { GoogleGenerativeAI } = require('@google/generative-ai');

// Generate single recommendation based on capacity, timetable, location, & health context
exports.getRecommendation = async (req, res) => {
  try {
    const { capacity, freeMinutes, nextClass, lastMealHoursAgo, location } = req.body;
    
    // Check if Gemini API key exists
    if (process.env.GEMINI_API_KEY) {
      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const prompt = `You are Momento, a supportive AI assistant for college students.
Return JSON ONLY with fields: "actionText", "estimatedMinutes", "reason", "priority", "whyThisRecommendation".
Student Capacity: ${capacity || 'MANAGE'} (Options: MANAGE, STRUGGLING, CANT_DEAL).
Context: ${freeMinutes || 30} minutes free before ${nextClass || 'CS101 Algorithms'}. Last meal: ${lastMealHoursAgo || 4} hours ago. Current location: ${location || 'Student Union'}.
Provide EXACTLY ONE actionable, realistic, ultra-personalized next step. Keep reasons empathetic, clear, and concise.`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const cleanedJson = responseText.replace(/```json|```/g, '').trim();
        const aiData = JSON.parse(cleanedJson);
        return res.json({ success: true, data: aiData, source: 'Gemini AI' });
      } catch (aiErr) {
        console.warn('Gemini API fallback to smart rules:', aiErr.message);
      }
    }

    // Smart Fallback Recommendation Engine based on student state
    let rec = {};
    if (capacity === 'MANAGE') {
      if (lastMealHoursAgo && lastMealHoursAgo >= 4) {
        rec = {
          actionText: `Grab a quick lunch at Campus Canteen before ${nextClass || 'your next class'}.`,
          estimatedMinutes: 20,
          reason: `You skipped breakfast and have ${freeMinutes || 30} minutes free. Fuel up so your brain stays sharp!`,
          priority: "HIGH",
          whyThisRecommendation: "Your timetable shows a 4-hour break gap after breakfast. Nutrition directly boosts your focus score."
        };
      } else {
        rec = {
          actionText: `Review the 3 main formulas for ${nextClass || 'CS101'} at the 2nd floor library quiet zone.`,
          estimatedMinutes: 15,
          reason: `You have ${freeMinutes || 25} minutes free near the library. Quick preparation boosts test confidence by 40%.`,
          priority: "MEDIUM",
          whyThisRecommendation: "High productivity capacity detected. Capitalize on this micro-window for active recall."
        };
      }
    } else if (capacity === 'STRUGGLING') {
      rec = {
        actionText: "Put your phone on Do Not Disturb and drink a glass of water.",
        estimatedMinutes: 10,
        reason: "You are experiencing high cognitive overload right now. A 10-minute reset lowers cortisol levels.",
        priority: "URGENT",
        whyThisRecommendation: "When struggling, reducing friction is key. One micro-action will restore emotional control."
      };
    } else {
      // CANT_DEAL
      rec = {
        actionText: "Step outside for fresh air or start the 4-7-8 grounding exercise.",
        estimatedMinutes: 5,
        reason: "Zero pressure. Breathe deeply and allow yourself a full pause right now.",
        priority: "URGENT",
        whyThisRecommendation: "Your well-being is the top priority. Academic work can wait."
      };
    }

    return res.json({ success: true, data: rec, source: 'Momento Smart Engine' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
