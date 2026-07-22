import React, { useState } from 'react';
import { ArrowLeft, ShieldAlert, PhoneCall, HeartHandshake, AlertTriangle, CheckCircle2, Wind, Eye, Ear, Hand } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const EmergencyMode = ({ onBack }) => {
  const { user } = useAuth();
  const [sosSent, setSosSent] = useState(false);
  const [groundingStep, setGroundingStep] = useState(0);

  const groundingItems = [
    { count: 5, icon: <Eye size={18} color="#06B6D4" />, label: 'Look around: Name 5 things you can SEE' },
    { count: 4, icon: <Hand size={18} color="#8B5CF6" />, label: 'Touch: Name 4 things you can FEEL around you' },
    { count: 3, icon: <Ear size={18} color="#10B981" />, label: 'Listen: Name 3 distinct sounds you can HEAR' },
    { count: 2, icon: <Wind size={18} color="#F59E0B" />, label: 'Smell: Name 2 things you can SMELL' },
    { count: 1, icon: <HeartHandshake size={18} color="#EF4444" />, label: 'Taste: Name 1 positive thing about yourself' }
  ];

  const handleNotifyContact = () => {
    setSosSent(true);
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
          <span style={{ fontSize: '11px', color: '#EF4444', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🔴 Emergency Crisis Mode
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: '800' }}>Immediate Support</h2>
        </div>
      </div>

      {/* Mandatory Mental Health Support Disclaimer */}
      <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: '18px', padding: '14px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <AlertTriangle size={22} color="#EF4444" style={{ shrink: 0, marginTop: '2px' }} />
        <p style={{ fontSize: '12px', color: 'var(--text-main)', lineHeight: '1.5', fontWeight: '600' }}>
          This app is not a replacement for professional mental health support. If you are in immediate danger or severe distress, please reach out to campus services or emergency hotlines immediately.
        </p>
      </div>

      {/* Quick Action SOS & Campus Counselor Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <button
          onClick={handleNotifyContact}
          style={{
            padding: '18px',
            borderRadius: '22px',
            border: 'none',
            background: 'linear-gradient(135deg, #EF4444, #DC2626)',
            color: 'white',
            fontWeight: '800',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            boxShadow: '0 10px 25px rgba(239, 68, 68, 0.4)'
          }}
        >
          <ShieldAlert size={22} />
          {sosSent ? '✓ Alert Sent to Trusted Contact' : `Notify Trusted Friend (${user.trustedContact.name})`}
        </button>

        <a
          href="tel:988"
          style={{
            padding: '16px',
            borderRadius: '22px',
            border: '1px solid var(--accent-purple)',
            background: 'rgba(139, 92, 246, 0.15)',
            color: 'var(--text-main)',
            fontWeight: '700',
            fontSize: '15px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <PhoneCall size={20} color="#8B5CF6" /> Call Campus Counselor / Hotlines
        </a>
      </div>

      {/* Emergency Hotline Numbers List */}
      <div className="glass-card">
        <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '12px' }}>Emergency Hotline Contacts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
            <div>
              <div style={{ fontWeight: '700' }}>National Crisis Lifeline</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Free 24/7 Confidential Support</div>
            </div>
            <a href="tel:988" style={{ color: '#10B981', fontWeight: '800', textDecoration: 'none' }}>Call 988</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
            <div>
              <div style={{ fontWeight: '700' }}>Campus Security Office</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>On-campus immediate dispatch</div>
            </div>
            <a href="tel:5550199" style={{ color: '#10B981', fontWeight: '800', textDecoration: 'none' }}>555-0199</a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: '700' }}>Student Health & Wellness</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Building B, Room 104</div>
            </div>
            <a href="tel:5550122" style={{ color: '#10B981', fontWeight: '800', textDecoration: 'none' }}>555-0122</a>
          </div>
        </div>
      </div>

      {/* 5-4-3-2-1 Sensory Grounding Tool */}
      <div className="glass-card">
        <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '4px' }}>5-4-3-2-1 Grounding Exercise</h3>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Sensory awareness exercise to ease panic and anxiety.</p>

        <div style={{ background: 'var(--bg-secondary)', borderRadius: '18px', padding: '16px', border: '1px solid var(--bg-glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            {groundingItems[groundingStep].icon}
            <span style={{ fontWeight: '800', fontSize: '15px' }}>{groundingItems[groundingStep].label}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Step {groundingStep + 1} of 5</span>
            <button
              onClick={() => setGroundingStep((groundingStep + 1) % 5)}
              style={{ padding: '8px 16px', borderRadius: '14px', background: 'var(--accent-purple)', border: 'none', color: 'white', fontWeight: '700', fontSize: '12px', cursor: 'pointer' }}
            >
              {groundingStep === 4 ? 'Reset Exercise' : 'Next Step →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
