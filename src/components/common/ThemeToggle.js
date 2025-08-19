import React from 'react';

const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="inline-flex items-center focus:outline-none"
    >
      <span className={`relative inline-flex h-6 w-12 transition-colors duration-200 ease-in-out ${isDark ? 'bg-slate-600' : 'bg-gray-300'} rounded-full`}>
        <span className={`absolute left-1 top-1/2 -translate-y-1/2 h-4 w-4 bg-white rounded-full shadow-md transition-transform duration-200 ${isDark ? 'translate-x-6' : 'translate-x-0'}`} />
      </span>
  <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
