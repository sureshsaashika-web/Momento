import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle, BookOpen, AlertCircle, Sparkles, Plus, Trash2 } from 'lucide-react';

export const ScheduleScreen = () => {
  const { 
    user, 
    addClass, deleteClass, 
    addAssignment, deleteAssignment, 
    addFreeTime, deleteFreeTime 
  } = useAuth();
  
  const [activeTab, setActiveTab] = useState('classes');
  const [showAddForm, setShowAddForm] = useState(false);

  // Form State variables
  const [classForm, setClassForm] = useState({ courseCode: 'CS302', title: 'Database Systems', time: '11:00 AM - 12:30 PM', location: 'Gates Hall 302' });
  const [assignmentForm, setAssignmentForm] = useState({ title: 'Database Project Schema', course: 'CS302', dueDate: 'Friday, 11:59 PM', priority: 'HIGH' });
  const [freeTimeForm, setFreeTimeForm] = useState({ time: '05:00 PM - 06:30 PM', duration: '1 hr 30 mins', AIRecommendation: '🟢 Perfect time to jog or visit the campus gym' });

  const handleAddClass = (e) => {
    e.preventDefault();
    addClass(classForm);
    setClassForm({ courseCode: '', title: '', time: '', location: '' });
    setShowAddForm(false);
  };

  const handleAddAssignment = (e) => {
    e.preventDefault();
    addAssignment(assignmentForm);
    setAssignmentForm({ title: '', course: '', dueDate: '', priority: 'HIGH' });
    setShowAddForm(false);
  };

  const handleAddFreeTime = (e) => {
    e.preventDefault();
    addFreeTime(freeTimeForm);
    setFreeTimeForm({ time: '', duration: '', AIRecommendation: '🟢 Time to relax' });
    setShowAddForm(false);
  };

  return (
    <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Academic Timeline</span>
          <h1 style={{ fontSize: '24px', fontWeight: '800' }}>Schedule & Free Time</h1>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          style={{
            padding: '10px 16px',
            borderRadius: '16px',
            background: 'var(--accent-purple)',
            border: 'none',
            color: 'white',
            fontWeight: '700',
            fontSize: '13px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Plus size={16} /> {showAddForm ? 'Cancel' : 'Add Item'}
        </button>
      </div>

      {/* Sub Tab Switcher */}
      <div style={{ display: 'flex', background: 'var(--bg-secondary)', padding: '4px', borderRadius: '16px', border: '1px solid var(--bg-glass-border)' }}>
        {['classes', 'assignments', 'freetime'].map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setShowAddForm(false); }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === tab ? 'var(--accent-purple)' : 'transparent',
              color: activeTab === tab ? 'white' : 'var(--text-muted)',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {tab === 'freetime' ? 'Free Time' : tab}
          </button>
        ))}
      </div>

      {/* Dynamic Input Form */}
      {showAddForm && (
        <div className="glass-card" style={{ border: '1px solid var(--accent-purple)' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '14px' }}>
            Add New {activeTab === 'classes' ? 'Class' : activeTab === 'assignments' ? 'Assignment' : 'Free Time Block'}
          </h3>

          {activeTab === 'classes' && (
            <form onSubmit={handleAddClass} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="text"
                placeholder="Course Code (e.g. CS101)"
                value={classForm.courseCode}
                onChange={(e) => setClassForm({ ...classForm, courseCode: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <input
                type="text"
                placeholder="Class Title"
                value={classForm.title}
                onChange={(e) => setClassForm({ ...classForm, title: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <input
                type="text"
                placeholder="Time (e.g. 10:00 AM - 11:30 AM)"
                value={classForm.time}
                onChange={(e) => setClassForm({ ...classForm, time: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <input
                type="text"
                placeholder="Location (e.g. Gates Hall 102)"
                value={classForm.location}
                onChange={(e) => setClassForm({ ...classForm, location: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <button type="submit" className="gradient-bg-main" style={{ padding: '14px', borderRadius: '14px', border: 'none', color: 'white', fontWeight: '700', cursor: 'pointer' }}>
                Add Class
              </button>
            </form>
          )}

          {activeTab === 'assignments' && (
            <form onSubmit={handleAddAssignment} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="text"
                placeholder="Assignment Title"
                value={assignmentForm.title}
                onChange={(e) => setAssignmentForm({ ...assignmentForm, title: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <input
                type="text"
                placeholder="Course Code"
                value={assignmentForm.course}
                onChange={(e) => setAssignmentForm({ ...assignmentForm, course: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <input
                type="text"
                placeholder="Due Date (e.g. Tomorrow, 5:00 PM)"
                value={assignmentForm.dueDate}
                onChange={(e) => setAssignmentForm({ ...assignmentForm, dueDate: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <select
                value={assignmentForm.priority}
                onChange={(e) => setAssignmentForm({ ...assignmentForm, priority: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
              >
                <option value="HIGH">High Priority</option>
                <option value="MEDIUM">Medium Priority</option>
                <option value="LOW">Low Priority</option>
              </select>
              <button type="submit" className="gradient-bg-main" style={{ padding: '14px', borderRadius: '14px', border: 'none', color: 'white', fontWeight: '700', cursor: 'pointer' }}>
                Add Assignment
              </button>
            </form>
          )}

          {activeTab === 'freetime' && (
            <form onSubmit={handleAddFreeTime} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="text"
                placeholder="Time Slot (e.g. 03:00 PM - 04:30 PM)"
                value={freeTimeForm.time}
                onChange={(e) => setFreeTimeForm({ ...freeTimeForm, time: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <input
                type="text"
                placeholder="Duration (e.g. 1 hr 30 mins)"
                value={freeTimeForm.duration}
                onChange={(e) => setFreeTimeForm({ ...freeTimeForm, duration: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <input
                type="text"
                placeholder="AI Suggestion Action"
                value={freeTimeForm.AIRecommendation}
                onChange={(e) => setFreeTimeForm({ ...freeTimeForm, AIRecommendation: e.target.value })}
                style={{ padding: '12px', borderRadius: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--bg-glass-border)', color: 'white' }}
                required
              />
              <button type="submit" className="gradient-bg-main" style={{ padding: '14px', borderRadius: '14px', border: 'none', color: 'white', fontWeight: '700', cursor: 'pointer' }}>
                Add Free Time
              </button>
            </form>
          )}
        </div>
      )}

      {/* Lists display with dynamic deletion */}
      {activeTab === 'classes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {user.timetable.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>No classes logged for today.</div>
          ) : (
            user.timetable.map((c) => (
              <div key={c.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ background: 'rgba(99, 102, 241, 0.2)', color: 'var(--accent-blue)', fontWeight: '800', fontSize: '12px', padding: '3px 8px', borderRadius: '8px' }}>
                      {c.courseCode}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '8px' }}>{c.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {c.time}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {c.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => deleteClass(c.id)}
                  style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '10px' }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'assignments' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {user.assignments.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>No assignments pending.</div>
          ) : (
            user.assignments.map((a) => (
              <div key={a.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)' }}>{a.course}</span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '6px' }}>{a.title}</h3>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Due: {a.dueDate}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ background: a.priority === 'HIGH' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(245, 158, 11, 0.2)', color: a.priority === 'HIGH' ? '#EF4444' : '#F59E0B', fontWeight: '800', fontSize: '11px', padding: '2px 8px', borderRadius: '8px' }}>
                    {a.priority}
                  </span>
                  <button
                    onClick={() => deleteAssignment(a.id)}
                    style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '10px' }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'freetime' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {user.freeTimeBlocks.length === 0 ? (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>No free time blocks logged.</div>
          ) : (
            user.freeTimeBlocks.map((f) => (
              <div key={f.id} className="glass-card" style={{ border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '15px', fontWeight: '800' }}>{f.time}</span>
                    <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', fontWeight: '700', fontSize: '12px', padding: '3px 8px', borderRadius: '10px' }}>
                      {f.duration}
                    </span>
                  </div>
                  <div style={{ marginTop: '10px', padding: '10px', background: 'var(--bg-secondary)', borderRadius: '12px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={16} color="#10B981" />
                    <span>{f.AIRecommendation}</span>
                  </div>
                </div>
                <button
                  onClick={() => deleteFreeTime(f.id)}
                  style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '10px', marginLeft: '12px' }}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
