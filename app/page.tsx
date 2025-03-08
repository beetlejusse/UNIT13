import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
      
      <div className="text-center px-4">
        <h1 className={`text-6xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>
          UNIT13
        </h1>
        <div className={`text-3xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
          Coming Soon
        </div>
        <div className={`max-w-md mx-auto p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-colors duration-300`}>
          <p className="mb-4">
            Something extraordinary is in development. Stay tuned for updates.
          </p>
          <div className="mt-6">
            <input 
              type="email" 
              placeholder="Enter your email for updates" 
              className={`w-full p-3 rounded-md mb-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} border-none focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <button 
              className={`w-full py-3 px-4 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition-colors duration-300`}
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
      
      <footer className={`absolute bottom-4 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
        © {new Date().getFullYear()} UNIT13. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;