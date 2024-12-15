import React, { useState, useEffect } from 'react';
import RetroPopup from './RetroPopup';

const RetroAds: React.FC = () => {
  const [popups, setPopups] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (popups.length < 3) {
        setPopups(prev => [...prev, Date.now()]);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [popups]);

  const closePopup = (id: number) => {
    setPopups(prev => prev.filter(popupId => popupId !== id));
  };

  return (
    <>
      {popups.map(id => (
        <RetroPopup key={id} onClose={() => closePopup(id)} />
      ))}
    </>
  );
}

export default RetroAds;