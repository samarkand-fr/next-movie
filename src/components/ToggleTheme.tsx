// Import necessary dependencies and components
'use client';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// ToggleTheme component for handling theme switching
const ToggleTheme: React.FC = () => {
  // Destructure properties from useTheme hook
  const { theme, setTheme, systemTheme } = useTheme();
  // State to track component mount status
  const [mounted, setMounted] = useState(false);
  // Determine the current theme, considering system theme setting
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Effect to set the mounted state to true once component is mounted
  useEffect(() => setMounted(true), []);

  // Function to handle theme toggle
  const handleToggle = () => {
    // Switch theme to the opposite of the current theme
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  // Log the current theme to the console
  console.log('Current Theme:', currentTheme);

  // Render the theme toggle button
  return (
    <div className="cursor-pointer" onClick={handleToggle}>
      {/* Render the appropriate theme icon based on the current theme */}
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode className="text-xl hover:text-amber-500 transition" />
        ) : (
          <MdDarkMode className="text-xl hover:text-amber-500 transition" />
        ))}
    </div>
  );
};

export default ToggleTheme;
