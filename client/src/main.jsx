import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { CapacityProvider } from './context/CapacityContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CapacityProvider>
          <App />
        </CapacityProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
