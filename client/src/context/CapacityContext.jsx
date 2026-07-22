import React, { createContext, useContext, useState } from 'react';

const CapacityContext = createContext();

export const CapacityProvider = ({ children }) => {
  // Capacity: 'MANAGE' (Green), 'STRUGGLING' (Yellow), 'CANT_DEAL' (Red)
  const [capacity, setCapacity] = useState('MANAGE');
  const [feedbackGiven, setFeedbackGiven] = useState(null);

  // Default recommendations for capacity modes
  const recommendations = {
    MANAGE: {
      actionText: "You have 30 minutes before CS101. Grab lunch because you skipped breakfast.",
      estimatedMinutes: 20,
      reason: "Your timetable shows a 30-minute free window near the campus canteen.",
      priority: "HIGH",
      whyThisRecommendation: "Nutrition directly improves focus scores by up to 35% for afternoon lectures."
    },
    STRUGGLING: {
      actionText: "Drink a glass of fresh water and step outside for 5 minutes.",
      estimatedMinutes: 10,
      reason: "High stress detected. Lowering immediate cognitive load will restore mental space.",
      priority: "GENTLE",
      whyThisRecommendation: "Physical movement break disrupts stress loops."
    },
    CANT_DEAL: {
      actionText: "Start 4-7-8 Breathing Exercise or tap SOS to alert your trusted contact.",
      estimatedMinutes: 5,
      reason: "Immediate mental well-being priority. Zero academic pressure right now.",
      priority: "CRISIS_CARE",
      whyThisRecommendation: "Your well-being is the top priority."
    }
  };

  const currentRecommendation = recommendations[capacity];

  return (
    <CapacityContext.Provider value={{ capacity, setCapacity, currentRecommendation, feedbackGiven, setFeedbackGiven }}>
      {children}
    </CapacityContext.Provider>
  );
};

export const useCapacity = () => useContext(CapacityContext);
