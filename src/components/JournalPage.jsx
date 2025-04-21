import { useState, useEffect } from 'react';
import JournalForm from '../components/JournalForm';
import EntriesList from '../components/EntriesList';
import QuoteCard from '../components/QuoteCard';
import { fetchRandomQuote } from '../services/api';

export default function JournalPage() {  // Changed to named function with export default
  const [entries, setEntries] = useState([]);
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    fetchRandomQuote().then(setQuote);
  }, []);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <div className="container py-4">
      <QuoteCard quote={quote} />
      <JournalForm onSubmit={addEntry} />
      <EntriesList entries={entries} />
    </div>
  );
}