# Momento - AI-Powered Student Health & Productivity Companion

Momento is a cross-platform mobile application prototype designed to reduce student decision fatigue.

## Project Structure

- **`/client`**: Mobile preview & prototype frontend powered by Vite + React + Lucide Icons. Designed with premium Apple Human Interface style guidelines, glassmorphism, responsive device emulator container, and a dark/light mode toggle.
- **`/server`**: Node.js + Express API backend with support for AI recommendation routing, user authentication, and MongoDB schema definitions.

---

## Getting Started

### 1. Run the Frontend Prototype Web App
To run the interactive visual prototype:
```bash
cd client
npm install
npm run dev
```
Open `http://localhost:3000` to interact with all screens: Onboarding, Dynamic Capacity Switcher, Productivity Recommendations, Care Diagnostic Flow, Emergency SOS & Breathing Guides, Calendar Timetable, Insights Analytics, Map, and AI Chat Assistant!

### 2. Run the Express Backend Server
To start the REST API backend:
```bash
cd server
npm install
npm run dev
```
The server will boot on `http://localhost:5000`.

---

## Backend REST API Endpoints

- **Auth Services**:
  - `POST /api/auth/signup`: Create a student account
  - `POST /api/auth/login`: Authenticate credentials
- **Recommendation Engine**:
  - `POST /api/recommendations/generate`: AI next-step generator taking capacity energy levels, locations, and time context.
- **Schedule**:
  - `GET /api/schedule`: Retrieves current day's classes, exams, assignment deadlines, and free time slots.
- **Insights**:
  - `GET /api/insights/weekly`: Provides meals, sleep, focus metrics, and stress trends over the past 7 days.
- **Feedback**:
  - `POST /api/feedback`: Updates feedback models to tailor future suggestions.
