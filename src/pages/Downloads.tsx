import React from 'react';
import { Download } from 'lucide-react';

const Downloads = () => {
  return (
    <div className="space-y-6">
      <div className="retro-window p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#000080]">Free Downloads</h2>
        <p className="mb-4">
          Here are some cool files you can download! Please be patient as they might
          take a while on your 56k modem!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          {
            name: "Cool Cursor Pack",
            size: "156KB",
            description: "Awesome animated cursors for your desktop!"
          },
          {
            name: "Desktop Wallpapers",
            size: "789KB",
            description: "High quality 800x600 wallpapers"
          },
          {
            name: "Midi Music Collection",
            size: "234KB",
            description: "The best midi files on the web"
          }
        ].map((item, index) => (
          <div key={index} className="retro-window p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#800080]">{item.name}</h3>
                <p className="text-sm text-[#808080]">Size: {item.size}</p>
                <p className="mt-2">{item.description}</p>
              </div>
              <button className="retro-button flex items-center gap-2">
                <Download size={16} />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="retro-window p-4">
        <h3 className="text-xl font-bold mb-2 text-[#800080]">Download Counter</h3>
        <p>Total Downloads: 1,337</p>
      </div>
    </div>
  );
}

export default Downloads;