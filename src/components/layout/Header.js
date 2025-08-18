import React from 'react';
import { Briefcase } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import useTheme from '../../hooks/useTheme';

const Header = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="relative mb-12 animate-fade-in">
      {/* Top-right corner toggle */}
      <div className="absolute top-0 right-0 mt-2 mr-2">
        <ThemeToggle isDark={isDark} toggle={toggle} />
      </div>

      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-linkedin-500 to-linkedin-600 rounded-full mb-4 shadow-lg">
          <Briefcase className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-linkedin-500 to-linkedin-600 bg-clip-text text-transparent mb-2">
          Work Experience Tracker
        </h1>
        <p className="text-gray-600 text-lg">Track and showcase your professional journey</p>
      </div>
    </div>
  );
};

export default Header;