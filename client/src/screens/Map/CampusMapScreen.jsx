import React, { useState } from 'react';
import { MapPin, Navigation, BookOpen, Coffee, Dumbbell, Cross, Users, Search, Compass, CheckCircle2 } from 'lucide-react';

export const CampusMapScreen = () => {
  const [filter, setFilter] = useState('ALL');
  const [showFriends, setShowFriends] = useState(true);

  const locations = [
    { id: '1', name: 'Main Campus Canteen', type: 'CANTEEN', distance: '3 mins walk', status: '🟢 Low Crowd', icon: <Coffee size={16} color="#F59E0B" />, coords: { top: '35%', left: '40%' } },
    { id: '2', name: 'Green Quiet Library (2nd Fl)', type: 'LIBRARY', distance: '5 mins walk', status: '🟢 Quiet Seats Available', icon: <BookOpen size={16} color="#8B5CF6" />, coords: { top: '55%', left: '60%' } },
    { id: '3', name: 'Student Gym & Rec Center', type: 'GYM', distance: '8 mins walk', status: '🟡 Moderate Crowd', icon: <Dumbbell size={16} color="#06B6D4" />, coords: { top: '70%', left: '30%' } },
    { id: '4', name: 'Student Medical Centre', type: 'MEDICAL', distance: '6 mins walk', status: '🟢 Nurse On Duty', icon: <Cross size={16} color="#EF4444" />, coords: { top: '25%', left: '75%' } }
  ];

  const friends = [
    { id: 'f1', name: 'Maya Lin', location: 'Library 2nd Floor', status: 'Studying CS', coords: { top: '58%', left: '64%' } },
    { id: 'f2', name: 'Jordan Vance', location: 'Campus Canteen', status: 'Having Coffee', coords: { top: '38%', left: '44%' } }
  ];

  const filteredLocations = filter === 'ALL' ? locations : locations.filter(l => l.type === filter);

  return (
    <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Campus Guidance</span>
          <h1 style={{ fontSize: '24px', fontWeight: '800' }}>Campus Map & Places</h1>
        </div>
        <button
          onClick={() => setShowFriends(!showFriends)}
          style={{
            padding: '8px 12px',
            borderRadius: '14px',
            border: '1px solid var(--bg-glass-border)',
            background: showFriends ? 'rgba(139, 92, 246, 0.2)' : 'var(--bg-secondary)',
            color: showFriends ? 'var(--accent-purple)' : 'var(--text-muted)',
            fontSize: '12px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer'
          }}
        >
          <Users size={16} /> Friends {showFriends ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Interactive Visual Map Simulation Box */}
      <div style={{
        width: '100%',
        height: '220px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        border: '1px solid var(--bg-glass-border)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--card-shadow)'
      }}>
        {/* Map Grid Background Styling */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.15,
          backgroundImage: 'radial-gradient(#8B5CF6 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />

        {/* Current Location Radar Marker */}
        <div style={{ position: 'absolute', top: '48%', left: '48%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
          <div style={{ width: '16px', height: '16px', background: '#3B82F6', border: '3px solid white', borderRadius: '50%', boxShadow: '0 0 15px #3B82F6' }} />
          <span style={{ position: 'absolute', top: '20px', left: '-30px', background: 'rgba(0,0,0,0.8)', padding: '2px 8px', borderRadius: '8px', fontSize: '10px', color: 'white', whiteSpace: 'nowrap', fontWeight: '700' }}>
            📍 You (Engineering Quad)
          </span>
        </div>

        {/* Location Pins */}
        {filteredLocations.map(loc => (
          <div key={loc.id} style={{ position: 'absolute', top: loc.coords.top, left: loc.coords.left }}>
            <div style={{ width: '12px', height: '12px', background: '#8B5CF6', borderRadius: '50%' }} />
          </div>
        ))}

        {/* Friend Pins */}
        {showFriends && friends.map(f => (
          <div key={f.id} style={{ position: 'absolute', top: f.coords.top, left: f.coords.left }}>
            <div style={{ width: '14px', height: '14px', background: '#EC4899', borderRadius: '50%', border: '2px solid white' }} />
          </div>
        ))}
      </div>

      {/* Category Filters */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {['ALL', 'CANTEEN', 'LIBRARY', 'GYM', 'MEDICAL'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 14px',
              borderRadius: '14px',
              border: 'none',
              background: filter === cat ? 'var(--accent-purple)' : 'var(--bg-secondary)',
              color: filter === cat ? 'white' : 'var(--text-muted)',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Location Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredLocations.map((loc) => (
          <div key={loc.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {loc.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '14px', fontWeight: '800' }}>{loc.name}</h4>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', gap: '10px', marginTop: '2px' }}>
                  <span>{loc.distance}</span>
                  <span style={{ color: '#10B981' }}>{loc.status}</span>
                </div>
              </div>
            </div>
            <button style={{ padding: '8px 12px', borderRadius: '12px', background: 'var(--accent-blue)', border: 'none', color: 'white', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
              Directions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
