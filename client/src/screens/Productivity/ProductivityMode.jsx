import React, { useState } from 'react';
import { useCapacity } from '../../context/CapacityContext';
import { Sparkles, Clock, AlertCircle, ThumbsUp, ThumbsDown, CheckCircle2, ArrowLeft, Compass, Info } from 'lucide-react';

export const ProductivityMode = ({ onBack }) => {
  const { currentRecommendation, feedbackGiven, setFeedbackGiven } = useCapacity();
  const [loadingAI, setLoadingAI] = useState(false);

  const handleFeedback = (helped) => {
    setFeedbackGiven(helped);
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
          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            🟢 Productivity Mode
          </span>
          <h2 style={{ fontSize: '22px', fontWeight: '800' }}>Your Next Best Step</h2>
        </div>
      </div>

      {/* Main Single Recommendation Box */}
      <div className="glass-card" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{ background: '#10B981', color: 'white', fontWeight: '800', fontSize: '11px', padding: '4px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
            {currentRecommendation.priority} PRIORITY
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '13px', fontWeight: '600' }}>
            <Clock size={16} color="#10B981" />
            <span>{currentRecommendation.estimatedMinutes} Mins</span>
          </div>
        </div>

        <h1 style={{ fontSize: '22px', fontWeight: '800', lineHeight: '1.4', marginBottom: '16px' }}>
          "{currentRecommendation.actionText}"
        </h1>

        <div style={{ background: 'var(--bg-secondary)', padding: '14px', borderRadius: '16px', border: '1px solid var(--bg-glass-border)', marginBottom: '16px' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Info size={14} color="#8B5CF6" /> REASON FOR RECOMMENDATION
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: '1.5' }}>
            {currentRecommendation.reason}
          </p>
        </div>

        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '14px', borderRadius: '16px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
          <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-purple)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} /> WHY THIS RECOMMENDATION?
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-main)', lineHeight: '1.5' }}>
            {currentRecommendation.whyThisRecommendation}
          </p>
        </div>
      </div>

      {/* Context Analysis Breakdown */}
      <div className="glass-card">
        <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>Real-time Input Context</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Class Schedule:</span>
            <span style={{ fontWeight: '600' }}>CS101 at 10:00 AM (in 30 mins)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Location Context:</span>
            <span style={{ fontWeight: '600' }}>Engineering Quad (Canteen nearby)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Nutrition Log:</span>
            <span style={{ fontWeight: '600', color: '#F59E0B' }}>Skipped Breakfast</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Assignments Pending:</span>
            <span style={{ fontWeight: '600' }}>Algorithm Problem Set 4</span>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="glass-card" style={{ textAlign: 'center', padding: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '6px' }}>Did This Recommendation Help?</h3>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Your rating tunes Momento's AI model for future tasks.</p>

        {feedbackGiven === null ? (
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => handleFeedback(true)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '16px',
                border: '1px solid #10B981',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10B981',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <ThumbsUp size={18} /> Yes, Helpful!
            </button>
            <button
              onClick={() => handleFeedback(false)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '16px',
                border: '1px solid var(--bg-glass-border)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-muted)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <ThumbsDown size={18} /> Not Now
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#10B981', fontWeight: '700', fontSize: '14px' }}>
            <CheckCircle2 size={20} /> Thank you! Feedback recorded.
          </div>
        )}
      </div>
    </div>
  );
};
