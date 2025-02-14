'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SideBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const siteTopics = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile/Tablet Hamburger Button */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-48 bg-gray-800 text-white 
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:block z-40
        `}
      >
        <nav className="p-6 relative">
          {/* Close button for sidebar */}
          <button 
            onClick={toggleSidebar}
            className="absolute top-2 right-2 text-white hover:text-gray-300 md:hidden"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-6">Site Navigation</h2>
          <ul>
            {siteTopics.map((topic) => (
              <li key={topic.path} className="mb-4">
                <Link 
                  href={topic.path} 
                  className="hover:text-blue-300 transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {topic.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black opacity-50 z-30" 
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default SideBar;
