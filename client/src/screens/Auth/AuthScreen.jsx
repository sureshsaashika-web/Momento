import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Sparkles, Mail, Lock, User, School, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

export const AuthScreen = ({ onFinishAuth }) => {
  const [view, setView] = useState('splash'); // splash, login, signup, forgot, verify
  const [email, setEmail] = useState('alex.rivera@stanford.edu');
  const [password, setPassword] = useState('••••••••');
  const [name, setName] = useState('Alex Rivera');
  const [rememberMe, setRememberMe] = useState(true);
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: name || 'Alex Rivera', email });
    onFinishAuth();
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setView('verify');
  };

  if (view === 'splash') {
    return (
      <div style={{ padding: '40px 24px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ marginTop: '60px' }}>
          <div style={{
            width: '90px',
            height: '90px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px auto',
            boxShadow: '0 15px 35px rgba(139, 92, 246, 0.4)'
          }}>
            <Sparkles size={44} color="#FFF" />
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '8px' }}>Momento</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.5', maxWidth: '280px', margin: '0 auto' }}>
            AI-Powered Health & Productivity Companion for College Students
          </p>
        </div>

        <div style={{ background: 'var(--bg-glass)', borderRadius: '24px', padding: '20px', border: '1px solid var(--bg-glass-border)', textAlign: 'left', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <ShieldCheck size={20} color="#8B5CF6" />
            <span style={{ fontWeight: '700', fontSize: '14px' }}>Reduce Decision Fatigue</span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            One single, personalized step based on your real-time academic capacity. No endless task lists.
          </p>
        </div>

        <div>
          <button
            onClick={() => setView('login')}
            className="gradient-bg-main"
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '20px',
              border: 'none',
              color: 'white',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            Get Started <ArrowRight size={18} />
          </button>
          <button
            onClick={() => setView('signup')}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '20px',
              border: '1px solid var(--bg-glass-border)',
              background: 'transparent',
              color: 'var(--text-main)',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Create New Account
          </button>
        </div>
      </div>
    );
  }

  if (view === 'verify') {
    return (
      <div style={{ padding: '40px 24px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <CheckCircle size={60} color="#10B981" style={{ margin: '0 auto 20px auto' }} />
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px' }}>Verify Your Student Email</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
          We sent a verification link to <strong>{email}</strong>. Please confirm your college address.
        </p>
        <button
          onClick={() => {
            login({ name, email });
            onFinishAuth();
          }}
          className="gradient-bg-main"
          style={{ width: '100%', padding: '16px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '700', cursor: 'pointer' }}
        >
          Simulate Verification Complete
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '32px 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <button
          onClick={() => setView('splash')}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '14px', cursor: 'pointer', marginBottom: '20px' }}
        >
          ← Back
        </button>
        <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '8px' }}>
          {view === 'login' ? 'Welcome Back' : view === 'signup' ? 'Create Account' : 'Reset Password'}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '28px' }}>
          {view === 'login' ? 'Sign in to access your capacity companion' : 'Join Momento with your college email'}
        </p>

        <form onSubmit={view === 'login' ? handleLogin : handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {view === 'signup' && (
            <div>
              <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Full Name</label>
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', borderRadius: '16px', padding: '12px 16px', marginTop: '6px', border: '1px solid var(--bg-glass-border)' }}>
                <User size={18} color="var(--text-muted)" style={{ marginRight: '10px' }} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Rivera"
                  style={{ background: 'none', border: 'none', color: 'var(--text-main)', width: '100%', outline: 'none' }}
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>College Email (.edu)</label>
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', borderRadius: '16px', padding: '12px 16px', marginTop: '6px', border: '1px solid var(--bg-glass-border)' }}>
              <Mail size={18} color="var(--text-muted)" style={{ marginRight: '10px' }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@university.edu"
                style={{ background: 'none', border: 'none', color: 'var(--text-main)', width: '100%', outline: 'none' }}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Password</label>
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-secondary)', borderRadius: '16px', padding: '12px 16px', marginTop: '6px', border: '1px solid var(--bg-glass-border)' }}>
              <Lock size={18} color="var(--text-muted)" style={{ marginRight: '10px' }} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{ background: 'none', border: 'none', color: 'var(--text-main)', width: '100%', outline: 'none' }}
                required
              />
            </div>
          </div>

          {view === 'login' && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>
              <button
                type="button"
                onClick={() => setView('forgot')}
                style={{ background: 'none', border: 'none', color: 'var(--accent-purple)', fontWeight: '600', cursor: 'pointer' }}
              >
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="gradient-bg-main"
            style={{ width: '100%', padding: '16px', borderRadius: '20px', border: 'none', color: 'white', fontWeight: '700', cursor: 'pointer', marginTop: '12px' }}
          >
            {view === 'login' ? 'Sign In' : 'Continue to Onboarding'}
          </button>
        </form>

        <div style={{ textAlign: 'center', margin: '20px 0', color: 'var(--text-subtle)', fontSize: '13px' }}>OR</div>

        {/* Google Sign In */}
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '20px',
            border: '1px solid var(--bg-glass-border)',
            background: 'var(--bg-secondary)',
            color: 'var(--text-main)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          Continue with Google
        </button>
      </div>

      <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
        {view === 'login' ? "Don't have an account? " : "Already have an account? "}
        <button
          onClick={() => setView(view === 'login' ? 'signup' : 'login')}
          style={{ background: 'none', border: 'none', color: 'var(--accent-purple)', fontWeight: '700', cursor: 'pointer' }}
        >
          {view === 'login' ? 'Sign Up' : 'Log In'}
        </button>
      </div>
    </div>
  );
};
