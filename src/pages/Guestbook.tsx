import React, { useState } from 'react';
import { GuestbookEntry } from '../types';
import { useRetroSound } from '../hooks/useRetroSound';

const Guestbook = () => {
  const { playClick } = useRetroSound();
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      name: "WebMaster99",
      message: "First! Great website!",
      date: "03/14/1999"
    },
    {
      name: "CoolDude2000",
      message: "Awesome graphics! Keep it up!",
      date: "03/13/1999"
    }
  ]);

  const [newEntry, setNewEntry] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.name && newEntry.message) {
      playClick();
      setEntries([
        {
          ...newEntry,
          date: new Date().toLocaleDateString()
        },
        ...entries
      ]);
      setNewEntry({ name: '', message: '' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="retro-window p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#000080]">Sign My Guestbook!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              className="retro-input w-full"
              value={newEntry.name}
              onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-2">Message:</label>
            <textarea
              className="retro-input w-full h-24"
              value={newEntry.message}
              onChange={(e) => setNewEntry({ ...newEntry, message: e.target.value })}
            />
          </div>
          <button type="submit" className="retro-button">
            Sign Guestbook
          </button>
        </form>
      </div>

      <div className="retro-window p-4">
        <h3 className="text-xl font-bold mb-4 text-[#800080]">Recent Signatures</h3>
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div key={index} className="border-b border-[#808080] pb-4">
              <div className="font-bold">{entry.name}</div>
              <div className="text-sm text-[#808080]">{entry.date}</div>
              <div className="mt-2">{entry.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;