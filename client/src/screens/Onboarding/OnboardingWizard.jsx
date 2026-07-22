import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, School, BookOpen, Utensils, Moon, PhoneCall, Bell, MapPin, CheckCircle2, ChevronRight, Camera } from 'lucide-react';

export const OnboardingWizard = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const { completeOnboarding } = useAuth();

  const [formData, setFormData] = useState({
    name: 'Alex Rivera',
    college: 'Stanford University',
    department: 'Computer Science',
    year: 'Junior (3rd Year)',
    timetable: 'CS101 (10 AM), MATH202 (2 PM)',
    studyGoals: 'Maintain 3.8 GPA, Master Data Structures',
    foodPreferences: 'Vegetarian, Quick Healthy Meals',
    sleepGoal: 8,
    trustedContactName: 'Sarah Rivera',
    trustedContactPhone: '+1 (555) 234-5678',
    notifications: true,
    location: true
  });

  const totalSteps = 7;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      completeOnboarding(formData);
      onComplete();
    }
  };

  return (
    <div style={{ padding: '28px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Progress Header */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '600' }}>Step {step} of {totalSteps}</span>
          <span style={{ fontSize: '13px', color: 'var(--accent-purple)', fontWeight: '700' }}>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div style={{ height: '6px', width: '100%', background: 'var(--bg-secondary)', borderRadius: '3px', overflow: 'hidden', marginBottom: '28px' }}>
          <div style={{ height: '100%', width: `${(step / totalSteps) * 100}%`, background: 'linear-gradient(90deg, #6366F1, #8B5CF6)', transition: 'width 0.3s ease' }} />
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Let's setup your profile</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>How should Momento address you?</p>

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--bg-secondary)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '2px dashed var(--accent-purple)' }}>
                <User size={36} color="var(--accent-purple)" />
                <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--accent-purple)', borderRadius: '50%', padding: '6px', color: 'white' }}>
                  <Camera size={14} />
                </div>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '8px', display: 'block' }}>Upload Photo</span>
            </div>

            <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Your Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)', marginTop: '6px', outline: 'none' }}
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Academic Info</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Momento customizes context based on your campus.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>College / University</label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)', marginTop: '6px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Department / Major</label>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)', marginTop: '6px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Academic Year</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)', marginTop: '6px' }}
                >
                  <option>Freshman (1st Year)</option>
                  <option>Sophomore (2nd Year)</option>
                  <option>Junior (3rd Year)</option>
                  <option>Senior (4th Year)</option>
                  <option>Postgraduate</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Class Timetable</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Add your primary lecture schedule for gap detection.</p>
            
            <textarea
              rows={4}
              value={formData.timetable}
              onChange={(e) => setFormData({ ...formData, timetable: e.target.value })}
              placeholder="e.g. CS101 Mon/Wed 10:00 AM, MATH202 Tue/Thu 2:00 PM"
              style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)', resize: 'none' }}
            />
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Study Goals</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>What are your key priorities this semester?</p>
            <input
              type="text"
              value={formData.studyGoals}
              onChange={(e) => setFormData({ ...formData, studyGoals: e.target.value })}
              style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)' }}
            />
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Food & Sleep Care</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Help us give smart meal and rest reminders.</p>
            
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Dietary Preference</label>
              <input
                type="text"
                value={formData.foodPreferences}
                onChange={(e) => setFormData({ ...formData, foodPreferences: e.target.value })}
                style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)', marginTop: '6px' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Nightly Sleep Goal ({formData.sleepGoal} hrs)</label>
              <input
                type="range"
                min="5"
                max="10"
                step="0.5"
                value={formData.sleepGoal}
                onChange={(e) => setFormData({ ...formData, sleepGoal: parseFloat(e.target.value) })}
                style={{ width: '100%', marginTop: '12px', accentColor: 'var(--accent-purple)' }}
              />
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>Trusted Contact</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Used for 1-tap SOS in Emergency Mode.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <input
                type="text"
                placeholder="Contact Name (e.g. Mom, Best Friend)"
                value={formData.trustedContactName}
                onChange={(e) => setFormData({ ...formData, trustedContactName: e.target.value })}
                style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)' }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.trustedContactPhone}
                onChange={(e) => setFormData({ ...formData, trustedContactPhone: e.target.value })}
                style={{ width: '100%', padding: '14px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', borderRadius: '16px', color: 'var(--text-main)' }}
              />
            </div>
          </div>
        )}

        {step === 7 && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>App Permissions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>Enable smart context features.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--bg-glass-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Bell size={22} color="var(--accent-purple)" />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>Smart Context Push Alerts</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Get timely meal & study break reminders</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.notifications}
                  onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
                  style={{ width: '20px', height: '20px', accentColor: 'var(--accent-purple)' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--bg-glass-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={22} color="var(--accent-blue)" />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>Campus Location Services</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Recommend nearby canteens & quiet zones</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.checked })}
                  style={{ width: '20px', height: '20px', accentColor: 'var(--accent-purple)' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            style={{ width: '35%', padding: '16px', borderRadius: '20px', border: '1px solid var(--bg-glass-border)', background: 'var(--bg-secondary)', color: 'var(--text-main)', fontWeight: '600', cursor: 'pointer' }}
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          className="gradient-bg-main"
          style={{ width: step > 1 ? '65%' : '100%', padding: '16px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          {step === totalSteps ? 'Finish & Launch' : 'Continue'} <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
