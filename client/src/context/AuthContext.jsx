import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Alex Rivera',
    email: 'alex.rivera@stanford.edu',
    profilePhoto: '',
    college: 'Stanford University',
    department: 'Computer Science',
    year: 'Junior (3rd Year)',
    timetable: [
      { id: '1', courseCode: 'CS101', title: 'Data Structures & Algorithms', time: '10:00 AM - 11:30 AM', location: 'Gates Hall 102' },
      { id: '2', courseCode: 'MATH202', title: 'Linear Algebra & Calculus', time: '02:00 PM - 03:15 PM', location: 'Science Hall 304' }
    ],
    assignments: [
      { id: 'a1', title: 'Algorithm Problem Set 4', course: 'CS101', dueDate: 'Tomorrow, 11:59 PM', priority: 'HIGH' },
      { id: 'a2', title: 'Linear Algebra Preparation', course: 'MATH202', dueDate: 'Thursday, 5:00 PM', priority: 'MEDIUM' }
    ],
    freeTimeBlocks: [
      { id: 'f1', time: '11:30 AM - 02:00 PM', duration: '2 hrs 30 mins', AIRecommendation: '🟢 Perfect time to eat lunch & review CS notes' },
      { id: 'f2', time: '03:15 PM - 05:00 PM', duration: '1 hr 45 mins', AIRecommendation: '🟡 Take a walking break before study session' }
    ],
    studyGoals: ['Finish CS Assignment', 'Maintain GPA > 3.7', 'Learn System Design'],
    foodPreferences: ['Vegetarian', 'Quick Eats'],
    sleepGoal: 8,
    trustedContact: { name: 'Sarah Rivera (Mom)', relationship: 'Parent', phone: '+1 (555) 234-5678' },
    permissions: { notifications: true, location: true }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isOnboarded, setIsOnboarded] = useState(true);

  const login = (userData) => {
    setUser((prev) => ({ 
      ...prev, 
      ...userData,
      // Retain or reset default structures
      timetable: prev.timetable,
      assignments: prev.assignments,
      freeTimeBlocks: prev.freeTimeBlocks
    }));
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const completeOnboarding = (data) => {
    setUser((prev) => ({ ...prev, ...data }));
    setIsOnboarded(true);
  };

  // Schedule Modification APIs
  const addClass = (newClass) => {
    setUser(prev => ({
      ...prev,
      timetable: [...prev.timetable, { ...newClass, id: Date.now().toString() }]
    }));
  };

  const deleteClass = (id) => {
    setUser(prev => ({
      ...prev,
      timetable: prev.timetable.filter(c => c.id !== id)
    }));
  };

  const addAssignment = (newAss) => {
    setUser(prev => ({
      ...prev,
      assignments: [...prev.assignments, { ...newAss, id: Date.now().toString() }]
    }));
  };

  const deleteAssignment = (id) => {
    setUser(prev => ({
      ...prev,
      assignments: prev.assignments.filter(a => a.id !== id)
    }));
  };

  const addFreeTime = (newBlock) => {
    setUser(prev => ({
      ...prev,
      freeTimeBlocks: [...prev.freeTimeBlocks, { ...newBlock, id: Date.now().toString() }]
    }));
  };

  const deleteFreeTime = (id) => {
    setUser(prev => ({
      ...prev,
      freeTimeBlocks: prev.freeTimeBlocks.filter(f => f.id !== id)
    }));
  };

  return (
    <AuthContext.Provider value={{ 
      user, setUser, 
      isAuthenticated, setIsAuthenticated, 
      isOnboarded, setIsOnboarded, 
      login, logout, completeOnboarding,
      addClass, deleteClass,
      addAssignment, deleteAssignment,
      addFreeTime, deleteFreeTime
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
