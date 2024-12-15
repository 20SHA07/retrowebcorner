import React from 'react';
import { Link } from 'react-router-dom';
import { Computer, Home, Mail, User, BookOpen } from 'lucide-react';
import { useRetroSound } from '../hooks/useRetroSound';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { playClick } = useRetroSound();

  return (
    <div className="min-h-screen bg-[#008080]">
      <header className="retro-window p-4 mb-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#000080]">RetroWeb 1999</h1>
          <marquee className="marquee">
            Welcome to RetroWeb 1999 - The Best Place on the Information Superhighway! 🚀 FREE DOWNLOADS! 💾 SIGN MY GUESTBOOK! 📝
          </marquee>
        </div>
        <nav className="flex justify-center gap-4 mt-4">
          <Link to="/" className="retro-button flex items-center gap-2" onClick={playClick}>
            <Home size={16} /> Home
          </Link>
          <Link to="/about" className="retro-button flex items-center gap-2" onClick={playClick}>
            <User size={16} /> About
          </Link>
          <Link to="/guestbook" className="retro-button flex items-center gap-2" onClick={playClick}>
            <BookOpen size={16} /> Guestbook
          </Link>
          <Link to="/downloads" className="retro-button flex items-center gap-2" onClick={playClick}>
            <Computer size={16} /> Downloads
          </Link>
          <Link to="/contact" className="retro-button flex items-center gap-2" onClick={playClick}>
            <Mail size={16} /> Contact
          </Link>
        </nav>
      </header>

      <main className="retro-container mb-4">
        {children}
      </main>

      <footer className="retro-window p-4 text-center">
        <p className="text-[#000080]">© 1999 RetroWeb - Best viewed with Netscape Navigator™</p>
        <div className="flex justify-center gap-4 mt-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Valid_HTML_4.01.png" alt="Valid HTML 4.01" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Valid_CSS.png" alt="Valid CSS" className="h-8" />
        </div>
        <p className="mt-2">
          <span className="counter blink">Visitor Count: 000,042</span>
        </p>
      </footer>
    </div>
  );
}

export default Layout;