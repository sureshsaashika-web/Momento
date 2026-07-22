import React from 'react';
import { Sparkles, Utensils, Moon, Activity, Flame, TrendingDown, CheckCircle2 } from 'lucide-react';

export const InsightsScreen = () => {
  const stressData = [
    { day: 'M', score: 60 },
    { day: 'T', score: 40 },
    { day: 'W', score: 75 },
    { day: 'T', score: 35 },
    { day: 'F', score: 50 },
    { day: 'S', score: 20 },
    { day: 'S', score: 30 }
  ];

  return (
    <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Weekly Analytics</span>
        <h1 style={{ fontSize: '24px', fontWeight: '800' }}>Health & Stress Insights</h1>
      </div>

      {/* AI Summary Banner */}
      <div className="glass-card gradient-bg-subtle" style={{ border: '1px solid rgba(139, 92, 246, 0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-purple)', fontWeight: '800', fontSize: '13px', marginBottom: '8px' }}>
          <Sparkles size={18} /> GEMINI AI WEEKLY PATTERN INSIGHT
        </div>
        <p style={{ fontSize: '13.5px', lineHeight: '1.5', color: 'var(--text-main)' }}>
          "You skipped breakfast three times this week. This directly correlated with higher mid-afternoon stress scores on Wednesday. Consider eating a light meal before your 9:00 AM lectures."
        </p>
      </div>

      {/* Health Metric Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10B981', marginBottom: '10px' }}>
            <Utensils size={18} />
            <span style={{ fontSize: '12px', fontWeight: '700' }}>Meals Logged</span>
          </div>
          <div style={{ fontSize: '22px', fontWeight: '800' }}>18 <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>/ 21</span></div>
          <div style={{ fontSize: '11px', color: '#F59E0B', marginTop: '4px' }}>3 breakfasts skipped</div>
        </div>

        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8B5CF6', marginBottom: '10px' }}>
            <Moon size={18} />
            <span style={{ fontSize: '12px', fontWeight: '700' }}>Sleep Average</span>
          </div>
          <div style={{ fontSize: '22px', fontWeight: '800' }}>6.8 <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>hrs</span></div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Target: 8.0 hrs/night</div>
        </div>
      </div>

      {/* Stress Trend Bar Chart */}
      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={18} color="#EF4444" />
            <h3 style={{ fontSize: '14px', fontWeight: '800' }}>Stress Levels Trend</h3>
          </div>
          <span style={{ fontSize: '11px', color: '#10B981', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '2px' }}>
            <TrendingDown size={14} /> -12% vs last week
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '110px', padding: '0 10px' }}>
          {stressData.map((d, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', width: '24px' }}>
              <div
                style={{
                  width: '12px',
                  height: `${d.score}%`,
                  borderRadius: '6px',
                  background: d.score > 60 ? '#EF4444' : d.score > 40 ? '#F59E0B' : '#10B981'
                }}
              />
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Focus & Study Hours Card */}
      <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Total Study Hours</span>
          <div style={{ fontSize: '22px', fontWeight: '800', marginTop: '2px' }}>28.5 Hours</div>
          <div style={{ fontSize: '11px', color: '#10B981', marginTop: '2px' }}>Optimal distribution achieved</div>
        </div>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.15)', border: '2px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Flame size={24} color="#8B5CF6" />
        </div>
      </div>
    </div>
  );
};
