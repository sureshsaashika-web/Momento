import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, User } from 'lucide-react';

export const FloatingAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hi Alex! I am Momento AI. Ask me anything or tap a shortcut below.' }
  ]);

  const quickPrompts = [
    "I have 20 minutes.",
    "I'm stressed.",
    "What should I do?",
    "Help me prioritize."
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Generate smart response based on user input
    setTimeout(() => {
      let botResponse = "Take 3 deep breaths. Based on your current 30-min window before CS101, I recommend grabbing a light snack at the canteen.";
      if (query.includes("stressed")) {
        botResponse = "I hear you. Turn on Care Mode in the dashboard or try our 4-7-8 breathing exercise to lower your heart rate.";
      } else if (query.includes("prioritize")) {
        botResponse = "Focus ONLY on your Algorithm Problem Set 4. Ignore other non-urgent tasks for the next 45 minutes.";
      } else if (query.includes("20 minutes")) {
        botResponse = "20 minutes is perfect to review the top 3 formulas for MATH202 or grab fresh water.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: botResponse }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'absolute',
          bottom: '90px',
          right: '20px',
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
          border: 'none',
          color: 'white',
          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.5)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 60
        }}
      >
        <Sparkles size={24} />
      </button>

      {/* Chat Drawer Overlay */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 20px 20px 20px'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={20} color="white" />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '800' }}>Momento AI Companion</h3>
                <div style={{ fontSize: '11px', color: '#10B981', fontWeight: '700' }}>Online • Ready to clarify</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'var(--bg-secondary)', border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingRight: '4px', marginBottom: '16px' }}>
            {messages.map(m => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.sender === 'user' ? 'var(--accent-purple)' : 'var(--bg-secondary)',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  fontSize: '13.5px',
                  lineHeight: '1.4',
                  border: m.sender === 'bot' ? '1px solid var(--bg-glass-border)' : 'none'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Prompt Shortcuts */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '10px' }}>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '14px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--bg-glass-border)',
                  color: 'var(--text-main)',
                  fontSize: '12px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer'
                }}
              >
                "{p}"
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Momento anything..."
              style={{
                flex: 1,
                padding: '14px 16px',
                borderRadius: '16px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--bg-glass-border)',
                color: 'white',
                outline: 'none',
                fontSize: '13px'
              }}
            />
            <button
              type="submit"
              className="gradient-bg-main"
              style={{ width: '44px', height: '44px', borderRadius: '16px', border: 'none', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
