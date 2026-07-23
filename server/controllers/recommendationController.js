const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.getRecommendation = async (req, res) => {
  try {
    const {
      query,
      capacity,
      freeMinutes,
      nextClass,
      lastMealHoursAgo,
      location
    } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'GEMINI_API_KEY is not configured'
      });
    }

    try {
      const genAI = new GoogleGenerativeAI(
        process.env.GEMINI_API_KEY
      );

      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash'
      });

      const prompt = `
You are Momento, an intelligent and supportive AI assistant for college students.

The student is asking:
"${query || 'The student has not provided a specific question.'}"

Student context:
- Capacity: ${capacity || 'MANAGE'}
- Free time: ${freeMinutes || 30} minutes
- Next class: ${nextClass || 'Not specified'}
- Last meal: ${lastMealHoursAgo || 4} hours ago
- Location: ${location || 'College'}

Understand the student's actual message and context before responding.

Give exactly ONE practical recommendation that the student can realistically do right now.

Your recommendation must be:
- Personalized to the student's message
- Practical
- Supportive
- Suitable for the available time
- Not generic

Return ONLY valid JSON in this exact format:

{
  "actionText": "The one action the student should take",
  "estimatedMinutes": 15,
  "reason": "A short explanation of why this is suitable",
  "priority": "LOW",
  "whyThisRecommendation": "A short explanation connecting the recommendation to the student's situation"
}

The priority must be exactly one of:
LOW, MEDIUM, HIGH, URGENT.
`;

      const result = await model.generateContent(prompt);

      const responseText = result.response.text();

      const cleanedJson = responseText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

      const aiData = JSON.parse(cleanedJson);

      return res.json({
        success: true,
        data: aiData,
        source: 'Gemini AI'
      });

    } catch (aiError) {
      console.error('Gemini AI Error:', aiError.message);

      return res.status(500).json({
        success: false,
        error: aiError.message
      });
    }

  } catch (error) {
    console.error('Server Error:', error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};