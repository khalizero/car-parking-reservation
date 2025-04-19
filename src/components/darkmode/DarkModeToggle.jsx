import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition ml-8"
    >
      {darkMode ? '🔵' : '⚫'}
    </button>
  );
};

export default DarkModeToggle;
