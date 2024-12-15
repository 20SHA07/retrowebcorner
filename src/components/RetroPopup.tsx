import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { playSound } from '../utils/sounds';

interface PopupProps {
  onClose: () => void;
}

const RetroPopup: React.FC<PopupProps> = ({ onClose }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const x = Math.random() * (window.innerWidth - 300);
    const y = Math.random() * (window.innerHeight - 200);
    setPosition({ x, y });
    playSound('notify');
  }, []);

  return (
    <div
      className="fixed retro-window p-4 w-[300px] cursor-default"
      style={{ left: position.x, top: position.y }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[#000080] font-bold">🔥 HOT DEAL! 🔥</h3>
        <button onClick={onClose} className="retro-button p-1">
          <X size={16} />
        </button>
      </div>
      <div className="text-center">
        <p className="mb-2">💾 FREE DOWNLOAD! 💾</p>
        <p className="text-sm">Get your FREE screensaver now!</p>
        <button className="retro-button mt-4 w-full" onClick={() => playSound('error')}>
          CLICK HERE!
        </button>
      </div>
    </div>
  );
};

export default RetroPopup;