import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { useCapacity } from './context/CapacityContext';
import { useTheme } from './context/ThemeContext';
import { AuthScreen } from './screens/Auth/AuthScreen';
import { OnboardingWizard } from './screens/Onboarding/OnboardingWizard';
import { HomeDashboard } from './screens/Home/HomeDashboard';
import { ProductivityMode } from './screens/Productivity/ProductivityMode';
import { CareMode } from './screens/Care/CareMode';
import { EmergencyMode } from './screens/Emergency/EmergencyMode';
import { ScheduleScreen } from './screens/Schedule/ScheduleScreen';
import { InsightsScreen } from './screens/Insights/InsightsScreen';
import { CampusMapScreen } from './screens/Map/CampusMapScreen';
import { ProfileScreen } from './screens/Profile/ProfileScreen';
import { FloatingAIChat } from './components/Common/FloatingAIChat';
import { NotificationsModal } from './screens/Notifications/NotificationsModal';
import { Bell, Heart, Home, Calendar, Activity, MapPin, User, Sparkles } from 'lucide-react';

function MainAppContent() {
  const { user, isAuthenticated, isOnboarded, setIsAuthenticated, setIsOnboarded } = useAuth();
  const { capacity } = useCapacity();
  const [activeTab, setActiveTab] = useState('home'); // home, schedule, insights, map, profile
  const [currentMode, setCurrentMode] = useState(null); // 'MANAGE', 'STRUGGLING', 'CANT_DEAL' (detailed sub-screens)
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDeviceFrame, setShowDeviceFrame] = useState(true);

  // Authentication gate
  if (!isAuthenticated) {
    return <AuthScreen onFinishAuth={() => setIsAuthenticated(true)} />;
  }

  // Onboarding wizard gate
  if (!isOnboarded) {
    return <OnboardingWizard onComplete={() => setIsOnboarded(true)} />;
  }

  // Sub-modes or primary view routers
  const renderScreen = () => {
    if (currentMode === 'MANAGE') {
      return <ProductivityMode onBack={() => setCurrentMode(null)} />;
    }
    if (currentMode === 'STRUGGLING') {
      return <CareMode onBack={() => setCurrentMode(null)} />;
    }
    if (currentMode === 'CANT_DEAL') {
      return <EmergencyMode onBack={() => setCurrentMode(null)} />;
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomeDashboard
            onNavigateMode={(mode) => setCurrentMode(mode)}
            onNavigateTab={(tab) => setActiveTab(tab)}
          />
        );
      case 'schedule':
        return <ScheduleScreen />;
      case 'insights':
        return <InsightsScreen />;
      case 'map':
        return <CampusMapScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeDashboard onNavigateMode={(mode) => setCurrentMode(mode)} />;
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', position: 'relative' }}>
      {/* Left Sidebar Menu */}
      {!currentMode && (
        <div className="sidebar-nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px', paddingLeft: '8px' }}>
            <Sparkles size={24} color="#8B5CF6" />
            <h2 style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>Momento</h2>
          </div>
          
          <button
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <Home size={18} />
            <span>Home Dashboard</span>
          </button>
          
          <button
            className={`nav-item ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            <Calendar size={18} />
            <span>My Schedule</span>
          </button>
          
          <button
            className={`nav-item ${activeTab === 'insights' ? 'active' : ''}`}
            onClick={() => setActiveTab('insights')}
          >
            <Activity size={18} />
            <span>Weekly Insights</span>
          </button>
          
          <button
            className={`nav-item ${activeTab === 'map' ? 'active' : ''}`}
            onClick={() => setActiveTab('map')}
          >
            <MapPin size={18} />
            <span>Campus Map</span>
          </button>
          
          <button
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} />
            <span>Settings & Profile</span>
          </button>
        </div>
      )}

      {/* Right Main Panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', position: 'relative' }}>
        {/* Web Top Header bar */}
        {!currentMode && (
          <div style={{
            height: '70px',
            padding: '0 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--bg-glass-border)',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(10px)',
            flexShrink: 0
          }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)' }}>
              Momento Web Dashboard
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <button
                onClick={() => setShowNotifications(true)}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--bg-glass-border)',
                  cursor: 'pointer',
                  color: 'var(--text-main)',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Bell size={16} />
                <span style={{ fontSize: '12px', fontWeight: '600' }}>Alerts</span>
                <span style={{ position: 'absolute', top: '4px', right: '4px', width: '6px', height: '6px', background: '#EF4444', borderRadius: '50%' }} />
              </button>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  color: 'white',
                  fontSize: '13px'
                }}>
                  {user.name.charAt(0)}
                </div>
                <span style={{ fontSize: '13px', fontWeight: '700' }}>{user.name}</span>
              </div>
            </div>
          </div>
        )}

        {/* Screen Content Wrapper */}
        <div className="screen-content" style={{ flex: 1, overflowY: 'auto' }}>
          {renderScreen()}
        </div>
      </div>

      {/* Floating AI chat assistant */}
      {!currentMode && <FloatingAIChat />}

      {/* Context push alert drawer */}
      <NotificationsModal isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
    </div>
  );
}

export default function App() {
  return (
    <div className="app-viewport-container">
      <MainAppContent />
    </div>
  );
}
