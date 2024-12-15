import React from 'react';

const About = () => {
  return (
    <div className="space-y-6">
      <div className="retro-window p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#000080]">About Me</h2>
        <div className="flex gap-4">
          <img 
            src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=200"
            alt="My Workspace"
            className="border-4 border-[#808080]"
          />
          <div>
            <p className="mb-4">
              Hi! I'm a web developer who loves creating cool websites. I spend most of my
              time coding and learning about the latest web technologies.
            </p>
            <p>
              This page was created using:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>HTML 4.01</li>
              <li>JavaScript</li>
              <li>Cool GIFs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="retro-window p-4">
        <h3 className="text-xl font-bold mb-2 text-[#800080]">My Favorite Things</h3>
        <ul className="list-disc pl-5">
          <li>Programming</li>
          <li>Reading Tech Books</li>
          <li>Playing Video Games</li>
          <li>Collecting Vintage Computers</li>
        </ul>
      </div>
    </div>
  );
}

export default About;