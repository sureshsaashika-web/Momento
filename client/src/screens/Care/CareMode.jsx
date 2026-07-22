import React, { useState } from 'react';
import { ArrowLeft, Heart, Sparkles, RefreshCw, CheckCircle2, Play, Pause } from 'lucide-react';

export const CareMode = ({ onBack }) => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState('Inhale (4s)');

  const options = [
    { id: 'eat', label: "Didn't Eat", icon: '🍎', action: 'Grab a piece of fruit or warm tea from the nearby canteen. No pressure to eat a heavy meal.' },
    { id: 'rest', label: 'Need Rest', icon: '🛌', action: 'Close your eyes for 10 minutes in the quiet study lounge. Put phone on Do Not Disturb.' },
    { id: 'overwhelmed', label: 'Overwhelmed', icon: '🤯', action: 'Write down just 1 single task on paper, fold the rest away for tomorrow.' },
    { id: 'lonely', label: 'Feeling Lonely', icon: '💬', action: 'Send a quick text or voice note to a friend or sit near the student lounge.' },
    { id: 'motivation', label: 'Need Motivation', icon: '⚡', action: 'Do 2 minutes of work on any small task, then allow yourself to stop.' },
    { id: 'break', label: 'Need Break', icon: '🌿', action: 'Take a slow walk around the courtyard trees without looking at notifications.' }
  ];

  const toggleBreathing = () => {
    setIsBreathingActive(!isBreathingActive);
  };

  return (
    <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={onBack}
          style={{ background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'var(--text-main)', borderRadius: '14px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <span style={{ fontSize: '11px', color: '#F59E0B', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🟡 Care Mode
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: '800' }}>Gentle Step for Today</h2>
        </div>
      </div>

      {/* Diagnostic Selection */}
      <div className="glass-card">
        <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>What's hardest today?</h3>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Select one option to get an immediate, non-overwhelming micro action.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedIssue(opt)}
              style={{
                padding: '14px 12px',
                borderRadius: '18px',
                border: selectedIssue?.id === opt.id ? '2px solid #F59E0B' : '1px solid var(--bg-glass-border)',
                background: selectedIssue?.id === opt.id ? 'rgba(245, 158, 11, 0.2)' : 'var(--bg-secondary)',
                color: 'var(--text-main)',
                fontWeight: '700',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span style={{ fontSize: '18px' }}>{opt.icon}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Achievable Action Display */}
      {selectedIssue && (
        <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)', border: '1px solid #F59E0B' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F59E0B', fontWeight: '800', fontSize: '12px', marginBottom: '8px' }}>
            <Sparkles size={16} /> ONE ACHIEVABLE ACTION
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: '800', lineHeight: '1.4', marginBottom: '10px' }}>
            {selectedIssue.action}
          </h2>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            Remember: Small steps build momentum. Be kind to yourself today.
          </div>
        </div>
      )}

      {/* Interactive 4-7-8 Breathing Guide */}
      <div className="glass-card" style={{ textAlign: 'center', padding: '24px 20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>4-7-8 Breathing Reset</h3>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Inhale for 4s, Hold for 7s, Exhale for 8s to calm nervous system</p>

        <div className="breathing-circle">
          <div>
            <div style={{ fontSize: '14px', fontWeight: '800' }}>{isBreathingActive ? 'Breathe...' : 'Ready'}</div>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '4px' }}>{isBreathingActive ? breathingPhase : 'Tap Start'}</div>
          </div>
        </div>

        <button
          onClick={toggleBreathing}
          style={{
            padding: '12px 28px',
            borderRadius: '20px',
            border: 'none',
            background: isBreathingActive ? 'var(--status-red)' : 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            color: 'white',
            fontWeight: '700',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {isBreathingActive ? <><Pause size={16} /> Stop Exercise</> : <><Play size={16} /> Start 4-7-8 Breathing</>}
        </button>
      </div>
    </div>
  );
};
