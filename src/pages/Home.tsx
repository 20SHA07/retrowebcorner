import React from 'react';

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <img 
          src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400"
          alt="Retro Computer"
          className="mx-auto border-4 border-[#808080]"
        />
      </div>

      <div className="retro-window p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#000080]">Welcome to My Corner of the Web!</h2>
        <p className="mb-4">
          🚧 Under Construction 🚧
        </p>
        <p>
          Hello and welcome to my homepage! I created this website to share my interests
          and connect with others on the World Wide Web. Feel free to sign my guestbook!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="retro-window p-4">
          <h3 className="text-xl font-bold mb-2 text-[#800080]">What's New?</h3>
          <ul className="list-disc pl-5">
            <li>Added new GIFs! (03/14/99)</li>
            <li>Updated my links page (03/10/99)</li>
            <li>Fixed broken images (03/05/99)</li>
          </ul>
        </div>

        <div className="retro-window p-4">
          <h3 className="text-xl font-bold mb-2 text-[#800080]">Cool Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="retro-link">My Friend's Page</a></li>
            <li><a href="#" className="retro-link">Cool Web Rings</a></li>
            <li><a href="#" className="retro-link">Free GIF Archive</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;