import { useState } from 'react';

const JournalForm = ({ onSubmit }) => {
  const [mood, setMood] = useState('happy');
  const [reflection, setReflection] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reflection.trim()) {
      alert('Please write something before saving!');
      return;
    }
    
    onSubmit({ 
      mood, 
      reflection, 
      date: new Date().toISOString(), 
      id: Date.now() 
    });
    setReflection('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="form-select mb-3"
        required
      >
        <option value="happy">😊 Happy</option>
        <option value="neutral">😐 Neutral</option>
        <option value="sad">😢 Sad</option>
      </select>
      
      <textarea
        rows={4}
        value={reflection}
        onChange={(e) => setReflection(e.target.value)}
        placeholder="How are you feeling today?"
        className="form-control mb-3"
        required
      />
      
      <button type="submit" className="btn btn-primary">
        Save Entry
      </button>
    </form>
  );
};

export default JournalForm;