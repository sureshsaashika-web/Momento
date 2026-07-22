import React from 'react';
import { X, Bell, Coffee, Eye, AlertCircle, ShieldAlert } from 'lucide-react';

export const NotificationsModal = ({ isOpen, onClose }) => {
  const alerts = [
    { id: 1, type: 'HEALTH', title: 'Meal Alert', message: 'You have 25 minutes before class. Perfect time to grab a healthy snack.', icon: <Coffee size={16} color="#F59E0B" /> },
    { id: 2, type: 'STUDY', title: 'Break Recommendation', message: 'You studied for two hours straight. Take a short 5-minute walk outside.', icon: <Eye size={16} color="#8B5CF6" /> },
    { id: 3, type: 'WATER', title: 'Hydration Check', message: "You haven't logged water intake in 3 hours. Drink a glass now.", icon: <AlertCircle size={16} color="#06B6D4" /> }
  ];

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 20px 20px 20px'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bell size={22} color="var(--accent-purple)" />
          <h2 style={{ fontSize: '18px', fontWeight: '800' }}>Context Notifications</h2>
        </div>
        <button
          onClick={onClose}
          style={{ background: 'var(--bg-secondary)', border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Notifications List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, overflowY: 'auto' }}>
        {alerts.map((alert) => (
          <div key={alert.id} className="glass-card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
              {alert.icon}
            </div>
            <div>
              <div style={{ fontWeight: '800', fontSize: '14px', display: 'flex', justifyContent: 'space-between' }}>
                {alert.title}
                <span style={{ fontSize: '11px', color: 'var(--text-subtle)', fontWeight: '500' }}>Just Now</span>
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.4', marginTop: '4px' }}>
                {alert.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
