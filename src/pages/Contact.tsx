import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-6">
      <div className="retro-window p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#000080]">Contact Me</h2>
        <div className="flex items-center gap-2 mb-4">
          <Mail size={16} />
          <a href="mailto:webmaster@retroweb.com" className="retro-link">
            webmaster@retroweb.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <span>http://www.retroweb.com</span>
        </div>
      </div>

      <div className="retro-window p-4">
        <h3 className="text-xl font-bold mb-4 text-[#800080]">Send Me a Message</h3>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">Your Name:</label>
            <input type="text" className="retro-input w-full" />
          </div>
          <div>
            <label className="block mb-2">Your Email:</label>
            <input type="email" className="retro-input w-full" />
          </div>
          <div>
            <label className="block mb-2">Subject:</label>
            <input type="text" className="retro-input w-full" />
          </div>
          <div>
            <label className="block mb-2">Message:</label>
            <textarea className="retro-input w-full h-32" />
          </div>
          <button type="submit" className="retro-button">
            Send Message
          </button>
        </form>
      </div>

      <div className="retro-window p-4">
        <h3 className="text-xl font-bold mb-2 text-[#800080]">Other Ways to Reach Me</h3>
        <ul className="list-disc pl-5">
          <li>ICQ: 12345678</li>
          <li>AIM: RetroWebMaster</li>
          <li>IRC: #retroweb on EFnet</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;