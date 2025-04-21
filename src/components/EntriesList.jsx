import React from 'react';

const EntriesList = ({ entries }) => {
  // Define mood styles
  const moodStyles = {
    happy: {
      borderLeft: '5px solid #28a745', // Green
      backgroundColor: '#f8f9fa'
    },
    neutral: {
      borderLeft: '5px solid #ffc107', // Yellow
      backgroundColor: '#f8f9fa'
    },
    sad: {
      borderLeft: '5px solid #dc3545', // Red
      backgroundColor: '#f8f9fa'
    }
  };

  // Get emoji for mood
  const getMoodEmoji = (mood) => {
    switch(mood) {
      case 'happy': return '😊';
      case 'neutral': return '😐';
      case 'sad': return '😢';
      default: return '';
    }
  };

  return (
    <div className="mt-4">
      <h3>Your Journal Entries</h3>
      {entries.length === 0 ? (
        <p className="text-muted">No entries yet. Add your first entry above!</p>
      ) : (
        <div className="entry-list">
          {entries.map((entry) => (
            <div 
              key={entry.id} 
              className="card mb-3 p-3"
              style={moodStyles[entry.mood]}
            >
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <span className="badge bg-secondary me-2">
                    {getMoodEmoji(entry.mood)} {entry.mood}
                  </span>
                  <span className="text-muted small">
                    {new Date(entry.date).toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="mt-2 mb-0">{entry.reflection}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EntriesList;