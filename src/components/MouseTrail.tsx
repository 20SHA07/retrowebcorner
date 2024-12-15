import React, { useEffect, useState } from 'react';
import { TrailDot } from '../types';

const MouseTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTrail(prevTrail => [
        { x: e.clientX, y: e.clientY, id: counter },
        ...prevTrail.slice(0, 5)
      ]);
      setCounter(prev => prev + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [counter]);

  return (
    <>
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="fixed pointer-events-none w-2 h-2 rounded-full bg-[#00ff00]"
          style={{
            left: dot.x,
            top: dot.y,
            opacity: 1 - (index * 0.2),
            transform: 'translate(-50%, -50%)',
            zIndex: 9999
          }}
        />
      ))}
    </>
  );
};

export default MouseTrail;