import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCapacity } from '../../context/CapacityContext';
import { Sparkles, Clock, Compass, Zap, HeartPulse, CheckCircle2, ArrowUpRight, Flame, ShieldAlert } from 'lucide-react';

export const HomeDashboard = ({ onNavigateMode, onNavigateTab }) => {
  const { user } = useAuth();
  const { capacity, setCapacity, currentRecommendation } = useCapacity();

  return (
    <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            College Health Companion
          </span>
          <h1 style={{ fontSize: '26px', fontWeight: '800', marginTop: '2px' }}>
            Good Morning, {user.name.split(' ')[0]} 👋
          </h1>
        </div>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: '16px',
          boxShadow: '0 4px 14px rgba(139, 92, 246, 0.4)'
        }}>
          {user.name.charAt(0)}
        </div>
      </div>

      {/* Capacity Selector Section */}
      <div className="glass-card" style={{ background: 'var(--bg-glass)', border: '1px solid var(--bg-glass-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700' }}>How is your capacity today?</h3>
          <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '12px', color: 'var(--text-muted)' }}>
            Real-time Check-in
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => setCapacity('MANAGE')}
            className={`capacity-btn manage ${capacity === 'MANAGE' ? 'active' : ''}`}
          >
            <span style={{ fontSize: '20px' }}>🟢</span>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: '800' }}>I Can Manage</div>
              <div style={{ fontSize: '12px', opacity: 0.8, fontWeight: '500' }}>Normal energy, ready to execute steps</div>
            </div>
            {capacity === 'MANAGE' && <CheckCircle2 size={20} />}
          </button>

          <button
            onClick={() => setCapacity('STRUGGLING')}
            className={`capacity-btn struggling ${capacity === 'STRUGGLING' ? 'active' : ''}`}
          >
            <span style={{ fontSize: '20px' }}>🟡</span>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: '800' }}>I'm Struggling</div>
              <div style={{ fontSize: '12px', opacity: 0.8, fontWeight: '500' }}>Fatigued, low bandwidth, overwhelmed</div>
            </div>
            {capacity === 'STRUGGLING' && <CheckCircle2 size={20} />}
          </button>

          <button
            onClick={() => setCapacity('CANT_DEAL')}
            className={`capacity-btn cant-deal ${capacity === 'CANT_DEAL' ? 'active' : ''}`}
          >
            <span style={{ fontSize: '20px' }}>🔴</span>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: '800' }}>I Can't Deal Right Now</div>
              <div style={{ fontSize: '12px', opacity: 0.8, fontWeight: '500' }}>High anxiety, crisis mode, need immediate help</div>
            </div>
            {capacity === 'CANT_DEAL' && <ShieldAlert size={20} />}
          </button>
        </div>
      </div>

      {/* Single AI Recommendation Card */}
      <div
        className="glass-card gradient-bg-subtle"
        style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => onNavigateMode(capacity)}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#8B5CF6" />
            <span style={{ fontWeight: '800', fontSize: '13px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--accent-purple)' }}>
              Today's Single Recommendation
            </span>
          </div>
          <span style={{ background: '#8B5CF6', color: 'white', padding: '3px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: '700' }}>
            {currentRecommendation.estimatedMinutes} MINS
          </span>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: '800', lineHeight: '1.4', marginBottom: '10px' }}>
          "{currentRecommendation.actionText}"
        </h2>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
          {currentRecommendation.reason}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            Open {capacity === 'MANAGE' ? 'Productivity' : capacity === 'STRUGGLING' ? 'Care' : 'Emergency'} Mode <ArrowUpRight size={14} />
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>Tap for details</span>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div className="glass-card" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', marginBottom: '8px' }}>
            <Clock size={18} />
            <span style={{ fontSize: '12px', fontWeight: '700' }}>Next Class</span>
          </div>
          <div style={{ fontSize: '17px', fontWeight: '800' }}>CS101</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>In 30 mins (Gates 102)</div>
        </div>

        <div className="glass-card" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', marginBottom: '8px' }}>
            <Zap size={18} />
            <span style={{ fontSize: '12px', fontWeight: '700' }}>Free Time</span>
          </div>
          <div style={{ fontSize: '17px', fontWeight: '800' }}>2h 15m</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>Before 2 PM lecture</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div className="glass-card" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B', marginBottom: '8px' }}>
            <Flame size={18} />
            <span style={{ fontSize: '12px', fontWeight: '700' }}>Focus Score</span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: '800' }}>84 <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>/ 100</span></div>
          <div style={{ fontSize: '11px', color: '#10B981', marginTop: '2px' }}>+5% vs yesterday</div>
        </div>

        <div className="glass-card" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#EC4899', marginBottom: '8px' }}>
            <HeartPulse size={18} />
            <span style={{ fontSize: '12px', fontWeight: '700' }}>Health Score</span>
          </div>
          <div style={{ fontSize: '20px', fontWeight: '800' }}>88 <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>/ 100</span></div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>7.5 hrs sleep logged</div>
        </div>
      </div>

      {/* Quick Actions Shortcuts */}
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>Quick Campus Actions</h3>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '6px' }}>
          <button
            onClick={() => onNavigateTab('map')}
            style={{
              padding: '10px 16px',
              borderRadius: '16px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--bg-glass-border)',
              color: 'var(--text-main)',
              fontSize: '13px',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Compass size={16} color="#8B5CF6" /> Canteen & Study Spots
          </button>
          <button
            onClick={() => onNavigateMode('STRUGGLING')}
            style={{
              padding: '10px 16px',
              borderRadius: '16px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--bg-glass-border)',
              color: 'var(--text-main)',
              fontSize: '13px',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            🫁 4-7-8 Breathing
          </button>
        </div>
      </div>
    </div>
  );
};
