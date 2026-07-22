import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { User, Shield, Moon, Bell, PhoneCall, LogOut, ChevronRight, School } from 'lucide-react';

export const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Settings & Identity</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800' }}>Student Profile</h1>
      </div>

      {/* User Info Header */}
      <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
          fontWeight: '800',
          boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)'
        }}>
          {user.name.charAt(0)}
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '800' }}>{user.name}</h2>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{user.department} • {user.year}</div>
          <div style={{ fontSize: '12px', color: 'var(--accent-purple)', fontWeight: '600', marginTop: '2px' }}>{user.college}</div>
        </div>
      </div>

      {/* Trusted Contact Card */}
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800', fontSize: '14px' }}>
            <PhoneCall size={18} color="#EF4444" /> Trusted SOS Contact
          </div>
          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: '700' }}>ACTIVE</span>
        </div>
        <div style={{ fontSize: '15px', fontWeight: '800' }}>{user.trustedContact.name}</div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
          {user.trustedContact.relationship} • {user.trustedContact.phone}
        </div>
      </div>

      {/* Preference Settings List */}
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Moon size={18} color="var(--accent-purple)" />
            <span style={{ fontSize: '14px', fontWeight: '700' }}>Dark Mode Theme</span>
          </div>
          <button
            onClick={toggleTheme}
            style={{
              padding: '6px 14px',
              borderRadius: '16px',
              border: 'none',
              background: 'var(--accent-purple)',
              color: 'white',
              fontWeight: '700',
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            {theme.toUpperCase()}
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Bell size={18} color="var(--accent-blue)" />
            <span style={{ fontSize: '14px', fontWeight: '700' }}>Context Push Alerts</span>
          </div>
          <span style={{ fontSize: '12px', color: '#10B981', fontWeight: '700' }}>ENABLED</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Shield size={18} color="#10B981" />
            <span style={{ fontSize: '14px', fontWeight: '700' }}>Privacy & Data Rights</span>
          </div>
          <ChevronRight size={18} color="var(--text-muted)" />
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '20px',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          background: 'rgba(239, 68, 68, 0.1)',
          color: '#EF4444',
          fontWeight: '800',
          fontSize: '15px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        <LogOut size={18} /> Log Out
      </button>
    </div>
  );
};
